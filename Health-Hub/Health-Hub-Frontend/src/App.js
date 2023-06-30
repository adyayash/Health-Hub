import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

import Home from "./Pages/Home"
import Login from "./Pages/Login"
import Patient from "./Pages/Patient"
import Admin from "./Pages/Admin"
import Doctor from "./Pages/Doctor"
import Form from "./Pages/Form"
import Receptionist from "./Pages/Receptionist"
import Logout from "./Pages/Logout"

function App() {

  const authStatus = useSelector((state) => state.user.authStatus);
  const userRole = useSelector((state) => state.user.userRole);

  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route exact path="/login" element={<Login />} />
          <Route exact path="/logout" element={<Logout />} />
          <Route exact path="/" element={<> <Home /></>} />
          <Route
            exact
            path="/admin"
            element={
              <ProtectedRoute
                authStatus={authStatus}
                userRole={userRole}
                routeName="admin"
              >
                <Admin />
              </ProtectedRoute>
            }
          />

          <Route
            exact
            path="/doctor"
            element={
              <ProtectedRoute
                authStatus={authStatus}
                userRole={userRole}
                routeName="doctor"
              >
                <Doctor />
              </ProtectedRoute>
            }
          />

          <Route
            exact
            path="/patient"
            element={
              <ProtectedRoute
                authStatus={authStatus}
                userRole={userRole}
                routeName="patient"
              >
                <Patient />
              </ProtectedRoute>
            }
          />

          <Route
            exact
            path="/receptionist"
            element={
              <ProtectedRoute
                authStatus={authStatus}
                userRole={userRole}
                routeName="receptionist"
              >
                <Receptionist />
              </ProtectedRoute>
            }
          />

          <Route exact path="/form/:formtype/:userId" element={<Form />} />
        </Routes>

      </BrowserRouter>
    </>
  );
}

const ProtectedRoute = ({ authStatus, userRole, routeName, children }) => {
  console.log(
    "AUTH_STATUS ====>>>>>>>>>>>>>>>>>>>>",
    authStatus,
    userRole,
    children.type.name,
    routeName
  );

  if (!authStatus) {
    return <Navigate to="/" replace />;
  }
  else if (userRole === "ADMIN" && routeName == "admin") {
    return children;
  }
  else if (userRole === "DOCTOR" && routeName == "doctor") {
    return children;
  }
  else if (userRole === "PATIENT" && routeName == "patient") {
    return children;
  }
  else if (userRole === "RECEPTIONIST" && routeName == "receptionist") {
    return children;
  }
  else {
    console.log(`ACCESS DENIED !! \nFor User_type ==> ${userRole} to the page ${routeName}`);
    return <Navigate to="/" replace />;
  }
};
export default App;
