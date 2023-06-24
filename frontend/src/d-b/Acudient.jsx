import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const Acudient = () => {

      const {id}=useParams();
      const [acudientes, setAcudientes] = useState({})
  
      useEffect(()=>{
          
          const getAcudientesByid = async () => {
              try {
                  const { data } = await axios.get("/listid/:id" + id)
                  setAcudientes(data.acudientes)
              } catch (error) {
                  if (!error.response.data.ok) {
                      return alert(error.response.data.message)
                  }
                  console.log('error en getAcudientesByid', error.message);
              }
          };
          getAcudientesByid(id);
      },[id]);
  
      
  
      return (
          <div className='container'>
              {/* inicio card usuario*/}
              <div className="d-flex justify-conten-center">
                  <div className="col-12 col-md-8">
                      <div className="card">
                          <h3 className="card-title">{acudientes.name1}</h3>
                          <div className="card-body">
                              <p> ${acudientes.name1}</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      )
  }

export default Acudient