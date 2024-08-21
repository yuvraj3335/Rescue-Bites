import React from "react";
import { AiOutlineGift } from "react-icons/ai";
import { MdOutlineLocalOffer } from "react-icons/md";
import { FiPackage, FiShoppingBag } from "react-icons/fi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BiMessageSquareDetail } from "react-icons/bi";

const DashboardHeader = () => {
  const { seller } = useSelector((state) => state.seller);
  return (
    <div className="w-full h-[80px] bg-white shadow sticky top-0 left-0 z-30 flex items-center justify-between px-4">
      <div>
        <Link to="/dashboard">
          <img
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8OEBAODxASDw0WEhAPEA4QEA8PEBUPFRIWFhURFRUYHCggGBolHxMVIjEjKikrMDouFx8zODMtNygtLisBCgoKDg0OGhAQGS0lHSUtLy0tLy0uLystKy0tLystLy0tNS0rLS8tMy0tLS0rKy0tLS0rNy0uLSstNS0tLS0tLf/AABEIALQAtAMBIgACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAABgcEBQECAwj/xAA/EAABAwIEAwUFBAYLAAAAAAABAAIDBBEFBhIhEzFBByIyUWEUI3GBkUJSocEVRYKEk8QIFhc2VGKSs9Lh8P/EABoBAQADAQEBAAAAAAAAAAAAAAABAgMEBQb/xAAmEQEAAgECBgICAwAAAAAAAAAAAQIRAwQFEiExQVETYSJxFDKh/9oADAMBAAIRAxEAPwC8UREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREHVYddicFOA6aWOIE2Bke1gP1XOKVYghlmd4WRveQPJov+S+csUxKWrlfUTu1SONyb7NHRo8gPJZ3vyPT4bw6d5M9cRD6QpKyKduuKRkrDycxzXNPzC8q7FKentx54ob8uJIyO/wBSqxy5gFRQ00FfBOBUTvp28F2rgmGZ2lrXBp3cNYffppIHrgdoWXm0zonNklqquXiSTPf3nENaN7DZjL9Px2UzaYrnCdPY6V9x8XydPePS46apZK0Pje2Rh5Oa4OB+YXsFQmQMalo62JoJ4Mr2RSRX2Os2Y/4guBv5X81fgU0vzQx3+xnaanJM5iesS7IiKzhEREHW6KI/2kYV/iHfwJ/+C2OEZsoK12iCoa6TpG4Ojcfg14BPyVYtE9pb32utSM2pMR+pb9ERWYCIiAiIgIiICIiAiIgxaynbNG+J4ux7Sxw8wRYqiXZSkir46Cok4Mb3EMqS3uvHS3TUdha+xd162/mfN9DhXC9tmMPF18O0csl9GnV4Gm3jatCc85exQeyPqopNZs1s0U8I1ekj2AA+W91W9Is7tjv77Xmiva3+fb0lyhTPp+B7XVObTO7jjKBwpAwP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"
            alt="logoo"
          />
        </Link>
      </div>
      <div className="flex items-center">
        <div className="flex items-center mr-4">
          <Link to="/dashboard/cupouns" className="800px:block hidden">
            <AiOutlineGift
              color="#555"
              size={30}
              className="mx-5 cursor-pointer"
            />
          </Link>
          <Link to="/dashboard-events" className="800px:block hidden">
            <MdOutlineLocalOffer
              color="#555"
              size={30}
              className="mx-5 cursor-pointer"
            />
          </Link>
          <Link to="/dashboard-products" className="800px:block hidden">
            <FiShoppingBag
              color="#555"
              size={30}
              className="mx-5 cursor-pointer"
            />
          </Link>
          <Link to="/dashboard-orders" className="800px:block hidden">
            <FiPackage color="#555" size={30} className="mx-5 cursor-pointer" />
          </Link>
          <Link to="/dashboard-messages" className="800px:block hidden">
            <BiMessageSquareDetail
              color="#555"
              size={30}
              className="mx-5 cursor-pointer"
            />
          </Link>
          <Link to={`/shop/${seller._id}`}>
            <img
              src={`${seller.avatar?.url}`}
              alt=""
              className="w-[50px] h-[50px] rounded-full object-cover"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
