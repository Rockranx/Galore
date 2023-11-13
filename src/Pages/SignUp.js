import React, { useEffect, useState } from "react";
import { auth } from "./firebaseAuth/firebase-config";
import "./signup.css";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import Loader from "./Loader";
import { TbArrowBackUpDouble } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [userRegisterFailed, setUserRegisterFailed] = useState(false);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const [submited, setSubmitted] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorDisplayMessage, setErrorDisplayMessage] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        // console.log(user);
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
  });

  const handleEmailchange = (e) => {
    e.preventDefault();
    setUserEmail(e.target.value);
    // console.log(userEmail)
    // updateSubmitButton();
  };
  const handlePasswordChange = (e) => {
    e.preventDefault();
    setUserPassword(e.target.value);
    // console.log(userPassword)
    // updateSubmitButton();
  };
  const register = async (event) => {
    event.preventDefault();
    setSubmitted(true);
    setLoading(true);
    const { email, password } = event.target.elements;
    createUserWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        setSuccess(true);
        setLoading(false);
        const user = userCredential.user;
      })
      .catch((error) => {
        setLoading(false);
        setError(true);
        const errorCode = error.code;
        const errorMessage = error.message;
        // console.log(errorMessage)
        if (error.code === "auth/email-already-in-use") {
          setErrorDisplayMessage(
            "Email already exists. Please use a different email."
          );
        } else {
          // Handle other errors if needed
          setErrorDisplayMessage("An error occurred. Please try again.");
        }
        if (errorCode !== "") {
          setUserRegisterFailed(true);
          //   setErrorMessage(errorCode);
        }
        // ..
      });
  };
  useEffect(() => {
    const updateSubmitButton = () => {
      let isValid = true;
      if (userPassword === "") {
        setErrorMessage("");
      } else if (userPassword.length < 6) {
        setErrorMessage("Password must have at least 6 characters.");
        isValid = false;
      } else if (!/[A-Z]/.test(userPassword)) {
        setErrorMessage("Password must have at least one uppercase letter.");
        isValid = false;
      } else if (!/\d/.test(userPassword)) {
        setErrorMessage("Password must have at least one number.");
        isValid = false;
      } else {
        setErrorMessage("");
      }

      setIsSubmitDisabled(!isValid || !userEmail || !userPassword);
    };
    updateSubmitButton();
  }, [userPassword]);

  useEffect(() => {
    if (error === true) {
      // console.log("eopjiionii")
      // Clear the form after 3 seconds
      setTimeout(() => {
        setUserEmail("");
        setUserPassword("");
        setError(false);
        setSubmitted(false);
      }, 3000);
    }
  }, [error]);

  return (
    <div>
      <div className="flex-j-a whole ">
        <div className="eighty">
          <div className="logout">
            <button className="logoutIcon" onClick={() => navigate(-1)}>
              <TbArrowBackUpDouble />
            </button>
          </div>
        </div>
        <div className="side flex-j-a">
          <div className="biggerbox flex-j-a sp">
            <div className="flex-j-a box1"></div>
            <div className=" flex-j-a box2">
              <div className="form-container">
                <div className="logintitle">
                  <p className="title">Sign Up</p>
                </div>
                <div className="formsize">
                  <form className="form" onSubmit={register}>
                    <div className="input-group">
                      <label htmlFor="username">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={userEmail}
                        onChange={handleEmailchange}
                        required
                      />
                    </div>
                    <div className="input-group">
                      <label htmlFor="password">Password</label>
                      <input
                        type="password"
                        id="password"
                        name="password"
                        value={userPassword}
                        onChange={handlePasswordChange}
                        required
                      />
                      {/* <div className="flex-e">
                        <div className="forgot">
                          <a rel="noopener noreferrer" href="#">
                            Forgot Password?
                          </a>
                        </div>
                      </div> */}
                    </div>

                    <p
                      style={{
                        color: "red",
                        fontsize: "10px",
                        fontWeight: "700",
                        marginTop: "5px",
                      }}
                    >
                      {errorMessage}
                    </p>
                    <button className="signupq">
                      {submited === false ? (
                        <div>Sign Up</div>
                      ) : (
                        <>
                          {loading && (
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                              }}
                            >
                              <Loader />
                            </div>
                          )}
                          {success && <div>Success</div>}
                          {error && <div> {errorDisplayMessage} </div>}
                          {/* {showSuccess && (
                                                <div className="success-popup">
                                                  <p>Form submitted!</p>
                                                </div>
                                              )}
                                              {showFailure && (
                                                <div className="success-popup">
                                                  <p>Error</p>
                                                </div>
                                              )} */}
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
