import React from 'react'
import './App.css';
import Homepage from './component/pages/homepage/Homepage'

class App extends React.Component {
constructor(){
  super();

}
  render(){
      return (        
        <div>
          <Homepage />
              
        </div>
      );
}
}

export default App;
