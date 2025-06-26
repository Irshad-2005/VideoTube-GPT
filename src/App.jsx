import Body from "./components/Body"
import { createBrowserRouter,RouterProvider } from "react-router-dom"
import Login from "./components/Login"
import Browse from "./components/Browse"
function App() {

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<Login/>
    },
    {
        path:"/browse",
        element:<Browse/>
    }
])
return (
        <div>
                <RouterProvider router={appRouter}>
                </RouterProvider>
        </div>
	)
}

export default App
