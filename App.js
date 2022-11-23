
//import { Download } from '@mui/icons-material';
import './App.css';
import Logo from './assets/Logo.svg';
import Logo1 from './assets/Illustration 1.svg';
import img1 from  './assets/Group 1216.svg';
import img2 from  './assets/Group 1215.svg';
import img3 from  './assets/Group 1217.svg';
import img4 from './assets/Illustration 2.svg';
import img5 from './assets/Group 1120.svg';
import img6 from './assets/Free.svg';
//import Features from './components/features/Features';
//import Header from './components/header/Header';
//import Navbar from './components/navbar/Navbar';
//import Download from './components/download/Download';
//import Subscribe from './components/subscribe/subscribe';
//import Faq from './components/faq/Faq';
//import Footer from './components/footer/Footer';

function App() {
      return (
    
        <div>
        <menu>
        <ul className='nav-links'>
        <img className="photo" src={Logo} alt="React Logo" />
        
            <li><a class='right' href='#'>About</a></li>
            <li><a href='#'>Features</a></li>
            <li><a href='#'>Pricing</a></li>
            <li><a href='#'>Testimonals</a></li>
            <li ><a href='#'>sign in</a></li>
            <li><a href="#" target="_blank">SIGN-UP</a></li>
          </ul> 
        </menu>

        <img className='f1' src={Logo1} alt="Illustration1" ></img>  

        <div class="text">
        <p>Want anything to be<br></br>easy with <b>LaslesVPN.</b></p>
        <p id='d2'>
          provide a network for all your need with ease and fun using LaslesVPN<br></br>
          discover interesting features from us.
          </p>
          <button id='d3'><b>Get Started</b></button>
        </div> 
        <div class='row'>
        
          <div>
          <img className='f2' src={img1} alt="contact" />
          <p id='d4'><b>90+</b></p>
          <p id='d5'>Users</p>
          </div>
          <div>
          <img className='f3' src={img2} alt="contact" />
          <p id='d6' class="special"><b>30+</b></p>
          <p id='d7' class="special">Locations</p>
          </div>
          <div>
          <img className='f4' src={img3} alt="contact" />
          <p id='d8' class="special"><b>50+</b></p>
          <p id='d9' class="special">Servers</p>
          </div>

          </div>

          <div>
          <img className='img4' src={img4} alt="Illustration 2" />
          <p class='a1'>
            <h1>We Provide Many</h1>
            <h1>Features You Can Use</h1>
            <p class='a2'>You can explore the features that we provide with fun and <br></br>have their own functions each features.<br></br>
            <img className='img5' src={img5} alt="img4"/>Powerfull online protection.<br></br>
            <img className='img5' src={img5} alt="img4"/>Internet without borders.<br></br>
            <img className='img5' src={img5} alt="img4"/>Supercharged VPN<br></br>
            <img className='img5' src={img5} alt="img4"/>No specific time limits<br></br>
            </p></p>
            <br></br>
            <br></br>
            <br></br>
          </div>
        
         <div>
         <center class='cen1'><h1>Choose Your Plan</h1></center>
         <p><center class='cen2'>Lets choose the package that is best for you and explore it happily and<br></br>cheerfully</center></p>
         </div>




         
        </div>

        
        

        
  );
};

export default App;
  