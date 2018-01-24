import React from 'react'
import './style.css'
class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: null,
            password: null
        }
        //this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }
    handleNameChange = function(event) {
        this.setState({name: event.target.value});
    };

    handlePasswordChange = function(event) {
        this.setState({password: event.target.value});
    };
    render() {

        const marginLarge = {
            marginTop: '100%'
        };

        /**
         * Display login form
         */
        return(
            <div className="Login">
                <h1>Login</h1>
                <form style={marginLarge}>
                   <input type="text" name="email" placeholder="E-mail" value={this.state.email} onChange={this.handleEmailChange} /> <br/><hr/>
                    <input type="text" name="name" placeholder="Name" value={this.state.name} onChange={this.handleNameChange} /> <br/><hr/>
                    <input type="password" name="password" placeholder="Passwort" value={this.state.password} onChange={this.handlePasswordChange} /> <br/><hr/>
                    <button type="button" onClick={this.handleLogin}>Login</button>
                    <button type="button" onClick={this.handleRegistry}>Registrieren</button>
                </form>
            </div>
        );
    }
}

export default Home;