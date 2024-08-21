import React from 'react'
import { AiOutlineGift } from 'react-icons/ai'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { FiPackage, FiShoppingBag } from 'react-icons/fi'
import { MdOutlineLocalOffer } from 'react-icons/md'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const AdminHeader = () => {
    const {user} = useSelector((state) => state.user);

  return (
         <div className="w-full h-[80px] bg-white shadow sticky top-0 left-0 z-30 flex items-center justify-between px-4">
      <div>
        <Link to="/">
          <img
            src="data:image/png;base64,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"
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
            <img
              src={`${user?.avatar?.url}`}
              alt=""
              className="w-[50px] h-[50px] rounded-full object-cover"
            />
        </div>
      </div>
    </div>
  )
}

export default AdminHeader