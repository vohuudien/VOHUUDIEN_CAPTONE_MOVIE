import Banner from "../components/Banner";
import Cinema from "../components/Cinema";
import MovieShowing from "../components/MovieShowing";
import Header from "components/Header";
import Footer from "components/Footer";

const Home = () => {
  return (
    <div className="bg-all">
      <Header />
      <Banner />
      <MovieShowing />
      <Cinema/>
      <Footer />
    </div>
  );
};

export default Home;
