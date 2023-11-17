import React from 'react'
import Media from '../Media/Media.png'
function Fourth_page() {
  return (
    <div className='Foother'>

        <div className='Foother_top'>
              <h2>Bandage</h2>
              
                  <img src={Media} />


        </div>
        <hr/>
        <div className='Fother_down'>

         <div className='Foother_down_left'>
              

              <div class='Foother_down_left1'>
                  <h2>Company Info</h2>
                  
                  <h3>About Us</h3>
                  <h3>Carrier</h3>
                  <h3>We are hiring</h3>
                  <h3>Blog</h3>
              </div>


              <div class='Foother_down_left1'>
                  <h2>Legal</h2>
                  <h3>About Us</h3>
                  <h3>Carrier</h3>
                  <h3>We are hiring</h3>
                  <h3>Blog</h3>
              </div>

              <div class='Foother_down_left1'>
                  <h2>Features</h2>
                  <h3>Business Marketing</h3>
                  <h3>User Analytic</h3>
                  <h3>Live Chat</h3>
                  <h3>Unlimited </h3>
              </div>

              <div class='Foother_down_left1'>
                  <h2>Resources</h2>
                  <h3>IOS & Android</h3>
                  <h3>Watch a Demo</h3>
                  <h3>Customers</h3>
                  <h3> API </h3>
              </div>




            </div>  

            

            
            <div className='Foother_down_right'>
                <h2>Get in Touch</h2>

                <div className='input_button'>
                    <input type='text' placeholder='      Your Email'/>
                        <button>Subscribe</button>
                        

                </div>
                <p>Lore imp sum dolor Amit</p>


                
                </div> 



                </div>
        

    </div>
  )
}

export default Fourth_page;