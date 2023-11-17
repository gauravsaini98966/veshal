import React from 'react'
import Image1 from '../Media/right_logo.png'
import Image2 from '../Media/stars.png'

import Image3 from '../Media/Bigpic.png'
import Image4 from '../Media/Right.png';
import Image5 from '../Media/left.png';
import Image6 from '../Media/single-product-1.jpg';
import Image7 from '../Media/single-product2.jpg'
import Image8 from '../Media/like2.png'
import Image9 from '../Media/basket.png'
import Image10 from '../Media/more.png'
import Image11 from '../Media/product-colors.png'
import '../mycss/Style.css'
import '../mycss/Responsive.css'

function First_page() {
    return (
        <div className='First_page'>

            <div className='top'>
                <h3>Home</h3>
                <img src={Image1} alt="" />
                <h4>Shop</h4>
            </div>
            <div className='Down'>

                <div className='Down_pic'>
                    <div className='Main_pic'>
                        <img src={Image3} alt="" />
                    </div>



                    <div className='right_left_Aero'>
                        <img className='image5' src={Image5} />
                        <img className='image4' src={Image4} alt="" />
                    </div>


                    <div className='Down_2pic'>
                        <img src={Image6} alt="" />
                        <img src={Image7} alt="" />
                    </div>
                </div>

                <div className='Down_text'>
                    <h2>Floating Phone</h2>

                    <div className='star'>
                        <img src={Image2} alt="" />
                        <h2>10 Reviews</h2>
                    </div>
                    <div className='prize'>
                        <h2>$1,139.33</h2>
                        <h3>Availability  :<span> In Stock</span></h3>

                        <p>Met minim Mollie non desert Alamo est sit cliquey dolor<br />
                            do met sent. RELIT official consequent door ENIM RELIT Mollie.<br />
                            Excitation venial consequent sent nostrum met.</p>
                    </div>

                    <hr />
                    <div className='Product-color'>
                        <img src={Image11} alt="" />
                    </div>
                    <div className='btnpic'>
                        <div className='btn'>
                            <button>Select Options</button>
                        </div>

                        <div className='pic'>
                            <img src={Image8} alt="" />
                            <img src={Image9} alt="" />
                            <img src={Image10} alt="" />
                        </div>
                    </div>

                </div>

            </div>


        </div>
    )
}

export default First_page;