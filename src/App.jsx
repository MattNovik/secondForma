import './scss/index.scss';
import MakeOrder from './components/MakeOrder';
import('container-query-polyfill');

function App() {
  return (
    <div className="App">
      <MakeOrder jsonData={document.querySelector('#root').dataset.info} />
      <div class="info">
        <p>
          ℹ️ Your browser does not support Container Queries{' '}
          <em>(or only supports an older syntax)</em>. To plug this hole,{' '}
          <a
            href="https://www.npmjs.com/package/container-query-polyfill"
            target="_top"
          >
            a polyfill
          </a>{' '}
          has been loaded.
        </p>
      </div>
    </div>
  );
}

export default App;
