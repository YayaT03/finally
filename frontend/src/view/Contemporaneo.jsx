import React from 'react'
import { Link } from 'react-router-dom'
import chicas from "../Imagenes/chicas.jpg"
import cont from "../Imagenes/cont.jpg"
import conn2 from "../Imagenes/conn2.jpg"
import conn3 from "../Imagenes/conn3.jpg"
const Contemporaneo = () => {
  return (
    <div>
      <header className="bg-ligth 'Cabin', sans-serif">
        <em>
          <h1 className="display-4">Contemporaneo</h1>
        </em>
        <br></br>
        <div className="container-md -flex" >
          <div className="clearfix">
            <img src={chicas}className="col-md-6 float-md-end mb-3 ms-md-3 img-fluid" alt="chicas"></img>

            <strong>Este es un grupo que pondra aprueba tu capacidad de escucha y algo de elasticidad siendo hermano o derivado
              del ballet hace al genero contemporaneo una forma de expresion de emociones con algunos giros caracteristicos de su 
              genero hermano. <br></br> </strong>
            <p className='p2'>
            Los bailarines de danza contemporánea tienen que tener un excelente dominio técnico a la vez que una gran
             versatilidad y una buena capacidad para improvisar. La pieza está centrada en el suelo, trabajando la 
             gravedad y el peso del cuerpo. Generalmente se baila con los pies descalzos. El aprendizaje incluyen 
             técnicas y movimientos del ballet clásico, así como nuevas expresiones de la danza moderna. 
             El objetivo es explorar los movimientos en relación con el piso y a la vez aplicar algunas 
             técnicas de consistencia del cuerpo.<br></br>
Se considera que fue Isadora Duncan la fundadora de este tipo de danza. Fue una bailarina y coreógrafa 
estadounidense que nación en 1877 y falleció en 1927. Era autodidacta y de forma espontánea comenzó a 
incorporar movimientos relacionados con el expresionismo a las técnicas del ballet clásico.<br></br>
Otras diferencias destacables entre el ballet clásico y danza contemporánea es que el primero 
cuenta una historia con principio, desarrollo y desenlace. El contemporáneo puede adaptarse a 
esta estructura o bien desarrollar la historia de una manera no lineal. Por otra parte, los roles
del bailarín y la bailarina no están tan definidos en la danza contemporánea como en el ballet.<br></br>
<h3>¿Cómo surge la danza contemporánea?</h3>
La danza contemporánea se origina como vanguardia que reacciona a las disciplinas clásicas.
 Mezcla movimientos de expresión corporal del siglo XX y XXI. En sus inicios, los bailarines se encontraron inmersos
  en la búsqueda de alternativas que rompieran con la rectitud del ballet clásico, por lo que comenzaron a ejecutarla
   descalzos y ejecutando movimientos que trascendían los límites establecidos.
Existen diversas corrientes y técnicas de danza contemporánea que podemos resumir en estas tres: <br></br>
              </p>
              <div className="clearfix">
            <img src={cont}className="col-md-6 float-md-end mb-3 ms-md-3 img-fluid" alt="cont"></img>
            <p className='p2'>
            <li>Técnica Cunningham</li>
La técnica Cunningham fue creada por un coreógrafo llamado Merce Cunningham. 
Él le dio a la danza un carácter independiente y autónomo en relación a la música. 
También le otorgó un significado nuevo al sentido del espacio durante la ejecución de una coreografía. 
Es una técnica que da protagonismo al movimiento y se basa en una combinación de una serie de secuencias aleatorias, 
pero seleccionadas previamente.
<li>Técnica Graham</li>
Fue desarrollada por Marta Graham. Se basa en los conceptos de contracción y relajación, realizando 
contracciones abdominales y pélvicas seguidas de relaciones. Todo ello coordinado con la respiración. 
La relación con el suelo también es de gran importancia en las coreografías de este estilo de danza contemporánea.
<li>Técnica Limón</li>
Una técnica creada por José Limón que le da énfasis a los principios orgánicos y físicos de caída y
 recuperación, de sucesión y suspensión. También otorga una especial relevancia a los movimientos que la 
 respiración ejerce en el cuerpo, utilizando también el propio peso del bailarín. No es un sistema pautado como 
 ocurre en la técnica Graham, ya que en el estilo Limón, no hay secuencias ni ejercicios definidos. Aquí todos los
  movimientos se centran en desarrollar la musicalidad y la expresión dramática por lo que el bailarín necesita
   potenciar al máximo su capacidad creativa.


            </p>
    </div>
    </div>    
     </div>
     </header>

   
    

<div className="container-md -flex" >
        <ul className="list-group list-group-horizontal">

          <li className="list-group-item">
          <img src={conn2}className="img-fluid" alt="conn2"></img>
          </li>

          <li className="list-group-item">
          <img src={conn3}className="img-fluid" alt="conn3"></img>
          </li>
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

</div >


  )
}

export default Contemporaneo