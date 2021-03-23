import React from 'react'
import FormInput from '../forminput/FormInput'
import './signin.scss'
import Button from '../buttoncomponent/Button'
import {signInWithGoogle} from '../../firebase/firebase.util'



class Signin extends  React.Component{
    constructor(props){
        super(props);

    this.state = {
        email:'', 
        password: ''
    }
    }
    
    handleSubmit = event =>{
        event.preventDefault();
        this.setState({email:'', password: ''})
    }
    handleChange = event =>{
        const {value , name}= event.target;
        this.setState({[name]: value})
        
    }
    render(){
        return (
            <div className = 'sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your Email </span>
                <form onSubmit={this.handleSubmit}>
                <FormInput handleChange={this.handleChange} name= 'email' type = 'email' label='Email' value={this.state.email} required/>
                <FormInput handleChange={this.handleChange} name= 'password' type = 'password' label = 'Password' value={this.state.password} required/>
                 <div className= 'buttondiv'>
                 <Button type = 'submit'> SIGN IN</Button>
                 <Button onClick={signInWithGoogle} isGoogleSignIn> SIGN IN WITH GOOLGLE</Button>
                 </div>
                </form>
            </div>
        )
    }
}
export default Signin;