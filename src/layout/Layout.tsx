/** @jsxImportSource @emotion/react */
import { Link, Outlet } from "react-router-dom";
import { css } from "@emotion/react";

function Layout() {
    return (
        <>
            <nav
                css={css({
                    padding: "20px",
                    background: "#385449",
                })}
            >
                <ul css={css({ display: "flex", gap: "30px" })}>
                    <li>
                        <Link
                            css={css({ color: "#fff", fontWeight: "bold" })}
                            to="/line-chart"
                        >
                            Line Chart
                        </Link>
                    </li>
                    <li>
                        <Link
                            css={css({ color: "#fff", fontWeight: "bold" })}
                            to="/doughnut-chart"
                        >
                            Doughnut Chart
                        </Link>
                    </li>
                </ul>
            </nav>
            {<Outlet />}
        </>
    );
}

export default Layout;
