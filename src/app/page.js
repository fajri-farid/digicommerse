// import { Home } from "@/components/web/Home";

// async function getProducts(queryValue) {
//   if (queryValue) {
//     const res = await fetch(`http://localhost:3000/api/v1/products?query=${queryValue}`);
//     const data = await res.json();
//     return data;
//   }
//   const res = await fetch("http://localhost:3000/api/v1/products");
//   const data = await res.json();
//   return data;
// }

// async function getProductCount() {
//   const res = await fetch("http://localhost:3000/api/v1/products?count=true");
//   const data = await res.json();
//   return data;
// }

// export default async function Page({ searchParams }) {
//   const query = searchParams.query;
//   const { data } = await getProducts(query);
//   const { data: totalAllProducts } = await getProductCount();

//   return <Home productData={data} totalProducts={totalAllProducts} />;
// }

import React from 'react'

export default function page() {
  return (
    <div>page</div>
  )
}
