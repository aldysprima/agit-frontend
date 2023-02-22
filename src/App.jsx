import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";
import Login from "./pages/Login";
import JobList from "./pages/JobList";
import JobDetail from "./pages/JobDetail";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/job-list",
    element: <JobList />,
  },
  {
    path: "/job-detail/:id",
    element: <JobDetail />,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
