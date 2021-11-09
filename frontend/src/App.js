import { useEffect, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';

import Images from './components/images/Images';
import Footer from './components/layout/Footer';
import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  });
  return (
    <Provider store={store}>
      <Fragment>
        <div className="container">
          <Images />
          <Footer />
        </div>
      </Fragment>
    </Provider>
  );
}

export default App;
