import React from "react";
import './Article.css';
import Form from "../components/Form";
import Demo from './Demo';



export default function Article() {
  return (
    <div >
    <Demo className="rspnv-carousel1"/>
      <div className="rspnv-cabecera">
        <h4>¿Quiénes somos?</h4>
        <p className="text">
          Lorem Ipsum es simplemente el texto de relleno de las imprentas y
          archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de
          las industrias desde el año 1500, cuando un impresor (N. del T.
          persona que se dedica a la imprenta) desconocido usó una galería de
          textos y los mezcló de tal manera que logró hacer un libro de textos
          especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como
          texto de relleno en documentos electrónicos, quedando esencialmente
          igual al original. Fue popularizado en los 60s con la creación de las
          hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más
          recientemente con
        </p>
      </div>



      {/* <h4  id="equipo">Nuestro Eqipo</h4>
      <hr className="hr"></hr>
      <div className="rspnv-equipo">
      <figure className="snip1376">
        <img
          src="https://www.clinicadentalenlavaguada.es/wp-content/uploads/2017/08/sintomas-consultar-dentista.jpg"
          alt="sample17"
        />
        <figcaption>
          <h2>Linguina Nettlewater</h2>
          <p>
            I'm looking for something that can deliver a 50-pound payload of
            snow on a small feminine target. Can you suggest something? Hello?{" "}
          </p>
        </figcaption>
      </figure>
      <figure className="snip1376 hover">
        <img
          src="https://www.clinicadentalenlavaguada.es/wp-content/uploads/2017/08/sintomas-consultar-dentista.jpg"
          alt="sample47"
        />
        <figcaption>
          <h2>Max Conversion</h2>
          <p>
            Calvin: I'm a genius, but I'm a misunderstood genius. Hobbes: What's
            misunderstood about you? Calvin: Nobody thinks I'm a genius.
          </p>
        </figcaption>
      </figure>
      <figure className="snip1376">
        <img
          src="https://www.clinicadentalenlavaguada.es/wp-content/uploads/2017/08/sintomas-consultar-dentista.jpg"
          alt="sample38"
        />
        <figcaption>
          <h2>Caspian Bellevedere</h2>
          <p>
            If you want to stay dad you've got to polish your image. I think the
            image we need to create for you is "repentant but learning".
          </p>
          
        </figcaption>
      </figure>
      </div> */}
      <div>
      

     <h4 id="tratamientos">Servicios</h4>
     <hr></hr>
     <div className="rspnv-servicios">
     <div>
             <h4 id="implantes">Prótesis cementada</h4>
             <img className="img-align"  src="/images/1.jpeg" alt="lab" width="365" height="330" />
             <p className="text">
          Lorem Ipsum es simplemente el texto de relleno de las imprentas y
          archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de
          las industrias desde el año 1500, cuando un impresor (N. del T.
          persona que se dedica a la imprenta) desconocido usó una galería de
          textos y los mezcló de tal manera que logró hacer un libro de textos
          especimen.Lorem Ipsum es simplemente el texto de relleno de las imprentas y
          archivos de texto.de las imprentas y
          archivos de texto.
        </p>
         </div>
         <div>
             <h4 id="implantes">Prótesis sobre implantes</h4>
             <img className="img-align"  src="/images/2.jpeg" alt="lab" width="365" height="330" />
             <p className="text">
          Lorem Ipsum es simplemente el texto de relleno de las imprentas y
          archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de
          las industrias desde el año 1500, cuando un impresor (N. del T.
          persona que se dedica a la imprenta) desconocido usó una galería de
          textos y los mezcló de tal manera que logró hacer un libro de textos
          especimen.Lorem Ipsum es simplemente el texto de relleno de las imprentas y
          archivos de texto.de las imprentas y
          archivos de texto.
        </p>
         </div>
         <div>
             <h4 id="carillas">Ortodoncia</h4>
             <img className="img-align"  src="/images/3.jpeg" alt="lab" width="365" height="330" />
             <p className="text">
          Lorem Ipsum es simplemente el texto de relleno de las imprentas y
          archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de
          las industrias desde el año 1500, cuando un impresor (N. del T.
          persona que se dedica a la imprenta) desconocido usó una galería de
          textos y los mezcló de tal manera que logró hacer un libro de textos
          especimen.Lorem Ipsum es simplemente el texto de relleno de las imprentas y
          archivos de texto.de las imprentas y
          archivos de texto.
        </p>
         </div>
         <div>

             <h4 id="other">Otros servicios</h4>
             <img className="img-align"  src="/images/4.jpeg" alt="lab" width="365" height="330" />
             <p className="text">
          Lorem Ipsum es simplemente el texto de relleno de las imprentas y
          archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de
          las industrias desde el año 1500, cuando un impresor (N. del T.
          persona que se dedica a la imprenta) desconocido usó una galería de
          textos y los mezcló de tal manera que logró hacer un libro de textos
          especimen.Lorem Ipsum es simplemente el texto de relleno de las imprentas y
          archivos de texto.de las imprentas y
          archivos de texto.
        </p>
         </div>
     </div>
   
        </div>

        {/* <div>
            <h4 id="contacto">Contacto</h4>
            <p className="text">Puedes contactarnos a través de nuestro...las industrias desde el año 1500, cuando un impresor (N. del T.
          persona que se dedica a la imprenta) desconocido usó una galería de
          textos y los mezcló de tal manera que logró hacer un libro de textos
          especimen.</p>
        </div> */}
        <Form />
    </div>
  );
}
