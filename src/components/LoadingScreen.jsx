import { useState, useEffect } from 'react';
import { PacmanLoader } from 'react-spinners';
import { browserName, browserVersion } from 'react-device-detect';

const LoadingScreen = ({ message, setMessage }) => {
	useEffect(() => {
		const updateMessage = (text, delay) =>
			new Promise((resolve) => {
				setTimeout(() => {
					setMessage(text);
					resolve();
				}, delay);
			});

		const showMessages = async () => {
			await updateMessage('So, how is your day going?...', 4000);
			await updateMessage('This might take a moment...', 3000);
			await updateMessage(`So, you're using ${browserName} version ${browserVersion}, huh? Cool stuff.`, 2000);
			await updateMessage('*whistles in Pacman*', 3000);
			await updateMessage('Almost there...', 4000);
			await updateMessage('What do you call a magic dog?', 3000);
			await updateMessage('A Labracadabrador.', 3000);
			await updateMessage('I know, I know, I\'m hilarious.', 4000);
			await updateMessage('Just a few more seconds...', 5000);
			await updateMessage('I\'m sure you\'re getting bored by now...', 3000);
			await updateMessage('I\'m sorry, I\'m doing my best...', 7000);
			await updateMessage('I\'m just a simple loading screen...', 3000);
		};

		showMessages();

		return () => {
			clearTimeout();
		};
	}, []);

	return (
		<section id='main-loader' className='flex justify-center items-center w-in '>
			<div id='main-section' className='p-4 my-4 flex flex-col gap-4 justify-center items-center w-100'>
				<PacmanLoader color='#1976D2' size={30} />

				<p>{message}</p>
			</div>
		</section>
	);
};

export default LoadingScreen;
