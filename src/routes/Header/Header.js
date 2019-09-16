import React from 'react'
import './Header.scss'

const Header = () => (
	<header>
		<h1 className="logo">Portl</h1>
		<div className="btns">
			<button className="sign-in">Sign in</button>
			<span className="register-wrap-btn">
				<button className="register-btn">Register</button>
			</span>
		</div>
	</header>
)

export default Header