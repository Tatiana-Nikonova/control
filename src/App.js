import * as React from 'react';
import { Outlet, Link, HashRouter} from 'react-router-dom';
import otrok from './img/otrok.jpg';
import valentina from './img/Valentina.jpg';
import andrej from './img/Andrej.jpg';
import vasilij from './img/Vasilij.jpg';
import serafim from './img/Serafim.jpg';
import car from './img/Car.jpg';

const NewApp = (props) => {
	return  <HashRouter basename={process.env.PUBLIC_URL}>
		 <Provider store={store}>
		 <div className="wrap">
	<header className="header">
		<div className="header__icon">
			<img src={car} />
		</div>
		<div className="header__icon">
			<img src={andrej} />
		</div>
		<div className="header__icon">
			<img src={otrok} />
		</div>
		<div className="header__icon">
			<img src={valentina} />
		</div>
		<div className="header__icon">
			<img src={vasilij} />
		</div>
		<div className="header__icon">
			<img src={serafim} />
		</div>
	</header>
	<nav>
		<Link to="/invoices">Молитвы</Link> 
		<Link to="/expenses">Помяник</Link> 
	</nav>
	<Outlet />
</div>
		 </Provider>
	  </HashRouter>
  }

// // export default function App() {
// //   return (
// // 	<div className="wrap">
// // 	<header className="header">
// // 		<div className="header__icon">
// // 			<img src={car} />
// // 		</div>
// // 		<div className="header__icon">
// // 			<img src={andrej} />
// // 		</div>
// // 		<div className="header__icon">
// // 			<img src={otrok} />
// // 		</div>
// // 		<div className="header__icon">
// // 			<img src={valentina} />
// // 		</div>
// // 		<div className="header__icon">
// // 			<img src={vasilij} />
// // 		</div>
// // 		<div className="header__icon">
// // 			<img src={serafim} />
// // 		</div>
// // 	</header>
// // 	<nav>
// // 		<Link to="/invoices">Молитвы</Link> 
// // 		<Link to="/expenses">Помяник</Link> 
// // 	</nav>
// // 	<Outlet />
// // </div>
// //   );
// }