import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import InstagramRandomPost from '../components/InstagramRandomPost.jsx';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import { AuthContext } from '../context/auth.context';
import { MoonLoader } from 'react-spinners';

const Homepage = () => {
	const API = import.meta.env.VITE_API;

	const [randomRecord, setRandomRecord] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [message, setMessage] = useState('Spinning up the servers...');

	useEffect(() => {
		setIsLoading(true);
		axios
				.get(`${API}/random`)
				.then((response) => {
					console.log(response.data[0]);
					setRandomRecord(response.data[0]);
					setIsLoading(false);
					setMessage('Spinning up the servers...');
				})
				.catch((err) => {
					console.log(err);
				});
	}, []);

	if (isLoading) {
		setTimeout(() => {
			setMessage('This might take a moment ...');
			setTimeout(() => {
				setMessage('So, how is your day going? ...');
			}, 2000);
		}, 2000);

		return (
			<section id='main-loader' className="flex justify-center items-center w-in ">
				<div id='main-section' className='p-4 my-4 flex flex-col gap-4 justify-center items-center w-100'>
					<MoonLoader color='#1976D2' size={30} />

					<p>{message}</p>
				</div>
			</section>
		);
	}

	if (randomRecord) {
		return (
			<div className='flex justify-center'>
				<Box minWidth='360px' className='mt-3 px-2 w-fit' key={randomRecord._id}>
					<Card>
						<CardActionArea>
							<CardContent>
								<Box className='flex justify-center items-center flex-col'>
									<InstagramRandomPost instaURL={randomRecord.url} />
								</Box>
							</CardContent>
						</CardActionArea>
					</Card>
				</Box>
			</div>
		);
	}
};

export default Homepage;
