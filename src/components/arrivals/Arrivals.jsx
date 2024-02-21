import Card from '../card/Card';
import './arrivals.css';

import cardImage1 from './../../img/categories/cat-01.jpg';
import cardImage2 from './../../img/categories/cat-02.jpg';
import cardImage3 from './../../img/categories/cat-03.jpg';

const Arrivals = () => {
	return ( 
		<section className="arrivals">
			<div className="container">
				<h2 className="arrivals__title title">new arrivals</h2>
				<ul className="arrivals__list">
					<li>
						<Card title="Hoodies & Sweetshirt" img={cardImage1}/>
					</li>
					<li>
						<Card title="Coats & Parkas" img={cardImage2}/>
					</li>
					<li>
						<Card title="Tees & T-Shirt" img={cardImage3}/>
					</li>
				</ul>
			</div>
		</section>
	);
}

export default Arrivals;