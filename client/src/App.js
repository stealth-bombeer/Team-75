import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { Navbar, Footer, Sidebar, ThemeSettings } from "./components";
import {
  Ecommerce,
  Orders,
  Calendar,
  Employees,
  Stacked,
  Pyramid,
  Customers,
  Kanban,
  Line,
  Area,
  Bar,
  Pie,
  Financial,
  ColorPicker,
  ColorMapping,
  Editor,
} from "./pages";
import Sign from "./pages/Sign";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import "./App.css";
import { Navigate } from "react-router-dom";
import { useStateContext } from "./context/ContextProvider";
import { useAuthContext } from "./hooks/useAuthContext";

const App = () => {
  const { user } = useAuthContext();
  const {
    setCurrentColor,
    setCurrentMode,
    currentMode,
    activeMenu,
    currentColor,
    themeSettings,
    setThemeSettings,
  } = useStateContext();

  useEffect(() => {
    const currentThemeColor = localStorage.getItem("colorMode");
    const currentThemeMode = localStorage.getItem("themeMode");
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, []);

  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
            <TooltipComponent content="Settings" position="Top">
              <button
                type="button"
                onClick={() => setThemeSettings(true)}
                style={{ background: currentColor, borderRadius: "50%" }}
                className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu && user ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}
          <div
            className={
              activeMenu && user
                ? "dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  "
                : "bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 "
            }
          >
            {user && (
              <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
                <Navbar />
              </div>
            )}
            <div>
              {themeSettings && <ThemeSettings />}

              <Routes>
                <Route
                  path="/login"
                  element={!user ? <Login /> : <Navigate to="/" />}
                />
                <Route
                  path="/signup"
                  element={!user ? <Sign /> : <Navigate to="/" />}
                />
                <Route
                  path="/forgotPassword"
                  element={!user ? <ForgotPassword /> : <Navigate to="/" />}
                />
                <Route
                  path="/resetPassword/:newToken"
                  element={!user ? <ResetPassword /> : <Navigate to="/" />}
                />

                {/* dashboard  */}
                <Route
                  path="/"
                  element={user ? <Ecommerce /> : <Navigate to="/login" />}
                />
                <Route
                  path="/ecommerce"
                  element={!user ? <Ecommerce /> : <Navigate to="/login" />}
                />

                {/* pages  */}
                <Route
                  path="/orders"
                  element={user ? <Orders /> : <Navigate to="/login" />}
                />
                <Route
                  path="/employees"
                  element={user ? <Employees /> : <Navigate to="/login" />}
                />
                <Route
                  path="/customers"
                  element={user ? <Customers /> : <Navigate to="/login" />}
                />

                {/* apps  */}
                <Route
                  path="/kanban"
                  element={user ? <Kanban /> : <Navigate to="/login" />}
                />
                <Route
                  path="/editor"
                  element={user ? <Editor /> : <Navigate to="/login" />}
                />
                <Route
                  path="/calendar"
                  element={user ? <Calendar /> : <Navigate to="/login" />}
                />
                <Route
                  path="/color-picker"
                  element={user ? <ColorPicker /> : <Navigate to="/login" />}
                />

                {/* charts  */}
                <Route
                  path="/line"
                  element={user ? <Line /> : <Navigate to="/login" />}
                />
                <Route
                  path="/area"
                  element={user ? <Area /> : <Navigate to="/login" />}
                />
                <Route
                  path="/bar"
                  element={user ? <Bar /> : <Navigate to="/login" />}
                />
                <Route
                  path="/pie"
                  element={user ? <Pie /> : <Navigate to="/login" />}
                />
                <Route
                  path="/financial"
                  element={user ? <Financial /> : <Navigate to="/login" />}
                />
                <Route
                  path="/color-mapping"
                  element={user ? <ColorMapping /> : <Navigate to="/login" />}
                />
                <Route
                  path="/pyramid"
                  e
                  element={user ? <Pyramid /> : <Navigate to="/login" />}
                />
                <Route
                  path="/stacked"
                  element={user ? <Stacked /> : <Navigate to="/login" />}
                />
              </Routes>
            </div>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
