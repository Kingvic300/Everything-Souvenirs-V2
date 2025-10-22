import React from "react";

const NotFound = () => {
  return (
    <div className="bg-background-dark font-display min-h-screen flex flex-col items-center justify-center overflow-x-hidden">
      <style>
        {`
          .gold-accent-hover:hover {
            color: #FFD700;
          }
        `}
      </style>

      <div className="relative flex h-screen w-full flex-col items-center justify-center bg-background-dark">
        <div className="layout-container flex h-full grow flex-col justify-center">
          <div className="px-4 flex flex-1 justify-center py-5">
            <div className="layout-content-container flex flex-col max-w-[960px] flex-1 items-center justify-center">
              <div className="flex flex-col items-center justify-center gap-4 text-center">
                <div className="flex flex-col gap-3 p-4">
                  <p className="text-white text-9xl font-black tracking-[-0.033em]">
                    404
                  </p>
                  <p className="text-white text-3xl font-bold leading-tight">
                    Oops! Page Not Found.
                  </p>
                </div>

                <p className="text-[#ab9db8] text-base font-normal leading-normal pb-3 pt-1 px-4 text-center max-w-lg">
                  The page you are looking for might have been removed, had its
                  name changed, or is temporarily unavailable.
                </p>

                <div className="flex px-4 py-3 justify-center">
                  <button
                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em]"
                    onClick={() => (window.location.href = "/")}
                  >
                    <span className="truncate">Go to Homepage</span>
                  </button>
                </div>

                <div className="px-4 py-3 w-full max-w-md">
                  <label className="flex flex-col min-w-40 h-12 w-full">
                    <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
                      <div className="text-[#ab9db8] flex border-none bg-[#302938] items-center justify-center pl-4 rounded-l-lg border-r-0">
                        <span className="material-symbols-outlined">search</span>
                      </div>
                      <input
                        type="text"
                        placeholder="Search for products..."
                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-lg text-white focus:outline-0 focus:ring-0 border-2 border-transparent bg-[#302938] focus:border-yellow-500 h-full placeholder:text-[#ab9db8] px-4 text-base font-normal leading-normal"
                      />
                    </div>
                  </label>
                </div>

                <p className="text-[#ab9db8] text-sm font-normal leading-normal pb-3 pt-1 px-4 text-center">
                  <a
                    href="#"
                    className="underline gold-accent-hover transition-colors"
                  >
                    Product Catalog
                  </a>{" "}
                  |{" "}
                  <a
                    href="#"
                    className="underline gold-accent-hover transition-colors"
                  >
                    About Us
                  </a>{" "}
                  |{" "}
                  <a
                    href="#"
                    className="underline gold-accent-hover transition-colors"
                  >
                    Contact Us
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
