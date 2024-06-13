import React from "react";
import "./signup.css";
import AuthBgImg from "../../assets/auth-bg.jpg";
import Navbar from "../../components/layouts/navbar/Navbar";
import AuthForm from "../../components/forms/authForm/AuthForm";

const Signup = () => {
  return (
    <React.Fragment>
      <Navbar darkText={true} />
      <section className="signup-container">
        <div className="signup-img-container">
          <img src={AuthBgImg} alt="authentication-background" />
        </div>
        <div className="signup-content-container">
          <div className="container">
            <div className="content-wrapper">
              <h2>Registruotis</h2>
              <p>Susikurk anketą tik su elektroniniu paštu ir slaptažodžiu</p>

              <AuthForm buttonName="Registruotis" />
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Signup;
