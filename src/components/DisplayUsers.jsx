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
        
          <span>{index+1}</span>
          <li>{datas}</li>
          <img src="delete.png" alt="delete ing" className="h-6"/>
       
      </div>
    );
  });
};

export default DisplayUsers;
