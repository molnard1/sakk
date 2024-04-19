import React from "react";
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ListChessPage from "./ListChessPage";
import CreateChessPage from "./NewChessPage";
import UpdateChessPage from "./UpdateChessPage";
import DeleteChessPage from "./DeleteChessPage";
import NavbarComponent from "./NavbarComponent";
import SingleChessPage from "./SingleChessPage";
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap-icons/font/bootstrap-icons.css";


const router = createBrowserRouter([
    {
        path: "/",
        element: <NavbarComponent />,
		children: [
			{
				path: "/",
				element: <ListChessPage />,
			},
			{
				path: "/create",
				element: <CreateChessPage />,
			},
			{
				path: "/:id",
				element: <SingleChessPage />,
			},
			{
				path: "/:id/edit",
				element: <UpdateChessPage />,
			},
			{
				path: "/:id/delete",
				element: <DeleteChessPage />
			},
			{
				path: "*",
				element: <ListChessPage />
			}
		]
    }
]);

createRoot(document.getElementById("root")).render(<RouterProvider router={router}/>);