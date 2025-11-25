import { BiCollection } from "react-icons/bi";

const Hero = () => {
  return (
    <section
      className="min-h-[70vh] w-full bg-center bg-cover bg-fixed bg-no-repeat flex items-center justify-center"
      style={{ backgroundImage: `url('/HeroBackground.jpg')` }}
    >
      <div className="flex flex-col">
        <h1 className="font-work-sans font-bold text-3xl md:text-5xl text-white text-center">
          Welcome to Classy Q
        </h1>
        <p className="max-w-2xl mx-auto text-center text-gray-300 p-3 md:p-0">
          Your Ultimate platform for watches and accessories. Discover timeless
          elegance and style with our curated collection.
        </p>
        <div className="w-full flex items-center justify-center mt-3">
          <button className="bg-black flex items-center justify-center gap-0.5 text-white border mx-auto px-3 py-1.5 rounded-xl">
            View Collection <BiCollection />{" "}
         </button>
        </div>
      </div>
    </section>
  );
};
export default Hero;
