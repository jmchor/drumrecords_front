import { useState, useEffect } from 'react';
import { Navbar, MobileNav, Typography, IconButton, Collapse } from '@material-tailwind/react';
import { AuthContext } from '../context/auth.context';
import { useContext } from 'react';
import LogoutIcon from "@mui/icons-material/Logout";
import Button from "@mui/material/Button";


const Navigation = () => {
	const [openNav, setOpenNav] = useState(false);
	const { isLoggedIn, isLoading, logOutUser } = useContext(AuthContext);

	useEffect(() => {
		window.addEventListener('resize', () => window.innerWidth >= 960 && setOpenNav(false));
	}, []);

	const navList = (
		<ul className='mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6'>
			<Typography as='li' variant='small' color='blue-gray' className='p-1 font-normal'>
				<a href='/' className='flex items-center justify-center'>
					Random Drum Record
				</a>
			</Typography>
			<Typography as='li' variant='small' color='blue-gray' className='p-1 font-normal'>
				<a href='/records' className='flex items-center justify-center'>
					All Records
				</a>
			</Typography>
			<Typography as='li' variant='small' color='blue-gray' className='p-1 font-normal'>
				<a href='/about' className='flex items-center justify-center'>
					About
				</a>
			</Typography>
			{isLoggedIn ? (<Typography as='li' variant='small' color='blue-gray' className='p-1 font-normal'>
				<a href='/admin' className='flex items-center justify-center'>
					Admin
				</a>
			</Typography>) : (<Typography as='li' variant='small' color='blue-gray' className='p-1 font-normal'>
				<a href='/login' className='flex items-center justify-center'>
					Admin
				</a>
			</Typography>) }

			{isLoggedIn && (
				<Typography as='li' variant='small' color='blue-gray' className='p-1 font-normal'>
				<Button onClick={logOutUser}>
					<LogoutIcon />
				</Button>
				</Typography>
			) }

		</ul>
	);

	return (
		<Navbar id='nav-bar' className='flex flex-col bg-slate-800 mx-auto py-2 lg:py-4'>
			<div className=' mx-auto flex items-center justify-center text-blue-gray-900'>
				<div className='hidden lg:block'>{navList}</div>

				<IconButton
					variant='text'
					className='ml-auto text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden'
					ripple={false}
					onClick={() => setOpenNav(!openNav)}
				>
					{openNav ? (
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							className='h-6 w-6'
							viewBox='0 0 24 24'
							stroke='white'
							strokeWidth={2}
						>
							<path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
						</svg>
					) : (
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-6 w-6'
							fill='none'
							stroke='white'
							strokeWidth={2}
						>
							<path strokeLinecap='round' strokeLinejoin='round' d='M4 6h16M4 12h16M4 18h16' />
						</svg>
					)}
				</IconButton>
			</div>
			<MobileNav open={openNav}>
				<div className='container mx-auto flex justify-center text-center'>{navList}</div>
			</MobileNav>
		</Navbar>
	);
};

export default Navigation;
