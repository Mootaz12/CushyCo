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
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-800">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Repellendus reiciendis voluptatum, explicabo at voluptas dolorem
            delectus nihil, id accusamus magni tempora rem ipsam aliquam. Sed
            officiis maiores nisi quasi rerum!
          </p>
          <a
            href="#"
            className="tracking-widest inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-amber-500 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-black dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            SHOP NOW
          </a>
        </div>
        <div className="relative lg:mt-0 lg:col-span-5 lg:flex h-4/6">
          <img src={img1} alt="Image 1" className="pl-2" />
          <img
            src={img2}
            alt="Image 2"
            className="absolute bottom-0 left-0 w-10/12 sm:w-8/12 md:w-6/12 lg:w-4/12"
          />
        </div>
      </div>
    </section>
  );
}
