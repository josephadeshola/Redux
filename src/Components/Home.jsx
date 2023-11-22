import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { increment, decrement } from "../redux/Counter";
import { getData } from "../redux/Counter";
import { useRef } from "react";
import { current } from "@reduxjs/toolkit";

const Home = () => {

  const [name, setname] = useState(0)
  let age = useRef();
  const countRef= useRef(0)
  const handle= ()=>{
    // countRef=current++;
    console.log(`clicked ${countRef.current} time`);
  }
  useEffect(() => {
    document.getElementById("")
  });

  const getinfo=()=>{
console.log(age.current.innerHTML);
  }

  const count = useSelector((state) => state.Counter);
  const dispatch = useDispatch();

  const [val, setval] = useState("");

  const [data, setSetdata] = useState({
    firstname: "",
    lastname: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSetdata({ ...data, [name]: value });
    console.log(data);
  };

  const handleSubmit = () => {
    setval([...val, data]);
    console.log(data);
    dispatch(getData(data));
    // console.log(dispatch);
  };
  return (
    <div>
      <h1 ref={age}>hello</h1>
      <button onClick={getinfo}>getData</button>
      <button onClick={handle}>getHandle</button>

      <h1>{count.user.firstname}</h1>
      <input
        type="text"
        placeholder="firstname"
        name="firstname"
        onChange={handleChange}
        value={data.firstname}
      />
      <input
        type="text"
        placeholder="lastname"
        name="lastname"
        onChange={handleChange}
        value={data.lastname}
      />
      <button onClick={handleSubmit}>Get</button>
      {/* <button onClick={() => dispatch(increment())}>increment</button> */}
      {/* <button onClick={() => dispatch(decrement())}>decrement</button> */}
    </div>
  );
};

export default Home;
