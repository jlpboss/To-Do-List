import Logo from "./logo"
import Navtext from "./navText"

export default function Navbar() {

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><Logo /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <Navtext
                                    text={"Home"}
                                    class={""}
                                /></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">
                                <Navtext
                                    text={"Menu"}
                                    class={""}
                                />
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <Navtext
                                    text={"Contact Us"}
                                    class={""}
                                /></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}