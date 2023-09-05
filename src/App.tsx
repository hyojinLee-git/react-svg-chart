import { Route, Routes } from "react-router-dom";
import "./App.css";
import LineChart from "pages/LineChart";
import DoughnutChart from "pages/DoughnutChart";

function App() {
    return (
        <Routes>
            <Route path="/" />
            <Route path="line-chart" element={<LineChart />} />
            <Route path="doughnut-chart" element={<DoughnutChart />} />
        </Routes>
    );
}

export default App;
