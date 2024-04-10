/* eslint-disable react-refresh/only-export-components */
import loadable from "@loadable/component";

const Dashboard = loadable(() => import("@/views/dashboard/Dashboard"), {
  fallback: (
    <h1 className="h-screen bg-red-400 flex justify-center items-center content-center text-5xl font-bold">
      Loading
    </h1>
  ),
});

const appRoute = () => {
  return [
    {
      path: "/",
      element: <Dashboard />,
    },
  ];
};

export default appRoute;
