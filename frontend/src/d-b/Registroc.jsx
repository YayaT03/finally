import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const Registroc  = () => {

      const {id}=useParams();
      const [competencias, setCompetencias] = useState({})
  
      useEffect(()=>{
          
          const getCompetenciasByid = async () => {
              try {
                  const { data } = await axios.get("/listid/:id" + id)
                  setCompetencias(data.competencias)
              } catch (error) {
                  if (!error.response.data.ok) {
                      return alert(error.response.data.message)
                  }
                  console.log('error en getCompetenciasByid', error.message);
              }
          };
          getCompetenciasByid(id);
      },[id]);
  
      
  
      return (
          <div className='container'>
              {/* inicio card usuario*/}
              <div className="d-flex justify-conten-center">
                  <div className="col-12 col-md-8">
                      <div className="card">
                          <h3 className="card-title">{competencias.name1}</h3>
                          <div className="card-body">
                              <p> ${competencias.name1}</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      )
  }

export default Registroc