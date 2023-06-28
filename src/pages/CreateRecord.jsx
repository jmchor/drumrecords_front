import Button from '@mui/material/Button';
import Selector from '../components/Selector';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const CreateRecord = () => {
	const API = import.meta.env.VITE_API;
	const navigate = useNavigate();

	const [url, setURL] = useState('');
	const [artist, setArtist] = useState('');
	const [selectedCategory, setSelectedCategory] = useState('');
	const [errorMessage, setErrorMessage] = useState('');

	const handleCategoryChange = (category) => {
		setSelectedCategory(category);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const newRecord = {
			url: url,
			artist: artist,
			category: selectedCategory,
		};

		console.log(newRecord);
		axios.post(`${API}/records`, newRecord).then((response) => {
			console.log(response.data);
			setURL('');
			setArtist('');
			setSelectedCategory('');
			navigate('/records');
		});
	};

	const fixedInputClass =
		'rounded-md appearance-none relative block w-full px-3 py-2 my-4 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm';

	return (
		<div className='my-3 flex justify-center'>
			<form className='flex flex-col mx-auto' onSubmit={handleSubmit}>
				<h4 className='text-2xl text-slate-600 my-3'>Create Record</h4>
				<label htmlFor='name' className='text-xl'>
					URL
				</label>
				<input
					type='text'
					id='name'
					className={fixedInputClass}
					value={url}
					onChange={(event) => setURL(event.target.value)}
				/>
				<label htmlFor='author' className='text-xl'>
					Artist
				</label>
				<input
					type='text'
					id='description'
					className={fixedInputClass}
					value={artist}
					onChange={(event) => setArtist(event.target.value)}
				/>

				<label htmlFor='categoryArray' className='text-xl'>
					Category
				</label>

				<br />

				<Selector onCategoryChange={handleCategoryChange} recordCollection={null} setRecordCollection={null} />
				<br />

				<div>
					<Button variant='contained' type='submit' className='text-xl mt-3'>
						Add
					</Button>
				</div>
			</form>
			{/* Error message */}
			<div className='my-2'>{errorMessage && <p className='text-danger'>{errorMessage}</p>}</div>
		</div>
	);
};

export default CreateRecord;
