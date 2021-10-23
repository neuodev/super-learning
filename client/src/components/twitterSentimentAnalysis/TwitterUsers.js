import React from "react";
import { PRE_DEFNIED_TWITTER_USERS } from "../../utils/lists";
import VerifiedIcon from "../../assets/verified.png";

const TwitterUsers = ({ onSearch, username }) => {
  return (
    <div className="max-w-screen-lg mx-auto mb-10">
      <div className="grid grid-cols-12 gap-6 ">
        {PRE_DEFNIED_TWITTER_USERS.map((user) => (
          <div
            onClick={() => onSearch(user.username)}
            className={`col-span-4 shadow-2xl border flex items-center justify-start p-3 rounded-xl cursor-pointer ${
              username === user.username && "bg-blue-500 text-white"
            }`}
          >
            <div className="rounded-full overflow-hidden mr-3">
              <img src={user.profile_image_url} alt={user.name} />
            </div>
            <div className="flex flex-col items-center justify-center">
              <p>
                <span
                  className={`font-semibold ${
                    username === user.username
                      ? "bg-blue-500 text-white"
                      : "text-gray-800"
                  }`}
                >
                  {user.name}
                </span>
                <img
                  className="w-3 h-3 ml-1 inline-block"
                  src={VerifiedIcon}
                  alt="Verified"
                />
              </p>
              <p
                className={`${
                  username === user.username ? " text-white" : "text-gray-400"
                }`}
              >
                @{user.username}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TwitterUsers;
