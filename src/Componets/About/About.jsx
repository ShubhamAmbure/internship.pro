import React from "react";
import {ReactDOM,  NavLink } from "react-dom/client"; 


const About = () => {
  return (
    <div className="bg-black text-white"> 
      
      
      <section className="container py-5 text-start">
        <h5 className="text-secondary">ABOUT</h5>
        <h2 className="fw-bold ">About Vijay Sharma</h2>
        <div className="row g-4  ">
          <div className="col-md-2 bg-black text-light shadow text-center fw-bold p-3 rounded">
            15+<br /> <p className="text-secondary " >Years in Business</p>
          </div>
          <div className="col-md-2 bg-dark shadow text-light text-center fw-bold p-3 rounded">
            500+<br /> <p className="text-secondary " >Happy Clients</p>
          </div>
          <div className="col-md-2 bg-black shadow text-light text-center fw-bold p-3 rounded">
            10+<br /> <p className="text-secondary " > Photography Awards</p>
          </div>
          <div className="col-md-2 bg-dark shadow text-light text-center fw-bold p-3 rounded">
            05+<br /> <p className="text-secondary " >International Shoots</p>
          </div>
          <div className="col-md-2 bg-black shadow text-light text-center fw-bold p-3 rounded">
            10,000+<br /> <p className="text-secondary " >Social Media Followers</p>
          </div>
          <div className="col-md-2 shadow bg-dark shadow text-light fw-bold text-center p-3 rounded">
          90% +<br />
           <p className="text-secondary ">Client Retention Rate</p> 
          </div>
        </div>
        <div className="d-flex justify-content-center my-4">
          <img
            src="https://images.pexels.com/photos/462162/pexels-photo-462162.jpeg"
            alt="Vijay Sharma"
            className="img-fluid rounded shadow"
            style={{ maxWidth: "750px" }}
          />
        </div>
      </section>

      <section className="container py-5 bg-black text-start">
        <h3 className="fw-bold">My Biography</h3>
        <p className="text-secondary shadow">
        My Biography
 90%
 Client Retention Rate
 Scroll Down To See 
My Journey
 Hello! My name is Vijay Sharma, and photography has been my passion for as long as I can remember. Ever since I was a child, I’ve been fascinated by the magic of freezing 
moments in time. I still vividly recall the excitement of holding a camera for the first time—it felt like I had found my purpose.
 As I grew up, my curiosity turned into a deep love for the art of storytelling through photographs. Whether it was capturing the vibrant colors of nature, the emotions on a 
person’s face, or the chaos of a bustling street, I found joy in seeing the world from different angles and perspectives.
 Over the years, I’ve honed my skills, experimenting with various styles like portraits, landscapes, and candid photography. Every photo I take reflects a part of my soul and my 
belief in finding beauty in even the simplest moments.
 For me, photography isn’t just a profession; it’s a way of life. It’s how I connect with the world, express my creativity, and leave a lasting impact. My journey has been one of 
constant learning and growth, and I look forward to continuing to capture stories that inspire and resonate with others
        </p>
      </section>

      
      <section className="container  py-5 text-start">
        <h3 className="fw-bold">Vijay’s Journey - A Timeline</h3>
        <div className="row g-3">
  <div className="col-md-4 shadow-lg">
    <div className="bg-dark text-secondary p-3 rounded text-start"> 
      <h5 className="fw-bold">2005</h5> 
      <p>Vijay acquired her first camera...</p> 
    </div>
  </div>
  <div className="col-md-4 shadow-lg">
    <div className="bg-black text-secondary p-3 rounded text-center">
      <h5 className="fw-bold">2010</h5>
      <p>Vijay pursued a degree in Fine Arts...</p>
    </div>
  </div>
 

  <div className="col-md-4 shadow-lg">
    <div className="bg-dark text-secondary p-3 rounded text-center">
      <h5 className="fw-bold">2020</h5>
      <p>Vijay’s dedication earned her awards...</p>
    </div>
  </div>
  <div className="col-md-4 shadow-lg">
    <div className="bg-black  text-secondary p-3 rounded text-start"> 
      <h5 className="fw-bold">2005</h5>
      <p>Vijay acquired her first camera...</p>
    </div>
  </div>
  <div className="col-md-4 shadow-lg">
    <div className="bg-dark text-secondary p-3 rounded text-center">
      <h5 className="fw-bold">2010</h5>
      <p>Vijay pursued a degree in Fine Arts...</p>
    </div>
  </div>
 
  <div className="col-md-4 shadow-lg">
    <div className="bg-black text-secondary p-3 rounded text-center">
      <h5 className="fw-bold">2020</h5>
      <p>Vijay’s dedication earned her awards...</p>
    </div>
  </div>
</div>
      </section>

      
      
      <section className="container py-5 bg-black text-start">
      <h3 className="fw-bold text-light">What My Clients Say</h3> 
      <div className="d-flex justify-content-between align-items-center"> 
        <p className="text-secondary">Total Reviews: 323</p>
        <div>
          <button className="btn btn-dark me-2">&lt;</button> 
          <button className="btn btn-dark me-2">&gt;</button>
          <a href="#" className="text-light">View All Testimonials →</a> 
        </div>
      </div>
      <div className="row g-4 mt-3"> 
        <div className="col-md-4">
          <div className="testimonial-box"> 
            <div className="d-flex justify-content-between align-items-center mb-2"> 
              <h5 className="fw-bold text-light mb-0">Emily Johnson</h5> 
              <div>
              <a href="https://www.instagram.com" target="_blank" class="btn btn-link text-light">
                 <i class="fab fa-instagram"></i>
              </a>
              <a href="https://twitter.com" target="_blank" class="btn btn-link text-light" >
                 <i class="fab fa-twitter"></i>
              </a>
              <a href="https://www.facebook.com" target="_blank" class="btn btn-link text-light" >
                  <i class="fab fa-facebook"></i>
              </a>
              </div>
            </div>
            <p className="text-secondary">USA, California</p>
            <div className="rating"> 
              ★★★★★
            </div>
            <p className="text-light">Damien’s photography doesn’t just capture moments; it captures emotions...</p>
          </div>
        </div>
        
        
        <div className="col-md-4">
          <div className="testimonial-box">
            <div className="d-flex justify-content-between align-items-center mb-2">
              <h5 className="fw-bold text-light mb-0">John Smith</h5>
              <div>
              <a href="https://www.instagram.com" target="_blank" class="btn btn-link text-light">
                  <i class="fab fa-instagram"></i>
              </a>
              <a href="https://twitter.com" target="_blank" class="btn btn-link text-light" >
                 <i class="fab fa-twitter"></i>
              </a>
              <a href="https://www.facebook.com" target="_blank" class="btn btn-link text-light" >
                  <i class="fab fa-facebook"></i>
              </a>
              </div>
            </div>
            <p className="text-secondary">USA, California</p>
             <div className="rating">
              ★★★★★
            </div>
            <p className="text-light">Damien has an incredible talent for making every event feel effortless...</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="testimonial-box">
            <div className="d-flex justify-content-between align-items-center mb-2">
              <h5 className="fw-bold text-light mb-0">Samantha Davis</h5>
              <div>
              <a href="https://www.instagram.com" target="_blank" class="btn btn-link text-light">
                  <i class="fab fa-instagram"></i>
              </a>
              <a href="https://twitter.com" target="_blank" class="btn btn-link text-light" >
                 <i class="fab fa-twitter"></i>
              </a>
              <a href="https://www.facebook.com" target="_blank" class="btn btn-link text-light" >
                  <i class="fab fa-facebook"></i>
              </a>
              </div>
            </div>
            <p className="text-secondary">USA, California</p>
             <div className="rating">
              ★★★★★
            </div>
            <p className="text-light">I was blown away by Damien’s ability to capture the essence of our wedding day...</p>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};



export default About;