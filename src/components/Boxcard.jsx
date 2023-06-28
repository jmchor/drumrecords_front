import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';

const Boxcard = ({path, label}) => {
  return (
    <Box maxWidth={300} sx={{width: 100, height: 100}} minWidth='60px' className='mt-3 px-2'>
					<Card sx={{width: 100, height: 100}} >
						<CardActionArea sx={{width: 100, height: 100}} href={path} >
							<CardContent sx={{width: 100, height: 100}} className='flex justify-center items-center'>
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