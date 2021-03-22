import React from 'react'
import './App.css';
import Homepage from './component/pages/homepage/Homepage'

import ShopPage from './component/shop/shoppage'

import {Route, Switch} from 'react-router-dom'

const AboutUs = ()=>{
  return <h1>Hello We Are Prisma Insights</h1>
}

class App extends React.Component {
constructor(){
  super();

}
  render(){
      return (        
        <div>
          <Switch>
          <Route exact = 'true' path= '/' component = {Homepage} />  
          <Route  path= '/shop' component = {ShopPage} />  
          </Switch>         
        </div>
      );
}
}

export default App;
