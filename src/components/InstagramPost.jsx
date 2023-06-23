import { InstagramEmbed } from 'react-social-media-embed';

const InstagramPost = ({instaURL}) => {


  return (
    <div>
  <InstagramEmbed url={instaURL} width={600} height={800} />
</div>
  )
}

export default InstagramPost