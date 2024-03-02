import React, { useState } from 'react';
import { IoSearchSharp } from 'react-icons/io5';
import { FaChevronDown } from 'react-icons/fa';
import SellButton from '../../Components/SellButton';
import { FaPlus } from "react-icons/fa6";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { TbMessageCircle } from "react-icons/tb";
import { MdNotificationsNone } from "react-icons/md";
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import PopupLogin from '../../Components/PopUpLogin';
import PopupSignup from '../../Components/PopUpSignUp';

function Header({onFun}) {
  const [menu,setMenu] = useState(false)
  const [showPop,setPop]=useState(false)
  const {user,logout} = useAuth();
  const [showLogin, setShowLogin] = useState(true);
  const [showLogoutDropdown, setShowLogoutDropdown] = useState(false);

  const handleMouseEnter = () => {
    setShowLogoutDropdown(!showLogoutDropdown);
  };


  
  const toggleForm = () => {
    setShowLogin(!showLogin);
    console.log(showLogin)
  };


  function handlePopUp(){
    setPop (!showPop)
  }

  function handlemenu () {
    setMenu(!menu)
  }


  return (
    <header className='fixed text-black items-center w-full top-0 left-0 z-50'>
  {showPop && (showLogin ? <PopupLogin onClose={handlePopUp} onFun={toggleForm}/> : <PopupSignup onClose={handlePopUp} onFun={toggleForm} />)}
    <div class="flex h-18 navbar">
      <div class="flex-none w-[22rem] p-3 flex items-center gap-3">
      <div className='flex items-center'>
          {!menu ? <IoMenu onClick={handlemenu} className='lg:hidden cursor-pointer text-xl'/> : <IoClose onClick={handlemenu} className='lg:hidden cursor-pointer text-xl'/>}
          
        </div>
        <img src='https://logos-world.net/wp-content/uploads/2022/04/OLX-Symbol.png' width={60} alt='logo' />
        <div class='relative ml-1 hidden lg:block'>
          <input class='lg:w-full pl-10 pr-12 py-3 border-2 text-[#002f34] border-[#002f34] rounded-md' type='text' value="Kerala" />
          <IoSearchSharp class='absolute left-4 top-4 text-[#002f34]' />
          <FaChevronDown className='absolute right-4 top-4 text-[#002f34]' />
        </div>


        <div className='lg:hidden flex  items-center gap-5'>
            <span className='cursor-pointer text-xl'>India</span>
            <div>
              <HiOutlineLocationMarker  className='text-[#002f34] cursor-pointer text-xl'/>
            </div>
        </div>
      </div>
       
      {menu && <div className='absolute top-0 left-0 w-full py-14 '>
          <ul className='flex flex-col text-center gap-5'>
            <li>home</li>
            <li>chat</li>
            <li>about</li>
          </ul>
       </div>}



      <div class="lg:grow lg:p-3 lg:block hidden">
        <div className='relative'>
          <input className='w-full pl-3 pr-12 py-3 border-2 border-[#002f34] rounded-md' type='text' placeholder='Find Cars,Mobile Phones and more...' />
          <div className="search-icon-bg absolute right-0 top-0 h-full w-[55px] flex items-center justify-center bg-[#002f34] rounded-md">
            <IoSearchSharp className='right-4 w-6 h-6 top-5  text-white' />
          </div>
        </div>
      </div>
      <div class="flex-none w-[22rem] ">
        <div className='p-2 hidden lg:flex items-center justify-start gap-3'>
          <div className='flex'>
          <p className='text-[#002f34] font-bold text-sm '>ENGLISH</p>
          <FaChevronDown className='inline-block ml-2 mt-1 text-[#002f34]' />
          </div>
          {!user ? (
              <a onClick={handlePopUp} className='text-[#002f34] ml-4 mr-8 border-b-2 border-[#002f34] hover:border-b-0 cursor-pointer'>Login</a>
            ) : (
              <>
                <div className='w-8 rounded-2xl hover:bg-cyan-100 cursor-pointer'>
                  <TbMessageCircle className='text-[#002f34] w-7 h-7'/>
                </div>
                <div className='w-8 rounded-2xl hover:bg-cyan-100 cursor-pointer'>
                  <MdNotificationsNone className='text-[#002f34] w-7 h-7' />
                </div>
                <div className='flex gap-2 cursor-pointer' onClick={handleMouseEnter}>
                  <img src="https://res.cloudinary.com/postman/image/upload/t_user_profile_300/v1/user/phcas1iju5llcnec8wgc.jpg"  className='w-6 h-7' alt="" />
                  <FaChevronDown className='text-[#002f34] w-9 h-7' />
                  {showLogoutDropdown && (
                    <div className="absolute mt-9 w-36 right-[75px] bg-white shadow-md rounded-md z-10">
                      <ul>
                        <li className="py-1 px-3 hover:bg-gray-200">Profile</li>
                        <li onClick={logout} className="py-1 px-3 hover:bg-gray-200 cursor-pointer">Logout</li>
                      </ul>
                    </div>
                  )}
                </div>
              </>
            )}

          <Link to='/post'>
            <div className="hidden sellMenu md:block">
                <SellButton/>
              <div className="sellMenuContent">
                <FaPlus className='mt-1'></FaPlus>
                <span>SELL</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
  

    </div>
    <div className="w-full p-3 box-shadow text-[#002f34] hidden lg:block bg-white">
         <div className="flex overflow-x-auto container mx-[70px]">
           <div className="flex-shrink-0">
             <span className="font-bold text-sm">ALL CATEGORIES</span>
             <FaChevronDown className='inline-block ml-2 mt-1 text-[#002f34]' />
           </div>
           <div className="flex flex-shrink-0">
             <span className="px-3">Cars</span>
             <span className="px-3">Motorcycles</span>
             <span className="px-3">Mobile Phones</span>
             <span className="px-3">For Sale: Houses & Apartments</span>
             <span className="px-3">Scooters</span>
             <span className="px-3">Commercial & Other Vehicles</span>
             <span className="px-3">For Rent: Houses & Apartments</span>
           </div>
         </div>
       </div>  
    </header>

  );
}

export default Header;
