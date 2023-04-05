import React, { useState } from "react";
import "./App.scss";
import "./styles/styles.scss";
import { Button } from "./shared/components";
import Header from "./pages/components/header/Header";
import { useRoutes } from "react-router-dom";
import { publicRoutes, privateRoutes } from "./routes/routesConfig";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const routes = useRoutes(!isLogin ? privateRoutes : publicRoutes);
  return (
    <>
      {!isLogin ? (
        <div className="App">
          <Header title="THL ONE" />
        </div>
      ) : (
        ""
      )}
      {routes}
    </>
  );
}

export default App;
