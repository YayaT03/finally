import axios from "axios"
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import {Link} from  'react-router-dom'
import Pagination from 'rc-pagination';

const Base = () => {

      const [estudiante, setEstudiante] = useState([]);
      //const [name1, setName1] = useState("");
      //const [name2, setName2] = useState("");
      //const [lastname1, setLastname1] = useState("");
      //const [lastname2, setLastname2] = useState("");
      //const [email, setEmail] = useState("");
      const [edit, setEdit] = useState(false);

      const [dataForm, setDataForm] = useState({
        name1: "",
        name2:"",
        lastname1:"",
        lastname2:"",
        email:"",
      });

      const[page, setPage] = useState(1);
      const[totalPages, setTotalPages]= useState("");
      
    
      useEffect(() => {
        getData(page);
      }, [page]);
    
      const cleanData = () => {
        //setName1("");
        //setName2("");
        //setLastname1("");
        //setLastname2("");
        //setEmail("");
        setDataForm({name1:"",name2:"",lastname1:"",lastname2:"",email:""});
        setEdit(false);
      };
    
    
      const getData = async (pageCurrent) => {
        const { data } = await axios.get(`/list/?page=${pageCurrent}`);
        setEstudiante(data.estudiante.docs);
        setPage(data.estudiante.page);
        setTotalPages(data.estudiante.totalPages);
      };


      const onchangePage= (page) =>{
        getData(page);
      };

      const saveEstudiante = async () => {
        try {
         // const newEstudiante = {
            //name1,
            //name2,
           // lastname1,
            //lastname2,
            //email,
          //};
          await axios.post("/api/estudiantes/add", dataForm);
          cleanData();
          getData();

        } catch (error) {
          if (!error.response.data.ok) {
            return alert(error.response.data.message);
          }
          console.log("error en saveEstudiate", error.message);
        }
      };
    
      const updateEstudiante = async () => {
        try {
          const id = localStorage.getItem("id");
          //const newEstudiante = {
            //name1,
           //name2,
            //lastname1,
            //lastname2,
            //email,
          //};
          const { data } = await axios.put("/api/estudiantes/update/" + id, dataForm);
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
            return alert(error.response.data.message);
          }
          console.log("error en updateEstudiate", error.message);
    
        }
      };
    
      const actions = (e) => {
        e.preventDefault();
        edit ? updateEstudiante() : saveEstudiante();
    
      };
    
      const completeDataFields = (item => {
        setEdit(true);
        //setName1(item.name1);
        //setName2(item.name2);
        //setLastname1(item.lastname1);
        //setLastname2(item.lastname2);
        //setEmail(item.email);
        setDataForm({
          name1: item.name1, name2: item.name2, lastname1: item.lastname1, lastname2: item.lastname2, email: item.email
        });
        localStorage.setItem('id', item._id);
    
      });
      
      /* Este deleteEtudiante elimina el registro*/
      const deleteEstudiante = async (id) => {
        try {
          const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: 'btn btn-success',
              cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
          })
    
          swalWithBootstrapButtons.fire({
            title: 'estas seguro?',
            text: "esta accion no tiene reversa",
            icon: 'Advertencia',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
          }).then(async (result) => {
            if (result.isConfirmed) {
              const { data } = await axios.delete("/api/estudiantes/delete/" + id)
              getData();
              swalWithBootstrapButtons.fire({
                icon: "success",
                title: data.message,
    
              });
            } else if (
             /* Read more about handling dismissals below */
             result.dismiss === Swal.DismissReason.cancel
           ) {
             swalWithBootstrapButtons.fire(
                'Cancelado',
              'tu archivo esta a salvo',
                'error'
              )
           }
          })
        } catch (error) {
          if (!error.response.data.ok) {
            return alert(error.response.data.message);
          }
          console.log("error en deleteEstudiate", error.message)
        }
    
      };
    

  return (
        <div className='container'>
          {/*formulario*/}
          <div className='d-flex justify-content-center mt-5'>
            <div className='col-12 col md-8'>
              <div className='card'>
                <h1 className='card-title text-center'>INGRESO </h1>
                <div className='card-body'>
                  <form onSubmit={actions}>
                <div className="mb-3">
                  <input type="text" placeholder="name1" className="form-control" required value={dataForm.name1} onChange={(e) => setDataForm({ ...dataForm, name1: e.target.value })} />
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
              <input type="text" placeholder="email" className="form-control" required value={dataForm.email} onChange={(e) => setDataForm({ ...dataForm, email: e.target.value })} />
            </div>
            <button className='btn btn-primary full-control'>Enviar</button>
          </form>
        </div>
      </div>
    </div>
  </div>
          {/*fin */}
    
          {/*tablas */}
          <table className='table mt-5 table-hover'>
            <thead className='table-dark'>
              <tr>
                <th>#</th>
                <th>Name1</th>
                <th>Name2</th>
                <th>Lastname1</th>
                <th>Lastname2</th>
                <th>Email</th>
                <th>Acciones</th>
              </tr>
            </thead>
    
            <tbody>
              {
                estudiante.map((item, i) => (
                  <tr key={item._id}>
                    <td>{i + 1}</td>
                    <td><Link to={"api/estudiantesid/"+ item._id}>{item.name1}</Link></td>
                    <td>{item.Name2}</td>
                    <td>{item.lastname1}</td>
                    <td>{item.lastname2}</td>
                    <td>{item.email}</td>
                    <td>
                      <i className="btn btn-danger fas fa-trash me-2" onclick={() => deleteEstudiante(item._id)}></i>
                      <i className="btn btn-warning fas fa-edit" onclick={() => completeDataFields(item)}></i>
    
                    </td>
                  </tr>
                ))
              }
    
            </tbody>
          </table>
           {/*fin */}

           <div className="my-5 d-flex justify-content-center">
            <Pagination
            className="pagination"
            current={page}
            total={totalPages}
            pageSize={1}
            onChange={onchangePage}
            />
          
           </div> 
        </div>

    
  )
};

export default Base