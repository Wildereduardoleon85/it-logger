import {useEffect, Fragment} from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import Searchbar from './components/layout/Searchbar';
import Logs from './components/logs/Logs';

const App = ()=> {

  useEffect(()=>{
    //Init Materialize Javascript
    M.AutoInit();
  })

  return (
    <Fragment>
      <Searchbar/>
      <div className="container">
        <Logs/>
      </div>
    </Fragment>
  );
}

export default App;
