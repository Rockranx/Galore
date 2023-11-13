import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  redirect,
  Navigate,
} from "react-router-dom";
import Home from "./Pages/Home";
import Signin from "./Pages/Signin";
import SignUp from "./Pages/SignUp";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./Pages/firebaseAuth/firebase-config";
import { useEffect, useState } from "react";
import Dasboard from "./Pages/Dasboard";

const ProtectedRoute = ({ authenticated, children, redirect = "/signin" }) => {
  if (authenticated === false) {
    // console.log("false");/
    return <Navigate to={redirect} replace />;
  } else {
    // console.log("true");
    return children;
  }
};
const signerProtection = ({
  authenticated,
  children,
  redirect = "/dashboard",
}) => {
  if (authenticated === true) {
    // console.log("false");/
    return <Navigate to={redirect} replace />;
  } else {
    // console.log("true");
    return children;
  }
};

function App() {
  const [authenticated, setAuthenitcated] = useState(true);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user.uid);
        setAuthenitcated(true);
      } else {
        setAuthenitcated(false);
      }
    });
  }, [authenticated]);

  function logout() {
    // const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("logged out");
        redirect("/");
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/signin"
            element={
              <ProtectedRoute authenticated={authenticated}>
              
                <Signin logout={logout} />
              </ProtectedRoute>
            }
          />
          <Route path="/signup" element={
          <ProtectedRoute authenticated={authenticated}>
          
          <SignUp />
        </ProtectedRoute>
        
        } />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute authenticated={authenticated}>
                <Dasboard logout={logout} />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
