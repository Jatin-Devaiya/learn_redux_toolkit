import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removerUser } from "../store/slice/UserSlice";

const DisplayUsers = () => {
  const data = useSelector((state) => {
    return state.users;
  });
  const dispatch = useDispatch();

  const removesingleuser = (index) => {
    dispatch(removerUser(index));
  };
  // console.log(data,"data");
  return data.map((datas, index) => {
    return (
      <div className="flex">
        <div className="px-2 ">{index + 1}.</div>
        <div >
          <li key={index}>
            {datas}

            <img
              src="delete.png"
              alt="delete ing"
              className="h-6 float-right px-2 my-1 "
              onClick={() => removesingleuser(index)}
            />
          </li>
        </div>
      </div>
    );
  });
};

export default DisplayUsers;
