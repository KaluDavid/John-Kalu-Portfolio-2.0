import { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Lazy from "./utils/Lazy";
import Spinner from "./components/ui/Spinner";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Lazy.Page_Layout />,
      children: [
        {
          path: "",
          element: <Lazy.Landing_Page />,
        },
        {
          path: "about",
          element: <Lazy.About_Page />,
        },
        {
          path: "project_1",
          element: <Lazy.Project_1 />,
        },
        {
          path: "project_2",
          element: <Lazy.Project_2 />,
        },
        {
          path: "project_3",
          element: <Lazy.Project_3 />,
        },
      ],
    },
  ]);

  return (
    <Suspense fallback={<Spinner />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}
export default App;
