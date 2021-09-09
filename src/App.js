import { HashRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Shop from './components/Shop/Shop';
import Help from './components/Help/Help';
import Cart from './components/Cart/Cart';
import Detail from './components/Detail/Detail';
import Error404 from './components/Error404/Error404';

import './App.css';
import SignInOutContainer from './components/Login';
//import Login from './components/Login/Login';
//import Register from './components/Register/Register';
import Checkout from './components/Checkout/Index';
import Company from './components/Company/Company';
import Team from './components/Team/Team';
import Our from './components/Our/Our';
import SignIn from './components/Login/SignIn';
import SignUp from './components/Register/SignUp';

function App() {
	return (
		<HashRouter>
			<div className="App">
				<Switch>
					<Route exact path="/" component={Home} />

				</Switch>
			</div>
		</HashRouter>
	);
}

export default App;
