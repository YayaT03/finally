import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const Grup = () => {

      const {id}=useParams();
      const [grupos, setGrupos] = useState({})
  
      useEffect(()=>{
          
          const getGruposByid = async () => {
              try {
                  const { data } = await axios.get("/listid/:id" + id)
                  setGrupos(data.grupos)
              } catch (error) {
                  if (!error.response.data.ok) {
                      return alert(error.response.data.message)
                  }
                  console.log('error en getGruposByid', error.message);
              }
          };
          getGruposByid(id);
      },[id]);
  
      
  
      return (
          <div className='container'>
              {/* inicio card usuario*/}
              <div className="d-flex justify-conten-center">
                  <div className="col-12 col-md-8">
                      <div className="card">
                          <h3 className="card-title">{grupos.name1}</h3>
                          <div className="card-body">
                              <p> ${grupos.name1}</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      )
  }

export default Grup