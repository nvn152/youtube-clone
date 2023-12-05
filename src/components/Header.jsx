import { useState } from "react";
import { AppContext, useVideo } from "../context/contextapi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Loader from "../shared/Loader";

import ytLogo from "../../public/images/yt-logo.png";
import ytLogoMobile from "../../public/images/yt-logo-mobile.png";

import { SlMenu } from "react-icons/sl";
import { CgClose } from "react-icons/cg";

function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const { isLoading, mobileMenu, setMobileMenu } = useVideo();
  const navigate = useNavigate();

  function searchQueryHandler(e) {
    if (
      (e?.key === "Enter" || e === "searchButton") &&
      searchQuery?.length > 0
    ) {
      navigate(`/searchResult/${searchQuery}`);
    }
  }

  function mobileMenuToggle() {
    setMobileMenu(!mobileMenu);
  }

  const { pathname } = useLocation();
  const pageName = pathname?.split("/")?.filter(Boolean)?.[0];

  return (
    <div className="sticky top-0 z-10 flex flex-row items-center justify-between h-14 px-4 md:px-5 bg-white dark:bg-black">
      {isLoading && <Loader />}

      <div className="flex h-5 items-center ">
        {pageName !== "video" && (
          <div
            className="flex md:hidden md:mr-6 cursor-pointer items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]"
            onClick={mobileMenuToggle}
          >
            {mobileMenu ? (
              <CgClose className="text-white text-xl " />
            ) : (
              <SlMenu className="text-white text-xl " />
            )}
          </div>
        )}

        <Link to="/" className="flex h-5 items-center">
          <img
            className="h-full hidden dark:md:block"
            src={ytLogo}
            alt="Youtube Logo"
          />
          <img
            className="h-full md:hidden "
            src={ytLogoMobile}
            alt="Youtube Logo"
          />
        </Link>
      </div>
    </div>
  );
}

export default Header;
