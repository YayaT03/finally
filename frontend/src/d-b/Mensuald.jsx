import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const Mensuald = () => {

      const {id}=useParams();
      const [mensualidades, setMensualidades] = useState({})
  
      useEffect(()=>{
          
          const getMensualidadesByid = async () => {
              try {
                  const { data } = await axios.get("/listid/:id" + id)
                  setMensualidades(data.mensualidades)
              } catch (error) {
                  if (!error.response.data.ok) {
                      return alert(error.response.data.message)
                  }
                  console.log('error en getMensualidadesByid', error.message);
              }
          };
          getMensualidadesByid(id);
      },[id]);
  
      
  
      return (
          <div className='container'>
              {/* inicio card usuario*/}
              <div className="d-flex justify-conten-center">
                  <div className="col-12 col-md-8">
                      <div className="card">
                          <h3 className="card-title">{mensualidades.name1}</h3>
                          <div className="card-body">
                              <p> ${mensualidades.name1}</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      )
  }

export default Mensuald