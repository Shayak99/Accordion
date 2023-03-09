import { useState } from "react";
import "./styles.css";

export default function App() {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      console.log(i);
      return setSelected(null);
    }
    setSelected(i);
  };
  return (
    <div className="wrapper">
      <div className="accordion">
        {data.map((item, i) => (
          <div className="item">
            <div className="title" onClick={() => toggle(i)}>
              <h2>{item.ques}</h2>
              <span>{selected === i ? "-" : "+"}</span>
            </div>
            <div className={selected === i ? "content show" : "content"}>
              {item.ans}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const data = [
  {
    ques: "question1",
    ans: "lorem ipsum"
  },
  {
    ques: "question2",
    ans: "lorem ipsum"
  },
  {
    ques: "question3",
    ans: "lorem ipsum"
  },
  {
    ques: "question4",
    ans: "lorem ipsum"
  },
  {
    ques: "question5",
    ans: "lorem ipsum"
  }
];
