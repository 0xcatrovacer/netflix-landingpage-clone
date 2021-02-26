import Row from './components/Row/Row';
import requests from './requests'

const App = () => {
  return (
    <div className="App">
      <Row title="NETFLIX Originals" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
    </div>
  );
}

export default App;
