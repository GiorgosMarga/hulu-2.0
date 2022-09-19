import React from "react";
import Thumbnail from "./Thumbnail";
const Results = ({ results }) => {
  console.log("Results changed:", results);
  return (
    <div className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center gap-x-1">
      {results &&
        results.map((data) => <Thumbnail key={data.id} data={data} />)}
    </div>
  );
};

export default Results;
