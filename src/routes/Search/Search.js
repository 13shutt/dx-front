import React from 'react'
import './Search.scss'

const Search = () => (
	<section>
		<div>
			<h1 className="text bold">Find Freelancers</h1>
			<h1 className="text normal">Hire a freelancer for the price of a coffee or beer!</h1>
			<h1 className="text mob">The fastest place to source quality freelancers.</h1>
		</div>
		<form>
			<div className="input-container">
				<i className="fas fa-search"></i>
				<input placeholder="Try “Project manager with MBA”"/>
			</div>
			<button className="search">Search</button>
		</form>
		<div className="note">
			<p>“4.8M self-employed in the UK, contributing £271bn to the economy in 2017.”</p>
			<p>IPSE, ipse.co.uk</p>
			<p className="mob-note">Enter key words to begin your search. You'll be able to filter the results to refine your search.</p>
		</div>
	</section>
)

export default Search