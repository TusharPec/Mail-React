import React from "react";
import DeletedMail from "./deleted-mail";

const DeletedItems = ({ messages,deletedMessage }) => {
    console.log(messages,"messsaaaaa")
    return (
    <>
        {!!messages?.length && messages.map(mail => <div><DeletedMail {...mail[0]} deletedMailId={deletedMessage}/></div>)}
    </>
    )

}

export default DeletedItems;