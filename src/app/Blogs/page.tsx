import { client } from "@/sanity/lib/client";
import Image from "next/image";

interface BlogItem {
  title: string;
  h1: string;
  p1: string;
  h2: string;
  p2: string;
  h3: string;
  p3: string;
  imageUrl: string;
  _id: string;
}

export default async function Blogs() {
  const data: BlogItem[] = await client.fetch(`*[_type == "blogs"]{
    title,
    h1, p1, h2, p2, h3, p3,
    "imageUrl": blogImage.asset->url,
    _id
  }`);

  return (
    <>
      <h1 className="text-4xl font-serif text-center py-5">Blogs</h1>
      <div>
        {data.map((item) => {
          return (
            <div key={item._id}>
              <div className="flex p-3 w-full px-[10%] max-md:px-[5%] items-center py-[3%] max-lg:flex-col-reverse gap-5">
                <div className="text-wrap w-full leading-7 tracking-wider space-y-4 px-[2%]">
                  <h1 className="text-3xl font-bold">{item.title}</h1>

                  <h1 className="text-2xl font-semibold text-blue-600">
                    {item.h1}
                  </h1>
                  <p className="text-xl">{item.p1}</p>

                  <h1 className="text-2xl font-semibold text-blue-600">
                    {item.h2}
                  </h1>
                  <p className="text-xl">{item.p2}</p>

                  <h1 className="text-2xl font-semibold text-blue-600">
                    {item.h3}
                  </h1>
                  <p className="text-xl">{item.p3}</p>
                </div>
                <div>
                  <Image
                    alt="blog image"
                    src={item.imageUrl}
                    width={300}
                    height={300}
                    className="max-w-6xl max-h-72 object-cover rounded-lg mt-2"
                  />
                </div>
              </div>
              <hr className="w-full" />
            </div>
          );
        })}
      </div>
    </>
  );
}
