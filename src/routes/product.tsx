import { defer, Link, useLoaderData } from "react-router-dom";

export async function loader({ params }: any) {
  const oneData = await fetch(`https://dummyjson.com/products/${params.id}?select=title,images,description`);
  const product = await oneData.json();

  const data = await fetch('https://dummyjson.com/products?limit=16&select=title');
  const res = await data.json();
  const products = res.products;
  return defer({
    product,
    products,
  })
}

export default function Product() {
  const loaderData: any = useLoaderData();
  const products = loaderData.products;
  const product = loaderData.product;

  return (
    <article>
      <div className="w-full flex justify-center">
        <img src={product.images[0]} alt="product image" width={700} className="my-auto max-w-full" />
      </div>

      <h3 className="font-semibold text-lg">{product.title}</h3>
      <p>{product.description}</p>
      <br />
      <br />
      <ul className="flex flex-wrap gap-4 items-center">
        <li className="hover:underline inline-block cursor-pointer">
          <Link to={'/'}>
            All
          </Link>
        </li>
        {
          Array.isArray(products) && products.map((product) => (
            <li key={product.id} className="hover:underline inline-block cursor-pointer">
              <Link to={`/${product.id}`}>
                {product.title}
              </Link>
            </li>
          ))
        }
      </ul>
    </article>
  )
}
