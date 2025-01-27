“use client”;

import { client } from “@/sanity/lib/client”;
import Image from “next/image”;
import React, { useEffect, useState } from “react”;
import { Montserrat } from “next/font/google”;
import { urlFor } from “@/sanity/lib/image”;
import { CiHeart } from “react-icons/ci”;
import { FaEye, FaStar } from “react-icons/fa”;
import { IoCartOutline } from “react-icons/io5”;

const montserrat = Montserrat({ subsets: [“latin”], weight: [“700”] });

interface IProducts {
id: string;
heading: string;
subheading: string;
image: {
asset: {
_ref: string;
_type: string;
};
};
price: {
originalPrice: string;
discountedPrice: string;
};
}

const ProductDetails = ({ productId }: { productId: string }) => {
const [result, setResult] = useState<IProducts | null>(null);
const [selectedColor, setSelectedColor] = useState<string>(“”);
const [selectedSize, setSelectedSize] = useState<string>(“”);
const [loading, setLoading] = useState<boolean>(true);

const colors = [
{ name: “blue”, class: “bg-myBlue” },
{ name: “green”, class: “bg-myDarkGreen” },
{ name: “orange”, class: “bg-myOrange” },
{ name: “dark”, class: “bg-myDark” },
];

const sizes = [“XSM”, “SM”, “MD”, “LG”, “XLG”];

const handleColorChange = (colorClass: string) => {
setSelectedColor(colorClass);
};

const handleSizeSelection = (size: string) => {
setSelectedSize(size);
};

useEffect(() => {
const fetchProductDetails = async () => {
setLoading(true);
const query = `*[_type == “product” || _type == “shop” || _type == “seller”]{
id,
heading,
subheading,
image,
price{
originalPrice,
discountedPrice
},
}`;
const data = await client.fetch(query);
const product = data.find((item: IProducts) => item.id === productId);
setResult(product || null);
setLoading(false);
};
fetchProductDetails();
}, [productId]);

if (loading) {
return (
<div className=”flex justify-center items-center min-h-screen”>
<div
className=”w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin”
aria-label=”Loading…”
></div>
</div>
);
}

if (!result) {
return (
<p
className={`${montserrat.className} text-center text-3xl font-semibold text-gray-800`}
>
Product not found
</p>
);
}

return (
<div className=”p-8 hover:shadow-lg transition-shadow”>
<div className=”grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
{/* Left Section */}
<div className=”flex flex-col items-center space-y-4">
<Image
src={
result.image?.asset
? urlFor(result.image.asset).url()
: “/images/placeholder.jpg”
}
alt={`Main Image ${result.heading || “Product”}`}
className=”w-full h-auto lg:w-[450px] lg:h-[500px] rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
width={506}
height={450}
priority
/>
</div>

{/* Right Section */}
<div className=”space-y-6">
<h1 className={`${montserrat.className} text-3xl font-semibold text-gray-800`}>
{result.heading}
</h1>
<h2 className={`${montserrat.className} text-lg font-medium text-gray-600`}>
{result.subheading}
</h2>
<div className=”flex items-center space-x-2">
{[…Array(4)].map((_, index) => (
<FaStar key={index} className=”text-yellow-400" />
))}
<FaStar className=”text-gray-300" />
<span className=”text-gray-500">(10 Reviews)</span>
</div>
<div className=”flex space-x-4">
<span className=”text-xl font-bold text-green-600">
${result.price.discountedPrice}
</span>
<span className=”line-through text-gray-500 text-lg”>
${result.price.originalPrice}
</span>
</div>
{/* Additional Details */}
</div>
</div>
</div>
);
};

export default ProductDetails;

isme kxh extra code hai wo main code apko smjha deta hn
mene sbse pehle isme google font use kiya

import kiya h pehle google font

import { Montserrat } from “next/font/google”;

then ye initialized kiya

const montserrat = Montserrat({ subsets: [“latin”], weight: [“700”] });

phr is trh call krwaya

Google Font Montserrat

<h1 className={`${montserrat.className} text-3xl font-semibold text-gray-800`}> Montserrat</h1>

phr is k bad

mene ek interface bnaya jo mera data type sanity me h upper image me dkh skte ap

interface IProducts {

id: string;

heading: string;

subheading: string;

image: {

asset: { _ref: string; _type: string; };

};

price: {

originalPrice: string;

discountedPrice: string;

};

}

ab

const ProductDetails = ({ productId }: { productId: string }) => {

return <></>

}

ek params pass kiya

productId or uski type bta di string

usk bad ek function bnaya useEffects me

useEffect(() => {

create function

const fetchProductDetails = async () => {

setLoading(true);

ye mene query wo jo mene sanity me vision me fetch kr k dkhaya whi query yha pr di mene

const query = `*[_type == “product” || _type == “shop” || _type == “seller”]{

id,

heading,

subheading,

image,

price{

originalPrice,

discountedPrice

},

}`

phr ek variable me srore krwa dia await krwa kr client function use kr k jo data aega sanity se

const data = await client.fetch(query);

ab hmne find function use kiya jo match krega upper jo hmne id thi string wo id or jo upper interface bnaya wo id ye dono id match krwya hai

const product = data.find((item: IProducts) => item.id === productId);

item ki type Iproducts krdi or phr ye interface ki id se match krwaega productId se jo hmne string type di thi upper ye dkh skte ap ye wali id match kregi sanity se jo id aegi

const ProductDetails = ({ productId }: { productId: string }) =>

useState use kiya tha usme set krwa dia

setResult(product || null);

setLoading(false);

};

fetchProductDetails();

}, [productId]);