/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../css/Service.css"

function Services () {
    return (
      <section class="section-white">
 
    <div class="container">
 
        <div class="row">
       
                    <div class="col-md-12 text-center">

                          <h2 class="section-title">The Team Caldent</h2>
                    </div> 
             
            <div class="col-sm-6 col-md-4">

                  <div class="team-item">
                  
                      <img src={require("../assets/karthik.jpg")} class="team-img" alt="pic" />                   
                      <h3>KARTHIK VIGNESH</h3>            
                      <p>Developer</p>     
                      <p>Email : 4nm20is062@nmamit.in</p>    
                      <div class="team-info"></div>          
                </div>
            </div> 
              
            <div class="col-sm-6 col-md-4">

                  <div class="team-item">
                  
                      <img src={require("../assets/pran.jpg")} class="team-img" alt="pic" />
                     
                      <h3>PRANEETH</h3>
                      <p>Developer</p>     
                      <p>Email : 4nm20is099@nmamit.in</p>    
                      <div class="team-info"></div> 

                  
                      
                  </div>

            </div> 
            <div class="col-sm-6 col-md-4">

                  <div class="team-item">
                  
                      <img src={require("../assets/joy.jpg")} class="team-img" alt="pic" />
                     
                      <h3>JOYSON DCUNA</h3>
                      <p>Developer</p>     
                      <p>Email : 4nm20is059@nmamit.in</p>    
                      <div class="team-info"></div>                   
                     
                      
                  </div>

            </div> 
        
        </div> 
    
    </div> 

    </section>
    )
}

export default Services;