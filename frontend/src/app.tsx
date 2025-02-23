import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { CreateTripePage } from "./pages/create-trip";
import { TripDetailsPage } from "./pages/trip-details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CreateTripePage />,
  },
  { 
    path: "/trips/:tripId",
    element: <TripDetailsPage />,
  },
]);

export function App() {
 return <RouterProvider router={router} />
}


