import "./App.css";
import Head from "./components/Head";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./utils/store";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Head />
        <Body />
      </div>
    </Provider>

    /**
     *
     * Head
     * Body
     *  SideBar
     *    Menu
     *
     * Main Container
     *  video container
     *    video card container
     *
     *
     */
  );
}

export default App;
