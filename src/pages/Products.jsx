import { ProductsGallery, FilterBar, SortBar } from "../components/index.js";
export default function Products() {
  return (
    <section>
      <FilterBar />
      <main>
        <SortBar />
        <ProductsGallery />
      </main>
    </section>
  );
}
