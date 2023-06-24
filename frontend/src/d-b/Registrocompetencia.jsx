import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import {Link} from 'react-router-dom';
import Pagination from 'rc-pagination';


const Competencia = () => {
   
        const [competencia, setCompetencia] = useState([]);
        
        const [edit, setEdit] = useState(false);
       
        const [dataForm, setDataForm] = useState({
            documentid:"",
            name1: "",
            name2: "",
            lastname1: "",
            lastname2: "",
            email: "",
            phonenumber:"",
            enail:"",
            grupoactual:"",
            subnivel:""

            
        });
    
        const [page, setPage] = useState(1);
        const [totalPages, setTotalPages] = useState("");
    
        useEffect(() => {
            getData(page);
        }, [page]);
    
        const cleanData = () => {
            
            setDataForm({documentid:"",name1:"", name2: "",lastname1: "", lastname2:"", email:"",phonenumber:"",grupoactual:"",subnivel:""});
            setEdit(false);
        };
    
        const getData = async (pageCurrent) => {
            const { data } = await axios.get(`/competencias/list?page=${pageCurrent}`);
            setCompetencia(data.competencia.docs)
            setPage(data.competencia.page)
            setTotalPages(data.competencia.totalPages)
            
        };
    
        const onChangePage=(page)=>{
            getData(page);
        }
    
        
        const saveCompetencia = async () => {
            try {
             
                await axios.post('/competencias/add', dataForm)
                cleanData();
                getData()
    
            } catch (error) {
                if (!error.response.data.ok) {
                    return alert(error.response.data.message)
                }
                console.log('error en saveCompetencia', error.message);
            }
        };
        
        const updateCompetencia = async () => {
            try {
                const id = localStorage.getItem("id");
              
    
                const { data } = await axios.put("competencias/update/" + id, dataForm);
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
                console.log('error en saveCompetencia', error.message);
            }
        };
    
    
    
        const actions = (e) => {
            e.preventDefault();
            edit ? updateCompetencia() : saveCompetencia();
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
                phonenumber: item.phonenumber, grupoactual: item.grupoactual, subnivel: item.subnivel,
            });
            localStorage.setItem('id', item._id);
    
        });
       
        const deleteCompetencia= async (id) => {
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
                console.log('error en deleteCompetencia', error.message);
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
                                        <input type="text" placeholder="gruoactual" className="form-control" required value={dataForm.grupoactual} onChange={(e) => setDataForm({ ...dataForm, grupoactual: e.target.value })} />
                                    </div>
                                    <div className="mb-3">
                                        <input type="text" placeholder="subnivel" className="form-control" required value={dataForm.subnivel} onChange={(e) => setDataForm({ ...dataForm, subnivel: e.target.value })} />
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
                            competencia.map((item, i) => (
                                <tr key={item._id}>
                                    <td>{i + 1}</td>
                                    <td><Link to={'/subnivelid/'+ item._id}>{item.name1}</Link></td>
                                    <td>{item.name2} </td>
                                    <td>{item.lastname1} </td>
                                    <td>{item.lastname2} </td>
                                    <td>{item.email} </td>
                                    <td>
                                        <i className="btn btn-danger fas fa-trash me-2" onClick={() => deleteCompetencia(item._id)}></i>
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
    

export default Competencia