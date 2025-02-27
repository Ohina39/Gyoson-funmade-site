import './Footer.css';
import { Img } from "@chakra-ui/react";


const Footer = () => {
    return (
        <footer className="Footer">
            <div className="Footer1">
                <div className="Footer_left">
                    @2025 Gyoson/Funmade inc.
                </div>

                <div className="Footer_right">
                    <div className="Footer_Youtube">
                        <a href="https://www.youtube.com/@gyoson_official" target="_blank" >
                            <Img src="/img/logo-youtube.svg" width={25} height={25} />
                        </a>
                    </div>
                    <div className="Footer_inst">
                        <a href="https://www.instagram.com/gyoson__/" target="_blank" >
                            <Img src="/img/logo-instagram.svg" width={25} height={25}/>
                        </a>
                    </div>
                    <div className="Footer_Twitter">
                        <a href="https://x.com/gyoson_/" target="_blank" >
                            <Img src="/img/logo-twitter.svg" width={25} height={25} />
                        </a>
                    </div>
                </div>
            </div>
                
        </footer>
        
    );
  };
  
  export default Footer;