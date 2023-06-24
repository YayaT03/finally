import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import {Link} from 'react-router-dom';
import Pagination from 'rc-pagination';


const Grupos = () => {
   
        const [grupo, setGrupo] = useState([]);
        
       
        const [edit, setEdit] = useState(false);
       
        const [dataForm, setDataForm] = useState({
           
            genero:"",
            profesorname1: "",
            profesorname2: "",
            profesorlastname1: "",
            profesorlastname2: "",
            cantidadestudiantes: "",
            
           

            
        });
    
        const [page, setPage] = useState(1);
        const [totalPages, setTotalPages] = useState("");
    
        useEffect(() => {
            getData(page);
        }, [page]);
    
        const cleanData = () => {
           
            setDataForm({genero:"",profesorname1:"", profesorname2:"", profesorlastname1:"", profesorlastname2:"", cantidadestudiantes:""});
            setEdit(false);
        };
    
        const getData = async (pageCurrent) => {
            const { data } = await axios.get(`/grupos/list?page=${pageCurrent}`);
            setGrupo(data.grupo.docs)
            setPage(data.grupo.page)
            setTotalPages(data.grupo.totalPages)
            
        };
    
        const onChangePage=(page)=>{
            getData(page);
        }
    
        
        const saveGrupo = async () => {
            try {
               
                await axios.post('/grupos/add', dataForm)
                cleanData();
                getData();
    
            } catch (error) {
                if (!error.response.data.ok) {
                    return alert(error.response.data.message)
                }
                console.log('error en saveGrupo', error.message);
            }
        };
        
        const updateGrupo = async () => {
            try {
                const id = localStorage.getItem("id");
             
    
                const { data } = await axios.put("grupos/update/" + id, dataForm);
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
                console.log('error en saveGrupo', error.message);
            }
        };
    
    
    
        const actions = (e) => {
            e.preventDefault();
            edit ? updateGrupo() : saveGrupo();
        };
        
        const completeDataFields = (item => {
            setEdit(true);
           
    
            setDataForm({
                genero: item.genero,profesorname1: item.profesorname1,profesorname2: item.profesorname2, profesorlastname1: item.profesorlastname1, profesorlastname2: item.profesorlastname2, cantidadestudiantes: item.cantidadestudiantes,
               
            });
            localStorage.setItem('id', item._id);
    
        });
       
        const deleteGrupo = async (id) => {
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
                console.log('error en deleteGrupo', error.message);
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
                                        <input type="text" placeholder="genero" className="form-control" required value={dataForm.genero} onChange={(e) => setDataForm({ ...dataForm, genero: e.target.value })} />
                                    </div>
                                    <div className="mb-3">
                                        <input type="text" placeholder="profesorname1" className="form-control" required value={dataForm.profesorname1} onChange={(e) => setDataForm({ ...dataForm, profesorname1: e.target.value })} />
                                    </div>
                                    <div className="mb-3">
                                        <input type="text" placeholder="profesorname2" className="form-control" required value={dataForm.profesorname2} onChange={(e) => setDataForm({ ...dataForm, profesorname2: e.target.value })} />
                                    </div>
                                    <div className="mb-3">
                                        <input type="text" placeholder="profesorlastname1" className="form-control" required value={dataForm.profesorlastname1} onChange={(e) => setDataForm({ ...dataForm, profesorlastname1: e.target.value })} />
                                    </div>
                                    <div className="mb-3">
                                        <input type="text" placeholder="profesorlastname2" className="form-control" required value={dataForm.profesorlastname2} onChange={(e) => setDataForm({ ...dataForm, profesorlastname2: e.target.value })} />
                                    </div>
                                    <div className="mb-3">
                                        <input type="number" placeholder="cantidadestudiantes" className="form-control" required value={dataForm.cantidadestudiantes} onChange={(e) => setDataForm({ ...dataForm, cantidadestudiantes: e.target.value })} />
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
                            
                            <th>genero</th>
                            <th>ProfesorName1</th>
                            <th>ProfesorName2</th>
                            <th>ProfesorLastName1</th>
                            <th>ProfesorLastName2</th>
                            <th>Cantidadestudiantes</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            grupo.map((item, i) => (
                                <tr key={item._id}>
                                    <td>{i + 1}</td>
                                    <td><Link to={'/grupoid/'+ item._id}>{item.grupo}</Link></td>
                                    <td>{item.profesorname2} </td>
                                    <td>{item.profesorlastname1} </td>
                                    <td>{item.profesorlastname2} </td>
                                    <td>{item.cantidadestudiantes} </td>
                                    <td>
                                        <i className="btn btn-danger fas fa-trash me-2" onClick={() => deleteGrupo(item._id)}></i>
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
    

export default Grupos