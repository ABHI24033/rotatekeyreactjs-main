import React, { useState, useEffect } from "react";
import { Modal } from "antd";

const Popup = () => {
  const [showModal, setShowModal] = useState(true);
  const [showCounter, setShowCounter] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCounter(showCounter + 1);
      if (showCounter >= 2) {
        setShowModal(false);
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, [showCounter]);

  return (
    setShowModal && (
      <div>
        <Modal title="Basic Modal">
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </div>
    )
  );
};

export default Popup;
