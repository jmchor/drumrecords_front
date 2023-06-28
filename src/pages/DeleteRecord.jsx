import axios from 'axios';
import { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';
import InstagramDeletePost from '../components/InstagramDeletePost.jsx';
import Button from '@mui/material/Button';

const DeleteRecord = () => {
	const API = import.meta.env.VITE_API;

	const [allRecords, setAllRecords] = useState([]);

	useEffect(() => {
		axios
			.get(`${API}/all-records`)
			.then((res) => {
				setAllRecords(res.data);
			})
			.catch((err) => console.log(err));
	}, []);

	const deleteRecord = (id) => {
		axios
			.post(`${API}/records/${id}`)
			.then((res) => {
				console.log(res);
				setAllRecords(allRecords.filter((record) => record._id !== id));
			})
			.catch((err) => console.log(err));
	};

	if (allRecords) {
		return (
			<div>
				<h1 className='text-3xl text-center'>Delete a Record</h1>
				<Box className='flex justify-center items-center flex-wrap gap-5'>
					{allRecords.map((record) => {
						return (
							<Box key={record._id} className='flex flex-col justify-center items-center flex-wrap gap-5'>
								<Card sx={{ width: 450 }}>
									<CardActionArea>
										<CardContent>
											<Box className='flex justify-center items-center flex-col'>
												<InstagramDeletePost instaURL={record.url} />
											</Box>
										</CardContent>
									</CardActionArea>
								</Card>
								<Button onClick={() => deleteRecord(record._id)} variant='contained'>
									Delete
								</Button>
							</Box>
						);
					})}
				</Box>
			</div>
		);
	}
};

export default DeleteRecord;
