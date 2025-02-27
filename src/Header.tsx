import { Img } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import './Header.css';

const Header = () => {
    return (
        <header style={{ backgroundImage: 'url(./img/Gyoson_Header_1500x500.jpg)' ,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
            }}className="Header">

            <div>.</div>

            <div className="Header1">
                <nav >
                    <Link to="/">
                        <Img src="/img/Gyoson_icon_png.png" width={75} height={75} />
                    </Link>
                </nav>
            </div>

            
            <div className="Header2">
                <div className="Header_left">
                    
                    <div className="Header_Home" >
                        <nav >
                            <Link to="/">HOME</Link>
                        </nav>
                    </div>
                    <div className="Header_Media">
                        <nav>
                            <Link to="/URL">WORK</Link>
                        </nav>
                    </div>
                    <div className="Header_Comments">
                        <nav >
                            <Link to="/Comments">COMMENTS</Link>
                        </nav>
                    </div>
                </div>


                <div className="Header_right">
                    <div className="Header_Youtube">
                        <a href="https://www.youtube.com/@gyoson_official" target="_blank" >
                            <Img src="/img/logo-youtube.svg" width={25} height={25} />
                        </a>
                    </div>
                    <div className="Header_inst">
                        <a href="https://www.instagram.com/gyoson__/" target="_blank" >
                            <Img src="/img/logo-instagram.svg" width={25} height={25} />
                        </a>
                    </div>
                    <div className="Header_Twitter">
                        <a href="https://x.com/gyoson_/" target="_blank" >
                            <Img src="/img/logo-twitter.svg" width={25} height={25} />
                        </a>
                    </div>
                </div>
            </div>

           

            <a href="https://www.youtube.com/watch?v=g6iZejHDFKQ">Tohma - Eureka (Full Album)</a>

           
        </header>
    );
  };
  
  export default Header;