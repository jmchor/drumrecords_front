
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
// Pages

import AllRecords from './pages/AllRecords';
import Homepage from './pages/Homepage';
import AdminPanel from './pages/AdminPanel';
import CreateRecord from './pages/CreateRecord';
import UpdateRecord from './pages/UpdateRecord';
import DeleteRecord from './pages/DeleteRecord';
import UpdateProfile from './pages/UpdateProfile';

function App() {
	return (
		<>
			<div className='App'>
				<Navigation id='nav-bar' />
				<main id='main-content'>
						<Routes>
							<Route path='/' element={<Homepage />} />
							<Route path='/all-records' element={<AllRecords />} />
							<Route path='/admin' element={<AdminPanel />} />
							<Route path='/new-record' element={<CreateRecord />} />
							<Route path='/update-record' element={<UpdateRecord />} />
							<Route path='/delete-record' element={<DeleteRecord />} />
							<Route path='/update-profile' element={<UpdateProfile />} />

						</Routes>
				</main>
			</div>
		</>
	);
}

export default App;
