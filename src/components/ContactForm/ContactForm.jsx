import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import s from "./ContactForm.module.css";

const ContactForm = ({ addContact }) => {
  const initialValues = {
    username: "",
    number: "",
  };

  const handleSubmit = (values, options) => {
    addContact({
      id: Date.now().toString(),
      name: values.username,
      number: values.number,
    });
    options.resetForm();
  };

  const orderError = Yup.object().shape({
    username: Yup.string().min(3, "Too Short!").max(50).required("Required"),
    number: Yup.string().min(3, "Too Short!").max(50).required("Required"),
  });

  return (
    <div className={s.formWrapper}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={orderError}
      >
        <Form className={s.form}>
          <label className={s.label}>
            <span>Name</span>
            <Field name="username" />
            <ErrorMessage name="username" component="p" className={s.error} />
          </label>
          <label className={s.label}>
            <span>Number</span>
            <Field name="number" />
            <ErrorMessage name="number" component="p" className={s.error} />
          </label>
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
