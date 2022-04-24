import './App.css';
import Header from './components/Header';
import LocationFooter from './components/LocationFooter';
import Menu from './components/Menu';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Banner from './components/Banner';
import Rewards from './components/Rewards';
import Card from './components/Card';
import MobileApp from './components/MobileApp';
import Footer from './components/Footer';
function App() {
	return (
		<div className='app'>
			<Router>
				<Switch>
					<Route path='/menu'>
						<Header />
						<Menu />
						<Footer />
						<LocationFooter />
					</Route>
					<Route path='/signin'>
						<SignIn />
					</Route>
					<Route path='/signup'>
						<SignUp />
					</Route>
					<Route path='/'>
						<Header />
						<Banner />
						<Rewards />
						<Card />
						<MobileApp />
						<Footer />
						<LocationFooter />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
