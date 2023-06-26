import { InstagramEmbed } from 'react-social-media-embed';
import { useState } from 'react';
import Button from '@mui/material/Button';

const InstagramPost = ({ instaURL }) => {
	return (
		<div className='p-5'>
			<div className='video-container flex justify-center content-center items-center mt-2'>
				<InstagramEmbed url={instaURL} className='expanded' />
			</div>
		</div>
	);
};

export default InstagramPost;
