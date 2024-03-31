import Button from "./Button";
import Input from "./Input";
import { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [show, setShow] = useState("There");

  let a=5;
  console.log(a)

  const HandleShow = (e) => {
    e.preventDefault();
    console.log(name);
    setShow(name);
  };

  return (
    <div className="w-1/2">
      <form onSubmit={HandleShow}>
        <div id="Uppepr-btn" className="flex flex-col gap-4">
          <div id="twobtn" className="flex justify-between ">
            <Button
              type="button"
              text="VIA SUPPORT CHAT"
              backColor="bg-black"
              textColor="text-white"
              fontawesome="fa-brands fa-rocketchat"
              newClass="w-50"
            />
            <Button
              type="button"
              text="VIA CALL"
              backColor="bg-black"
              textColor="text-white"
              fontawesome="fa-solid fa-phone"
              newClass="w-50"
            />
          </div>
          <div id="secondbtn" className="mb-4">
            <Button
              type="button"
              text="VIA EMAIL FORM"
              backColor="bg-white"
              textColor="text-black"
              fontawesome="fa-solid fa-envelope"
              newClass="border-2 border-black w-full"
            />
          </div>
        </div>

        <div id="actual-form" className="flex flex-col gap-4">
          <Input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            placeholder="Text"
            className="w-full border border-black p-3 pl-4 pr-4 rounded"
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
        </div>

        <div id="submitbtn" className="flex justify-end mt-4">
          <Button
            type="submit"
            text="Submit"
            backColor="bg-black"
            textColor="text-white"
            className="active:bg-white active:text-black duration-100"
          />
        </div>
      </form>
      <h2 className="text-center ">Hello {show}, Welcome!</h2>
    </div>
  );
}
