import {HomePage} from "../components/HomePage";
import SideNavbar from "../components/SideNavbar";

const Home = ({ sideNavbar }) => {
  return (
    <div className="flex w-full pt-[10px] pb-[13px] pr-0 pl-[13px] box-border">
      <SideNavbar sideNavbar={sideNavbar} />
      <HomePage />
    </div>
  );
};

export  {Home};