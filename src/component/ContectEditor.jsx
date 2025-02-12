import "./ContectEditor.css";
import { useRef, useState } from "react";

const ContectEditor = ({ onCreate }) => {
  const nameRef = useRef();
  const emailRef = useRef();
  const [input, setInput] = useState({
    name: "",
    email: "",
  });

  const onChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const onClick = () => {
    if (!input.name) {
      nameRef.current.focus();
      return;
    } else if (!input.email) {
      emailRef.current.focus();
      return;
    }
    onCreate(input);
  };

  return (
    <div className="ContectEditor">
      <h2>Add Contact</h2>
      <div>
        <input
          ref={nameRef}
          name="name"
          value={input.name}
          className="name"
          placeholder="이름 ..."
          onChange={onChange}
        ></input>
        <input
          ref={emailRef}
          name="email"
          value={input.email}
          className="email"
          placeholder="연락처(이메일) ..."
          onChange={onChange}
        ></input>
      </div>
      <button onClick={onClick}>Add</button>
    </div>
  );
};

export default ContectEditor;
