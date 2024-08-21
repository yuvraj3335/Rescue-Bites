import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/styles";
import { categoriesData, productData } from "../../static/data";
import {
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { BiMenuAltLeft } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import DropDown from "./DropDown";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";
import Cart from "../cart/Cart";
import Wishlist from "../Wishlist/Wishlist";
import { RxCross1 } from "react-icons/rx";

const Header = ({ activeHeading }) => {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const { isSeller } = useSelector((state) => state.seller);
  const { wishlist } = useSelector((state) => state.wishlist);
  const { cart } = useSelector((state) => state.cart);
  const { allProducts } = useSelector((state) => state.products);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState(null);
  const [active, setActive] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [openWishlist, setOpenWishlist] = useState(false);
  const [open, setOpen] = useState(false);

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    const filteredProducts =
      allProducts &&
      allProducts.filter((product) =>
        product.name.toLowerCase().includes(term.toLowerCase())
      );
    setSearchData(filteredProducts);
  };

  window.addEventListener("scroll", () => {
    if (window.scrollY > 70) {
      setActive(true);
    } else {
      setActive(false);
    }
  });

  return (
    <>
      <div className={`${styles.section}`}>
        <div className="hidden 800px:h-[50px] 800px:my-[20px] 800px:flex items-center justify-between">
          <div>
            <Link to="/">
            <img
  src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8OEBAODxASDw0WEhAPEA4QEA8PEBUPFRIWFhURFRUYHCggGBolHxMVIjEjKikrMDouFx8zODMtNygtLisBCgoKDg0OGhAQGS0lHSUtLy0tLy0uLystKy0tLystLy0tNS0rLS8tMy0tLS0rKy0tLS0rNy0uLSstNS0tLS0tLf/AABEIALQAtAMBIgACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAABgcEBQECAwj/xAA/EAABAwIEAwUFBAYLAAAAAAABAAIDBBEFBhIhEzFBByIyUWEUI3GBkUJSocEVRYKEk8QIFhc2VGKSs9Lh8P/EABoBAQADAQEBAAAAAAAAAAAAAAABAgMEBQb/xAAmEQEAAgECBgICAwAAAAAAAAAAAQIRAwQFEiExQVETYSJxFDKh/9oADAMBAAIRAxEAPwC8UREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREHVYddicFOA6aWOIE2Bke1gP1XOKVYghlmd4WRveQPJov+S+csUxKWrlfUTu1SONyb7NHRo8gPJZ3vyPT4bw6d5M9cRD6QpKyKduuKRkrDycxzXNPzC8q7FKentx54ob8uJIyO/wBSqxy5gFRQ00FfBOBUTvp28F2rgmGZ2lrXBp3cNYffppIHrgdoWXm0zonNklqquXiSTPf3nENaN7DZjL9Px2UzaYrnCdPY6V9x8XydPePS46apZK0Pje2Rh5Oa4OB+YXsFQmQMalo62JoJ4Mr2RSRX2Os2Y/4guBv5X81fgU0vzQx3+xnaanJM5iesS7IiKzhEREHW6KI/2kYV/iHfwJ/+C2OEZsoK12iCoa6TpG4Ojcfg14BPyVYtE9pb32utSM2pMR+pb9ERWYCIiAiIgIiICIiAiIgxaynbNG+J4ux7Sxw8wRYqiXZSkir46Cok4Mb3EMqS3uvHS3TUdha+xd162/mfN9DhXC9tmMPF18O0csl9GnV4Gm3jatCc85exQeyPqopNZs1s0U8I1ekj2AA+W91W9Is7tjv77Xmiva3+fb0lyhTPp+B7XVObTO7jjKBwpAwP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"
  alt="logoo"
  style={{ zIndex: -1, position: 'relative' }} // Ensure position is set to a value other than static
/>
            </Link>
          </div>
          {/* search box */}
          <div className="w-[50%] relative">
            <input
              type="text"
              placeholder="Search Product..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="h-[40px] w-full px-2 border-[#3957db] border-[2px] rounded-md"
            />
            <AiOutlineSearch
              size={30}
              className="absolute right-2 top-1.5 cursor-pointer"
            />
            {searchData && searchData.length !== 0 ? (
              <div className="absolute min-h-[30vh] bg-slate-50 shadow-sm-2 z-[9] p-4">
                {searchData &&
                  searchData.map((i, index) => {
                    return (
                      <Link to={`/product/${i._id}`}>
                        <div className="w-full flex items-start-py-3">
                          <img
                            src={`${i.images[0]?.url}`}
                            alt=""
                            className="w-[40px] h-[40px] mr-[10px]"
                          />
                          <h1>{i.name}</h1>
                        </div>
                      </Link>
                    );
                  })}
              </div>
            ) : null}
          </div>

          <div className={`${styles.button}`}>
            <Link to={`${isSeller ? "/dashboard" : "/shop-create"}`}>
              <h1 className="text-[#fff] flex items-center">
                {isSeller ? "Go Dashboard" : "Become Seller"}{" "}
                <IoIosArrowForward className="ml-1" />
              </h1>
            </Link>
          </div>
        </div>
      </div>
      <div
        className={`${
          active === true ? "shadow-sm fixed top-0 left-0 z-10" : null
        } transition hidden 800px:flex items-center justify-between w-full bg-[#3321c8] h-[70px]`}
      >
        <div
          className={`${styles.section} relative ${styles.noramlFlex} justify-between`}
        >
          {/* categories */}
          <div onClick={() => setDropDown(!dropDown)}>
            <div className="relative h-[60px] mt-[10px] w-[270px] hidden 1000px:block">
              <BiMenuAltLeft size={30} className="absolute top-3 left-2" />
              <button
  className="w-full flex justify-between items-center pl-10 bg-blue font-sans text-lg font-[500] select-none rounded-t-md py-4" // Use padding for variable height
>
  All Categories
</button>


              <IoIosArrowDown
                size={20}
                className="absolute right-2 top-4 cursor-pointer"
                onClick={() => setDropDown(!dropDown)}
              />
              {dropDown ? (
                <DropDown
                  categoriesData={categoriesData}
                  setDropDown={setDropDown}
                />
              ) : null}
            </div>
          </div>
          {/* navitems */}
          <div className={`${styles.noramlFlex}`}>
            <Navbar active={activeHeading} />
          </div>

          <div className="flex">
            <div className={`${styles.noramlFlex}`}>
              <div
                className="relative cursor-pointer mr-[15px]"
                onClick={() => setOpenWishlist(true)}
              >
                <AiOutlineHeart size={30} color="rgb(255 255 255 / 83%)" />
                <span className="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
                  {wishlist && wishlist.length}
                </span>
              </div>
            </div>

            <div className={`${styles.noramlFlex}`}>
              <div
                className="relative cursor-pointer mr-[15px]"
                onClick={() => setOpenCart(true)}
              >
                <AiOutlineShoppingCart
                  size={30}
                  color="rgb(255 255 255 / 83%)"
                />
                <span className="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
                  {cart && cart.length}
                </span>
              </div>
            </div>

            <div className={`${styles.noramlFlex}`}>
              <div className="relative cursor-pointer mr-[15px]">
                {isAuthenticated ? (
                  <Link to="/profile">
                    <img
                      src={`${user?.avatar?.url}`}
                      className="w-[35px] h-[35px] rounded-full"
                      alt=""
                    />
                  </Link>
                ) : (
                  <Link to="/login">
                    <CgProfile size={30} color="rgb(255 255 255 / 83%)" />
                  </Link>
                )}
              </div>
            </div>

            {/* cart popup */}
            {openCart ? <Cart setOpenCart={setOpenCart} /> : null}

            {/* wishlist popup */}
            {openWishlist ? (
              <Wishlist setOpenWishlist={setOpenWishlist} />
            ) : null}
          </div>
        </div>
      </div>

      {/* mobile header */}
      <div
        className={`${
          active === true ? "shadow-sm fixed top-0 left-0 z-10" : null
        }
      w-full h-[60px] bg-[#fff] z-50 top-0 left-0 shadow-sm 800px:hidden`}
      >
        <div className="w-full flex items-center justify-between">
          <div>
            <BiMenuAltLeft
              size={40}
              className="ml-4"
              onClick={() => setOpen(true)}
            />
          </div>
          <div>
            <Link to="/">
              <img
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8OEBAODxASDw0WEhAPEA4QEA8PEBUPFRIWFhURFRUYHCggGBolHxMVIjEjKikrMDouFx8zODMtNygtLisBCgoKDg0OGhAQGS0lHSUtLy0tLy0uLystKy0tLystLy0tNS0rLS8tMy0tLS0rKy0tLS0rNy0uLSstNS0tLS0tLf/AABEIALQAtAMBIgACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAABgcEBQECAwj/xAA/EAABAwIEAwUFBAYLAAAAAAABAAIDBBEFBhIhEzFBByIyUWEUI3GBkUJSocEVRYKEk8QIFhc2VGKSs9Lh8P/EABoBAQADAQEBAAAAAAAAAAAAAAABAgMEBQb/xAAmEQEAAgECBgICAwAAAAAAAAAAAQIRAwQFEiExQVETYSJxFDKh/9oADAMBAAIRAxEAPwC8UREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREHVYddicFOA6aWOIE2Bke1gP1XOKVYghlmd4WRveQPJov+S+csUxKWrlfUTu1SONyb7NHRo8gPJZ3vyPT4bw6d5M9cRD6QpKyKduuKRkrDycxzXNPzC8q7FKentx54ob8uJIyO/wBSqxy5gFRQ00FfBOBUTvp28F2rgmGZ2lrXBp3cNYffppIHrgdoWXm0zonNklqquXiSTPf3nENaN7DZjL9Px2UzaYrnCdPY6V9x8XydPePS46apZK0Pje2Rh5Oa4OB+YXsFQmQMalo62JoJ4Mr2RSRX2Os2Y/4guBv5X81fgU0vzQx3+xnaanJM5iesS7IiKzhEREHW6KI/2kYV/iHfwJ/+C2OEZsoK12iCoa6TpG4Ojcfg14BPyVYtE9pb32utSM2pMR+pb9ERWYCIiAiIgIiICIiAiIgxaynbNG+J4ux7Sxw8wRYqiXZSkir46Cok4Mb3EMqS3uvHS3TUdha+xd162/mfN9DhXC9tmMPF18O0csl9GnV4Gm3jatCc85exQeyPqopNZs1s0U8I1ekj2AA+W91W9Is7tjv77Xmiva3+fb0lyhTPp+B7XVObTO7jjKBwpAwP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"
                alt="logoo"
                className="mt-3 cursor-pointer"
              />
            </Link>
          </div>
          <div>
            <div
              className="relative mr-[20px]"
              onClick={() => setOpenCart(true)}
            >
              <AiOutlineShoppingCart size={30} />
              <span class="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px]  leading-tight text-center">
                {cart && cart.length}
              </span>
            </div>
          </div>
          {/* cart popup */}
          {openCart ? <Cart setOpenCart={setOpenCart} /> : null}

          {/* wishlist popup */}
          {openWishlist ? <Wishlist setOpenWishlist={setOpenWishlist} /> : null}
        </div>

        {/* header sidebar */}
        {open && (
          <div
            className={`fixed w-full bg-[#0000005f] z-20 h-full top-0 left-0`}
          >
            <div className="fixed w-[70%] bg-[#fff] h-screen top-0 left-0 z-10 overflow-y-scroll">
              <div className="w-full justify-between flex pr-3">
                <div>
                  <div
                    className="relative mr-[15px]"
                    onClick={() => setOpenWishlist(true) || setOpen(false)}
                  >
                    <AiOutlineHeart size={30} className="mt-5 ml-3" />
                    <span class="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px]  leading-tight text-center">
                      {wishlist && wishlist.length}
                    </span>
                  </div>
                </div>
                <RxCross1
                  size={30}
                  className="ml-4 mt-5"
                  onClick={() => setOpen(false)}
                />
              </div>

              <div className="my-8 w-[92%] m-auto h-[40px relative]">
                <input
                  type="search"
                  placeholder="Search Product..."
                  className="h-[40px] w-full px-2 border-[#3957db] border-[2px] rounded-md"
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
                {searchData && (
                  <div className="absolute bg-[#fff] z-10 shadow w-full left-0 p-3">
                    {searchData.map((i) => {
                      const d = i.name;

                      const Product_name = d.replace(/\s+/g, "-");
                      return (
                        <Link to={`/product/${Product_name}`}>
                          <div className="flex items-center">
                            <img
                              src={i.image_Url[0]?.url}
                              alt=""
                              className="w-[50px] mr-2"
                            />
                            <h5>{i.name}</h5>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>

              <Navbar active={activeHeading} />
              <div className={`${styles.button} ml-4 !rounded-[4px]`}>
                <Link to="/shop-create">
                  <h1 className="text-[#fff] flex items-center">
                    Become Seller <IoIosArrowForward className="ml-1" />
                  </h1>
                </Link>
              </div>
              <br />
              <br />
              <br />

              <div className="flex w-full justify-center">
                {isAuthenticated ? (
                  <div>
                    <Link to="/profile">
                      <img
                        src={`${user.avatar?.url}`}
                        alt=""
                        className="w-[60px] h-[60px] rounded-full border-[3px] border-[#0eae88]"
                      />
                    </Link>
                  </div>
                ) : (
                  <>
                    <Link
                      to="/login"
                      className="text-[18px] pr-[10px] text-[#000000b7]"
                    >
                      Login /
                    </Link>
                    <Link
                      to="/sign-up"
                      className="text-[18px] text-[#000000b7]"
                    >
                      Sign up
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
