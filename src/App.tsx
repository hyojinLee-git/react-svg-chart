import { Route, Routes } from "react-router-dom";
import "./App.css";
import LineChart from "pages/LineChart";
import DoughnutChart from "pages/DoughnutChart";
import Layout from "layout/Layout";

function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<LineChart />} />
                <Route path="/line-chart" element={<LineChart />} />
                <Route path="/doughnut-chart" element={<DoughnutChart />} />
            </Route>
        </Routes>
    );
}

export default App;
