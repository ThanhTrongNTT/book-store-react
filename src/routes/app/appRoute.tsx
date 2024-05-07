/* eslint-disable react-refresh/only-export-components */
import Detail from "@/views/Detail/Detail";
import Genres from "@/views/Genres/Genres";
import Search from "@/views/Search/Search";
import loadable from "@loadable/component";

const Dashboard = loadable(() => import("@/views/dashboard/Dashboard"), {
  fallback: (
    <div className="h-screen flex justify-center items-center content-center">
      <div
        className={`border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-primary`}
      />
    </div>
  ),
});

const appRoute = () => {
  return [
    {
      path: "/",
      element: <Dashboard />,
    },
    {
      path: "/genre",
      element: <Genres />,
    },
    {
      path: "/detail/works/:id",
      element: <Detail />,
    },
    {
      path: "/search",
      element: <Search />,
    },
  ];
};

export default appRoute;
