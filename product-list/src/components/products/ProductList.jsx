// import "./Products.scss"

// const ProductList = ({products}) => {
//   console.log(products);
//   return (
//     <div className="products-list">
//       {
//         products.map((product)=>(

  //! Burada tek bir ifade olduğu için parantez ile yaptık.yani tek bir kapsayıcı div var.
          
//           <div>
//             <div>
//               <h3>{product.price}</h3>
//             </div>
//             <img src={product.image} alt="" />
//           </div>
//         ))
//       }
//       </div>
//   )
// }

// export default ProductList



 import "./Products.scss"
const ProductList = ({products}) => {
  return (
    <div className="products-list">
      {
        products.map((product)=>{
          return(
            <div key={product.id} >
              <div><h3>{product.price}</h3></div>
              <img src={product.image} alt={product.title} />
            </div>
          )
        })
      }
    </div>
  )
}

export default ProductList