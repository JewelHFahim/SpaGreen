import HeaderSection from "./Header/HeaderSection";
import "./Home.css";
import Services from "./Services/Services";
import ClientReview from "./clientreview/ClientReview";
import Experience from "./experience/Experience";
import Founder from "./founder/Founder";
import OurWorks from "./ourworks/OurWorks";
import Summery from "./summery/Summery";
import Technologies from "./technologies/technologies";
import ScrollToTopButton from "../../utils/scroll-btn/SrollTopBtn";

const Home = () => {

  return (
    <div className="home-container">
      <HeaderSection />
      <Summery />
      <Experience />
      <Services />
      <Technologies />
      <Founder />
      <ClientReview />
      <OurWorks />
      <ScrollToTopButton/>
    </div>
  );
};

export default Home;
