import React from "react";
import UserMail from "./user-mail";

const Inbox = ({
  data,
  deletedMessage,
  getNumberOfUnreadMessages,
  getFlaggedData,
}) => {
  return (
    <div className="rightbar">
      {!!data?.length &&
        data.map((message) => (
          <div>
            <UserMail
              message={message}
              deletedMailId={deletedMessage}
              getNumberOfUnreadMessages={getNumberOfUnreadMessages}
              getFlaggedData={getFlaggedData}
            />
          </div>
        ))}
    </div>
  );
};

export default Inbox;
