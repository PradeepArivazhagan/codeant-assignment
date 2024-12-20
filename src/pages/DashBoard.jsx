import SideBar from "../components/DashBoard/SideBar";
const DashBoard = () => {
  return (
    <div className="flex flex-row">
      <SideBar />
      <div className="w-full bg-[#FAFAFA] p-5">
        <div className="bg-white border border-[#E9EAEB] rounded-lg">
          <div className="py-4 px-5">
            <div className="flex flex-row items-center justify-between">
              <div>
                <h1 className="text-2xl text-[#181D27] font-semibold">
                  Repositories
                </h1>
                <p className="mt-1 text-sm text-[#414651]">
                  33 total repositories
                </p>
              </div>
              <div className="flex flex-row items-center gap-3">
                <button className="flex flex-row items-center gap-2 text-[#414651] text-sm py-2 px-3 rounded-lg border border-[#D5D7DA]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                    />
                  </svg>
                  <span>Refresh All</span>
                </button>
                <button className="flex flex-row items-center gap-2 text-white py-2 px-3 rounded-lg text-sm bg-[#1570EF] border border-[#195fc8] shadow-[inset_0px_0px_0px_2px_rgba(59,_130,_246,_0.5)]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                  <span>Add Repository</span>
                </button>
              </div>
            </div>
            <div className="mt-4 w-fit py-2 px-3 border border-[#D5D7DA] rounded-lg flex flex-row items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
              <input
                className="focus:outline-none"
                type="text"
                placeholder="Search Repositories"
              />
            </div>
          </div>
          <div className="py-4 px-5 border-t border-[#E9EAEB]"></div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
