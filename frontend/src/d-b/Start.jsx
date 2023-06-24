import React from 'react'
import { Link } from 'react-router-dom'
import logoW from "../Imagenes/logoW.png"
import Forma from "../Imagenes/Forma.jpg"



const Inicio = () => {
  return (
    <div>
      <header className="bg-ligth 'Cabin', sans-serif">
        <div className='container-header'>
          <h1 className="display-4">Bienvenido, Ingreso de datos de Dance World Academy </h1>
        </div>
      </header>
      <br></br>
      <ul className="nav justify-content-center">
        <li className="nav-item - bg-white">
          <Link to="Estudiantes" className="nav-link active" >Estudiantes</Link>
        </li>
        <li className="nav-item bg-white">
          <Link to="Acudientes" className="nav-link">Acudientes</Link>
        </li>
        <li className="nav-item bg-white">
          <Link to="Profesores" className="nav-link" >Profesores</Link>
        </li>
        <li className="nav-item bg-white">
          <Link to="Grupos" className="nav-link">Grupos</Link>
        </li>
        <li className="nav-item bg-white">
          <Link to="Mensualidades" className="nav-link " >Mensualidades</Link>
        </li>
        <li className="nav-item bg-white">
          <Link to="Matriculas" className="nav-link">Matriculas</Link>
        </li>
        <li className="nav-item bg-white">
          <Link to="Subniveles" className="nav-link">Subniveles</Link>
        </li>
      </ul>
      <br></br>
      <br></br>
      <div className='container d-flex md'>
        <p className="lead display-6">
          Espacio usado para el ingreso y actualizacion de los datos de de quienes hacen parte de Dance
          World Academy, esto con el fin de que la organizacion sea parte de la vida institucional.
        </p>

      </div>
      <br></br>
      <div classname="container md">
        <div class="row">
          <div className="col-6">
            <h1>Uso</h1>
            <p className='display-7'>
              En la barra blanca se encontraran los enlaces directos a los distintos formularios 
              para ser diligenciados y/o actualizados según las necesidades.<br></br>
              Tener en cuenta que estos formularios son diseñados de forma dinamica para 
              que su uso sea aun más facil.     
              <img src={Forma} alt="Forma" className=" img-fluid"></img>    

            </p>
          </div>

          <div className="col-6">
          <blockquote className="display-8">
              <h1>“Deberíamos considerar perdidos los días en que no hemos bailado al menos una vez”</h1>
            </blockquote>
            <figcaption className="blockquote-footer">
              "Friedrich Nietzsche"
            </figcaption>
            <img src={logoW} alt="logoW" className=" img-fluid w-50 "></img>
          </div>
        </div>
      </div>


      <footer >
        <div className="container-md">

          <i className="fa-brands fa-facebook fa-2xl me-3" ></i>
          <Link to="https://www.facebook.com">Facebook </Link> <br></br> <br></br>

          <i className="fa-brands fa-instagram fa-2xl me-3 "> </i>
          <Link to="https://www.instagram.com">Instagram</Link> <br></br> <br></br>

          <i className="fa-brands fa-tiktok fa-2xl me-3"></i>
          <Link to="https://www.tiktok.com/es/">TikTok</Link>
          <br></br>
          <br></br>


          <p>Dance World Academy, Copyright &copy; 2023</p>
          <br></br>
          <br></br>
          <p>Santa Rosas De Osos-Antioquia,Colombia</p>

        </div>
      </footer>
    </div>


  )
}

export default Inicio