import React, { useState } from "react";
import "./styles.css";

const Accordion = (item) => {
  return (
    <div className="item">
      <div className="title">
        <h2>{item.ques}</h2>
      </div>
      <div className="content">{item.ans}</div>
    </div>
  );
};

export default Accordion;
