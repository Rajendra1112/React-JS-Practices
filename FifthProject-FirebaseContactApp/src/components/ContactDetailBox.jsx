import React from "react";
import { HiOutlineUserCircle } from "react-icons/hi";
import { RiEditCircleLine } from "react-icons/ri";
import { IoMdTrash } from "react-icons/io";
import { db } from "../config/firebase";
import { doc, deleteDoc } from "firebase/firestore";
import AddAndUpdateContact from "./AddAndUpdateContact";
import useDisclouse from "../hooks/useDisclouse";
import { toast } from "react-toastify";

function ContactDetailBox({ contact }) {
  const { isOpen, onOpen, onClose } = useDisclouse();

  const deleteContact = async (id) => {
    try {
      const contactsRef = doc(db, "contacts", id);
      await deleteDoc(contactsRef);
      onClose();
      toast.success("contact deleted successfully...");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div
        key={contact.id}
        className="flex justify-between items-center bg-yellow-100 rounded-md p-2 mb-2"
      >
        <div className="flex items-center gap-3">
          <HiOutlineUserCircle className="text-3xl text-amber-600" />
          <div className="contacts_details">
            <h3 className="name font-medium text-[16px]">{contact.name}</h3>
            <p className="email text-[14px]">{contact.email}</p>
          </div>
        </div>
        <div className="modify_btns flex text-3xl gap-1">
          <RiEditCircleLine onClick={onOpen} className="cursor-pointer" />
          <IoMdTrash
            className="cursor-pointer text-red-500"
            onClick={() => deleteContact(contact.id)}
          />
        </div>
      </div>

      <AddAndUpdateContact
        contactData={contact}
        isOpen={isOpen}
        onClose={onClose}
        isUpdate
      />
    </>
  );
}

export default ContactDetailBox;
