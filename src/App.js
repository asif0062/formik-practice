import { useFormik } from "formik";
import * as Yup from "yup";
import "./App.css";

function App() {
  const { handleSubmit, handleChange, handleBlur, values, errors, touched, resetForm, setValues } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: Yup.object().shape({
        email: Yup.string().email("Invalid email address").required("Please enter email"),
        password: Yup.string().required("Please enter password"),
      }),
      onSubmit: (values) => {
        resetForm();
      },
    });

  const handleUpdate = () => {
    setValues({
      email: "updated@gmail.com",
      password: "test",
    });
  };
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <br />
        <label htmlFor="email">Email Address</label>
        <br />
        <input
          type="email"
          name="email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
        />
        <br />
        {touched.email && errors.email ? (
          <span style={{ color: "red" }}>{errors.email}</span>
        ) : null}
        <br />
        <br />
        <label htmlFor="password">Password</label>
        <br />
        <input
          type="password"
          name="password"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
        />
        <br />
        {touched.password && errors.password ? (
          <span style={{ color: "red" }}>{errors.password}</span>
        ) : null}
        <br />
        <br />
        <button type="submit">Login</button>
        <button style={{ marginLeft: "10px" }} onClick={handleUpdate} type="button">
          Update
        </button>
      </form>
    </div>
  );
}

export default App;
