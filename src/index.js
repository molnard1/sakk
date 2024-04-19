import React from "react";
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ListPizzaPage from "./ListPizzaPage";
import CreatePizzaPage from "./NewPizzaPage";
import UpdatePizzaPage from "./UpdatePizzaPage";
import DeletePizzaPage from "./DeletePizzaPage";
import NavbarComponent from "./NavbarComponent";
import SinglePizzaPage from "./SinglePizzaPage";
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap-icons/font/bootstrap-icons.css";


const router = createBrowserRouter([
    {
        path: "/",
        element: <NavbarComponent />,
		children: [
			{
				path: "/",
				element: <ListPizzaPage />,
			},
			{
				path: "/create",
				element: <CreatePizzaPage />,
			},
			{
				path: "/:id",
				element: <SinglePizzaPage />,
			},
			{
				path: "/:id/edit",
				element: <UpdatePizzaPage />,
			},
			{
				path: "/:id/delete",
				element: <DeletePizzaPage />
			},
			{
				path: "*",
				element: <ListPizzaPage />
			}
		]
    }
]);

createRoot(document.getElementById("root")).render(<RouterProvider router={router}/>);