import React from "react"
import Image from '../Media/Image.png'
import Image1 from '../Media/Icons.png'
import {produtsData} from "../ShortDataenter/componet"


function Second2(props) {

console.log("propes is",props);

    
    <div className='sec2'>{
        props.data.map((product,index)=>{
          return(
            <div key={index}>
              <div className=' Sec2_div1'>
                <p>{product.tag}</p>
                <h2>{product.title}</h2>
                <p>{product.des}</p>
    
              </div>
              <div>
              {/* <img src={product.img}></img> */}
    
              </div>
            </div>
          )
        })
      }
    
    
      </div>
           
    

    // })
    // return (
    //     <>
    //         <div className="Second_page">
    //             <div className="Second_top">
    //                 <h3>Description</h3>
    //                 <h3>Additional Information</h3>
    //                 <h3>Reviews <span>(0)</span></h3>
    //             </div>


    //             <div className="second_bottom">
    //                 <div className="second_bottom_img">
    //                     <img src={Image} />
    //                 </div>

    //                 <div className="Second_bottom_2">
    //                     <h2>the quick fox jumps over </h2>
    //                     <p>Met minim Mollie non desert Alamo est sit <br/>cliquey dolor do met sent. RELIT official  <br/>consequent door ENIM RELIT Mollie. <br/> Excitation venial consequent sent nostrum <br/> met.</p>  
    //                     <p>                      Met minim Mollie non desert Alamo est sit <br/>cliquey dolor do met sent. RELIT official  <br/>consequent door ENIM RELIT Mollie. <br/> Excitation venial consequent sent nostrum <br/> met.
    //                     </p>  
    //                      <p>   Met minim Mollie non desert Alamo est sit <br/>cliquey dolor do met sent. RELIT official  <br/>consequent door ENIM RELIT Mollie. <br/> Excitation venial consequent sent nostrum <br/> met.
    //                        </p>


    //                 </div >

    //                 <div className="Second_bottom_3">

    //                     <h2>the quick fox jumps over </h2>

    //                     <div className="img_pic">
    //                         <img src={Image1} alt="" />
    //                         <p>the quick fox jumps over the lazy dog</p>
    //                     </div>


    //                     <div className="img_pic">
    //                         <img src={Image1} alt="" />
    //                         <p>the quick fox jumps over the lazy dog</p>
    //                     </div>



    //                     <div className="img_pic">
    //                         <img src={Image1} alt="" />
    //                         <p>the quick fox jumps over the lazy dog</p>
    //                     </div>



    //                     <div className="img_pic">
    //                         <img src={Image1} alt="" />
    //                         <p>the quick fox jumps over the lazy dog</p>
    //                     </div>



    //                     <h2>the quick fox jumps over </h2>

    //                     <div className="img_pic">
    //                         <img src={Image1} alt="" />
    //                         <p>the quick fox jumps over the lazy dog</p>
    //                     </div>


    //                     <div className="img_pic">
    //                         <img src={Image1} alt="" />
    //                         <p>the quick fox jumps over the lazy dog</p>
    //                     </div>



    //                     <div className="img_pic">
    //                         <img src={Image1} alt="" />
    //                         <p>the quick fox jumps over the lazy dog</p>
    //                     </div>


    //                 </div>

    //             </div>



    //         </div>
    //     </>
    // )
}
export default Second2;