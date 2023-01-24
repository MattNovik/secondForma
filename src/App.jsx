import './scss/index.scss';
import MakeOrder from './components/MakeOrder';
/* import('container-query-polyfill'); */

function App() {
  return (
    <div className="App">
      <MakeOrder jsonData={document.querySelector('#root').dataset.info} />
    </div>
  );
}

export default App;
