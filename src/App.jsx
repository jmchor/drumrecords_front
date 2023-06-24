
import './App.css';
import { Routes, Route } from 'react-router-dom';

// Pages

import Home from './pages/Home';

function App() {
	return (
		<>
			<div className='App'>
				<main id='main-content' className=''>
					<div>
						<Routes>
							<Route path='/' element={<Home />} />
						</Routes>
					</div>
				</main>
			</div>
		</>
	);
}

export default App;
