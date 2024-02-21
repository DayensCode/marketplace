import logo from './../../img/icons/logo.svg'
import './header.css'

function Header() {
	return(
		<header className='header'>
			<div className="container">
				<div className="header__row">
					<div className="header__logo">
						<img src={logo} alt="logo"></img>
						<span>fashion</span>
					</div>
					<nav className="header__nav">
						<ul className="header__list">
							<li>
								<a href="#">catalogue</a>
							</li>
							<li>
								<a href="#">fashion</a>
							</li>
							<li>
								<a href="#">favourite</a>
							</li>
							<li>
								<a href="#">lifestyle</a>
							</li>
							<li>
								<a href="#" className="header__button">sign up</a>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</header>
	)
}

export default Header;