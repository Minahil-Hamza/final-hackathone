/* eslint-disable @typescript-eslint/no-unused-vars */

import Hero from "./components/hero";
import Brand from "./components/brand";
import Ceramics from "./components/ceramics";
import Product from "./components/product";
import Benefit from "./components/benefit";
import Touch from "./components/touch";
import ProductListing from "./components/ProductListing";
import { Card } from "./components/card";

export default function Home() {
  return (
   <>
   <Hero />
   <Brand />
   <Ceramics />
   <Product />
   <Benefit />
   <Touch />
<ProductListing/>
<Card/>


  
   </>
  );
}