import React from 'react'
import Navbar from './Components/Navbar/Navbar';
import {originals,action,comedy,horror} from './urls'

import "./App.css"
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';


function App() {
  return (
    <div className="App">
     <Navbar/>
     <Banner/>
     <RowPost url={originals} title='Netflix Originals'/>
     <RowPost url={action} title='Action' isSmall/>
     <RowPost url={horror} title='Horror' isSmall/>
     <RowPost url={comedy} title='Comedy' isSmall/>
     
    </div>
  );
}

export default App;
