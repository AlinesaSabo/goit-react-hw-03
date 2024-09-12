import { useEffect } from "react";
import ContactList from "../ContactList/ContactList";
import { useState } from "react";

const Contact = ({ data }) => {
  const [contact, setContact] = useState(() => {
    const savedContact = JSON.parse(window.localStorage.getItem("contact"));
    if (savedContact?.length) {
      return savedContact;
    }
    return data;
  });

  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(contact));
  }, [contact]);

  const handleDelete = (id) => {
    setContact((prev) => prev.filter((item) => item.id !== id));
  };
  return (
    <div>
      <ul>
        {data.map((item) => (
          <ContactList key={item.id} {...item} handleDelete={handleDelete} />
        ))}
      </ul>
    </div>
  );
};

export default Contact;
