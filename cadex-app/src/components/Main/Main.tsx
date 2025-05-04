import YouTube from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import { InfoSection, LessSection, MainSection, TextUnderHeading, VideoContainer } from '../styled';

export default function Main() {
  return (
    <>
      <MainSection>
        <div className='main_text'>
          <h1>
            Most important
            <br />
            title on the page
          </h1>

          <TextUnderHeading>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum ultricies, sem urna convallis metus, vel suscipit nibh lacus tincidunt ante
          </TextUnderHeading>
        </div>

        <VideoContainer>
      <YouTube
        id="dQw4w9WgXcQ"
        title="Rick Roll"
        noCookie
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%'
        }}
      />
    </VideoContainer>
      </MainSection>

      <InfoSection>
        <div className='info_text'>
          <h1>
            Also very important title
          </h1>
          <p>map</p>
        </div>

        <a href='/contact' className='app_contact'>Contact us</a>
      </InfoSection>

      <LessSection>
        <h1>
          Less important title</h1>
        <a href='/contact' className='app_contact'>Contact us</a>
      </LessSection>
    </>
  );
}