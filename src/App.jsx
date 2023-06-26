
import './App.css';
import { Routes, Route } from 'react-router-dom';

// Pages

import AllRecords from './pages/AllRecords';
import Homepage from './pages/Homepage';

function App() {
	return (
		<>
			<div className='App'>
				<main id='main-content' className=''>
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
