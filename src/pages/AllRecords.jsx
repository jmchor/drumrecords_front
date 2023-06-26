
import InstagramPost from '../components/InstagramPost.jsx';
import rawPosts from '../drum_collections.json';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';

const AllRecords = () => {
	let drumCollections = Object.entries(rawPosts);




  return (
    <div>
      {drumCollections.map(([collection, items]) => (
        <div key={collection} className="py-5">

          <Box className="flex justify-center items-center flex-wrap">
            {items.map((item) => (
              <Box minWidth="360px" className="mt-3 px-2" key={item.href}>
                <Card>
                  <CardActionArea>
                    <CardContent>
                      <Box className="flex justify-center items-center flex-col">

                        <InstagramPost instaURL={item.href} />
                      </Box>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Box>
            ))}
          </Box>
        </div>
      ))}
    </div>
  );

};

export default AllRecords;
