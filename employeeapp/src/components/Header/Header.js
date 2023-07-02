import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";
import { logoutAction } from "../../redux/actions/authActions";

function Header(props) {
    const { name } = props;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const navBarData = [
        {
            url: "/",
            name: "Trang chủ",
        },
        {
            url: "/leaderboards",
            name: "Leaderboards",
        },
        {
            url: "/add",
            name: "New",
        },
    ];

    const userData = [
        {
            name: name,
        },
        {
            name: "Logout",
        },
    ];

    const onLogout = () => {
        //dispatch(logoutAction());
        localStorage.clear();
        navigate("/login");
    };

    return (
        <header>
            <Container>
                <Navbar expand="lg">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav style={{ width: "100%" }}>
                            <ul className="nav ms-lg-auto align-items-center justify-content-center flex-column flex-lg-row">
                                {navBarData.map((item, index) => (
                                    <li key={index}>
                                        <Link
                                            to={item.url}
                                            className="nav-link px-4 link-dark fw-bold menu-link"
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                            <div className="text-center text-lg-end ms-lg-auto">
                                <ul
                                    //className="dropdown-menu"
                                    aria-labelledby="dropdownMenuProfile"
                                >
                                    <li key="1">{userData[0].name}</li>
                                    <li key="2">
                                        <button
                                            type="button"
                                            className="dropdown-item"
                                            onClick={onLogout}
                                        >
                                            {userData[1].name}
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </header>
    );
}

export default Header;
