import './scss/index.scss';
import MakeOrder from './components/MakeOrder';

function App() {
  return (
    <div className="App">
      <MakeOrder jsonData={document.querySelector('#root').dataset.info} />
    </div>
  );
}

export default App;
