

const ProductCard = ({price,title,image})=>{

  return<div className="card">
  <div className="price">
    <h3>{price}</h3>
  </div>
  <img src={image} alt={title} />
  <div className="card_over"> 
    <h2> {title} </h2>
  </div>
</div>
}

export default ProductCard

//! Yukarıdaki gönderim  ... spread yöntemiyle olan gönderim 


// const ProductCard = ({product})=>{
//   const {price,image,title} = product
//   return<div>
//   <div>
//     <h3>{price}</h3>
//   </div>
//   <img src={image} alt={title} />
// </div>
// }

// export default ProductCard

//! Yukarıdaki karşılama product={product}'ın karşılaması ilk product'ı yakaladım sonra product'tan price iamge'i çıkardım sonra onları kulandım.

