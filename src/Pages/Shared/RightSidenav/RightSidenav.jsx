import {
  FaGoogle,
  FaGithub,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import qImgOne from "../../../assets/qZone1.png";
import qImgTwo from "../../../assets/qZone2.png";
import qImgThree from "../../../assets/qZone3.png";

const RightSidenav = () => {
  return (
    <div>
      <div className="p-4 space-y-3 mb-6">
        <h2 className="text-3xl">Login With</h2>
        <button className="btn btn-outline w-full">
          <FaGoogle />
          Google
        </button>
        <button className="btn btn-outline w-full">
          <FaGithub></FaGithub>
          Github
        </button>
      </div>

      <div className="p-4 mb-6">
        <h2 className="text-3xl mb-4">Find Us On</h2>
        <a className="p-4 flex items-center border rounded-t-lg" href="">
          <FaFacebookF className="mr-3"></FaFacebookF>
          Facebook
        </a>
        <a className="p-4 flex items-center border-x" href="">
          <FaTwitter className="mr-3"></FaTwitter>
          Twitter
        </a>
        <a className="p-4 flex items-center border rounded-b-lg" href="">
          <FaInstagram className="mr-3"></FaInstagram>
          Instagram
        </a>
      </div>

      {/* q-zone */}
      <div className="p-4 space-y-3 mb-6">
        <h2 className="text-3xl">Q-Zone</h2>
        <img src={qImgOne} />
        <img src={qImgTwo} />
        <img src={qImgThree} />
      </div>
    </div>
  );
};

export default RightSidenav;
