import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const UserSkeleton = () => {
  return (
    <div className="flex items-center justify-start">
      <div className="mr-4">
        <Skeleton circle width={60} height={60} />
      </div>
      <div className="w-full">
        <Skeleton width={80} />
        <Skeleton width={55} />
      </div>
    </div>
  );
};

export default UserSkeleton;
