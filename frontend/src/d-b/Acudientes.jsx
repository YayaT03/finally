import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import {Link} from 'react-router-dom';
import Pagination from 'rc-pagination';


const Acudientes = () => {
   
        const [acudiente, setAcudiente] = useState([]);
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
            parentezco: "",
            phonenumber:"",
            direction:"",
            estudiante:"",
           

            
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
            setDataForm({documentid:"",name1:"", name2: "",lastname1: "", lastname2:"", parentezco:"",phonenumber:"",direction:"",estudiante:"",});
            setEdit(false);
        };
    
        const getData = async (pageCurrent) => {
            const { data } = await axios.get(`/acudientes/list?page=${pageCurrent}`);
            setAcudiente(data.acudiente.docs)
            setPage(data.acudiente.page)
            setTotalPages(data.acudiente.totalPages)
            
        };
    
        const onChangePage=(page)=>{
            getData(page);
        }
    
        
        const saveAcudiente = async () => {
            try {
                // const newEstudiante = {
                //     name1,
                //     name2,
                //     lastname1,
                //     lastname2,
                //     email,
                // }
                await axios.post('/acudientes/add', dataForm)
                cleanData();
                getData()
    
            } catch (error) {
                if (!error.response.data.ok) {
                    return alert(error.response.data.message)
                }
                console.log('error en saveAcudiente', error.message);
            }
        };
        
        const updateAcudiente = async () => {
            try {
                const id = localStorage.getItem("id");
              // const newAcudiente = {
                //     name1,
                //     name2,
                //     lastname1,
                //     lastname2,
                //     email,
                // }
    
                const { data } = await axios.put("Acudientes/update/" + id, dataForm);
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
                console.log('error en saveAcudiente', error.message);
            }
        };
    
    
    
        const actions = (e) => {
            e.preventDefault();
            edit ? updateAcudiente() : saveAcudiente();
        };
        
        const completeDataFields = (item => {
            setEdit(true);
            // setName1(item.name1);
            //setName2(item.name2);
            // setLastname1(item.lastname2);
            // setLastname2(item.lastname3);
            // setEmail(item.email);
    
            setDataForm({
                documentid: item.documentid,name1: item.name1,name2: item.name2, lastname1: item.lastname1, lastname2: item.lastname2, parentezco: item.parentezco,
                phonenumber: item.phonenumber,direction: item.direction, estudiante: item.estudiante, 
            });
            localStorage.setItem('id', item._id);
    
        });
       
        const deleteAcudiente = async (id) => {
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
                console.log('error en deleteAcudiente', error.message);
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
                                        <input type="text" placeholder="Parentezco" className="form-control" required value={dataForm.parentezco} onChange={(e) => setDataForm({ ...dataForm, parentezco: e.target.value })} />
                                    </div>
                                    <div className="mb-3">
                                        <input type="number" placeholder="phonenumber" className="form-control" required value={dataForm.phonenumber} onChange={(e) => setDataForm({ ...dataForm, phonenumber: e.target.value })} />
                                    </div>
                                    <div className="mb-3">
                                        <input type="text" placeholder="estudiante" className="form-control" required value={dataForm.estudiante} onChange={(e) => setDataForm({ ...dataForm, estudiante: e.target.value })} />
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
                            <th>Name1</th>
                            <th>Name2</th>
                            <th>LastName1</th>
                            <th>LastName2</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            acudiente.map((item, i) => (
                                <tr key={item._id}>
                                    <td>{i + 1}</td>
                                    <td><Link to={'/acudienteid/'+ item._id}>{item.name1}</Link></td>
                                    <td>{item.name2} </td>
                                    <td>{item.lastname1} </td>
                                    <td>{item.lastname2} </td>
                                    <td>{item.parentezco} </td>
                                    <td>
                                        <i className="btn btn-danger fas fa-trash me-2" onClick={() => deleteAcudiente(item._id)}></i>
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
    

export default Acudientes