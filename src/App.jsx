import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';

// Pages

import Home from './pages/Home';

function App() {
	return (
		<>
			<div className='App'>
				<main id='main-content' className='p-0'>
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
