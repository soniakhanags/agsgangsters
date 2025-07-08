import './App.css';
import Navbar from './Components/navbar/Navbar';
import Hero from './Components/hero/Hero';
import Furniture from './Components/furniture/Furniture';
import About from "./Components/about/About"; 
import Blogs from './Components/blogs/Blogs';
import Feedback from './Components/feedback/Feedback';
import ContactUs from './Components/contactus/ContactUs';
import Footer from './Components/footer/Footer';
function App() {
  const navoption = {
    home: "Home",
    about: "About",
    furniture: "Furniture",
    blogs: "Blogs",     
    contact: "Contact Us",
    login: "Login"
  };

  return (
    <div className="App">
      <Navbar navlinks={navoption} />
      <Hero /> 
      <Furniture/>
      <About />
      <Blogs/>
      <Feedback/>
      <ContactUs/>
      <Footer/>
    </div>
  );
}

export default App;
