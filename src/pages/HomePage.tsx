
import { Img } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import './HomePage.css';

const EnhancedSwipeableViews = autoPlay(SwipeableViews);

const styles = {
  root: {
    padding: '15px 110px',

  },
  slideContainer: {
    padding: '0 15px',

  },
  slide: {
    padding: 15,
    margin : 20,
    minHeight: 485,
    color: '#fff',
    
  },
  slide1: {
    backgroundColor: '#FEA900',
  },
  slide2: {
    backgroundColor: '#B3DC4A',
  },
  slide3: {
    backgroundColor: '#6AC0FF',
  },
}

const HomePage = () => {
    return (
      
      <div className="slide">

        
        <EnhancedSwipeableViews enableMouseEvents   interval={2000} style={styles.root} slideStyle={styles.slideContainer}>
          <div style={Object.assign({}, styles.slide, styles.slide1)} className="slide1_block">
            <nav >
              <Link to="/">
                <Img className="slide_1" src="/img/HAPPYCOMMUNE_img.jpg" width={700} height={450} />
              </Link>
            </nav>
          </div>
          <div style={Object.assign({}, styles.slide, styles.slide2)} className="slide2_block">
            <nav >
              <Link to="/URL">
                <Img className="slide_2" src="/img/GONETOWN_img.jpg" width={700} height={450} />
              </Link>
            </nav>
          </div>
          <div style={Object.assign({}, styles.slide, styles.slide3)} className="slide3_block">
            <nav >
              <Link to="/URL">
                <Img className="slide_3" src="/img/Lowland_img.jpg" width={700} height={450} />
              </Link>
            </nav>
          </div>
        </EnhancedSwipeableViews>
        

      </div>
      
    );
  };
  
  export default HomePage;