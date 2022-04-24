import React from 'react';
import '../styles/Rewards.css';
function Rewards() {
	return (
		<div className='rewards'>
			<div className='rewards__text'>
				<h3>REVEAL YOUR ROLLS UNTIL APRIL24TH</h3>
				<div className='rewards__terms'>
					<button>Rrroll Now</button>
					<p>
						Open only to registered Tims Rewards members in Canada, aged 13+. No
						purchase necessary. Terms and conditions apply. For full contest
						details, visit timhortons.ca. © Tim Hortons,{' '}
						{new Date().getFullYear()}.
					</p>
				</div>
			</div>
			<img className='rewards__image'
				src='https://cdn.sanity.io/images/czqk28jt/prod_th_ca/e5696a8f162f368d5fa060f7ee1e026ee7e0280d-1440x1440.png?w=750&q=40&fit=max&auto=format'
				alt='rewardsposter'
			/>
		</div>
	);
}

export default Rewards;
