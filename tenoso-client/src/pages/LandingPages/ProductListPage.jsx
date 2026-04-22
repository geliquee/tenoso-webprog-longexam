import Button from '../../components/Button.jsx';
import ProductList from '../../components/ProductList.jsx';
import products from '../../assets/product-content.js';

const ProductListPage = () => {
  return (
    <div className="flex w-full flex-col gap-0">
      <section className="-mt-6 bg-[#e2eafc] px-4 py-6 sm:px-6 sm:py-8 lg:px-25">
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
          Our Products
        </p>
        <h1 className="max-w-xl text-3xl font-bold leading-tight text-zinc-900 sm:text-4xl">
          Everything a Bulldog needs, ready to order.
        </h1>
        <p className="mt-4 max-w-lg text-sm leading-7 text-zinc-600 sm:text-base">
          Browse practical items for class, study, commute, and everyday campus routines.
        </p>
        <div className="mt-6">
          <Button to="/">Back Home</Button>
        </div>
      </section>

      <section className="bg-[#f8f9fa] px-4 py-6 sm:px-6 sm:py-8 lg:px-25">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
            Browse the Catalog
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-zinc-900">Shop by category</h2>
        </div>

        <ProductList products={products} />
      </section>
    </div>
  );
}

export default ProductListPage
