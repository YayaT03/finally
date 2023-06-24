import React from 'react'
import Forma from "../Imagenes/Forma.jpg"
import images from "../Imagenes/images.jpg"
import Prov from "../Imagenes/Prov.jpg"
import pic1 from "../Imagenes/pic1.png"
import { Link } from 'react-router-dom'



const Inicio = () => {
  return (

  <div>

    <header className="bg-ligth 'Cabin', sans-serif">
          <div className="contenedor-header"></div>
          <div className="container d-flex md "> </div>
          <figure className="container d-flex align-items-center my-5">
    <div className ="jumbotron jumbotron-fluid">
  <div className="container-md">
    <h1 className="display-4">Bienvenidos, Dance World Academy</h1>
    <img src={pic1} className="img-fluid"  alt="pic1" /><div className="carousel-caption d-none d-md-block  top-50 ">
              <p className="lead display-6">Bailar es más que movimiento, más que cansancio,es el alivio del alma.</p>
              <p className="lead display-6">Bailar requiere de pasión la técnica se consigue con el tiempo.</p>
            </div>
   </div>
      
      
      
  </div>
  </figure>
    </header>


      <div className="container-md flex" >
      <div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col">
    <div className="card h-100">
       <img src={Forma}  alt="Forma" className="card-img-top" width="300" height="250"/>
      <div className="card-body">
        <p className="card-text">
        <figure className="text-center">
  <blockquote className="blockquote">
    <p>“CUANDO BAILAS PUEDES DISFRUTAR EL LUJO DE SER TÚ MISMO.”</p>
  </blockquote>
  <figcaption className="blockquote-footer">
  PAULO COELHO
  </figcaption>
</figure>
        </p>
      </div>
      <div className="card-footer">
        <small className="text-muted">Última actualización hace 3 minutos</small>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
    <img src={images}  alt="Forma" className="card-img-top" width="400" height="300"/>
      <div className="card-body">
        <p className="card-text">
        <figure className="text-center">
  <blockquote className="blockquote">
    <p> “LA DANZA ES EL LENGUAJE OCULTO DEL ALMA.”   </p>
  </blockquote>
  <figcaption className="blockquote-footer">
  MARTHA GRAHAM
  </figcaption>
</figure>

        </p>
      </div>
      <div className="card-footer">
        <small className="text-muted">Última actualización hace 3 minutos</small>
      </div>
      </div>
     </div>

      <div className="col">
    <div className="card h-100">
    <img src={Prov}  alt="Prov" className="card-img-top" width="300" height="250"/>
      <div className="card-body">
        <p className="card-text">
        <figure className="text-center">
      <blockquote className="blockquote">
     <p>“LA MÚSICA Y EL BAILE SON DOS ARTES QUE ESTÁN ÍNTIMAMENTE LIGADOS”</p>
     </blockquote>
     <figcaption className="blockquote-footer">MOLIÈRE
 
      </figcaption>
   </figure>
        </p>

      </div>
      <div className="card-footer">
        <small className="text-muted">Última actualización hace 3 minutos</small>
      </div>
    </div>
  </div>
  </div>
  </div>
 

  <div className="container-md">
    <br></br>
    <p className='lead'>
    <strong>
      Este es un espacio para desarrollar tus habilidades sin importar la experiencia el único requerimiento es tener ganas de aprender y una bonita energía. 
</strong>
</p>
  
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

    </div >

   








  )
}

export default Inicio