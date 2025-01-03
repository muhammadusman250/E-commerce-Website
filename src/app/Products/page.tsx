import { client } from "@/sanity/lib/client";
import Link from "next/link";


export default async function Products() {
  const data = await client.fetch(`*[_type == "product"] {
  productName,
  productPrice,
  "imageUrl": productImage.asset->url,
  slug,
    _id
}`);


  return (
    <>
      <h1 className="text-4xl font-serif bg-blue-300 text-center py-5 ">
        Products
      </h1>
      <div className="grid grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 mt-10 gap-5 px-[8%] max-2xl:px-[5%] max-xl:px-[3%] max-sm:px-[5%]">
        {data.map((item: any) => {
          return (
            <div
              key={item._id}
              className="shadow-xl p-3 justify-items-center hover:scale-105 duration-300"
            >
              <Link href={`/Products/${item.slug}`}>
                <img
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
                  <div>
                    <h1 className="text-xl text-red-400">
                      ${item.productPrice}
                    </h1>
                  </div>
                  <div>
                    <button className="bg-blue-500 text-white py-2 px-4 rounded-md">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
