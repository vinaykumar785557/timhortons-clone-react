import React from 'react';
import TextField from '@mui/material/TextField';
import '../styles/SignIn.css';
import { KeyboardArrowDown, Language } from '@mui/icons-material';
import { useHistory } from 'react-router-dom';
function SignIn() {
	const history = useHistory();
	return (
		<div className='signin'>
			<img
				src='https://cdn.sanity.io/images/czqk28jt/prod_th_ca/713e66f361f3c804035c0a8b537c097a1eafa6f3-1440x1800.png?w=1077&q=40&fit=max&auto=format'
				alt='signinposter'
				className='signin__leftside__image'></img>

			<div className='signin__rightside'>
				<img
					onClick={() => history.push('/')}
					src='https://play-lh.googleusercontent.com/a8d04yakAw8UIk3wJDGlGSyBOUlDOe-45ptgdQwWi2mhNjSKnxl7TFFRhQjqVx8QcK0'
					alt=''
					className='signin__rightside__image'
				/>
				<div className='signin__rightside__card'>
					<div className='sign'>
						<div className='sign__left'>Sign Up</div>
						<div className='sign__right'>Sign In</div>
					</div>

					<div className='inputfield'>
						<TextField
							fullWidth
							id='outlined-basic'
							label='Email Address *'
							variant='outlined'
						/>
					</div>

					<div className='signin__button'>
						<button>Sign In</button>
					</div>

					<div className='language'>
						<Language className='icon' />
						<p>English (CA) </p>
						<KeyboardArrowDown />
					</div>
				</div>
			</div>
		</div>
	);
}

export default SignIn;
