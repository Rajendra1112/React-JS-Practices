import React from "react";
import { FiPlus } from "react-icons/fi";

function PlusBtn({ onOpen }) {
  return (
    <div
      className="ml-2 rounded-[50%] bg-white flex justify-center items-center p-2 cursor-pointer"
      onClick={onOpen}
    >
      <FiPlus className="text-2xl" />
    </div>
  );
}

export default PlusBtn;
