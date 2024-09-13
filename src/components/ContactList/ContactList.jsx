import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

const ContactList = ({ data, handleDelete }) => {
  return (
    <div className={s.wrapper}>
      <ul className={s.contact}>
        {data.map((item) => (
          <Contact key={item.id} {...item} handleDelete={handleDelete} />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
