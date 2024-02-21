import './promo.css';
import promo from './../../img/images/promo.jpg'

const Promo = () => {
	return (
		<section className="promo">
			<div className="container">
				<div className="promo__content">
					<div className="promo__text">
						<div className="promo__title">
							<span className="hightlight">
								<span>let’s</span>
							</span>
							explore
							<span className="hightlight hightlight--yellow">
								<span>unique</span>
							</span>
							clothes.</div>
						<div className="promo__description">Live for Influential and Innovative fashion!</div>
						<div className="promo__button-wrapper">
							<a href="#!" className="promo__button">Shop Now</a>
						</div>
					</div>
					<div className="promo__image">
						<img src={promo} alt="image" />
					</div>
				</div>
			</div>
		</section>
	);
}

export default Promo;