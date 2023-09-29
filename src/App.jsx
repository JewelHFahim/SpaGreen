import { RouterProvider } from "react-router-dom";
import router from "./routes/router";

const App = () => {
  return (
    <div className="font-Inter bg-white">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
