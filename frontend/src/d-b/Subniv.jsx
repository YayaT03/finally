import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const Subniv = () => {

      const {id}=useParams();
      const [subniveles, setSubniveles] = useState({})
  
      useEffect(()=>{
          
          const getSubnivelesByid = async () => {
              try {
                  const { data } = await axios.get("/listid/:id" + id)
                  setSubniveles(data.subniveles)
              } catch (error) {
                  if (!error.response.data.ok) {
                      return alert(error.response.data.message)
                  }
                  console.log('error en getSubnivelesByid', error.message);
              }
          };
          getSubnivelesByid(id);
      },[id]);
  
      
  
      return (
          <div className='container'>
              {/* inicio card usuario*/}
              <div className="d-flex justify-conten-center">
                  <div className="col-12 col-md-8">
                      <div className="card">
                          <h3 className="card-title">{subniveles.name1}</h3>
                          <div className="card-body">
                              <p> ${subniveles.name1}</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      )
  }

export default Subniv