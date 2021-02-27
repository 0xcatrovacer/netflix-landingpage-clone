// import Row from './components/Row/Row';
import './App.css'
import requests from './requests'
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import React, { Suspense } from 'react';

const Row = React.lazy(() => import('./components/Row/Row'))

const App = () => {
  return (

    <div className="App">

      <Navbar />

      <Banner />

      <Suspense fallback={<div>Loading...</div>}>
        <Row title="NETFLIX Originals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
        <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
        <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
        <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
        <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
        <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      </Suspense>
    </div>
  );
}

export default App;
