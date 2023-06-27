import { InstagramEmbed } from 'react-social-media-embed';
import { useState } from 'react';
import Button from '@mui/material/Button';

const InstagramPost = ({ instaURL }) => {
	const [isVideoExpanded, setIsVideoExpanded] = useState(false);

	const handleToggleSize = () => {
		setIsVideoExpanded(!isVideoExpanded);
	};


	return (
		<div onClick={handleToggleSize} className=''>

			<div className='video-container flex justify-center content-center items-center mt-2'>
				<InstagramEmbed url={instaURL} className={isVideoExpanded ? 'expanded' : 'shrink'} />
			</div>
		</div>
	);
};

export default InstagramPost;
