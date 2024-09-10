const ContactForm = () => {
  return (
    <div>
      <form>
        <label>
          <span>Name</span>
          <input name="username" type="text" />
        </label>
        <label>
          <span>Number</span>
          <input name="number" type="text" />
        </label>
        <button>Add contact</button>
      </form>
    </div>
  );
};

export default ContactForm;
