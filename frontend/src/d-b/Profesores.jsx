import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import {Link} from 'react-router-dom';
import Pagination from 'rc-pagination';


const Profesores = () => {
   
        const [profesor, setProfesor] = useState([]);
        // const [name, setName] = useState('');
        // const [lastname, setLastname] = useState('');
        // const [email, setEmail] = useState('');
        // const [salary, setSalary] = useState(0);
        const [edit, setEdit] = useState(false);
       
        const [dataForm, setDataForm] = useState({
            documentid:"",
            name1: "",
            name2: "",
            lastname1: "",
            lastname2: "",
            email: "",
            phonenumber:"",
            direction:"",
            edad:"",
            fechadenacimiento:"",

            
        });
    
        const [page, setPage] = useState(1);
        const [totalPages, setTotalPages] = useState("");
    
        useEffect(() => {
            getData(page);
        }, [page]);
    
        const cleanData = () => {
            // setName('');
            // setLastname('');
            // setEmail('');
            // setSalary(0);
            setDataForm({documentid:"",name1:"", name2: "",lastname1: "", lastname2:"", email:"",phonenumber:"",direction:"",edad:"",fechadenacimiento:""});
            setEdit(false);
        };
    
        const getData = async (pageCurrent) => {
            const { data } = await axios.get(`/profesores/list?page=${pageCurrent}`);
            setProfesor(data.profesor.docs)
            setPage(data.profesor.page)
            setTotalPages(data.profesor.totalPages)
            
        };
    
        const onChangePage=(page)=>{
            getData(page);
        }
    
        
        const saveProfesor = async () => {
            try {
                // const newEstudiante = {
                //     name1,
                //     name2,
                //     lastname1,
                //     lastname2,
                //     email,
                // }
                await axios.post('/profesores/add', dataForm)
                cleanData();
                getData()
    
            } catch (error) {
                if (!error.response.data.ok) {
                    return alert(error.response.data.message)
                }
                console.log('error en saveProfesor', error.message);
            }
        };
        
        const updateProfesor = async () => {
            try {
                const id = localStorage.getItem("id");
              // const newEstudiante = {
                //     name1,
                //     name2,
                //     lastname1,
                //     lastname2,
                //     email,
                // }
    
                const { data } = await axios.put("profesores/update/" + id, dataForm);
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
                console.log('error en saveProfesor', error.message);
            }
        };
    
    
    
        const actions = (e) => {
            e.preventDefault();
            edit ? updateProfesor() : saveProfesor();
        };
        
        const completeDataFields = (item => {
            setEdit(true);
            // setName1(item.name1);
            //setName2(item.name2);
            // setLastname1(item.lastname2);
            // setLastname2(item.lastname3);
            // setEmail(item.email);
    
            setDataForm({
                documentid: item.documentid,name1: item.name1,name2: item.name2, lastname1: item.lastname1, lastname2: item.lastname2, email: item.email,
                phonenumber: item.phonenumber,direction: item.direction, edad: item.edad, fechadenacimiento: item.fechadenacimiento,
            });
            localStorage.setItem('id', item._id);
    
        });
       
        const deleteProfesor = async (id) => {
            try {
            
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
                        const { data } = await axios.delete('/profesores/delete' + id)
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
                console.log('error en deleteProfesor', error.message);
            }
        }
    
    
    
        return (
            <div className='container'>
                {/* empieza formulario */}
                <div className="d-flex justify-content-center mt-5">
                    <div className="col-12 col-md-8">
                        <div className="card">
                            <h1 className="card-title text-center">REGISTRO</h1>
                            <div className="card-body">
                                <form onSubmit={actions}>
                                <div className="mb-3">
                                        <input type="number" placeholder="documentid" className="form-control" required value={dataForm.documentid} onChange={(e) => setDataForm({ ...dataForm, documentid: e.target.value })} />
                                    </div>
                                    <div className="mb-3">
                                        <input type="text" placeholder="Name1" className="form-control" required value={dataForm.name1} onChange={(e) => setDataForm({ ...dataForm, name1: e.target.value })} />
                                    </div>
                                    <div className="mb-3">
                                        <input type="text" placeholder="name2" className="form-control" required value={dataForm.name2} onChange={(e) => setDataForm({ ...dataForm, name2: e.target.value })} />
                                    </div>
                                    <div className="mb-3">
                                        <input type="text" placeholder="lastname1" className="form-control" required value={dataForm.lastname1} onChange={(e) => setDataForm({ ...dataForm, lastname1: e.target.value })} />
                                    </div>
                                    <div className="mb-3">
                                        <input type="text" placeholder="lastname2" className="form-control" required value={dataForm.lastname2} onChange={(e) => setDataForm({ ...dataForm, lastname2: e.target.value })} />
                                    </div>
                                    <div className="mb-3">
                                        <input type="email" placeholder="Email" className="form-control" required value={dataForm.email} onChange={(e) => setDataForm({ ...dataForm, email: e.target.value })} />
                                    </div>
                                    <div className="mb-3">
                                        <input type="number" placeholder="phonenumber" className="form-control" required value={dataForm.phonenumber} onChange={(e) => setDataForm({ ...dataForm, phonenumber: e.target.value })} />
                                    </div>
                                    <div className="mb-3">
                                        <input type="number" placeholder="edad" className="form-control" required value={dataForm.edad} onChange={(e) => setDataForm({ ...dataForm, edad: e.target.value })} />
                                    </div>
                                    <div className="mb-3">
                                        <input type="text" placeholder="fechadenacimiento" className="form-control" required value={dataForm.fechadenacimiento} onChange={(e) => setDataForm({ ...dataForm, fechadenacimiento: e.target.value })} />
                                    </div>
                                    <button className="btn btn-primary form-control" type="submit">Enviar</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                {/*fin*/}
                {/* inicio de la tabla */}
    
                <table className="table mt-5 table-hover">
                    <thead className='table-dark'>
                        <tr>
                            <th>#</th>
                            <th>Documentid</th>
                            <th>Name1</th>
                            <th>Name2</th>
                            <th>LastName1</th>
                            <th>LastName2</th>
                            <th>Email</th>
                            <th>phonenumber</th>
                            <th>direction</th>
                            <th>edad</th>
                            <th>fechadenacimiento</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            profesor.map((item, i) => (
                                <tr key={item._id}>
                                    <td>{i + 1}</td>
                                    <td><Link to={'/profesorid/'+ item._id}>{item.name1}</Link></td>
                                    <td>{item.name2} </td>
                                    <td>{item.lastname1} </td>
                                    <td>{item.lastname2} </td>
                                    <td>{item.email} </td>
                                    <td>{item.phonenumber} </td>
                                    <td>{item.direction} </td>
                                    <td>{item.edad} </td>
                                    <td>{item.fechadenacimiento}</td>
                                    <td>
                                        <i className="btn btn-danger fas fa-trash me-2" onClick={() => deleteProfesor(item._id)}></i>
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
    

export default Profesores