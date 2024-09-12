import ContactList from "../ContactList/ContactList";
import s from "./Contact.module.css";

const Contact = ({ data, handleDelete }) => {
  return (
    <div className={s.wrapper}>
      <ul className={s.contact}>
        {data.map((item) => (
          <ContactList key={item.id} {...item} handleDelete={handleDelete} />
        ))}
      </ul>
    </div>
  );
};

export default Contact;
