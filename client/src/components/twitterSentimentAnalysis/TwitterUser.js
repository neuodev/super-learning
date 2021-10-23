import React from "react";
import { TYPES } from "../../utils/types";
import Alert from "../common/Alert";
import VerifiedIcon from "../../assets/verified.png";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const TwitterUser = ({ user, error, loading }) => {
  return (
    <div className="max-w-screen-lg mx-auto mb-8">
      {error ? (
        <div>
          <Alert type={TYPES.ERROR} message={error} />
        </div>
      ) : (
        <div>
          <div className="flex items-center justify-start">
            <div className="rounded-full overflow-hidden mr-4 shadow-lg">
              {user ? (
                <img src={user.profile_image_url} alt={user.name} />
              ) : (
                <Skeleton circle width={60} height={60} />
              )}
            </div>
            <div className="flex flex-col items-start justify-center">
              <p className="text-gray-800 font-semibold flex items-center justify-start  py-1">
                <span className="mr-2 ">
                  {(user && user.name) || <Skeleton width={80} />}
                </span>
                {user && user.verified && (
                  <img
                    className="w-5 h-5 inline-block"
                    src={VerifiedIcon}
                    alt={user.name}
                  />
                )}
              </p>
              <p className="text-sm text-gray-500">
                {user ? <span>@{user.username}</span> : <Skeleton width={70} />}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TwitterUser;
