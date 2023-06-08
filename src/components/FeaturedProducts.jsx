import { FeaturedProductCard } from ".";
export default function FeatureProducts() {
  return (
    <div className="bg-[#f3f2fa] flex flex-col justify-around h-[80vh] items-center">
      <div>
        <h1 className="relative max-w-2xl mb-4 text-5xl tracking-wide font-bold leading-none dark:text-black ">
          Featured Products
          <span className="absolute -bottom-5 left-[37.5%]  h-1 w-1/4 bg-[#ac7c5c]"></span>
        </h1>
      </div>
      <div className="flex flex-row justify-center">
        <FeaturedProductCard></FeaturedProductCard>
        <FeaturedProductCard></FeaturedProductCard>
        <FeaturedProductCard></FeaturedProductCard>
      </div>
      <button className="px-8 py-3 font-regular rounded bg-[#ac7c5c] text-[#e7cda6] tracking-wider hover:bg-[#e7cda6] hover:text-black duration-300">
        ALL PRODUCTS
      </button>
    </div>
  );
}
