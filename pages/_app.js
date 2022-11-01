import "../styles/globals.css";
import { Provider } from "react-redux";
import store from "../store";
import { PrivateRoutes } from "../hoc";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PrivateRoutes>
        <Component {...pageProps} />
        <ToastContainer />
      </PrivateRoutes>
    </Provider>
  );
}

export default MyApp;
