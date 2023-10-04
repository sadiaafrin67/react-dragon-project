import { useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import RightSidenav from "../Shared/RightSidenav/RightSidenav";
import Navbar from "../Shared/Navbar/Navbar";

const News = () => {
  const { id } = useParams();
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <div className="grid md:grid-cols-4">
        <div className="md:col-span-3 ">
          <h2 className="text-5xl">News Details</h2>
          <p>{id}</p>
        </div>
        <div>
          <RightSidenav></RightSidenav>
        </div>
      </div>
    </div>
  );
};

export default News;
