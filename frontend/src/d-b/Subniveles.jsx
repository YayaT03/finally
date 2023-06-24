import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import {Link} from 'react-router-dom';
import Pagination from 'rc-pagination';


const Subniveles = () => {
   
        const [subnivel, setSubnivel] = useState([]);
       
        const [edit, setEdit] = useState(false);
       
        const [dataForm, setDataForm] = useState({
            
            
            nivel:"",
            genero:""

            
        });
    
        const [page, setPage] = useState(1);
        const [totalPages, setTotalPages] = useState("");
    
        useEffect(() => {
            getData(page);
        }, [page]);
    
        const cleanData = () => {
         
            setDataForm({genero:"", nivel:""});
            setEdit(false);
        };
    
        const getData = async (pageCurrent) => {
            const { data } = await axios.get(`/subniveles/list?page=${pageCurrent}`);
            setSubnivel(data.subnivel.docs)
            setPage(data.subnivel.page)
            setTotalPages(data.subnivel.totalPages)
            
        };
    
        const onChangePage=(page)=>{
            getData(page);
        }
    
        
        const saveSubnivel = async () => {
            try {
               
                await axios.post('/subniveles/add', dataForm)
                cleanData();
                getData()
    
            } catch (error) {
                if (!error.response.data.ok) {
                    return alert(error.response.data.message)
                }
                console.log('error en saveSubnivel', error.message);
            }
        };
        
        const updateSubnivel = async () => {
            try {
                const id = localStorage.getItem("id");
             
                const { data } = await axios.put("subnivel/update/" + id, dataForm);
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
                console.log('error en saveSubnivel', error.message);
            }
        };
    
    
    
        const actions = (e) => {
            e.preventDefault();
            edit ? updateSubnivel() : saveSubnivel();
        };
        
        const completeDataFields = (item => {
            setEdit(true);
           
    
            setDataForm({
                 nivel: item.nivel, genero: item.genero,
            });
            localStorage.setItem('id', item._id);
    
        });
       
        const deleteSubnivel = async (id) => {
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
                console.log('error en deleteSubnivel', error.message);
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
                                        <input type="number" placeholder="Nivel" className="form-control" required value={dataForm.nivel} onChange={(e) => setDataForm({ ...dataForm, nivel: e.target.value })} />
                                    </div>
                                    <div className="mb-3">
                                        <input type="text" placeholder="Genero" className="form-control" required value={dataForm.genero} onChange={(e) => setDataForm({ ...dataForm, genero: e.target.value })} />
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
                            <th>nivel</th>
                            <th>genero</th>
                            
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            subnivel.map((item, i) => (
                                <tr key={item._id}>
                                    <td>{i + 1}</td>
                                    <td><Link to={'/subnivelid/'+ item._id}>{item.nivel}</Link></td>
                                    <td>{item.genero} </td>
                                  
                                    <td>
                                        <i className="btn btn-danger fas fa-trash me-2" onClick={() => deleteSubnivel(item._id)}></i>
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
    

export default Subniveles