import React from "react";
import { TYPES } from "../../utils/types";
import Alert from "../common/Alert";
import Spinner from "../common/Spinner";
import VerifiedIcon from "../../assets/verified.png";

const TwitterUser = ({ user, error, loading }) => {
  return (
    <div className="max-w-screen-lg mx-auto mb-8">
      {loading ? (
        <div className="h-20">
          <Spinner />
        </div>
      ) : error ? (
        <div>
          <Alert type={TYPES.ERROR} message={error} />
        </div>
      ) : (
        <div>
          <div className="flex items-center justify-start">
            <div className="rounded-full overflow-hidden mr-4 shadow-lg">
              <img src={user.profile_image_url} alt={user.name} />
            </div>
            <div className="flex flex-col items-start justify-center">
              <p className="text-gray-800 font-semibold flex items-center justify-start  py-1">
                <span className="mr-2">{user.name}</span>
                {user.verified && (
                  <img
                    className="w-5 h-5 inline-block"
                    src={VerifiedIcon}
                    alt={user.name}
                  />
                )}
              </p>
              <p className="text-sm text-gray-500">@{user.username}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

/**
 *  "name": "Elon Musk",
    "profile_image_url": "https://pbs.twimg.com/profile_images/1442634650703237120/mXIcYtIs_normal.jpg",
    "username": "elonmusk",
    "verified": true,
 */
export default TwitterUser;
