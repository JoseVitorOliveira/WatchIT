import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Casts from "../casts/Casts";

export default function DetailsSkeleton({ category, id }) {
  return (
    <div className="relative md:flex md:items-start md:gap-4 bg-dark-gray">
      <div className="absolute top-0 left-0 w-full h-[60vh] bg-cover bg-no-repeat bg-center z-0">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] to-transparent"></div>
      </div>

      <div className="md:px-4 w-full relative z-10 md:flex md:mt-16 md:ml-4 lg:pl-32">
        {/* Skeleton Poster */}
        <div className="hidden md:block md:flex-shrink-0 mt-26">
          <Skeleton
            height={550}
            width={350}
            borderRadius={20}
            baseColor="#2f2f2f"
            highlightColor="#3f3f3f"
          />
        </div>

        {/* Skeleton Content */}
        <main className="md:flex-1 md:w-full md:min-w-0">
          <section className="relative md:min-h-[50vh]">
            <div className="flex flex-col justify-center gap-6 px-4 py-16 md:py-0 md:pt-16">
              {/* Title */}
              <div className="mt-10 text-left">
                <Skeleton
                  height={40}
                  width={`60%`}
                  baseColor="#2f2f2f"
                  highlightColor="#3f3f3f"
                />
                <Skeleton
                  height={20}
                  width={80}
                  className="mt-2"
                  baseColor="#2f2f2f"
                  highlightColor="#3f3f3f"
                />
              </div>

              {/* Genres */}
              <div className="flex gap-2">
                <Skeleton
                  height={30}
                  width={70}
                  baseColor="#2f2f2f"
                  highlightColor="#3f3f3f"
                />
                <Skeleton
                  height={30}
                  width={60}
                  baseColor="#2f2f2f"
                  highlightColor="#3f3f3f"
                />
                <Skeleton
                  height={30}
                  width={90}
                  baseColor="#2f2f2f"
                  highlightColor="#3f3f3f"
                />
              </div>

              {/* Overview */}
              <div className="lg:w-3/4">
                <Skeleton
                  count={4}
                  height={16}
                  baseColor="#2f2f2f"
                  highlightColor="#3f3f3f"
                />
              </div>
            </div>
          </section>
          {/* Casts Section Skeleton */}
          <section className="bg-dark-gray mt-2">
            <Casts category={category} id={id} />
          </section>
          {/* Similar Section Skeleton */}
          <section className="px-4 pt-6 bg-dark-gray">
            <Skeleton
              height={24}
              width={100}
              baseColor="#2f2f2f"
              highlightColor="#3f3f3f"
              className="mb-4"
            />
            <div className="flex gap-4 overflow-x-auto">
              {[...Array(5)].map((_, index) => (
                <Skeleton
                  key={index}
                  height={200}
                  width={140}
                  borderRadius={10}
                  baseColor="#2f2f2f"
                  highlightColor="#3f3f3f"
                />
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
