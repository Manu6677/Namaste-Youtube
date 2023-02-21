import "./App.css";
import Head from "./components/Head";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />, // sirf body change ho rhi hai route change krne pe(next page jane p) but header and side bar remain same
    children: [
      // thesee children will go where is the outlet present
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
    ],
  },
]);
function App() {
  return (
    <Provider store={store}>
      <div>
        <Head />
        <RouterProvider router={appRouter} />
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
