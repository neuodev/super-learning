import React from "react";
import { TYPES } from "../../utils/types";
import Alert from "../common/Alert";
import Spinner from "../common/Spinner";

const TwitterUsers = ({ users, error, loading, showMore }) => {
  return (
    <div
      className="absolute w-full max-h-96 overflow-y-scroll bg-white border p-5 top-16 rounded-lg shadow-lg flex items-center justify-center"
      style={{ minHeight: "150px" }}
    >
      {loading ? (
        <div>
          <Spinner />
        </div>
      ) : error ? (
        <div className="w-full">
          <Alert type={TYPES.ERROR} message={error} />
        </div>
      ) : users.length === 0 ? (
        <div className="w-full">
          <Alert type={TYPES.WARRNING} message={`User Not Found`} />
        </div>
      ) : (
        <div className="w-full">
          {users.map((user) => (
            <div className="flex items-center justify-start mb-3 cursor-pointer">
              <div className="rounded-full mr-4 overflow-hidden">
                <img src={user.profile_image_url} alt={user.name} />
              </div>
              <div className="flex items-start justify-center flex-col">
                <p className="flex items-center justify-start">
                  <span>{user.name}</span>
                  {user.verified && (
                    <i className="fas fa-certificate text-blue-400 ml-1"></i>
                  )}
                </p>
                <p className="text-gray-500">@{user.username}</p>
              </div>
            </div>
          ))}
          <button
            className="text-blue-400 font-medium mt-1 focus:outline-none hover:text-blue-300"
            onClick={showMore}
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
};
// name: "Greg Leding"
// profile_image_url: "http://pbs.twimg.com/profile_images/1427810808306847752/Qhx9iNUO_normal.jpg"
// username: "g"
// verified: true
export default TwitterUsers;
