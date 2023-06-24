import React from 'react'
import { Link } from 'react-router-dom'
import urban from "../Imagenes/urban .jpg"
import urban1 from "../Imagenes/urban1.jpg"
import urban2 from "../Imagenes/urban2.jpg"

const Urbano = () => {
  return (
    <div>
      <header className="bg-ligth 'Cabin', sans-serif">
        <em>
          <h1 className="display-4">Urbano</h1>
        </em>
        <br></br>
        <div className="container-md -flex" >
          <div className="clearfix">
            <img src={urban}className="col-md-6 float-md-end mb-3 ms-md-3 img-fluid" alt="urban"></img>

            <strong>Este es un grupo que te brindara la oportunidad de aprender o mejorar en el arte urbano que no solo esta limitado a 
              un solo tipo en especifico si no que debido a su versatilidad podras integrar generos y movimientos distintos para crear algo increible.<br></br> </strong>
            <p className='p2'>
            El baile urbano, también llamado baile callejero, urban dance o street dance, es un conjunto de estilos de baile 
            creados en ambientes fuera del estudio como parques, patios, calles, fiestas de barrio, discotecas, los cuales se caracterizan 
            por la ejecución de movimientos muy claros y potentes, intercalados con movimientos más discretos que requieren una alta técnica. Una de las características más llamativas de los bailes urbanos es que 
            se pueden bailar individualmente o en grupos, permitiendo crear diversas coreografías.
            </p>
            <h2>Tipos de baile urbanos</h2>
            <h3>Hip hop</h3>
            <p className='p2'>
El hip hop es un potente movimiento cultural, nacido en Estados Unidos en los años 70, por medio de la mezcla de música
 funk y soul, siendo identificado por sus movimientos libres y la simplicidad  los elementos que lo componen.<br></br>
Este estilo de baile urbano se caracteriza por sus movimientos de freestyle particulares, teniendo su propio sello, 
ya que en ocasiones sus movimientos están inspirados en la vida cotidiana, lo  que permite que el hip hop tenga un 
componente callejero que hace que la disciplina sea importante para la improvisación, la aprobación del público y la 
atención por medio de movimientos fuertes y muy expresivos, especialmente utilizando los brazos y el torso.
</p>
<div className="clearfix">
    <img src={urban1}className="col-md-6 float-md-end mb-3 ms-md-3 img-fluid" alt="urban1"></img>
    <h3> House Dance</h3>
    <p className='p2'>
Sus orígenes se remontan a finales de los 70 y principios de los 80 teniendo lugar en las ciudades de Chicago, 
Detroit y Nueva York. Fue en esta época cuando se empezó a bailar la música electrónica vibrante o disco en general. 
Convirtiendo el dance house en un baile menos urbano, aunque se incluye en este grupo de estilos.<br></br>
El House Dance tiene influencias de muchos estilos como tap, el jazz, el soul , R&B, funky o hip hop. 
Este se baila con sensatez al ritmo de la música House y se caracteriza por movimientos rápidos de los pies acompañados
 de un movimiento del torso de atrás hacia adelante como si fuera una ola, además,  se baila a ritmos de ocho tiempos,
 y está basado en la improvisación.
    </p>
    <h3> El Breaking</h3>
    <p className='p2'> 
Mas conocido como el break dance, es uno de los pilares sobre los que se sostiene la cultura hip hop, 
ya que es el pionero de los bailes urbanos, el cual fue creado por jóvenes de los suburbios de Nueva York.
 Sus características principales son los movimientos en el suelo y los movimientos acrobáticos. Además,
  tiene influencias de diferentes disciplinas como las artes marciales, la gimnasia deportiva, la capoeira, e 
  incluso del mambo y la salsa.
  </p>
  <h3> Dancehall</h3>
    <p className='p2'> 
Es un ritmo originario de Jamaica y es derivado del reggae; su mezcla de movimientos representa acciones de la
 vida cotidiana. Este es un baile muy sensual, con referencias marcadas en la danza africana y caribeña,
  donde cada uno de sus movimientostienen un significado e historia detrás de cada uno de ellos.
    </p>
    <div className="clearfix">
    <img src={urban2}className="col-md-6 float-md-end mb-3 ms-md-3 img-fluid" alt="urban2"></img>
    <h3>Afrodance  </h3>
    <p className='p2'>
    Se trata de un tipo de baile lleno de energía, rápido, dinámico, con un pie en el pasado en las tradiciones 
    culturales africanas y otro en el presente y el futuro -una combinación entre funk, jazz, yoruba y muchos otros,
    y que enamora cada vez a más personas.
    Al profundizar en el mundo del afrodance una rápida búsqueda en Internet nos devolverá resultados como afrodance, 
    sí, pero también afrobeats, afrobeats dance, danza africana…
<li>Afrodance: es el nombre comodín que se ha generalizado para referirnos a todos los estilos de danza que se bailan con afrobeats.
   Es corto, sencillo y descriptivo, de ahí el éxito que ha cosechado.</li>
<li>Afrobeats: se refiere al estilo musical creado en África entre los años 60 y 70 como una mezcla de jazz, 
funk, yoruba y otros. Es música enérgica, con percusión polirrítmica, a menudo cantado en variantes del inglés.
 Es la clave del afrodance, ya que es la música con la que acompaña a este tipo de danza urbana tan especial. </li>
<li> Afropop: es otra forma más de referirnos a los ritmos africanos modernos,
   una que, de hecho, es cada vez más habitual. Al igual que sucede con el K-Pop, 
   es un tipo de música que junto con los estilos de baile asociados a ella rompe fronteras cada vez con mayor 
   facilidad.  </li>

    </p>

    </div>
     </div>
    </div>    
     </div>
     </header>

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

export default Urbano