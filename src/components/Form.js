import React, { Component } from 'react';

class Form extends React.Component {
    render() {
        return(
            <div className="form">
                <h1>S'authentifier</h1>
                <form>
                    <div className="form-email">
                        <input type="text" name="email" placeholder="Entrez votre email"/>
                    </div>
                    <div className="form-password">
                        <input type="password" name="password" placeholder="Entrez votre mot de passe"/>
                    </div>
                    <div className="form-button">
                        <button variant="primary" size="lg" >Connexion</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Form