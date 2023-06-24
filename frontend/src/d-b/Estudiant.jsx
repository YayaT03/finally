import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const Estudiant = () => {

      const {id}=useParams();
      const [estudiantes, setEstudiantes] = useState({})
  
      useEffect(()=>{
          
          const getEstudiantesByid = async () => {
              try {
                  const { data } = await axios.get("/listid/:id" + id)
                  setEstudiantes(data.estudiantes)
              } catch (error) {
                  if (!error.response.data.ok) {
                      return alert(error.response.data.message)
                  }
                  console.log('error en getEstudiantesByid', error.message);
              }
          };
          getEstudiantesByid(id);
      },[id]);
  
      
  
      return (
          <div className='container'>
              {/* inicio card usuario*/}
              <div className="d-flex justify-conten-center">
                  <div className="col-12 col-md-8">
                      <div className="card">
                          <h3 className="card-title">{estudiantes.name1}</h3>
                          <div className="card-body">
                              <p> ${estudiantes.name1}</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      )
  }

export default Estudiant