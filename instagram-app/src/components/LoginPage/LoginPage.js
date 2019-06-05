import React from 'react';
import './LoginPage.css';

class LoginPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    handleInputUpdate = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleLoginSubmit = event => {
        const user = this.state.username;
        localStorage.setItem('user', user);
        window.location.reload();
    }

    render(){
        return (
            <form method="post" onSubmit={this.handleLoginSubmit}className='login-form'>
                <h3>Welcome to React Insta Clone</h3>
                <div>Please Login</div>
                <input name='username' onChange={this.handleInputUpdate} type='text' placeholder='Username'></input>
                <input name='password' onChange={this.handleInputUpdate} type='password' placeholder='Password'></input>
                <button onClick={this.handleLoginSubmit} value='Login'>Login</button>
            </form>
        )
    }
}

export default LoginPage;