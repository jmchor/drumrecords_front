import React from 'react'
import { useState } from 'react'
import InstagramPost from '../components/InstagramPost.jsx'
import rawPosts from '../drum_collections.json'
import { Grid } from '@mui/material'

const Home = () => {

let drumCollections = Object.entries(rawPosts)





 return (
    <div>
      {drumCollections.map(([collection, items]) => (
        <div key={collection}>
          <h2>{collection}</h2>
            <Grid container spacing={2}>
                {items.map((item) => (
                    <Grid item xs={12} md={4} lg={4} key={item.href}>
                        <InstagramPost instaURL={item.href} />
                    </Grid>
                ))}
            </Grid>
        </div>
      ))}
    </div>
  );
};


export default Home
