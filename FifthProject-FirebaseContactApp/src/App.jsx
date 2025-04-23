import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import InputBox from "./components/InputBox";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "./config/firebase";
import ContactDetailBox from "./components/ContactDetailBox";
import AddAndUpdateContact from "./components/AddAndUpdateContact";
import useDisclouse from "./hooks/useDisclouse";
import { ToastContainer, toast } from "react-toastify";
import ContactNotFound from "./components/ContactNotFound";

function App() {
  const [contacts, setContacts] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclouse();

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts");

        onSnapshot(contactsRef, (snapshot) => {
          const contactLists = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          setContacts(contactLists);
          return contactLists;
        });
      } catch (error) {}
    };
    getContacts();
  }, []);

  const filterContacts = (e) => {
    const inputValue = e.target.value;

    const contactsRef = collection(db, "contacts");

    onSnapshot(contactsRef, (snapshot) => {
      const contactLists = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });

      const filteredContactsData = contactLists.filter((contact) =>
        contact.name.toLowerCase().includes(inputValue.toLowerCase())
      );

      setContacts(filteredContactsData);
      return filteredContactsData;
    });
  };

  return (
    <>
      <div className="max-w-[370px] mx-auto">
        <Navbar />
        <InputBox onOpen={onOpen} filterContacts={filterContacts} />

        {contacts.length <= 0 ? (
          <ContactNotFound />
        ) : (
          contacts.map((contact) => (
            <ContactDetailBox key={contact.id} contact={contact} />
          ))
        )}
      </div>
      <AddAndUpdateContact isOpen={isOpen} onClose={onClose} />
      <ToastContainer position="bottom-center" autoClose={2000} />
    </>
  );
}

export default App;
