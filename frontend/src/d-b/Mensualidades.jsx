import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import {Link} from 'react-router-dom';
import Pagination from 'rc-pagination';


const Mensualidades = () => {
   
        const [mensualidad, setMensualidad] = useState([]);
       
        const [edit, setEdit] = useState(false);
       
        const [dataForm, setDataForm] = useState({
            
            idmensualidad:"",
            name1: "",
            name2: "",
            lastname1: "",
            lastname2: "",
            fecha: "",
            grupo:"",
            subnivel:"",
            descripcion:"",
            cantidad:"",
            valorunitario: "",
            valortotal: "",

            
        });
    
        const [page, setPage] = useState(1);
        const [totalPages, setTotalPages] = useState("");
    
        useEffect(() => {
            getData(page);
        }, [page]);
    
        const cleanData = () => {
          
            setDataForm({idmensualidad:"",name1:"", name2: "",lastname1: "", lastname2:"", fecha:"",grupo:"",subnivel:"",descripcion:"",cantidad:"",valorunitario:"",valortotal:""});
            setEdit(false);
        };
    
        const getData = async (pageCurrent) => {
            const { data } = await axios.get(`/mensualidades/list?page=${pageCurrent}`);
            setMensualidad(data.mensualidad.docs)
            setPage(data.mensualidad.page)
            setTotalPages(data.mensualidad.totalPages)
            
        };
    
        const onChangePage=(page)=>{
            getData(page);
        }
    
        
        const saveMensualidad = async () => {
            try {
              
                await axios.post('/mensualidades/add', dataForm)
                cleanData();
                getData()
    
            } catch (error) {
                if (!error.response.data.ok) {
                    return alert(error.response.data.message)
                }
                console.log('error en saveMensualidad', error.message);
            }
        };
        
        const updateMensualidad = async () => {
            try {
                const id = localStorage.getItem("id");
             
    
                const { data } = await axios.put("mensualidades/update/" + id, dataForm);
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
                console.log('error en saveMensualidad', error.message);
            }
        };
    
    
    
        const actions = (e) => {
            e.preventDefault();
            edit ? updateMensualidad() : saveMensualidad();
        };
        
        const completeDataFields = (item => {
            setEdit(true);
         
    
            setDataForm({
                idmensualidad: item.idmensualidad,name1: item.name1,name2: item.name2, lastname1: item.lastname1, lastname2: item.lastname2, fecha: item.fecha,
                grupo: item.grupo,subnivel: item.subnivel, descripcion: item.descripcion, cantidad: item.cantidad, valorunitario: item.valorunitariio, valortotal: item.valortotal
            });
            localStorage.setItem('id', item._id);
    
        });
       
        const deleteMensualidad = async (id) => {
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
                console.log('error en deleteMensualidad', error.message);
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
                                        <input type="number" placeholder="idmensualidad" className="form-control" required value={dataForm.idmensualidad} onChange={(e) => setDataForm({ ...dataForm, idmensualidad: e.target.value })} />
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
                                        <label className="from-label">Fecha</label>
                                        <input type="date" placeholder="fecha" className="form-control" required value={dataForm.fecha} onChange={(e) => setDataForm({ ...dataForm, fecha: e.target.value })} />
                                    </div>
                                    <div className="mb-3">
                                        <input type="text" placeholder="grupo" className="form-control" required value={dataForm.grupo} onChange={(e) => setDataForm({ ...dataForm, grupo: e.target.value })} />
                                    </div>
                                    <div className="mb-3">
                                        <input type="text" placeholder="subnivel" className="form-control" required value={dataForm.subnivel} onChange={(e) => setDataForm({ ...dataForm, subnivel: e.target.value })} />
                                    </div>
                                    <div className="mb-3">
                                        <input type="text" placeholder="descripcion" className="form-control" required value={dataForm.descripcion} onChange={(e) => setDataForm({ ...dataForm, descripcion: e.target.value })} />
                                    </div>
                                    <div className="mb-3">
                                        <input type="number" placeholder="cantidad" className="form-control" required value={dataForm.cantidad} onChange={(e) => setDataForm({ ...dataForm, cantidad: e.target.value })} />
                                    </div>
                                    <div className="mb-3">
                                        <input type="number" placeholder="valorunitario" className="form-control" required value={dataForm.valorunitario} onChange={(e) => setDataForm({ ...dataForm, valorunitario: e.target.value })} />
                                    </div>
                                    <div className="mb-3">
                                        <input type="number" placeholder="valortotal" className="form-control" required value={dataForm.valortotal} onChange={(e) => setDataForm({ ...dataForm, valortotal: e.target.value })} />
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
                            <th>fecha</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            mensualidad.map((item, i) => (
                                <tr key={item._id}>
                                    <td>{i + 1}</td>
                                    <td><Link to={'/mensualidadid/'+ item._id}>{item.name1}</Link></td>
                                    <td>{item.name2} </td>
                                    <td>{item.lastname1} </td>
                                    <td>{item.lastname2} </td>
                                    <td>{item.fecha} </td>
                                    <td>
                                        <i className="btn btn-danger fas fa-trash me-2" onClick={() => deleteMensualidad(item._id)}></i>
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
    

export default Mensualidades