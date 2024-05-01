import React from "react";

const ErrorBanner = () => {
  return (
    <div className="flex flex-row h-screen w-screen">
      <div className="w-full h-12 rounded-md bg-red-500">
        <h2 className="text-white uppercase saira-condensed-light">
          ERROR LOADING CONTENT
        </h2>
      </div>
    </div>
  );
};

export default ErrorBanner;
