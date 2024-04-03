import React, {Component} from 'react';
import CHanjbalans from "./CHanjbalans";
import Balans from "./Balans";
import Redux from "./Redux";




class App extends Component {

  render() {
    return (
        <div>
         <CHanjbalans/>
            <Balans/>
            <Redux/>
        </div>
    );
  }
}

export default App;