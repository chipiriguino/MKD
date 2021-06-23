import React from 'react'
import './Form.css';
import Map from './Map';


export default function Form() {
    return (
        <div>
            <section id="contact">
            <h1 className="section-header" id="contacto">CONTACT</h1>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3135.812777821668!2d-0.5578017847377709!3d38.19102279587456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd624dd19e9d6e09%3A0x7397552a2ba26a5a!2sMKD%20LABORATORY!5e0!3m2!1ses!2ses!4v1624464517486!5m2!1ses!2ses" width="400" height="350" allowfullscreen="" loading="lazy"></iframe>
  
  <div className="contact-wrapper">
    
    {/* <form id="contact-form" className="form-horizontal" role="form">
       
      <div className="form-group">
        <div className="col-sm-12">
          <input type="text" className="form-control" id="name" placeholder="NAME" name="name" value="" required />
        </div>
      </div>

      <div className="form-group">
        <div className="col-sm-12">
          <input type="email" className="form-control" id="email" placeholder="EMAIL" name="email" value="" required />
        </div>
      </div>

      <textarea className="form-control" rows="10" placeholder="MESSAGE" name="message" required></textarea>
      
      <button className="btn btn-primary send-button" id="submit" type="submit" value="SEND">
        <div className="button">
          <i className="fa fa-paper-plane"></i><span className="send-text">SEND</span>
        </div>
      
      </button>
      
    </form> */}
    
      
      <div className="direct-contact-container">

        <ul className="contact-list">
          <li className="list-item"><i className="fa fa-map-marker fa-2x"><span className="contact-text place">Santa Pola, Alicante</span></i></li>
          
          <li className="list-item"><i className="fa fa-phone fa-2x"><span className="contact-text phone"><a href="tel:34-663-537-159" title="Give me a call">+34 663-539-159</a></span></i></li>
          
          <li className="list-item"><i className="fa fa-envelope fa-2x"><span className="contact-text gmail"><a href="mailto:#" title="Send me an email">mkdlaboratory@gmail.com</a></span></i></li>
          
        </ul>

        <hr/>
        <ul className="social-media-list">
          <li><a href="#" target="_blank" className="contact-icon">
            <i className="fa fa-github" aria-hidden="true"></i></a>
          </li>
          <li><a href="#" target="_blank" className="contact-icon">
            <i className="fa fa-twitter" aria-hidden="true"></i></a>
          </li>
          <li><a href="#" target="_blank" className="contact-icon">
            <i className="fa fa-instagram" aria-hidden="true"></i></a>
          </li>
          <li><a href="#" target="_blank" className="contact-icon">
            <i className="fa fa-codepen" aria-hidden="true"></i></a>
          </li>
        </ul>
        <hr/>
        <div className="copyright">handmade with love by chipiriguino</div>
        <div className="copyright">&copy; ALL OF THE RIGHTS RESERVED</div>
        </div>

      </div>
  
</section>  
  
        </div>
    )
}
