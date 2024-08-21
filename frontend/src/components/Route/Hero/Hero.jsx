import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";

const Hero = () => {
  return (
    <div
  style={{
   // backgroundImage:
  //    "url(https://blog.ipleaders.in/wp-content/uploads/2016/07/retail-top-img.jpg)",
    backgroundSize: "cover", // Ensures the image covers the whole area
    backgroundPosition: "center", // Centers the image
    backgroundRepeat: "no-repeat", // Ensures the image doesn't repeat
    height: "400px", // Set a specific height (adjust as needed)
    width: "100%", // Full width
  }}
>
      <div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
        <h1
          className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[#3d3a3a] font-[600] capitalize`}
        >
        <div>
  <p style={{ color: "black", fontSize: "70px", fontWeight: "bold" }}>
    Best Discounted Products
    <br />
    At your Doorstep
  </p>
</div>


        </h1>
        <p className="pt-5 text-[16px] font-[Poppins] font-[400] text-black">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae,
          assumenda? Quisquam itaque <br /> exercitationem labore vel, dolore
          quidem asperiores, laudantium temporibus soluta optio consequatur{" "}
          <br /> aliquam deserunt officia. Dolorum saepe nulla provident.
        </p>
        <Link to="/products" className="inline-block">
            <div className={`${styles.button} mt-5`}>
                 <span className="text-[#fff] font-[Poppins] text-[18px]">
                    Shop Now
                 </span>
            </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
