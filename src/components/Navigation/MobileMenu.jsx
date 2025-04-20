import NavLink from './NavLink.jsx'

const MobileMenu = ({ navLinks, isOpen }) => {
    if (!isOpen) return null
    
    return (
        <div className="md:hidden absolute right-4 top-16 bg-white shadow-lg rounded-lg py-4 px-6 w-48 z-10">
            <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                    <NavLink key={link.id} title={link.title} path={link.path} />
                ))}
            </div>
        </div>
    )
}

export default MobileMenu
