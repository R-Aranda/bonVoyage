import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import App from "../react/components/App";
import store from "../react/components/redux/store";
import RedBox from "redbox-react";

document.addEventListener("DOMContentLoaded", () => {
  let reactElement = document.getElementById("app");

  if (reactElement) {
    if (window.railsEnv && window.railsEnv === "development") {
      try {
        render(
          <Provider store={store}>
            <App />
          </Provider>,
          reactElement
        );
      } catch (e) {
        render(<RedBox error={e} />, reactElement);
      }
    } else {
      render(
        <Provider store={store}>
          <App />
        </Provider>,
        reactElement
      );
    }
  }
});
