import React from "react";
import Modal from "./Modal";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { db } from "../config/firebase";
import { collection, addDoc, doc, updateDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import * as Yup from "yup";

const contactSchemaValidation = Yup.object().shape({
  name: Yup.string().required("name is required."),
  email: Yup.string().email("invalid email").required("email is required"),
});

function AddAndUpdateContact({ isOpen, onClose, isUpdate, contactData }) {
  const addContact = async (contact) => {
    try {
      const contactsRef = collection(db, "contacts");
      await addDoc(contactsRef, contact);
      onClose();
      toast.success("contact added successfully...");
    } catch (error) {
      console.log(error);
    }
  };

  const updateContact = async (contact, id) => {
    try {
      const contactsRef = doc(db, "contacts", id);
      await updateDoc(contactsRef, contact);
      onClose();
      toast.success("contact updated successfully...");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <Formik
          validationSchema={contactSchemaValidation}
          initialValues={
            isUpdate
              ? { name: contactData.name, email: contactData.email }
              : {
                  name: "",
                  email: "",
                }
          }
          onSubmit={(values) => {
            isUpdate
              ? updateContact(values, contactData.id)
              : addContact(values);
          }}
        >
          <Form className="flex flex-col gap-3">
            <div className="flex flex-col gap-1">
              <label htmlFor="name">Name</label>
              <Field
                type="text"
                name="name"
                className="rounded-xl h-10 border p-2"
              />
              <div className="text-red-500 text-xs">
                <ErrorMessage name="name" />
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="email">Email</label>
              <Field
                type="email"
                name="email"
                className="rounded-xl h-10 border p-2"
              />
              <div className="text-red-500 text-xs">
                <ErrorMessage name="email" />
              </div>
            </div>

            <button
              type="submit"
              className="rounded-xl bg-amber-400 border px-3 py-2 cursor-pointer self-end"
            >
              {isUpdate ? "update" : "add"} contact
            </button>
          </Form>
        </Formik>
      </Modal>
    </div>
  );
}

export default AddAndUpdateContact;
