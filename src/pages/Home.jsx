import React from 'react'
import { useState } from 'react'
import InstagramPost from '../components/InstagramPost.jsx'
import rawPosts from '../drum_collections.json'
import tests from '../test_collection.json'
import { Grid } from '@mui/material'
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import defaultImage from '/images/vitr_drum.png'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const Home = () => {

let drumCollections = Object.entries(tests)

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const [open, setOpen] =useState(false);
const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);




 return (
    <div>
      {drumCollections.map(([collection, items]) => (
        <div key={collection}>
          <h2>{collection}</h2>
            <Grid container spacing={2}
              justifyContent="space-between">
                {items.map((item) => (
                    <Grid item xs={12} sm={6} md={4} lg={6} key={item.href}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea onClick={handleOpen}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={defaultImage}
                                    alt={item.author}
                                />

                            </CardActionArea>
                            <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <InstagramPost instaURL={item.href} />
        </Box>
      </Modal>
                        </Card>

                    </Grid>
                ))}
            </Grid>
        </div>
      ))}
    </div>
  );
};


export default Home
