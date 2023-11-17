import React from 'react'

// import Image from '../Media/Img1.png'
import '../mycss/Style.css'
import Image from '../Media/Down_logo.png'
import Image2 from '../Media/Vector.png'
import Image3 from '../Media/Search.png'
import Image4 from '../Media/Bakit.png'
import Image5 from '../Media/Like.png'
const Navbar = () => {
  return (
<>
    <header>
    <div className='Navbar'>
      <h2>Bandage</h2>

      <div class='nav_menu'>
        <ul>
        
         <li> <a href="#">Home</a> </li>
         <li> <a href='#'>Shop <img src={Image}/></a> </li>
         <li> <a href='#'>About</a> </li>
         <li>  <a href='#'>Blog</a> </li>
         <li> <a href='#'>Contact</a> </li>
         <li><a href='#'>Pages</a> </li>
        </ul>

      </div>

      <div className='btn'>
      <img src={Image2} />
        <a href="#">Login / Register</a>
        <img src={Image3}/>
        <img src={Image4} alt="" />
        <img src={Image5} alt="" />
        

       
      </div>
       
    </div>
    </header>
    </>
  )
}

export default Navbar;