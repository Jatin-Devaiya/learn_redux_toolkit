import React from "react";
import { useSelector } from "react-redux";

const DisplayUsers = () => {
  const data = useSelector((state) => {
    return state.users;
  });
console.log(data,"data");
  return data.map((datas, index) => {
    return (
      <div key={index}>
        <ol>
          <span>{index+1}</span>
          <li>{datas}</li>
        </ol>
      </div>
    );
  });
};

export default DisplayUsers;
