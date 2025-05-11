import { Outlet } from "react-router"
import { Navbar } from "../components/Navbar"
export const Layout = () => {
    return (
        <div>
            <Navbar/>
            <Outlet /> {/* Renders the current page's content*/}
        </div>
    )
}