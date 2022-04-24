import React from 'react';
import '../styles/Card.css';
import CardItem from './CardItem';
function Card() {
	return (
		<div className='card'>
			<CardItem
				title='NEW. Juicy. Savoury. Plant-based.'
				description='Get 2x the Points when you try our NEW! Harvest Breakfast Sandwich. Made with plant-based Impossible​™ sausage and a 100% Canadian freshly-cracked egg.'
				buttontext='Order Now'
				anchor='Terms apply'
				image='https://cdn.sanity.io/images/czqk28jt/prod_th_ca/94bceac9cbdd4ca91d1e47618c5b918dba9fb580-1000x500.png?w=750&q=40&fit=max&auto=format'
			/>
			<CardItem
				title='How we are making small changes that can have a big impact'
				description='Since 2019, Tims has reduced over 1 billion single-use plastics across Canada. Learn more about changes we’ve made and our long-term journey to make our packaging reusable, recyclable, or compostable. '
				buttontext='Learn More'
				anchor='Additonal details'
				image='https://cdn.sanity.io/images/czqk28jt/prod_th_ca/f761c9a6e732dac40db61caad333c97553fc4ace-1000x500.png?w=750&q=40&fit=max&auto=format'
			/>
			<CardItem
				title='Join the Tims Camps team!'
				description='Help underserved youth achieve their full potential!'
				buttontext='Explore Jobs'
				anchor='Terms apply'
				image='https://cdn.sanity.io/images/czqk28jt/prod_th_ca/c400970a766b0ca115297581fbd9a145a6a630b1-4167x2084.jpg?w=750&q=40&fit=max&auto=format'
			/>
			<CardItem
				title='NEW Roasted Hazelnut Cold Brew'
				description='Try our smooth and velvety cold brew, now available in Roasted Hazelnut and topped with espresso-infused foam.'
				buttontext='Order Now'
				anchor='Terms apply'
				image='https://cdn.sanity.io/images/czqk28jt/prod_th_ca/338ca29a18b91ab9ffbf9c785bfb152fc1eeb367-1000x500.png?w=750&q=40&fit=max&auto=format'
			/>
			<CardItem
				title='Use your Points to send Tims favourites to friends and family!'
				buttontext='Tims It Forward'
				image='https://cdn.sanity.io/images/czqk28jt/prod_th_ca/35d91f827b92167c0423e89deca27c6c1bffc5cc-1000x500.png?w=750&q=40&fit=max&auto=format'
			/>
			<CardItem
				title='Using your Points is rewarding.'
				description='Track your balance and see what Rewards are waiting!'
				buttontext='View History'
				image='https://cdn.sanity.io/images/czqk28jt/prod_th_ca/0d6babcd973f7c2e9dbcdc61fc35ad0efcffc332-1000x500.png?w=750&q=40&fit=max&auto=format'
			/>
		</div>
	);
}

export default Card;
