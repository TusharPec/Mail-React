import React, { useState } from "react";

const UserMail = ({ message, deletedMailId, getNumberOfUnreadMessages , getFlaggedData }) => {
    const { mId, unread, subject, content ,flagged=false } = message
    const [showContent, setShowContent] = useState(false)
    
    return (
        <>
         <div className="flex">
            <div onClick={() => {
                setShowContent(!showContent)
                getNumberOfUnreadMessages({ ...message, unread: false })
            }} className="training">{subject}</div>
            <div className="flex">
            <div onClick={() => deletedMailId(mId) } className="deleteIcon ">
                <img src="./delete.png"/>
            </div>
            <div className="flagIcon ml-1" onClick={()=> getFlaggedData(mId,!flagged)}>{flagged? <img src="./flagged.png"/> : <img src="./flag.png"/>}</div>
            </div>
            </div>
            {!showContent && <div>{content.slice(0, 100)}</div>}
            {showContent && <div>{content}</div>}
        </>
    )
}

export default UserMail;