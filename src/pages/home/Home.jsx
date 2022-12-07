import Featured from "../../components/featured/Featured";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Navbar from "../../components/navbar/Navbar";
import PropertyList from "../../components/propertyList/PropertyList";
import About from "../about/About";
import Feature from "../feature/Feature";
import "./home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      {/* <Header/> */}

      <div className="landing">
        <div className="land-left">
          <div className="land-details">
              <p>Welcome,</p>
              <h2>
              We’ll take you there
              </h2>
              <span> We are your preferred travel partners!!</span>
          </div>
        </div>
        <div className="land-right">
          <div className="reach-us">
          <form action="post" method="POST">
            <div className="form-control-new"> 
                <div className="top-side-new">
                    <h2 >Send us a message!</h2>
                    <p>Contact us to get the best offer from our agents!</p>
                </div>
                <div className="middle-side">
                    <div className="form-item-new">
                        <label htmlFor="username" >Name</label>
                        <input type="text" />
                    </div>
                    <div className="form-item-new">
                        <label htmlFor="username">Email</label>
                        <input type="password" />
                    </div>
                    <div className="form-item-new">
                        <label htmlFor="username">Message</label>
                        <input type="textarea" />
                    </div>
                </div>
                
                <button className="btnLog" type="submit" >Login</button>

                {/* <div className="footer-side-new">
                    <p>Don't have account? <a href="/register">Register</a></p>
                </div> */}
            </div>
          </form>
          </div>
          <div className="next-border">

          </div>
        </div>
      </div>
      
      <div className="homeContainer">
        {/* <Featured/> */}
        {/* <h1 className="homeTitle">Browse by property type</h1> */}
        {/* <PropertyList/> */}
        {/* <h1 className="homeTitle">Homes guests love</h1>
        <FeaturedProperties/> */}
        {/* <MailList/> */}
        {/* <About/> */}
        <About/>
        <Feature/>
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
