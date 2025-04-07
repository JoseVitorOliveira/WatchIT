import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function CastsSkeleton() {
  return (
    <div className="px-4">
      <h1 className="text-white text-base font-bold mb-4 md:text-lg">Casts</h1>
      <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-9 gap-3 lg:gap-0">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index}>
            <Skeleton
              height={160}
              width={96}
              borderRadius={8}
              baseColor="#2e2e2e"
              highlightColor="#3e3e3e"
              className="mb-2"
            />
            <Skeleton
              height={12}
              width={80}
              borderRadius={4}
              baseColor="#2e2e2e"
              highlightColor="#3e3e3e"
              className="mb-1"
            />
            <Skeleton
              height={10}
              width={80}
              borderRadius={4}
              baseColor="#2e2e2e"
              highlightColor="#3e3e3e"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
