import React from "react";

const LoadingBanner = () => {
  return (
    <div className="flex flex-row h-screen w-screen">
      <div className="grid place-content-center w-full h-8 rounded-md bg-orange-600">
        <h2 className="text-white uppercase saira-condensed-light">
          loading content
        </h2>
      </div>
    </div>
  );
};

export default LoadingBanner;
