import { Button } from "../ui/button";
import menubar_icon from "../../assets/menu-bar.png";

const Navbar = () => {
  return (
    <div className="fixed w-full z-50 left-0 shadow-md ">
      <div className="max-w-7xl mx-auto p-4 bg-black">
        <nav className="text-white flex items-center justify-between rounded-lg px-4">
          <div>
            <img src="" alt="" />
            <h1 className="font-bold text-2xl">CURSOR</h1>
          </div>

          <div className="hidden lg:flex items-center gap-3 font-semibold">
            <p>PRICING</p>
            <p>FEATURES</p>
            <p>ENTERPRISE</p>
            <p>BLOG</p>
            <p>FORUM</p>
            <p>CAREERS</p>
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Button>Sign In</Button>
            <Button variant="secondary">Download</Button>
          </div>

          <div className="lg:hidden">
            <Button>
              <img src={menubar_icon} alt="" className="w-5" />
            </Button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
