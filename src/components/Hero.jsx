import img1 from "../images/table.jpg";
import img2 from "../images/worker.jpg";
export default function Hero() {
  return (
    <section className="bg-white w-screen">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-xl font-semibold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-black">
            Design Your <br />
            Comfort Zone
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-800 text-justify">
            Transform your living space into a haven of style and comfort, where
            elegance meets functionality in every furniture piece. Explore our
            curated collection of timeless designs, and create a home that
            reflects your unique taste and personality.
          </p>
          <a
            href="#"
            className="px-8 py-3 font-regular rounded bg-[#ac7c5c] text-[#e7cda6] tracking-wider hover:bg-[#e7cda6] hover:text-black duration-300"
          >
            SHOP NOW
          </a>
        </div>
        <div className="img1 rounded-md lg:mt-0 lg:col-span-5 lg:flex relative z-10">
          <div className="shape bg-[#ac7c5c] rounded-md absolute left-10 bottom-0 z-0" />
          <img
            src={img1}
            alt="Image 1"
            className="img1 rounded-md lg:mt-0 lg:col-span-5 lg:flex relative z-10 pl-[5vw]"
          />
          <img
            src={img2}
            alt="Image 2"
            className="absolute img2 rounded-md bottom-0 left-0 w-5/12 z-10"
          />
        </div>
      </div>
    </section>
  );
}
