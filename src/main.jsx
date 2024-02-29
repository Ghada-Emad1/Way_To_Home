import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import "./index.css";
import { configureStore } from "@reduxjs/toolkit";
import AddReducer from "./AddReducer/AddReducer.jsx";
import { Provider } from "react-redux";
const store = configureStore({
  reducer: {
    users: AddReducer,
  },
});
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
