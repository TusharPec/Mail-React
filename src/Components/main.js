import React, { useState, useEffect } from "react";
import SideBar from "./sidebar";
import { Route, Routes } from "react-router";

import Inbox from "./inbox";
import Spam from "./spam";
import DeletedItems from "./deleted-items";
import CustomFolder from "./custom-folder";

const defaultArr = [];

function Main() {
  const [inbox, setInboxData] = useState(defaultArr);
  const [filteredInbox, setFilteredInbox] = useState(defaultArr);
  const [deletedMessage, setDeletedMessage] = useState(defaultArr);
  const [unreadMessage, setUnreadMessage] = useState(null);
  const [flagOn, setFlag] = useState(false);

  useEffect(() => {
    const unreadMsg = inbox.filter(({ unread }) => unread)?.length;
    unreadMsg && setUnreadMessage(unreadMsg);
  }, [inbox]);

  useEffect(() => {
    fetch("1_inbox.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setInboxData(data);
        setFilteredInbox(data);
      });
  }, []);

  const deletedMessages = (id) => {
    const deleteMessages = filteredInbox.filter(({ mId }) => mId === id);
    const filteredMessage = filteredInbox.filter(({ mId }) => mId !== id);
    !!unreadMessage && setUnreadMessage(unreadMessage-1);
    setDeletedMessage([...deletedMessage, deleteMessages]);
    setFilteredInbox(filteredMessage);
    
  };

  const getNumberOfUnreadMessages = (message) => {
    const filteredInboxes = filteredInbox.map((msg) => {
      if (message?.mId === msg?.mId) {
        return message;
      }
      return msg;
    });
    const unreadMsg = filteredInboxes.filter(({ unread }) => unread)?.length;
    setUnreadMessage(unreadMsg);
    setFilteredInbox(filteredInboxes);
  };

  const getFlaggedData = (id, flagStatus) => {
    const newInbox = [...inbox];
    const inboxes = newInbox.map((inb) => {
      if (inb?.mId === id) inb["flagged"] = flagStatus;
      return inb;
    });
    setInboxData(inboxes);
  };

  const handleFlaggedFilter = () => {
    const savedList = [...inbox];
    const filteredInb = inbox?.filter((inb) => inb?.flagged);
    flagOn
      ? setFilteredInbox(savedList)
      : !!filteredInb.length && setFilteredInbox(filteredInb);
  };

  return (
    <div>
      <div className="filter">
        <div className="">Filter </div>
        <li
          onClick={() => {
            handleFlaggedFilter();
            setFlag(!flagOn);
          }}
        >
          Flagged
        </li>
      </div>
      <div className="main">
        <SideBar unreadMessage={unreadMessage} />
        <Routes>
          <Route
            exact
            path="/inbox"
            element={
              <Inbox
                data={filteredInbox}
                deletedMessage={deletedMessages}
                setUnreadMessage={setUnreadMessage}
                getNumberOfUnreadMessages={getNumberOfUnreadMessages}
                getFlaggedData={getFlaggedData}
              />
            }
          />
          <Route exact path="/spam" element={<Spam />} />
          <Route
            exact
            path="/deleted-items"
            element={
              <DeletedItems
                messages={deletedMessage}
                deletedMessage={deletedMessages}
              />
            }
          />
          <Route exact path="custom-folder" element={<CustomFolder />} />
        </Routes>
      </div>
    </div>
  );
}

export default Main;
