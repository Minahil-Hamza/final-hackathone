import Image from 'next/image';
import React from 'react';
import { TbTruckDelivery } from 'react-icons/tb';
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { LuSprout } from "react-icons/lu";
import { MdOutlinePriceChange } from "react-icons/md";

const ProductListing = () => {
  const products = [
    { name: "The Dandy Chair", price: 250, src: "/fresh/item/chair.png" },
    { name: "The Vase", price: 155, src: "/fresh/item/vase.png" },
    { name: "The Silky", price: 125, src: "/fresh/item/silky.png" },
    { name: "The Lamp", price: 125, src: "/fresh/item/lamp.png" },
  ];

  const features = [
    {
      title: 'Next day as standard',
      description: 'Order before 3pm and get your order the next day as standard.',
      icon: TbTruckDelivery,
    },
    {
      title: 'Made by true artisans',
      description: 'Hand-crafted goods made with real passion and craftsmanship.',
      icon: IoIosCheckmarkCircleOutline,
    },
    {
      title: 'Unbeatable prices',
      description: 'For our material and quality, you won’t find better prices anywhere.',
      icon: MdOutlinePriceChange,
    },
    {
      title: 'Recycled packaging',
      description: 'We use 100% recycled packaging to ensure our footprint is manageable.',
      icon: LuSprout,
    },
  ];

  return (
    <section>
      {/* Main Product Section */}
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <Image
          src="/fresh/item/chair.png"
          alt="The Dandy Chair"
          width={800}
          height={800}
          className="object-cover w-full h-auto"
        />
      </div>

      {/* Products */}
      <h1 className="text-xl md:text-2xl font-semibold mt-12">You might also like</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
        {products.map((product, idx) => (
          <div key={idx} className="text-center">
            <Image
              src={product.src}
              alt={product.name}
              width={700}
              height={700}
              className="object-cover w-full h-auto"
            />
            <p className="mt-4">{product.name}</p>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductListing;
 