import { Link, useLoaderData } from "react-router-dom";

export async function loader() {
  const data = await fetch('https://dummyjson.com/products?limit=16&select=title,thumbnail,images')
  const res = await data.json();
  const products = res.products;
  return products;
}


export default function Index() {
  const products = useLoaderData();
  return (
    <>
      <article className="grid xl:grid-cols-2 gap-10 relative">
        {
          Array.isArray(products) && products.map((product) => (
            <Link to={`${product.id}`}>
              <div key={product.id} className="hover:bg-yellow-200 active:bg-yellow-300 opacity-80 relative group/item">
                <img src={product.images[0]} alt="product image" width={700} className="max-w-full" />

                <h3 className="absolute invisible group-hover/item:visible text-2xl font-semibold bottom-5 left-5">{product.title}</h3>
              </div>
            </Link>
          ))
        }
      </article>
    </>
  )
}
