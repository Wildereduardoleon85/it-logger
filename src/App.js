import {useEffect} from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js'

const App = ()=> {

  useEffect(()=>{
    //Init Materialize Javascript
    M.AutoInit();
  })

  return (
    <div className="App">
      Hello World
    </div>
  );
}

export default App;
