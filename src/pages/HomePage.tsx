
import { Img } from "@chakra-ui/react";

import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import './HomePage.css';

const EnhancedSwipeableViews = autoPlay(SwipeableViews);

const styles = {
  root: {
    padding: '15px 140px',

  },
  slideContainer: {
    padding: '0 15px',

  },
  slide: {
    padding: 15,
    minHeight: 485,
    color: '#fff',
    
  },
  slide1: {
    //backgroundColor: '#bca4bd',
  },
  slide2: {
    //backgroundColor: '#B3DC4A',
  },
  slide3: {
    //backgroundColor: '#6AC0FF',
  },
}

const HomePage = () => {
    return (
      <div className="Home">
        <div className="slide">
          <EnhancedSwipeableViews enableMouseEvents   interval={2000} style={styles.root} slideStyle={styles.slideContainer}>
            <div style={Object.assign({}, styles.slide, styles.slide1)} className="slide1_block">
              <a href="https://www.youtube.com/watch?v=59Fx-4WEmOk" target="_blank" >
                <Img className="slide_1" src="/img/HAPPYCOMMUNE_img.jpg" width={700} height={450} />
              </a>
            
            </div>
            <div style={Object.assign({}, styles.slide, styles.slide2)} className="slide2_block">
              <a href="https://www.youtube.com/watch?v=SOKo-1DrZO4" target="_blank" >
                <Img className="slide_2" src="/img/GONETOWN_img.jpg" width={700} height={450} />
              </a>
            </div>
            <div style={Object.assign({}, styles.slide, styles.slide3)} className="slide3_block">
              <a href="https://www.youtube.com/watch?v=rXhZx3I7MR0" target="_blank" >
                <Img className="slide_3" src="/img/Lowland_img.jpg" width={700} height={450} />
              </a>
            </div>
          </EnhancedSwipeableViews>
        </div>

        


        <div className="twi">
          <div className="twi_topic">T O P I C</div>
          <blockquote className="twitter-tweet1"><p lang="en" dir="ltr">*not for sale <a href="https://t.co/fd1XU4gbXZ">pic.twitter.com/fd1XU4gbXZ</a></p>&mdash; Gyoson (@gyoson_) <a href="https://twitter.com/gyoson_/status/1878789609192378554?ref_src=twsrc%5Etfw">January 13, 2025</a></blockquote> <script async src="https://platform.twitter.com/widgets.js?mute=1 charSet=utf-8"></script>
        </div>

      </div>
      
    );
  };
  
  export default HomePage;