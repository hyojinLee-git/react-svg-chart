import { Link, Outlet } from "react-router-dom";

function Layout() {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/line-chart">line chart</Link>
                    </li>
                    <li>
                        <Link to="/doughnut-chart">svg chart</Link>
                    </li>
                </ul>
            </nav>
            {<Outlet />}
        </>
    );
}

export default Layout;
