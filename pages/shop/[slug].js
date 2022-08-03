import React from "react";
import CategoryList from "../../components/CategoryList";
import ProductList from "../../components/ProductList";
import { useRouter } from 'next/router'
import productsData from "../../data/ShopDeutsch.json"
import Head from 'next/head'
const Category = () => {
    const router = useRouter()
    
    const filterCategoryByProducts=()=>{
      <Head>
      <title>Contain Haus | Container kaufen Container Preis Container Alle Modelle </title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
      if(router.query.slug==="all"){
      return productsData
       }
       else {
        const products=productsData.filter(product=>product.category===router.query.slug)
        return products
      }
    }
    const products=filterCategoryByProducts()
    return (
    <>
      <CategoryList></CategoryList>
      <div className="container">
        <div className="row mt-5 mb-5">
          {products.map((product) => (
            <ProductList key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Category;
