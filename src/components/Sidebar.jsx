import React from "react";
import './Sidebar.css';
import { ArrowRightSquare, ArrowRightSquareFill, Bell, BellFill, Bookmark, BookmarkFill, Envelope, EnvelopeFill, Heart, HeartFill, House, HouseFill, Person, PersonFill, SearchHeart, SearchHeartFill } from "react-bootstrap-icons";
import Logo from '../assets/images/LogoNew.svg';
import SidebarItems from "./SidebarItems";
import { NavLink } from "react-bootstrap";

const Sidebar = () => {
    return (
        <div className="Sidebar d-flex flex-column justify-content-center">
            <NavLink className="SociolyfeLogo">
                <img src={Logo} alt="" className="" width={150} />
            </NavLink>
            <SidebarItems Icon={<House />} IconActive={<HouseFill/>} Text="Home" />
            <SidebarItems Icon={<SearchHeart />} IconActive={<SearchHeartFill/>} Text="Search" />
            <SidebarItems Icon={<Heart />} IconActive={<HeartFill/>} Text="Favorite" />
            <SidebarItems Icon={<Bookmark />} IconActive={<BookmarkFill/>} Text="Saved" />
            <SidebarItems Icon={<Bell />} IconActive={<BellFill/>} Text="Notifications" />
            <SidebarItems Icon={<Envelope />} IconActive={<EnvelopeFill/>} Text="Messages" />
            <SidebarItems Icon={<Person />} IconActive={<PersonFill/>} Text="Settings" />
            <SidebarItems Icon={<ArrowRightSquare />} IconActive={<ArrowRightSquareFill/>} Text="Log Out" />
        </div>
    );
};

export default Sidebar;