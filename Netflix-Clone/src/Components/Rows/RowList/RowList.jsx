import React from "react";
import Row from "../../Rows/Row/Row"; // Go up two levels based on `RowList.jsx` location

import requests from "../../utlis/requests";

function RowList() {
  return (
    <>
      <Row
        title="NETFLIX ORGINALS"
        fetchURL={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="TopRate Movies" fetchURL={requests.fetchTopRatedMovies} />
      <Row title="Action Movies" fetchURL={requests.fetchActionMovies} />
      <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies} />
      <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies} />
      <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies} />
      <Row title="DocumentariesMovie" fetchURL={requests.fetchDocumentaries} />
      <Row title="Trending Now" fetchURL={requests.fetchTrending} />
    </>
  );
}

export default RowList;
