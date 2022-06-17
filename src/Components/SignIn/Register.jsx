import React from 'react'
import logoImg from '../../public/images/logo.png'
import './Register.css'

function Login(){
    return(
        <div className="registerMain">
        <h1 className="loginH1">Register</h1>
            <div class="containerRegister">
	        <div class="screenRegister">
		    <div class="screen__content">
			<form class="login">
				<div class="login__field">
					<i class="login__icon fas fa-user"></i>
					<input type="text" class="login__input" placeholder="User name / Email" />
				</div>
				<div class="login__field">
					<i class="login__icon fas fa-lock"></i>
					<input type="password" class="login__input" placeholder="Password" />
				</div>
                <div class="login__field">
					<i class="login__icon fas fa-lock"></i>
					<input type="password" class="login__input" placeholder="Confirm Password" />
				</div>
				<button class="button login__submit">
					<span class="button__text">Register Now</span>
					<i class="button__icon fas fa-chevron-right"></i>
				</button>				
			</form>
			<div class="social-login">
				<h5>Register via</h5>
				<div class="social-icons">
					<a href="#" class="social-login__icon fab fa-google"></a>
					<a href="#" class="social-login__icon fab fa-facebook"></a>
				</div>
                <h4><a href="#" className="accMessage">Already have an account?</a></h4>
			</div>
		</div>
		<div class="screen__background">
			<span class="screen__background__shape screen__background__shape4"></span>
			<span class="screen__background__shape screen__background__shape3"></span>		
			<span class="screen__background__shape screen__background__shape2"></span>
			<span class="screen__background__shape screen__background__shape1"></span>
		</div>		
	    </div>
        </div>
        </div>
    )
}

export default Login