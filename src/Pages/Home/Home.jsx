import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import LeftSidenav from "../Shared/LeftSidenav/LeftSidenav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSidenav from "../Shared/RightSidenav/RightSidenav";
import BreakingNews from "./BreakingNews";
import NewsCard from "./NewsCard";
 

const Home = () => {
  const news = useLoaderData()
  console.log(news)

  return (
    <div>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Navbar></Navbar>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="">
          <LeftSidenav></LeftSidenav>
        </div>
        {/* news container */}
        <div className="md:col-span-2 ">
         {
           news.map(aNews => <NewsCard key={aNews._id} aNews={aNews}></NewsCard>)
         }
        </div>
        <div className="">
          <RightSidenav></RightSidenav>
        </div>
      </div>
    </div>
  );
};

export default Home;
