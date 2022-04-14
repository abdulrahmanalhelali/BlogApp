import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top" style={{ height: "7vh" }}>
            <div className="container-fluid mx-5 d-flex justify-content-between">
                <div>
                    <Link className="navbar-brand" to="/">
                        <img src="https://youthink.la/wp-content/themes/youthinkadult/assets/images/footer-logo.svg" alt="youthinklogo" />
                    </Link>
                </div>
                <div>
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item me-3">
                            <Link className="nav-link" to="/"
                                onMouseEnter={(e) => e.target.style.textDecoration = "underline"}
                                onMouseLeave={(e) => e.target.style.textDecoration = "none"}
                            >Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/blog"
                                onMouseEnter={(e) => e.target.style.textDecoration = "underline"}
                                onMouseLeave={(e) => e.target.style.textDecoration = "none"}
                            >Blog</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
