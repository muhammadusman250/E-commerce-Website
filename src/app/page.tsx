import { client } from "@/sanity/lib/client";
import Slider from "@/components/Slider/Slider";
import Link from "next/link";
import Image from "next/image";

// Define types for the items
interface ProductItem {
  productName: string;
  productPrice: number;
  imageUrl: string;
  _id: string;
}

interface BlogItem {
  title: string;
  imageUrl: string;
  _id: string;
}

export default async function Home() {
  const data1: ProductItem[] = await client.fetch(`*[_type == "product"][0...4] {
    productName,
    productPrice,
    "imageUrl": productImage.asset->url,
    _id
  }`);
  
  const data2: BlogItem[] = await client.fetch(`*[_type == "blogs"][0...3]{
    title,
    h1,
    "imageUrl": blogImage.asset->url,
    _id
  }`);

  return (
    <>
      <div>
        <Slider />
      </div>
      
      <div>
        <h1 className="text-4xl font-serif text-center pt-[2%]">
          Our Products
        </h1>
        <div className="grid grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 mt-10 gap-5 px-[8%] max-2xl:px-[5%] max-xl:px-[3%] max-sm:px-[5%]">
          {data1.map((item) => (
            <div
              key={item._id}
              className="shadow-xl p-3 justify-items-center hover:scale-105 duration-300"
            >
              <Link href={`/Products/${item._id}`}>
                <Image
                  src={item.imageUrl}
                  alt={item.productName}
                  height={250}
                  width={250}
                  className="max-h-80 object-cover rounded-lg mt-2"
                />
              </Link>
              <div className="justify-items-center">
                <div>
                  <h1 className="text-xl py-3">{item.productName}</h1>
                </div>
                <div className="flex items-center gap-10 max-lg:flex-col max-lg:gap-2">
                  <h1 className="text-xl text-red-400">
                    ${item.productPrice}
                  </h1>
                  <button className="bg-blue-500 text-white py-2 px-4 rounded-md">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center py-[3%]">
        <button className="bg-blue-500 text-white py-2 px-4 rounded-md">
          <Link href="/Products">More Products</Link>
        </button>
      </div>
      
      <hr className="w-full py-[2%]" />
      
      <div>
        <h1 className="text-4xl font-serif text-center py-5">
          Our Blogs
        </h1>
        <Link href="/Blogs">
          <div className="grid grid-cols-3 max-xl:grid-cols-2 max-lg:grid-cols-1 mt-10 gap-5 px-[8%] max-2xl:px-[5%] max-xl:px-[3%] max-sm:px-[5%]">
            {data2.map((item) => (
              <div key={item._id} className="p-3 px-[5%] py-[3%]">
                <div className="justify-items-center leading-7 tracking-wider space-y-4 px-[2%]">
                  <div>
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      className="max-w-xl max-h-52 object-cover rounded-lg mt-2"
                      width={300}
                      height={200}
                    />
                  </div>
                  <h1 className="text-xl font-bold">{item.title}</h1>
                </div>
              </div>
            ))}
          </div>
        </Link>
      </div>
      
      <div className="text-center py-[3%]">
        <button className="bg-blue-500 text-white py-2 px-4 rounded-md">
          <Link href="/Blogs">Explore Blogs</Link>
        </button>
      </div>
    </>
  );
}
