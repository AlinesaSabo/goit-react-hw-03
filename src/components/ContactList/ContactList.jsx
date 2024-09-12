import { FaUser } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import s from "./ContactList.module.css";

const ContactList = ({ id, name, number, handleDelete }) => {
  return (
    <>
      <li className={s.list}>
        <div className={s.textContainer}>
          <span>
            <FaUser />
            {name}
          </span>
          <span>
            <FaPhoneAlt />
            {number}
          </span>
        </div>
        <button onClick={() => handleDelete(id)}>Delete</button>
      </li>
    </>
  );
};

export default ContactList;
