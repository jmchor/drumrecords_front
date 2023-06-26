import { InstagramEmbed } from 'react-social-media-embed';

const InstagramRandomPost = ({ instaURL }) => {
	return (
		<div className='p-0'>
			<div className='p-0 video-container flex justify-center content-center items-center mt-2'>
				<InstagramEmbed url={instaURL} className='expanded'/>
			</div>
		</div>
	);
};

export default InstagramRandomPost;
