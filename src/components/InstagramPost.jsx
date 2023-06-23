import { InstagramEmbed } from 'react-social-media-embed';

const InstagramPost = ({instaURL}) => {


  return (
    <div>
  <InstagramEmbed url={instaURL} height={460} />
</div>
  )
}

export default InstagramPost