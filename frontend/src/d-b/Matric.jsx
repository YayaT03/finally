import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const Matric = () => {

      const {id}=useParams();
      const [matriculas, setMatriculas] = useState({})
  
      useEffect(()=>{
          
          const getMatriculasByid = async () => {
              try {
                  const { data } = await axios.get("/listid/:id" + id)
                  setMatriculas(data.matriculas)
              } catch (error) {
                  if (!error.response.data.ok) {
                      return alert(error.response.data.message)
                  }
                  console.log('error en getMatriculasByid', error.message);
              }
          };
          getMatriculasByid(id);
      },[id]);
  
      
  
      return (
          <div className='container'>
              {/* inicio card usuario*/}
              <div className="d-flex justify-conten-center">
                  <div className="col-12 col-md-8">
                      <div className="card">
                          <h3 className="card-title">{matriculas.matricuid}</h3>
                          <div className="card-body">
                              <p> ${matriculas.matricuid}</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      )
  }

export default Matric