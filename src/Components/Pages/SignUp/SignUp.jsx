import { useState, useEffect } from "react";
import "./SignUp.css";
import Footer from "../Footer/footer";
function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [isValid, setIsValid] = useState(false);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    const nameRegex = /^[A-Za-z ]{2,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
    const isValidForm =
      nameRegex.test(formData.name.trim()) &&
      emailRegex.test(formData.email.trim()) &&
      passwordRegex.test(formData.password);
    setIsValid(isValidForm);
  }, [formData]);
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Account Created 🎉");
    console.log(formData);
  };

  return (
    <div className="page-wrapper">
      <div className="signup-layout">
        <div className="signup-left">
          <img src="/Image/signUp.jpg" alt="Signup illustration" />
        </div>

        <div className="signup-right">
          <form className="signup-card" onSubmit={handleSubmit}>
            <h1>Create an account</h1>
            <p>Enter your details below 👇</p>

            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />

            <button type="submit" disabled={!isValid}>
              Create Account
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default SignUp;
