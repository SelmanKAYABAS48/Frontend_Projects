const ProductCard = ({product})=>{
  const {price,image,title} = product
  return<div>
  <div>
    <h3>{price}</h3>
  </div>
  <img src={image} alt={title} />
</div>
}

export default ProductCard