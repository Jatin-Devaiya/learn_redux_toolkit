import React from "react";
import DelateAllUser from "./DelateAllUser";
import { fakeUserData } from "../api"; // fake data from chance npm
import { useDispatch } from "react-redux";
import { addUser } from "../store/slice/UserSlice";
import DisplayUsers from "./DisplayUsers";

const UserTable = () => {
  const dispatch = useDispatch();
  const addNewUser = (paylod) => {
    dispatch(addUser(paylod))
    console.log(paylod);
  };
  return (
    <div>
      <center>
        <button
          className="btn px-6 py-2.5 bg-green-500 hover:bg-green-600 text-white rounded-[8px]"
          onClick={() => {
            addNewUser(fakeUserData());
          }}
        >
          Add New User data
        </button>
        <ul>
         <DisplayUsers/>
        </ul><br />
        <hr />
        <DelateAllUser />
      </center>
    </div>
  );
};

export default UserTable;
