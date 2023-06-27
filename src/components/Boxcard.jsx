import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';

const Boxcard = ({path, label}) => {
  return (
    <Box sx={{width: 300, height: 300}} minWidth='360px' className='mt-3 px-2'>
					<Card sx={{width: 300, height: 300}} >
						<CardActionArea sx={{width: 300, height: 300}} href={path} >
							<CardContent sx={{width: 300, height: 300}} className='flex justify-center items-center'>
								<Box className='flex justify-center items-center flex-col text-center'>
									<img src={label} alt={label} />
								</Box>
							</CardContent>
						</CardActionArea>
					</Card>
				</Box>
  )
}

export default Boxcard