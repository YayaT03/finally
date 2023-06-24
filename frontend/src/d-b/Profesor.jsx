import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const Profesor = () => {

      const {id}=useParams();
      const [profesores, setProfesores] = useState({})
  
      useEffect(()=>{
          
          const getProfesoresByid = async () => {
              try {
                  const { data } = await axios.get("/listid/:id" + id)
                  setProfesores(data.profesores)
              } catch (error) {
                  if (!error.response.data.ok) {
                      return alert(error.response.data.message)
                  }
                  console.log('error en getProfesoresByid', error.message);
              }
          };
          getProfesoresByid(id);
      },[id]);
  
      
  
      return (
          <div className='container'>
              {/* inicio card usuario*/}
              <div className="d-flex justify-conten-center">
                  <div className="col-12 col-md-8">
                      <div className="card">
                          <h3 className="card-title">{profesores.name1}</h3>
                          <div className="card-body">
                              <p> ${profesores.name1}</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      )
  }

export default Profesor