import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { createPortal } from "react-dom";

function Modal({ isOpen, onClose, children }) {
  return createPortal(
    <>
      {isOpen && (
        <div className="grid place-items-center absolute top-0 z-40 backdrop-blur h-screen w-screen">
          <div className="relative z-50 min-h-[200px] min-w-[80vw] bg-white rounded-xl m-auto p-2">
            <div className="flex justify-end">
              <AiOutlineClose
                className="text-3xl cursor-pointer"
                onClick={onClose}
              />
            </div>
            {children}
          </div>
        </div>
      )}
    </>,
    document.getElementById("modal-root")
  );
}

export default Modal;
