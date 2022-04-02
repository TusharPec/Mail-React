import React, { useState } from "react";

const DeletedMail = ({mId,unread,subject,content }) => {
    const [showContent,setShowContent] = useState(false)
    return (
        <>
        <div onClick = {()=>setShowContent(!showContent)}>{subject}</div>
        {!showContent && <div>{content.slice(0,100)}</div>}
        {showContent && <div>{content}</div>}
        </>
    )
}

export default DeletedMail;