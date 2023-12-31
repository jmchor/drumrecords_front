import { useState, useEffect } from 'react';
import InstagramPost from '../components/InstagramPost.jsx';
import rawPosts from '../drum_collections.json';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';
import axios from 'axios';
import Selector from '../components/Selector.jsx';
import LoadingScreen from '../components/LoadingScreen.jsx';

const AllRecords = () => {
	const API = import.meta.env.VITE_API;

	const [originalRecordCollection, setOriginalRecordCollection] = useState(null);
	const [recordCollection, setRecordCollection] = useState(null);
	const [isFiltered, setIsFiltered] = useState(false);
	const [selectedCategory, setSelectedCategory] = useState('');
	const [message, setMessage] = useState('Spinning up the servers...');
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setIsLoading(true);

		axios
			.get(`${API}/records`)
			.then((response) => {
				setOriginalRecordCollection(response.data);
				setRecordCollection(response.data);
				setIsLoading(false);
				setMessage('Spinning up the servers...');
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	// Filter the record collections by category
	useEffect(() => {
		if (recordCollection && selectedCategory) {
			let filteredRecords;
			if (selectedCategory === 'Clear') {
				filteredRecords = recordCollection;
			} else {
				filteredRecords = recordCollection.filter((record) => record.name === selectedCategory);
			}
			setRecordCollection(filteredRecords);
			setIsFiltered(true);
		}
	}, [selectedCategory, originalRecordCollection]);

	// Handle category change
	const handleCategoryChange = (category) => {
		setSelectedCategory(category);
	};

	if (isLoading) {
		return <LoadingScreen message={message} setMessage={setMessage} />;
	}

	if (recordCollection && originalRecordCollection) {
		return (
			<div className='flex justify-center flex-col items-center'>
				<Selector
					onCategoryChange={handleCategoryChange}
					recordCollection={originalRecordCollection}
					setRecordCollection={setRecordCollection}
				/>
				<Box className='flex justify-center items-center flex-wrap w-3/4'>
					{recordCollection.map((collection) => {
						return (
							<Box key={collection._id} className='flex justify-center items-center flex-wrap'>
								{collection.records.map((record) => (
									<Box className='mt-3 px-2' key={record._id}>
										<Card>
											<CardActionArea>
												<CardContent>
													<Box className='flex justify-center items-center flex-col'>
														<InstagramPost instaURL={record.url} />
													</Box>
												</CardContent>
											</CardActionArea>
										</Card>
									</Box>
								))}
							</Box>
						);
					})}
				</Box>
			</div>
		);
	}
};

export default AllRecords;
