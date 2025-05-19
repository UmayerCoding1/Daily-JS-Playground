const productdata = [
    { name: "Laptop", price: 1200 },
    { name: "Mouse", price: 500 },
    { name: "Phone", price: 999 },
    { name: "Monitor", price: 1500 }
  ]


  const filterProductsByPrice = (products) => {
      
     for(const product of products){
        if(product.price >= 1000){
            console.log(product.name);
        }
     }
  }  

  filterProductsByPrice(productdata);