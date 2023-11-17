import { produtsData } from "../ShortDataenter/componet";

function Product (props){
    
  <div className='sec2' >{
    props.map((product,index)=>{
      return(
        <div key={index}>
          <div className=' Sec2_div1'>
            <p>{product.tag}</p>
            <h2>{product.title}</h2>
            <p>{product.des}</p>

          </div>
          <div>
          <img src={product.img}></img>

          </div>
        </div>
      )
    })
  }


  </div>
  
  
}
export default Product;