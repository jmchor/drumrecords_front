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
import Login from './pages/Login';
import IsPrivate from './components/IsPrivate';

function App() {
	return (
		<>
			<div className='App'>
				<Navigation id='nav-bar' />
				<main className='py-5 justify-center ' id='main-content'>
					<Routes>
						<Route path='/' element={<Homepage />} />
						<Route path='/all-records' element={<AllRecords />} />
						<Route
							path='/admin'
							element={
								<IsPrivate>
									<AdminPanel />
								</IsPrivate>
							}
						/>
						<Route path='/login' element={<Login />} />
						<Route
							path='/new-record'
							element={
								<IsPrivate>
									<CreateRecord />
								</IsPrivate>
							}
						/>
						<Route
							path='/update-record'
							element={
								<IsPrivate>
									{' '}
									<UpdateRecord />
								</IsPrivate>
							}
						/>
						<Route
							path='/delete-record'
							element={
								<IsPrivate>
									{' '}
									<DeleteRecord />
								</IsPrivate>
							}
						/>
						<Route
							path='/update-profile'
							element={
								<IsPrivate>
									{' '}
									<UpdateProfile />
								</IsPrivate>
							}
						/>
					</Routes>
				</main>
			</div>
		</>
	);
}

export default App;
