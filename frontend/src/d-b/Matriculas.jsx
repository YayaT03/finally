import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import {Link} from 'react-router-dom';
import Pagination from 'rc-pagination';


const Matriculas = () => {
   
        const [matricula, setMatricula] = useState([]);
        // const [name, setName] = useState('');
        // const [lastname, setLastname] = useState('');
        // const [email, setEmail] = useState('');
        // const [salary, setSalary] = useState(0);
        const [edit, setEdit] = useState(false);
       
        const [dataForm, setDataForm] = useState({
            matricuid:"",
            fecha: "",
            estudiantenombre1: "",
            estudiantenombre2: "",
            estudianteapellido1: "",
            estudianteapellido2: "",
            documentoestudiante:"",
            telefono:"",
            email:"",
            acudientenombre1: "",
            acudientenombre2: "",
            acudienteapellido1: "",
            acudienteapellido2: "",
            documentoacudiente:"",
            profesornombre1: "",
            profesorapellido1: "",
            grupoperteneciente:"",
            subnivel:"",

            
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
            setDataForm({matricuid:"",fecha:"", estudiantenombre1: "",estudiantenombre2: "", estudianteapellido1:"", estudianteapellido2:"",documentoestudiante:"",telefono:"",email:"",acudientenombre1:"",
        acudientenombre2:"",acudienteapellido1:"",acudienteapellido2:"",documentoacudiente:"",profesornombre1:"",profesorapellido1:"",grupoperteneciente:"",subnivel:"",});
            setEdit(false);
        };
    
        const getData = async (pageCurrent) => {
            const { data } = await axios.get(`/matricula/list?page=${pageCurrent}`);
            setMatricula(data.matricula.docs)
            setPage(data.matricula.page)
            setTotalPages(data.matricula.totalPages)
            
        };
    
        const onChangePage=(page)=>{
            getData(page);
        }
    
        
        const saveMatricula = async () => {
            try {
                // const newEstudiante = {
                //     name1,
                //     name2,
                //     lastname1,
                //     lastname2,
                //     email,
                // }
                await axios.post('/matricula/add', dataForm)
                cleanData();
                getData()
    
            } catch (error) {
                if (!error.response.data.ok) {
                    return alert(error.response.data.message)
                }
                console.log('error en saveMatricula', error.message);
            }
        };
        
        const updateMatricula = async () => {
            try {
                const id = localStorage.getItem("id");
              // const newEstudiante = {
                //     name1,
                //     name2,
                //     lastname1,
                //     lastname2,
                //     email,
                // }
    
                const { data } = await axios.put("matricula/update/" + id, dataForm);
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
                console.log('error en saveMatricula', error.message);
            }
        };
    
    
    
        const actions = (e) => {
            e.preventDefault();
            edit ? updateMatricula() : saveMatricula();
        };
        
        const completeDataFields = (item => {
            setEdit(true);
            // setName1(item.name1);
            //setName2(item.name2);
            // setLastname1(item.lastname2);
            // setLastname2(item.lastname3);
            // setEmail(item.email);
    
            setDataForm({
                matricuid:item.matricuid,fecha: item.fecha,estudiantenombre1: item.estudiantenombre1, estudiantenombre2: item.estudiantenombre2, estudianteapellido1: item.estudianteapellido1, estudianteapellido2: item.estudianteapellido2,
                documentoestudiante: item.documentoestudiante,telefono: item.telefono, email: item.email, acudientenombre1: item.acudientenombre1,acudientenombre2: item.acudientenombre2,acudienteapellido1: item.acudienteapellido1,acudienteapellido2: item.acudienteapellido2,
                documentoacudiente: item.documentoacudiente,profesornombre1: item.profesornombre1, profesorapellido1: item.profesorapellido1, grupoperteneciente: item.grupoperteneciente, subnivel: item.subnivel,
            });
            localStorage.setItem('id', item._id);
    
        });
       
        const deleteMatricula = async (id) => {
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
                        const { data } = await axios.delete('matricula/delete/' + id)
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
                console.log('error en deleteMatricula', error.message);
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
                                        <input type="number" placeholder="matricuid" className="form-control" required value={dataForm.matricuid} onChange={(e) => setDataForm({ ...dataForm, matricuid: e.target.value })} />
                                    </div>
                                    <div className="mb-3">
                                        <input type="text" placeholder="fecha" className="form-control" required value={dataForm.fecha} onChange={(e) => setDataForm({ ...dataForm, fecha: e.target.value })} />
                                    </div>
                                    <div className="mb-3">
                                        <input type="text" placeholder="estudiantenombre1" className="form-control" required value={dataForm.estudiantenombre1} onChange={(e) => setDataForm({ ...dataForm, estudiantenombre1: e.target.value })} />
                                    </div>
                                    <div className="mb-3">
                                        <input type="text" placeholder="estudiantenombre2" className="form-control" required value={dataForm.estudiantenombre2} onChange={(e) => setDataForm({ ...dataForm, estudiantenombre2: e.target.value })} />
                                    </div>
                                    <div className="mb-3">
                                        <input type="text" placeholder="estudianteapellido1" className="form-control" required value={dataForm.estudianteapellido1} onChange={(e) => setDataForm({ ...dataForm, estudianteapellido1: e.target.value })} />
                                    </div>
                                    <div className="mb-3">
                                        <input type="text" placeholder="estudianteapellido2" className="form-control" required value={dataForm.estudianteapellido2} onChange={(e) => setDataForm({ ...dataForm, estudianteapellido2: e.target.value })} />
                                    </div>
                                    <div className="mb-3">
                                        <input type="number" placeholder="documentoestudiante" className="form-control" required value={dataForm.documentoestudiante} onChange={(e) => setDataForm({ ...dataForm, documentoestudiante: e.target.value })} />
                                    </div>
                                    <div className="mb-3">
                                        <input type="number" placeholder="telefono" className="form-control" required value={dataForm.telefono} onChange={(e) => setDataForm({ ...dataForm, telefono: e.target.value })} />
                                    </div>
                                    <div className="mb-3">
                                        <input type="text" placeholder="email" className="form-control" required value={dataForm.email} onChange={(e) => setDataForm({ ...dataForm, email: e.target.value })} />
                                    </div>
                                    <div className="mb-3">
                                        <input type="text" placeholder="acudientenombre1" className="form-control" required value={dataForm.acudientenombre1} onChange={(e) => setDataForm({ ...dataForm, acudientenombre1: e.target.value })} />
                                    </div>
                                    <div className="mb-3">
                                        <input type="text" placeholder="acudientenombre2" className="form-control" required value={dataForm.acudientenombre2} onChange={(e) => setDataForm({ ...dataForm, acudientenombre2: e.target.value })} />
                                    </div>
                                    <div className="mb-3">
                                        <input type="text" placeholder="acudienteapellido1" className="form-control" required value={dataForm.acudienteapellido1} onChange={(e) => setDataForm({ ...dataForm, acudienteapellido1: e.target.value })} />
                                    </div>
                                    <div className="mb-3">
                                        <input type="text" placeholder="acudienteapellido2" className="form-control" required value={dataForm.acudienteapellido2} onChange={(e) => setDataForm({ ...dataForm, acudienteapellido2: e.target.value })} />
                                    </div>
                                    <div className="mb-3">
                                        <input type="text" placeholder="documentoacudiente" className="form-control" required value={dataForm.documentoacudiente} onChange={(e) => setDataForm({ ...dataForm, documentoacudiente: e.target.value })} />
                                    </div>
                                    <div className="mb-3">
                                        <input type="text" placeholder="profesornombre1" className="form-control" required value={dataForm.profesornombre1} onChange={(e) => setDataForm({ ...dataForm, profesornombre1: e.target.value })} />
                                    </div>
                                    <div className="mb-3">
                                        <input type="text" placeholder="profesorapellido1" className="form-control" required value={dataForm.profesorapellido1} onChange={(e) => setDataForm({ ...dataForm, profesorapellido1: e.target.value })} />
                                    </div>
                                    <div className="mb-3">
                                        <input type="text" placeholder="grupoperteneciente" className="form-control" required value={dataForm.grupoperteneciente} onChange={(e) => setDataForm({ ...dataForm, grupoperteneciente: e.target.value })} />
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
                            <th>Matriculaid</th>
                            <th>Fecha</th>
                            <th>Estudiantenombre1</th>
                            <th>Estudiantenombre2</th>
                            <th>Estudianteapellido1</th>
                            <th>Estudianteapellido2</th>
                            <th>Documentoestudiante</th>
                            <th>Telefono</th>
                            <th>Email</th>
                            <th>Acudientenombre1</th>
                            <th>Acudientenombre2</th>
                            </tr>
                            <tr>
                            <th>Acudienteapellido1</th>
                            <th>Acudienteapellido2</th>
                            <th>Documentoacudiente</th>
                            <th>Profesornombre1</th>
                            <th>Profesorapellido1</th>
                            <th>Grupoperteneciente</th>
                            <th>Subnivel</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            matricula.map((item, i) => (
                                <tr key={item._id}>
                                    <td>{i + 1}</td>
                                    <td><Link to={'/matriculaid/'+ item._id}>{item.matricuid}</Link></td>
                                    <td>{item.fecha} </td>
                                    <td>{item.estudiantenombre1}</td>
                                    <td>{item.estudiantenombre2}</td>
                                    <td>{item.estudianteapellido1}</td>
                                    <td>{item.estudianteapellido2}</td>
                                    <td>{item.documentoestudiante}</td>
                                    <td>{item.telefono}</td>
                                    <td>{item.email}</td>
                                    <td>{item.acudientenombre1} </td>
                                    <td>{item.acudientenombre2} </td>
                                    <td>{item.acudienteapellido1}</td>
                                    <td>{item.acudienteapellido2}</td>
                                    <td>{item.documentoacudiente}</td>
                                    <td>{item.profesornombre1}</td>
                                    <td>{item.profesorapellido1}</td>
                                    <td>{item.grupoperteneciente}</td>
                                    <td>{item.subnivel}</td>
                                    <td>
                                        <i className="btn btn-danger fas fa-trash me-2" onClick={() => deleteMatricula(item._id)}></i>
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
    

export default Matriculas