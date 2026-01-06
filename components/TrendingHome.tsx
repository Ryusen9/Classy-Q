"use client";
import { Heart, ShoppingCart, Star } from "lucide-react";
import Image from "next/image";
import { Lens } from "./ui/lens";
import { useEffect, useMemo, useState } from "react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

type WatchDocument = {
  _id: string;
  name: string;
  slug: string;
  brand?: string;
  model_name?: string;
  images?: SanityImageSource[];
  price: number;
  discountPercentage?: number;
  rating?: number;
  availability?: "in_stock" | "out_of_stock" | "preorder";
  description?: string;
  trending?: boolean;
};

type TrendingWatch = {
  id: string;
  name: string;
  slug: string;
  brand?: string;
  modelName?: string;
  image?: SanityImageSource;
  price: number;
  discountPercentage: number;
  rating: number;
  availability: "in_stock" | "out_of_stock" | "preorder";
  description?: string;
  trending?: boolean;
};

const TrendingHome = () => {
  const [trendingWatches, setTrendingWatches] = useState<TrendingWatch[]>([]);
  const [loading, setLoading] = useState(false);

  const availabilityLabels = useMemo(
    () =>
      ({
        in_stock: "In Stock",
        out_of_stock: "Out of Stock",
        preorder: "Preorder",
      }) as const,
    []
  );

  useEffect(() => {
    const fetchTrendingWatches = async () => {
      setLoading(true);
      try {
        const data = await client.fetch<WatchDocument[]>(`
          *[_type == "newWatch" && trending == true]
          | order(price asc)[0..2] {
            _id,
            name,
            "slug": slug.current,
            brand,
            model_name,
            rating,
            images,
            price,
            discountPercentage,
            availability,
            description,
            trending
          }
        `);

        const formatted = data.map<TrendingWatch>((watch) => ({
          id: watch._id,
          name: watch.name,
          slug: watch.slug,
          brand: watch.brand,
          modelName: watch.model_name,
          image: watch.images?.[0],
          price: watch.price,
          discountPercentage: watch.discountPercentage ?? 0,
          rating: watch.rating ?? 0,
          availability: watch.availability ?? "in_stock",
          description: watch.description,
          trending: watch.trending,
        }));

        setTrendingWatches(formatted);
      } catch (err) {
        console.error("TrendingHome error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTrendingWatches();
  }, []);
  // const trendingWatches = [
  //   {
  //     id: 1,
  //     name: "name 1",
  //     slug: "name-1-mens-watch",
  //     brand: "Rolex",
  //     modelNumber: "RLX-2200",
  //     imageUrl: "https://i.ibb.co/VY5PQpt1/watch-Example.png",
  //     images: [
  //       "https://i.ibb.co/VY5PQpt1/watch-Example.png",
  //       "https://i.ibb.co/VY5PQpt1/watch-Example.png",
  //     ],
  //     price: 2200,
  //     discountPercent: 10,
  //     rating: 4.5,
  //     reviews: [],
  //     availability: "In Stock",
  //     quantity: 5,
  //     lowStock: false,
  //     category: "Mens Watch",
  //     trending: true,
  //     colors: ["Black", "Silver"],
  //     strapMaterial: "Leather",
  //     dialMaterial: "Stainless Steel",
  //     waterResistance: "50m",
  //     warranty: "1 Year International Warranty",
  //     description: "This is a trending watch description 1.",
  //     createdAt: "2025-12-01",
  //     updatedAt: "2025-12-01",
  //   },
  //   {
  //     id: 2,
  //     name: "name 1",
  //     slug: "name-1-mens-watch",
  //     brand: "Rolex",
  //     modelNumber: "RLX-2200",
  //     imageUrl: "https://i.ibb.co/VY5PQpt1/watch-Example.png",
  //     images: [
  //       "https://i.ibb.co/VY5PQpt1/watch-Example.png",
  //       "https://i.ibb.co/VY5PQpt1/watch-Example.png",
  //     ],
  //     price: 2200,
  //     discountPercent: 0,
  //     rating: 4.5,
  //     reviews: [],
  //     availability: "Out of Stock",
  //     quantity: 5,
  //     lowStock: true,
  //     category: "Mens Watch",
  //     trending: true,
  //     colors: ["Black", "Silver"],
  //     strapMaterial: "Leather",
  //     dialMaterial: "Stainless Steel",
  //     waterResistance: "50m",
  //     warranty: "1 Year International Warranty",
  //     description: "This is a trending watch description 1.",
  //     createdAt: "2025-12-01",
  //     updatedAt: "2025-12-01",
  //   },
  //   {
  //     id: 3,
  //     name: "name 1",
  //     slug: "name-1-mens-watch",
  //     brand: "Rolex",
  //     modelNumber: "RLX-2200",
  //     imageUrl: "https://i.ibb.co/VY5PQpt1/watch-Example.png",
  //     images: [
  //       "https://i.ibb.co/VY5PQpt1/watch-Example.png",
  //       "https://i.ibb.co/VY5PQpt1/watch-Example.png",
  //     ],
  //     price: 2200,
  //     discountPercent: 10,
  //     rating: 4.5,
  //     reviews: [],
  //     availability: "In Stock",
  //     quantity: 5,
  //     lowStock: false,
  //     category: "Mens Watch",
  //     trending: true,
  //     colors: ["Black", "Silver"],
  //     strapMaterial: "Leather",
  //     dialMaterial: "Stainless Steel",
  //     waterResistance: "50m",
  //     warranty: "1 Year International Warranty",
  //     description: "This is a trending watch description 1.",
  //     createdAt: "2025-12-01",
  //     updatedAt: "2025-12-01",
  //   },
  // ];
  return (
    <section className="relative py-16 overflow-hidden">
      {/* Animated Background linear */}
      <div className="absolute inset-0 bg-linear-to-br from-blue-50 via-purple-50 to-pink-50 opacity-60"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Text */}
        <div className="flex flex-col justify-center items-center mb-12">
          <p className="text-xs py-2 px-4 uppercase border-2 border-purple-500/30 rounded-full bg-linear-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm text-gray-800 flex items-center justify-center gap-2 shadow-lg hover:scale-105 transition-transform duration-300">
            <span className="w-2 h-2 rounded-full bg-linear-to-r from-green-400 to-emerald-500 animate-pulse shadow-lg shadow-green-400/50"></span>
            Unlike Other Watches
          </p>
          <h2 className="text-2xl font-work-sans my-2 md:text-3xl font-bold bg-linear-to-r from-gray-900 via-purple-900 to-gray-900 bg-clip-text text-transparent">
            Try Our Trending Watches
          </h2>
          <p className="text-gray-600 text-center text-xs max-w-2xl">
            Discover our handpicked collection of luxury timepieces
          </p>
        </div>
        {/* Cards */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(3)].map((_, idx) => (
              <div
                key={idx}
                className="h-[420px] rounded-3xl bg-white/60 border border-gray-200/50 shadow-inner animate-pulse"
              />
            ))}
          </div>
        ) : trendingWatches.length === 0 ? (
          <p className="text-center text-gray-600">
            No trending watches right now.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trendingWatches
              .filter((watch) => watch.trending)
              .map((watch) => {
                const isInStock = watch.availability === "in_stock";
                const discountPercent = watch.discountPercentage;
                const finalPrice =
                  discountPercent > 0
                    ? watch.price - (watch.price * discountPercent) / 100
                    : watch.price;
                const imageSrc = watch.image
                  ? urlFor(watch.image).width(600).height(600).url()
                  : "https://i.ibb.co/VY5PQpt1/watch-Example.png";
                const availabilityLabel =
                  availabilityLabels[watch.availability] ?? "In Stock";
                const ratingValue = Math.max(0, Math.min(5, watch.rating));

                return (
                  <div
                    key={watch.id}
                    className="group relative bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-200/50 "
                  >
                    <div className="p-6 flex flex-col h-full items-center justify-between">
                      <div className="relative w-full aspect-square mb-6 rounded-2xl overflow-hidden bg-linear-to-br from-gray-100 to-gray-50">
                        {/* Stock badge overlay */}
                        <span
                          className={`absolute z-30 top-3 right-3 backdrop-blur-md text-white text-xs font-medium px-3 py-1.5 rounded-full flex items-center justify-center gap-2 shadow-lg ${
                            isInStock
                              ? "bg-emerald-500/90"
                              : watch.availability === "preorder"
                                ? "bg-amber-500/90"
                                : "bg-red-500/90"
                          }`}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                          {availabilityLabel}
                        </span>

                        {/* Heart Button */}
                        <button className="absolute z-30 top-3 left-3 p-2.5 bg-white/95 rounded-full hover:bg-red-500 hover:text-white group/heart transition-all duration-300 shadow-lg hover:scale-110">
                          <Heart className="w-5 h-5 transition-transform duration-200 group-hover/heart:scale-110" />
                        </button>

                        <Lens
                          zoomFactor={1.5}
                          lensSize={120}
                          isStatic={false}
                          ariaLabel="Zoom Area"
                        >
                          <Image
                            src={imageSrc}
                            alt={`Trending Watch ${watch.name}`}
                            width={400}
                            height={400}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            unoptimized
                          />
                        </Lens>
                      </div>

                      <div className="space-y-3 flex flex-col w-full h-80 justify-between">
                        {/* Rating */}
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math.floor(ratingValue)
                                  ? "fill-yellow-400 text-yellow-400"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                          <span className="text-sm text-gray-600 ml-1">
                            ({ratingValue.toFixed(1)})
                          </span>
                        </div>

                        {/* Brand & Model */}
                        <div>
                          <h3 className="font-work-sans text-xl font-bold text-gray-900 mb-1">
                            {watch.name}
                          </h3>
                          <p className="text-sm text-purple-600 font-medium">
                            {watch.brand ?? "Unknown Brand"} •{" "}
                            {watch.modelName ?? "—"}
                          </p>
                        </div>

                        {/* Description */}
                        <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed">
                          {watch.description}
                        </p>
                        <div className="flex items-center justify-between w-full">
                          {/* Price Section */}
                          {discountPercent > 0 ? (
                            <div className="flex items-baseline gap-3 py-2">
                              <span className="text-2xl font-bold">
                                ৳{finalPrice}
                              </span>
                              <span className="text-lg text-gray-400 line-through">
                                ৳{watch.price}
                              </span>
                            </div>
                          ) : (
                            <span className="text-2xl font-bold block py-2">
                              ৳{watch.price}
                            </span>
                          )}

                          {/* Discount Badge */}
                          {discountPercent > 0 && (
                            <div className="bg-linear-to-r from-red-500 to-pink-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg animate-pulse">
                              {discountPercent}% OFF
                            </div>
                          )}
                        </div>

                        {/* Action Button */}
                        <button
                          className="w-full mt-4 px-6 py-3.5 text-sm font-semibold bg-linear-to-r from-purple-600 to-pink-600 text-white rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-[1.02] group/btn disabled:opacity-60 disabled:cursor-not-allowed"
                          disabled={!isInStock}
                        >
                          <ShoppingCart className="w-5 h-5 transition-transform duration-300 group-hover/btn:rotate-12" />
                          {isInStock ? "Add to Cart" : availabilityLabel}
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        )}
      </div>
    </section>
  );
};
export default TrendingHome;
