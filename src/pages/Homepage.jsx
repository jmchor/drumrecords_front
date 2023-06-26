import { useState, useEffect } from 'react';
import axios from 'axios';
import InstagramRandomPost from '../components/InstagramRandomPost.jsx';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';

const Homepage = () => {
	const API = import.meta.env.VITE_API;

	const [randomRecord, setRandomRecord] = useState(null);

	useEffect(() => {
		axios
			.get(`${API}/random`)
			.then((response) => {
				console.log(response.data[0]);
				setRandomRecord(response.data[0]);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	if (randomRecord) {
		return (
			<div>
				<Box minWidth='360px' className='mt-5 px-2' key={randomRecord._id}>
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
