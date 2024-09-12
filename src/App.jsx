import Contact from "./components/Contact/Contact";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import { useState, useEffect } from "react";

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = JSON.parse(window.localStorage.getItem("contacts"));
    return savedContacts?.length
      ? savedContacts
      : [
          { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
          { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
          { id: "id-3", name: "Eden Clements", number: "645-17-79" },
          { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
        ];
  });

  const [filters, setFilter] = useState("");

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (newContact) => {
    setContacts((prev) => [...prev, newContact]);
  };

  const handleDelete = (id) => {
    setContacts((prev) => prev.filter((contact) => contact.id !== id));
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filterContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filters.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox filter={filters} onFilterChange={handleFilterChange} />
      <Contact data={filterContacts} handleDelete={handleDelete} />
    </div>
  );
};

export default App;
