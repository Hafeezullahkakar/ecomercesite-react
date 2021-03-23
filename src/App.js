import React from 'react'
import './App.css';
import Homepage from './component/pages/homepage/Homepage'
import ShopPage from './component/shop/shoppage'
import {Route, Switch} from 'react-router-dom'
import Header from './component/header/Header'
import SigninSignup from './component/SingnSinguppage/SigninSignup'
import {auth} from './firebase/firebase.util'
class App extends React.Component {
constructor(){
  super();
  this.state={
    currentUser:null
  }
}
unSubscribeFromAuth = null;
componentDidMount(){
  this.unSubscribeFromAuth= auth.onAuthStateChanged(user=>{
    this.setState({currentUser:user})
    console.log(user);
  })
}
componentWillUnmount(){
  this.unSubscribeFromAuth();
}
  render(){
      return (        
        <div>
          <Header currentUser={this.state.currentUser}/>
          <Switch>
          <Route exact  path= '/' component = {Homepage} />  
          <Route  path= '/shop' component = {ShopPage} />  
          <Route  path= '/signin' component = {SigninSignup} />  
          </Switch>         
        </div>
      );
}
}

export default App;
