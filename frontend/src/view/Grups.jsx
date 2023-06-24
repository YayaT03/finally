import React from 'react'
import { Link } from 'react-router-dom'
import Banner from "../Imagenes/Banner.jpg"
import dance from "../Imagenes/dance.jpg"
import More from "../Imagenes/More.jpg"
import Baila from "../Imagenes/Baila.jpg"
import Bailar from "../Imagenes/Bailar.jpg"


const Grupos = () => {
  return (
    <div>
      <header className="bg-ligth 'Cabin', sans-serif">
        <em>
          <h1 className="display-4">Nuestros Grupos</h1>
        </em>
        <br></br>
        <div className="container-md -flex" >
          <div className="clearfix">
            <img src={Banner} className="col-md-6 float-md-end mb-3 ms-md-3 img-fluid" alt="Banner"></img>

            <strong>Una academia es nutrida gracias a nuestros bailarines, para ello se han creado diversos grupos para que cada persona sea capaz
              de adaptarse a sus diversos gustos, pasiones y técnicas.<br></br></strong>
            <p className='p2'>
              Las divisiones han sido creadas apartir de los generos y tendencias de las que mas se habla.<br></br>
            </p>
            <p className='p2'>

              Desde cada uno de los grupos se llevan a cabo procesos de aprendizaje teniendo en cuenta el nivel
              y la capacidad de cada uno de losintegrantes, es importante resaltar que el desarrollo de la disciplina
              y el trabajo en equipo es la base para llevar a cabo presentaciones exitosas.
            </p>
            <p className='p2'>
              Contamos con el grupo de competencia que ha sido elegido desde cada uno de los procesos de clase, este grupo cuenta
              con el expreso concentimiento de los estudiantes y sus esfuerzos, algunos de nuestros estudiantes disfrutan de los procesos y las muestras
              artisticas sin la responsabilidad y presion de una competencia, en otro de los casos tenemos estudiantes a quienes les
              les gustan los retos y la adrernalina de competir.
            </p>
            <p className='lead'>
              <strong>
                Sin mas bienvenidos a conocer cada uno de los generos y procesos de nuestra academia para que la intriga te lleve <br></br>
                a vivir exprencias que no creias posible.
              </strong>
            </p>

          </div>
        </div>
      </header>

      <div className="container-md -flex" >
        <ul className="list-group list-group-horizontal">

          <li className="list-group-item">
            <Link to="covers"><img src={More} className="float-start img-fluid" alt="More">

            </img>
              <div className="carousel-caption d-none d-md-block  text-black">
                <h5>Covers</h5>
              </div>
            </Link>
          </li>

          <li className="list-group-item">
            <Link to="urbano"><img src={dance} className=" float img-fluid" alt="dance"></img><div className="carousel-caption d-none d-md-block text-black">
              <h5>Urbano</h5>
              
            </div></Link>
          </li>
        </ul>

        <ul className="list-group list-group-horizontal">

          <li className="list-group-item">
          <Link to="contemporaneo" ><img src={Baila} className="float img-fluid" alt="Baila"></img><div className="carousel-caption d-none d-md-block text-black">
            <h5>Contemporaneo</h5>
          </div>
            </Link></li>
          <li className="list-group-item">
          <Link to="Registrocompetencia"><img src={Bailar} className="float img-fluid" alt="Bailar"></img><div className="carousel-caption d-none d-md-block">
            <h5>Registro de competencia</h5>
          </div>
           </Link></li>
        </ul>
      </div>


      <footer >
        <div className="container-md - aligin-items-center">

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

        </div>
      </footer>




    </div>


  )
}

export default Grupos