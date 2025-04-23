import React from "react";
import { FiSearch } from "react-icons/fi";
import PlusBtn from "./PlusBtn";

function InputBox({ onOpen, filterContacts }) {
  return (
    <div className="flex relative items-center mb-4">
      <FiSearch className="text-white text-2xl absolute m-2" />
      <input
        onChange={filterContacts}
        type="text"
        className="bg-transparent rounded-md h-10 border border-white flex-grow pl-10 text-white outline-none"
      />
      <PlusBtn onOpen={onOpen} />
    </div>
  );
}

export default InputBox;
