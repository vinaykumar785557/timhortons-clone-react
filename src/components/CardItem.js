import React from 'react';
import '../styles/CardItem.css';
function CardItem({ title, description, buttontext, anchor, image }) {
	return (
		<div className='carditem'>
			<img src={image} alt={title} />
			<div className='carditem__text'>
				<div className='carditem__title'>{title}</div>

				<div className='carditem__bottom'>
					<div className='carditem__description'>
						{description}
						{anchor && (
							<a className='terms' href='none'>
								{anchor}
							</a>
						)}
					</div>

					<button className='carditem__button'>{buttontext}</button>
				</div>
			</div>
		</div>
	);
}

export default CardItem;
