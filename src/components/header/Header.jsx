import logo from './../../img/icons/logo.svg';
import './header.css';

const Header = () => {
	return (
		<header className='header'>
			<div className="container">
				<div className="header__row">
					<a href="/" className="header__logo">
							<img src={logo} alt="logo"></img>
							<span>fashion</span>
					</a>
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
	);
}

export default Header;