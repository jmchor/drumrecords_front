import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';
import Boxcard from '../components/Boxcard';


const AdminPanel = () => {
	return (
		<div className='flex justify-center panel'>
			<div className='flex justify-center items-center'>
				<Box className='flex justify-center items-center flex-wrap'>
					<Boxcard path={'/new-record'} label={"/images/create.png"} />
					<Boxcard path={'/update-record'} label={"/images/update.png"} />
					<Boxcard path={'/delete-record'} label={"/images/destroy.png"} />
					<Boxcard path={'/update-profile'} label={"/images/profileNew.png"} />
				</Box>
			</div>
		</div>
	);
};

export default AdminPanel;
