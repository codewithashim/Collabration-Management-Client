import { RouterProvider } from "react-router-dom";
import routes from "./Router/Router";

const App = () => {
  return (
    <main>
      <RouterProvider router={routes} />
    </main>
  );
};

export default App;
