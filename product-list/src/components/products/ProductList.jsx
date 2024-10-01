import ProductCard from "./ProductCard";
import "./Products.scss";
const ProductList = ({ products }) => {
  return (
    <div className="products-list">

      {/* { products.map(product => <ProductCard  key={product.id} product={product}/>)} */}
    

      {/* //* map işleminde product card'ları bir dizi içerisinde dizi elemanı adeti kadar biriktiriyor dizi içindeki ana eleman ProductCard ve bu elemanın yani kapsayıcı olması nedeniyle içindeki elemanların değil bunun bir key'e sahip olamsını istiyorum */}

      {/* //!Best Practice Alt component'e gönderme */}

      {/* //? Buradan açmadan gönderip alt componentte karşılayıp içini açma. product'ı bu şekil gönderdim orada destruct ettim */}

      {/* //* component'te key id vermiştim ancak prop olarak verdiğimde key'i map yaparken vereceğim  burada component'e vermemin sebebi react */}

      { products.map(product => <ProductCard  key={product.id} {...product}/>)}
     
      {/* //? product = {product} obje olarak gönderiyoruz yani obje alanına elemanlar ekleniyor..Obje olduğundan dolayı spread yaptık.*/}

      {/*  //! product={product olarak gönderirsem} karşılarken props.product.image olarak karşılamam gerekir. eğer props'ta çok fazla varsa tek tek'de gönderebiliriz. image={image} gibi */}

      {/* //* Eğer karşılamada katman azaltmak istiyorsam yani props:{img:img} gönderip props.img şeklinde yakalamak için ...products olarak gönderebilirim. */}


      
      {/* {products.map(({ id, price, image, title }) => {
   //  bu şekilde return yazmayabilirim.
        return (
          <div key={id}>
            <div>
              <h3>{price}</h3>
            </div>
            <img src={image} alt={title} />
          </div>
        );
      })}*/}
    </div> 
  );
};

export default ProductList;

//*Map içinde destruct yaparak kullanma

// const ProductList = ({products}) => {
//   return (
//     <div className="products-list">
//       {
//         products.map((product)=>{
//           //* süslü olmasaydı hata alıyoruz.Çünkü return kısmı tek ifade olarak alıyoruz destruct yapınca 1'den fazla ifade olduğu için süslü açıyoruz ve süslü olduğu için de return yazıyoruz.

//           const {id,price,image,title}  = product

//           //? return'de parantez açmayacaksak return'den sonraki ifade alt satırda değil yanında başlamalı bu return'ün ne döndüreceğini gösteriyor.

//           return <div key={id} >
//               <div><h3>{price}</h3></div>
//               <img src={image} alt={title} />
//             </div>

//         })
//       }
//     </div>
//   )
// }

// export default ProductList

//! Map içinde destruct yapmadan kullanma

// const ProductList = ({products}) => {
//   console.log(products);
//   return (
//     <div className="products-list">
//       {
//         products.map((product)=>(

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
