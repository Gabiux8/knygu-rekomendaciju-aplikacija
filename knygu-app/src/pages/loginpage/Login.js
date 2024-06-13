import React from "react";
import AuthBgImg from "../../assets/auth-bg.jpg";
import Navbar from "../../components/layouts/navbar/Navbar";
import AuthForm from "../../components/forms/authForm/AuthForm";

const Login = () => {
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
              <h2>Prisijungti</h2>
              <p>Prisijunk su el.paštu ir slaptažodžiu</p>

              <AuthForm buttonName="Prisijungti" />
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Login;
