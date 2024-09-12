const ContactList = ({ id, name, number, handleDelete }) => {
  return (
    <div>
      <li>
        <span>{name}</span>
        <span>{number}</span>
        <button onClick={() => handleDelete(id)}>Delete</button>
      </li>
    </div>
  );
};

export default ContactList;
