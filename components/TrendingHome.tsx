import { Heart, ShoppingCart } from "lucide-react";
import Image from "next/image";
import { Lens } from "./ui/lens";

const TrendingHome = () => {
  const trendingWatches = [
    {
      id: 1,
      name: "name 1",
      slug: "name-1-mens-watch",
      brand: "Rolex",
      modelNumber: "RLX-2200",
      imageUrl: "https://i.ibb.co/VY5PQpt1/watch-Example.png",
      images: [
        "https://i.ibb.co/VY5PQpt1/watch-Example.png",
        "https://i.ibb.co/VY5PQpt1/watch-Example.png",
      ],
      price: 2200,
      discountPercent: 10,
      rating: 4.5,
      reviews: [],
      availability: "In Stock",
      quantity: 5,
      lowStock: false,
      category: "Mens Watch",
      trending: true,
      colors: ["Black", "Silver"],
      strapMaterial: "Leather",
      dialMaterial: "Stainless Steel",
      waterResistance: "50m",
      warranty: "1 Year International Warranty",
      description: "This is a trending watch description 1.",
      createdAt: "2025-12-01",
      updatedAt: "2025-12-01",
    },
    {
      id: 2,
      name: "name 1",
      slug: "name-1-mens-watch",
      brand: "Rolex",
      modelNumber: "RLX-2200",
      imageUrl: "https://i.ibb.co/VY5PQpt1/watch-Example.png",
      images: [
        "https://i.ibb.co/VY5PQpt1/watch-Example.png",
        "https://i.ibb.co/VY5PQpt1/watch-Example.png",
      ],
      price: 2200,
      discountPercent: 0,
      rating: 4.5,
      reviews: [],
      availability: "Out of Stock",
      quantity: 5,
      lowStock: true,
      category: "Mens Watch",
      trending: true,
      colors: ["Black", "Silver"],
      strapMaterial: "Leather",
      dialMaterial: "Stainless Steel",
      waterResistance: "50m",
      warranty: "1 Year International Warranty",
      description: "This is a trending watch description 1.",
      createdAt: "2025-12-01",
      updatedAt: "2025-12-01",
    },
    {
      id: 3,
      name: "name 1",
      slug: "name-1-mens-watch",
      brand: "Rolex",
      modelNumber: "RLX-2200",
      imageUrl: "https://i.ibb.co/VY5PQpt1/watch-Example.png",
      images: [
        "https://i.ibb.co/VY5PQpt1/watch-Example.png",
        "https://i.ibb.co/VY5PQpt1/watch-Example.png",
      ],
      price: 2200,
      discountPercent: 10,
      rating: 4.5,
      reviews: [],
      availability: "In Stock",
      quantity: 5,
      lowStock: false,
      category: "Mens Watch",
      trending: true,
      colors: ["Black", "Silver"],
      strapMaterial: "Leather",
      dialMaterial: "Stainless Steel",
      waterResistance: "50m",
      warranty: "1 Year International Warranty",
      description: "This is a trending watch description 1.",
      createdAt: "2025-12-01",
      updatedAt: "2025-12-01",
    },
  ];
  return (
    <section>
      {/* Text */}
      <div className="flex flex-col justify-center items-center gap-2 mb-8">
        <p className="text-xs py-1 px-3 uppercase border border-gray-500 rounded-xl bg-black/80 text-white flex items-center justify-center gap-2">
          <span className="p-1 rounded-full bg-green-400 animate-pulse"></span>
          Unlike Other Watches
        </p>
        <p className="text-2xl md:text-4xl font-work-sans">
          Try Our Trending Watches
        </p>
      </div>
      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 max-w-5xl mx-auto gap-6">
        {trendingWatches.map(
          (watch) =>
            watch.trending && (
              <div
                key={watch.id}
                className="p-2 rounded-2xl flex flex-col justify-start items-start gap-4 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center justify-center relative">
                  {/* Stock badge overlay */}
                  {watch.availability === "In Stock" ? (
                    <span className="absolute z-10 top-2 left-2 backdrop-blur-lg bg-black/40 text-white text-xs px-2 py-1 rounded-full flex items-center justify-center gap-2">
                      <span className="p-1 rounded-full bg-green-400 animate-pulse"></span>
                      In Stock
                    </span>
                  ) : (
                    <span className="absolute z-10 top-2 left-2 backdrop-blur-lg bg-black/40 text-white text-xs px-2 py-1 rounded-full flex items-center justify-center gap-2">
                      <span className="p-1 rounded-full bg-red-500 animate-pulse"></span>
                      Out of Stock
                    </span>
                  )}
                  <button className="absolute z-10 bottom-2 right-2 p-2 bg-white/90 rounded-full hover:text-red-500 group transition-colors duration-300">
                    <Heart className="transition-transform duration-200 group-hover:scale-110" />
                  </button>
                  <Lens
                    zoomFactor={1.5}
                    lensSize={100}
                    isStatic={false}
                    ariaLabel="Zoom Area"
                  >
                    <Image
                      src={watch.imageUrl}
                      alt={`Trending Watch ${watch.name}`}
                      width={320}
                      height={300}
                      className="rounded-md"
                      unoptimized
                    />
                  </Lens>
                </div>
                <div className="flex flex-col w-full">
                  <p className="font-work-sans text-lg font-semibold">
                    {watch.name}
                  </p>
                  <p className="text-xs text-gray-600">
                    {watch.brand} - {watch.modelNumber}
                  </p>
                  <p className="text-sm text-gray-700">{watch.description}</p>
                  {watch.discountPercent > 0 ? (
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-sm font-semibold text-gray-900">
                        Price:{" "}
                        {watch.price -
                          (watch.price * watch.discountPercent) / 100}{" "}
                        BDT
                      </span>
                      <span className="text-xs text-red-500 line-through">
                        {watch.price} BDT
                      </span>
                    </div>
                  ) : (
                    <span className="text-sm font-semibold text-gray-900 mt-2">
                      Price: {watch.price} BDT
                    </span>
                  )}
                  <div className="flex justify-end w-full">
                    <button className="mt-4 px-2 py-2 text-sm bg-black text-white rounded-md hover:bg-gray-800 transition-colors shadow-xl duration-300 flex items-center justify-center gap-2">
                      Add to Cart
                      <ShoppingCart size={17} />
                    </button>
                  </div>
                </div>
              </div>
            )
        )}
      </div>
    </section>
  );
};
export default TrendingHome;
