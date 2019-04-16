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
                    
                        <button className="forgot-password" variant="primary" size="lg" >Mot de passe oublié ?</button>
                        <br/>
                        <button className="button-connexion" variant="primary" size="lg" >Connexion</button>
                </form>
            </div>
        );
    }
}

export default Form