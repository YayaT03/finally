import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import {Link} from 'react-router-dom';
import Pagination from 'rc-pagination';

export const Crud = () => {
    const [users, setUsers] = useState([]);
    // const [name, setName] = useState('');
    // const [lastname, setLastname] = useState('');
    // const [email, setEmail] = useState('');
    // const [salary, setSalary] = useState(0);
    const [edit, setEdit] = useState(false);
   
    const [dataForm, setDataForm] = useState({
        name: "",
        lastname: "",
        email: "",
        salary: 0,
    });

    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState("");

    useEffect(() => {
        getData(page);
    }, [page]);

    /* Este cleanData limpia los campos del formulario*/
    const cleanData = () => {
        // setName('');
        // setLastname('');
        // setEmail('');
        // setSalary(0);
        setDataForm({name:"", lastname:"", email:"", salary: 0});
        setEdit(false);
    };

    const getData = async (pageCurrent) => {
        const { data } = await axios.get(`/list/?page=${pageCurrent}`);
        setUsers(data.users.docs);
        setPage(data.users.page);
        setTotalPages(data.users.totalPages);
    };

    const onChangePage=(page)=>{
        getData(page);
    }

    /* Este saveUser guarda los campos del formulario*/
    const saveUser = async () => {
        try {
            // const newUser = {
            //     name,
            //     lastname,
            //     email,
            //     salary
            // }
            await axios.post('/', dataForm)
            cleanData();
            getData()

        } catch (error) {
            if (!error.response.data.ok) {
                return alert(error.response.data.message)
            }
            console.log('error en saveUser', error.message);
        }
    };
    /* Este updateUser permite actualizar los datos registrados*/
    const updateUser = async () => {
        try {
            const id = localStorage.getItem("id");
            // const newUser = {
            //     name,
            //     lastname,
            //     email,
            //     salary
            // };

            const { data } = await axios.put("/update/" + id, dataForm);
            cleanData();
            getData();

            Swal.fire({
                icon: 'success',
                title: data.message,
                showConfirmButton: false,
                timer: 1500
            })

        } catch (error) {
            if (!error.response.data.ok) {
                return alert(error.response.data.message)
            }
            console.log('error en saveUser', error.message);
        }
    };



    const actions = (e) => {
        e.preventDefault();
        edit ? updateUser() : saveUser();
    };
    /* Carga los datos seleccionados para poder ser eleminados; se cargan directamente en el formulario*/
    const completeDataFields = (item => {
        setEdit(true);
        // setName(item.name);
        // setLastname(item.lastname);
        // setEmail(item.email);
        // setSalary(item.salary);
        setDataForm({
            name: item.name, lastname: item.lastname, email: item.email, salary: item.salary,
        });
        localStorage.setItem('id', item._id);

    });
    /* Este deleteUser elimina el registro*/
    const deleteUser = async (id) => {
        try {
            /* Mensaje para evaluar si eliminas o cancelas el proceso*/
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then(async (result) => {
                if (result.isConfirmed) {
                    const { data } = await axios.delete('/delete/' + id)
                    getData();
                    /* Mensaje que confirma la eliminacion del registro*/
                    Swal.fire({
                        icon: 'success',
                        title: data.message,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })




        } catch (error) {
            if (!error.response.data.ok) {
                return alert(error.response.data.message)
            }
            console.log('error en deleteUser', error.message);
        }
    }



    return (
        <div className='container'>
            {/* empieza formulario para guardar o actualziar un usuario*/}
            <div className="d-flex justify-content-center mt-5">
                <div className="col-12 col-md-8">
                    <div className="card">
                        <h1 className="card-title text-center">CRUD</h1>
                        <div className="card-body">
                            <form onSubmit={actions}>
                                <div className="mb-3">
                                    <input type="text" placeholder="Name" className="form-control" required value={dataForm.name} onChange={(e) => setDataForm({ ...dataForm, name: e.target.value })} />
                                </div>
                                <div className="mb-3">
                                    <input type="text" placeholder="Lastname" className="form-control" required value={dataForm.lastname} onChange={(e) => setDataForm({ ...dataForm, lastname: e.target.value })} />
                                </div>
                                <div className="mb-3">
                                    <input type="email" placeholder="Email" className="form-control" required value={dataForm.email} onChange={(e) => setDataForm({ ...dataForm, email: e.target.value })} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Salary</label>
                                    <input type="text" placeholder="Salary" className="form-control" value={dataForm.salary} onChange={(e) => setDataForm({ ...dataForm, salary: e.target.value })} />
                                </div>
                                <button className="btn btn-primary form-control" type="submit">Save</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/*fin del formulario */}
            {/* inicio de la tabla donde se muestran los usuarios*/}

            <table className="table mt-5 table-hover">
                <thead className='table-dark'>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>LastName</th>
                        <th>Email</th>
                        <th>Salary</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((item, i) => (
                            <tr key={item._id}>
                                <td>{i + 1}</td>
                                <td><Link to={'/userid/'+ item._id}>{item.name}</Link></td>
                                <td>{item.lastname} </td>
                                <td>{item.email} </td>
                                <td>{item.salary} </td>
                                <td>
                                    <i className="btn btn-danger fas fa-trash me-2" onClick={() => deleteUser(item._id)}></i>
                                    <i className="btn btn-warning fas fa-edit" onClick={() => completeDataFields(item)}></i>
                                </td>

                            </tr>
                        ))
                    }
                </tbody>
            </table>
            {/* fin table*/}

            <div className="my-5 d-flex justify-content-center"> 
                    <Pagination
                    className="pagination"
                    current={page}
                    total={totalPages}
                    pageSize={1}
                    onChange={onChangePage}
                    />

            </div>
        </div>
    )
};
