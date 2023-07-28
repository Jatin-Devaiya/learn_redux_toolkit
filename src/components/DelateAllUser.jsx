import React from "react";
import { useDispatch } from "react-redux";
import { deleteUser } from "../store/slice/UserSlice";

const DelateAllUser = () => {
  const dispatch = useDispatch();
  const deleteall = () => {
    dispatch(deleteUser());
  };
  return (
    <button
      className="btn px-6 py-2.5 bg-rose-500 hover:bg-rose-600 text-white rounded-[8px] m-5"
      onClick={() => {
        deleteall();
      }}
    >
      DelateAllUser
    </button>
  );
};

export default DelateAllUser;
