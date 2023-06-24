import React from 'react'
import { Link } from 'react-router-dom'
import Dancing from "../Imagenes/Dancing.jpg"
import army from "../Imagenes/army.jpg"
import txt from "../Imagenes/txt.jpg"
import skz from "../Imagenes/skz.jpg"
import enhypen from "../Imagenes/enhypen.jpg"
import gdle from "../Imagenes/gdle.jpg"
import svt from "../Imagenes/svt.jpg"
import bkp from "../Imagenes/bkp.jpg"


const Covers = () => {
  return (
    <div>
     <header className="bg-ligth 'Cabin', sans-serif">
        <em>
          <h1 className="display-4">Covers</h1>
        </em>
        <br></br>
        <div className="container-md -flex" >
          <div className="clearfix">
            <img src={Dancing}className="col-md-6 float-md-end mb-3 ms-md-3 img-fluid" alt="Dancing"></img>

            <strong>Este es un grupo que pondra aprueba tu capacidad de copiar una coreografia de k-pop sin dejar de lado
            tu propio estilo y con la oportunidad de pertenecer a nuestro grupo de competencia en la categoria covers k-pop. <br></br> </strong>
            <p className='p2'>
              El k-pop es uno de los generos que mas se ha potenciado en los ultimos años gracias a la influencia de grupos de la segunda generacion como Big Bang, Girls' Generation, super junior y SHInee. Para la tercera generacion podríamos decir que la expansión del K-POP de la mano del tema Gangnam Style de Psy marcó el inicio de la tercera generación del K-POP, donde surgen los grupos más conocidos hasta el momento como EXO, blackpink, twice, seventeen y elo exponente de renombre BTS. Hasta el momento la cuarta generacion ha avanzado con grandes debuts como stray kids, Tomorrow x together, enhypen, (G)I-DLE
, ITZY y asi demasiados grupos con grandes capacidades siendo esta una de las generaciones mas prometedoras para la industria. <br></br>
              
            </p>
            <h2>Pero ¿que es el k-pop?</h2>
            <p className='p2'>
            El K-Pop es un género musical original de Corea del Sur (Korean Pop) que surge a principios de los años 90.
            Su música suele estar influenciada por diversos géneros musicales occidentales que han sido adaptados al mercado asiático como el jazz, hip-hop, reggae, electrónica y pop entre otros.  
            <h3>Características del kpop</h3>
<li>Los grupos están formados en su mayoría, desde 6 hasta hasta 8 integrantes, los cuales cumplen con roles específicos, entre estos están: el líder, el visual, el maknae (integrante menor del grupo),  vocal , bailarín principal y rapero principal.</li>
<li>Aunque su nombre se refiere a un género específico como lo es el pop, las canciones kpop pueden englobar cualquier otro estilo como rap, rock o techno.</li>
<li>Las coreografías son características y siempre se busca que vayan acorde a la música y letra, es decir, debe haber un punto de baile, lo que hace auténtica y distintiva la imagen del grupo.</li>
<li>Su imagen es muy importante, por lo que su estilismo siempre está estrechamente relacionado con el concepto del álbum que se esté promocionando.</li>
            </p>
            
     </div>    
     </div>
     </header>

     <div className="container-md -flex" >
      <h2>Galery &#128156; </h2>  
      
      <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
    <img src={army} className="float-start img-fluid" alt="army"></img>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
    <img src={txt} className=" float img-fluid" alt="txt"></img>
    </div>
    <div className="carousel-item">
    <img src={skz} className="float-start img-fluid" alt="skz"></img>
    </div>
    <div className="carousel-item">
    <img src={enhypen} className="float-start img-fluid" alt="enhypen"></img>
    </div>
    <div className="carousel-item">
    <img src={gdle} className="float-start img-fluid" alt="gdle"></img>
    </div>
    <div className="carousel-item">
    <img src={svt} className="float-start img-fluid" alt="svt"></img>
    </div>
    <div className="carousel-item">
    <img src={bkp} className="float-start img-fluid" alt="bkp"></img>
    </div>



  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Anterior</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Siguiente</span>
  </button>
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
        </div>
        





 

  )
}

export default Covers