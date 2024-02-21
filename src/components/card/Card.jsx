import './card.css';
import arrowIcon from './../../img/icons/arrow.svg'

const Card = ({title, img}) => {
	return (
		<a href="#!" className="card">
			<img src={img} alt="image" className="card__image"/>
			<div className="card__info">
				<div className="card__text">
					<h3 className="card__title">{title}</h3>
					<span className="card__muted">Explore Now!</span>
				</div>
				<img src={arrowIcon} alt="image" className="card__icon"/>
			</div>
		</a>
	);
}

export default Card;