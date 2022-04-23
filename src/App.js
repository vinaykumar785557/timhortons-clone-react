import './App.css';
import Header from './components/Header';
import LocationFooter from './components/LocationFooter';
import Menu from './components/Menu';

function App() {
	return (
		<div className='app'>
			<Header />
			<Menu />
			<LocationFooter />
		</div>
	);
}

export default App;
