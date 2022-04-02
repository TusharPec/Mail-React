import React from "react";
import { Link } from "react-router-dom";

const folders = ["Inbox", "Spam", "Deleted Items", "Custom Folder"]

const SideBar = ({unreadMessage}) => {
    return <div className="sidebar">
        {folders.map((name) => {
        return <Link to ={`/${name.replace(" ", "-").toLowerCase()}`}>{name==="Inbox"?`${name} ${unreadMessage}`:name}</Link>
   })}
   </div>   

}

export default SideBar;