function Navbar(){
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if(element){
            element.scrollIntoView({behavior: "smooth"});
        }
    }
    return (
        <nav className="navbar">
            <div className="nav-container">
                <div className="nav-logo">
                    Dr. Koushik Roy
                </div>
                <ul className="nav-links">
                    <li onClick={() => scrollToSection("home")}>Home</li>
                    <li onClick={() => scrollToSection("about")}>About</li>
                    <li onClick={() => scrollToSection("research")}>Research</li>
                    <li onClick={() => scrollToSection("publications")}>Publications</li>
                    <li onClick={() => scrollToSection("recognitions")}>Recognitions</li>
                    <li onClick={() => scrollToSection("teaching")}>Teaching</li>
                    <li onClick={() => scrollToSection("contact")}>Contact</li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;