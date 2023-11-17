import React from 'react';

import Image1 from '../Media/product-1.png'
import Image2 from '../Media/product-2.png'
import Image3 from '../Media/product-3.png'
import Image4 from '../Media/product-4.png';
import Image5 from '../Media/product-5.png';
import Image6 from '../Media/product-6.png';
import Image7 from '../Media/product-7.png'
import Image8 from '../Media/fixed-height.png'

import Image9 from '../Media/Col1.png';
import Image10 from '../Media/Col2.png';
import Image11 from '../Media/Col3.png';
import Image12 from '../Media/Col4.png';
import Image13 from '../Media/Col5.png';
import Image14 from '../Media/Col6.png';


function Third_page() {
  return (
    <div className='Third_page'>

         <h1>BESTSELLER PRODUCTS</h1>
         <hr/>

         <div className='Third_page1'>
            <div className='Third_page_1'>
                <img src={Image1}/>
                   <h2>Graphic Design</h2>
                   <h3>English Department</h3>
                   <h4>$16.48 <span>$6.48</span></h4>
            </div>


             <div className='Third_page_1'>
                <img src={Image2}/>
                   <h2>Graphic Design</h2>
                   <h3>English Department</h3>
                   <h4>$16.48 <span>$6.48</span></h4>
            </div>



            <div className='Third_page_1'>
                <img src={Image3}/>
                   <h2>Graphic Design</h2>
                   <h3>English Department</h3>
                   <h4>$16.48 <span>$6.48</span></h4>
            </div>



            <div className='Third_page_1'>
                <img src={Image4}/>
                   <h2>Graphic Design</h2>
                   <h3>English Department</h3>
                   <h4>$16.48 <span>$6.48</span></h4>
            </div>
         </div>




         <div className='Third_page1'>
            <div className='Third_page_1'>
                <img src={Image5}/>
                   <h2>Graphic Design</h2>
                   <h3>English Department</h3>
                   <h4>$16.48 <span>$6.48</span></h4>
            </div>


             <div className='Third_page_1'>
                <img src={Image6}/>
                   <h2>Graphic Design</h2>
                   <h3>English Department</h3>
                   <h4>$16.48 <span>$6.48</span></h4>
            </div>



            <div className='Third_page_1'>
                <img src={Image7}/>
                   <h2>Graphic Design</h2>
                   <h3>English Department</h3>
                   <h4>$16.48 <span>$6.48</span></h4>
            </div>



            <div className='Third_page_1'>
                <img src={Image8}/>
                   <h2>Graphic Design</h2>
                   <h3>English Department</h3>
                   <h4>$16.48 <span>$6.48</span></h4>
            </div>
         </div>

            <div class="Third_pic">

                <img src={Image9}/>
                <img src={Image10}/>
                <img src={Image11}/>
                <img src={Image12}/>
                <img src={Image13}/>
                <img src={Image14}/>

            </div>

         

    </div>
  )
}

export default Third_page