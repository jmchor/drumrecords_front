import { useState, useEffect } from 'react';
import axios from 'axios';
import InstagramRandomPost from '../components/InstagramRandomPost.jsx';


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
				<InstagramRandomPost instaURL={randomRecord.url} />
			</div>
		);
	}
};

export default Homepage;
