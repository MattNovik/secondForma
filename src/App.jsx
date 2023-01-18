import './scss/index.scss';
import MakeOrder from './components/MakeOrder';

function App() {
  const supportsContainerQueries =
    'container' in document.documentElement.style;
  if (!supportsContainerQueries) {
    import('container-query-polyfill');
  }
  return (
    <div className="App">
      <MakeOrder jsonData={document.querySelector('#root').dataset.info} />
    </div>
  );
}

export default App;
