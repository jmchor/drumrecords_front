const About = () => {
	return (
		<div className='about'>
			<h1 className='p-5'>Welcome to drumRecords!</h1>

			<p>
				drumRecords is a platform designed with drummers in mind. Whether you're a seasoned drummer, a beginner just
				starting out, or simply a drumming enthusiast, drumRecords is here to cater to your needs. We understand the
				challenges drummers face when it comes to finding new practice material, seeking inspiration, or figuring out
				how to play a particular section of a song. That's why I have created drumRecords – your one-stop solution for
				all things drumming.
			</p>

			<p>
				Our platform provides a seamless experience for drummers of all levels. No matter where you are on your drumming
				journey, drumRecords is packed with features that will enhance your practice sessions and broaden your musical
				horizons.
			</p>

			<p>
				One of the unique features of drumRecords is the ability to embed Instagram URLs. I've made it incredibly
				convenient for you to access a wide range of drumming videos from various sources. Our platform goes beyond what
				the Instagram API offers, allowing you to easily save and access drumming videos that inspire you. Say goodbye
				to scrolling through your Instagram feed and struggling to find that specific video you loved. With drumRecords,
				you can store and organize your favorite drumming videos with ease.
			</p>

			<p>Here's what drumRecords has to offer:</p>

			<ol>
				<li>
					<strong>Random Video Feature:</strong> Feeling adventurous and looking to try something new? drumRecords has
					got you covered! Our landing page features a random video, allowing you to discover exciting drumming content
					with just a click. It's a great way to challenge yourself and explore new techniques.
				</li>
                <br />
				<li>
					<strong>Video Collection with Sorting:</strong> Explore our extensive collection of drumming videos
					categorized by different genres, styles, or techniques. Whether you're interested in jazz, rock, funk, or any
					other genre, you can easily find videos that suit your preferences. Our sorting options make it simple to
					navigate and discover exactly what you're looking for.
				</li>
			</ol>

			<p>
				I have utilized cutting-edge technologies to ensure a smooth and enjoyable experience on drumRecords. Our
				frontend is built with React and powered by Vite, providing a fast and responsive interface. I have incorporated
				handy libraries like react-social-media-embed for easy embedding of social media links, react-device-detect for
				some fun browser detection, and react-spinners to keep loading screens engaging.
			</p>

			<p>
				I value the drumming community and acknowledge the talented artists who inspire us every day. This project is a
				labor of love, brought to life by me - if you would like to see more of my work, please visit{' '}
				<a className='text-sky-600' href='https://jmchor.dev/' target='_blank' rel='noreferrer'>
					jmchor.dev
				</a>
				. I would like to express my gratitude to Meta for their contributions to Instagram, React, and other
				technologies that make drumRecords possible. I'm also grateful to the talented drummers who share their skills
				and passion with the world.
			</p>

			<p>
				Thank you for joining me on this drumming journey. I hope drumRecords becomes your go-to resource for drumming
				inspiration, practice, and exploration. Start exploring drumRecords today and unlock a world of rhythmic
				possibilities!
			</p>

			<p>
				If you'd like to dive into the backend code powering drumRecords, please visit this{' '}
				<a className='text-slate-800' href='https://github.com/jmchor/drumrecords_back' target='_blank' rel='noreferrer'>
					<strong>GitHub repository</strong>
				</a>
				.
			</p>

            <br />
            <br />
            <br />

			<footer>
				<div>Copyright &copy; 2023 Johannes Chorzempa</div>
			</footer>
		</div>
	);
};

export default About;
