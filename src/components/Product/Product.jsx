import React from 'react';
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';
import prodStyle from './Product.module.css';

const Product = ({ id, image, name, price, review = [1,2,3] }) => {
	return (
		<Link to={`/detail/${id}`}>
			<div className={prodStyle.card1}>
				<div className={prodStyle.cardheader}>
					<img src={image} alt={name} />
				</div>
				<div className={prodStyle.cardbody}>
					<div className={prodStyle.cardData1}>
						<span className={prodStyle.cardPrice}>
							<b>Price:</b> ${price}
						</span>
						<span>{review && review.map(n => n < 1 ? <FaIcons.FaStarHalf /> : <FaIcons.FaStar />)}</span>
					</div>
					<div className={prodStyle.cardText}>{name}</div>
				</div>
			</div>
		</Link>
	);
};

export default Product;
