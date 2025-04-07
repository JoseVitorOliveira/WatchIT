import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function ContentCardSkeleton() {
  return (
    <div className="group skeleton-pulse">
      {/* Poster Skeleton */}
      <div className="h-[215px] md:h-[340px] w-[130px] md:w-[210px] rounded-3xl overflow-hidden">
        <Skeleton
          height="100%"
          width="100%"
          borderRadius="1.5rem"
          baseColor="#2e2e2e"
          highlightColor="#3e3e3e"
        />
      </div>

      {/* Title Skeleton */}
      <div className="w-32 md:w-52 pt-2">
        <Skeleton
          height={18}
          borderRadius={8}
          baseColor="#2e2e2e"
          highlightColor="#3e3e3e"
        />
      </div>
    </div>
  );
}
