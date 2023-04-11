import React from "react";
import { useGlobalContext } from "../context/global";
import Popular from "./Popular";
import Upcoming from "./Upcoming";
import Airing from "./Airing";

function Homepage() {
  const {
    handleSubmit,
    search,
    searchAnime,
    handleChange,
    getUpcomingAnime,
    getAiringAnime,
    getPopularAnime,
  } = useGlobalContext();

  const [rendered, setRendered] = React.useState("popular");

  const switchComponent = () => {
    switch (rendered) {
      case "popular":
        return <Popular rendered={rendered} />;
      case "airing":
        return <Airing rendered={rendered} />;
      case "upcoming":
        return <Upcoming rendered={rendered} />;
      default:
        return <Popular rendered={rendered} />;
    }
  };

  return (
    <div className="">
      <header className="flex ml-5 mr-4 mt-5 space-x-3 md:ml-10">
        <div className="">
          <h1 className="">
            {rendered === "popular"
              ? "Popular"
              : rendered === "airing"
              ? "Airing"
              : "Upcoming"}
          </h1>
        </div>
        <div className="">
          <form action="" className="search-form" onSubmit={handleSubmit}>
            <div className="input-control">
              <input
                className="bg-gray-300 rounded-xl pl-4 w-[170px]"
                type="text"
                placeholder="Search Anime"
                value={search}
                onChange={handleChange}
              />
              <button type="submit">Search</button>
            </div>
          </form>
          <div className="flex mt-5 space-x-3">
            <div className="bg-gray-400 text-white w-fit rounded-sm">
              <button
                onClick={() => {
                  setRendered("popular");
                }}
              >
                Popular<i className="fas fa-fire"></i>
              </button>
            </div>
            <div className="bg-gray-400 text-white w-fit rounded-sm">
              <button
                onClick={() => {
                  setRendered("airing");
                  getAiringAnime();
                }}
              >
                Airing
              </button>
            </div>
            <div className="bg-gray-400 text-white w-fit rounded-sm">
              <button
                onClick={() => {
                  setRendered("upcoming");
                  getUpcomingAnime();
                }}
              >
                Upcoming
              </button>
            </div>
          </div>
        </div>
      </header>
      <div className="mt-10 pl-5 pr-5 mb-4">{switchComponent()}</div>
    </div>
  );
}

export default Homepage;
