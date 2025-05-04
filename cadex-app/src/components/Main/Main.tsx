import YouTube from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

export default function Home() {
  return (
    <div>
      <section>
        <h1>Welcome!</h1>
        <div className='video_container'>
          <YouTube 
            id='dQw4w9WgXcQ' 
            title='rick roll' 
            noCookie={true} 
          />
        </div>
        <a href='/contact'>Contact Us</a>
      </section>
    </div>
  );
}