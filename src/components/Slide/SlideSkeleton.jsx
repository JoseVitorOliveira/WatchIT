import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function SlideSkeleton() {
  return (
    <article className="relative w-full py-16 px-6 h-[50vh] md:h-[65vh] lg:min-h-screen bg-gray-800 skeleton-pulse">
      <div className="relative z-10 container mx-auto flex flex-col md:flex-row items-center">
        {/* Left: Text Skeleton */}
        <div className="w-full lg:w-1/2 p-6 space-y-4">
          {/* Title */}
          <Skeleton
            height={64}
            width="75%"
            borderRadius={12}
            baseColor="#2e2e2e"
            highlightColor="#3e3e3e"
          />

          {/* Description lines */}
          <Skeleton
            height={20}
            width="100%"
            borderRadius={8}
            baseColor="#2e2e2e"
            highlightColor="#3e3e3e"
          />
          <Skeleton
            height={20}
            width="83%"
            borderRadius={8}
            baseColor="#2e2e2e"
            highlightColor="#3e3e3e"
          />

          {/* Button */}
          <Skeleton
            height={40}
            width={128}
            borderRadius={12}
            baseColor="#1f1f1f"
            highlightColor="#2a2a2a"
            className="mt-4"
          />
        </div>

        {/* Right: Poster Skeleton */}
        <div className="hidden lg:flex justify-center items-center flex-1 mt-4">
          <Skeleton
            height={384}
            width={384}
            borderRadius={16}
            baseColor="#2e2e2e"
            highlightColor="#3e3e3e"
          />
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark-gray to-transparent"></div>
    </article>
  );
}
