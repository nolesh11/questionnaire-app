import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./contexts/themeProvider";
import Welcome from "./pages/Welcome";
import StepOne from "./pages/StepOne";
import StepTwo from "./pages/StepTwo";
import StepThree from "./pages/StepThree";
import StepFour from "./pages/StepFour";
import Thanks from "./pages/Thanks";
import "./styles/main.css";

const routerConfig = createBrowserRouter([
  {
    path: '/',
    element: <Welcome />,
  },
  {
    path: '/step-one',
    element: <StepOne />,
  },
  {
    path: '/step-two',
    element: <StepTwo />,
  },
  {
    path: '/step-three',
    element: <StepThree />,
  },
  {
    path: '/step-four',
    element: <StepFour />,
  },
  {
    path: '/thanks',
    element: <Thanks />,
  },
]);

const App = () => {
  return (
    <ThemeProvider>
      <div className="App">
        <RouterProvider router={routerConfig} />
      </div>
    </ThemeProvider>
  );
};

export default App;
