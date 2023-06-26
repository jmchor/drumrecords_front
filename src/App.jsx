
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
// Pages

import AllRecords from './pages/AllRecords';
import Homepage from './pages/Homepage';

function App() {
	return (
		<>
			<div className='App'>
				<Navigation id='nav-bar' />
				<main id='main-content'>
					<div>
						<Routes>
							<Route path='/' element={<Homepage />} />
							<Route path='/all-records' element={<AllRecords />} />
						</Routes>
					</div>
				</main>
			</div>
		</>
	);
}

export default App;
