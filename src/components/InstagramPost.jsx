import { InstagramEmbed } from 'react-social-media-embed';
import { useState } from 'react';
import Button from '@mui/material/Button';

const InstagramPost = ({ instaURL }) => {
	const [isVideoExpanded, setIsVideoExpanded] = useState(false);

	const handleToggleSize = () => {
		setIsVideoExpanded(!isVideoExpanded);
	};

	const videoClassName = isVideoExpanded ? 'expanded' : '';

	return (
		<div onClick={handleToggleSize} className='p-5'>
			<Button className='enlarge-button ' onClick={handleToggleSize}>
				{isVideoExpanded ? 'Shrink Video' : 'Enlarge Video'}
			</Button>
			<div className='video-container flex justify-center content-center items-center mt-2'>
      <InstagramEmbed url={instaURL} className={isVideoExpanded ? 'expanded' : 'shrink'} />
			</div>
		</div>
	);
};

export default InstagramPost;
