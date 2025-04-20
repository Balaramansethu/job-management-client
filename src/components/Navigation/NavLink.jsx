import { Link, useLocation } from "react-router-dom"

const NavLink = ({ title, path }) => {
    const location = useLocation()
    const isActive = location.pathname === path

    return (
        <Link
            to={path}
            className={`text-base font-medium transition-colors ${
                isActive
                    ? "text-purple-700"
                    : "text-gray-700 hover:text-purple-600"
            }`}
        >
            {title}
        </Link>
    )
}

export default NavLink
