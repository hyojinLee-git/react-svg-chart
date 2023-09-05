import { Route, Routes } from "react-router-dom";
import "./App.css";
import LineChart from "pages/LineChart";

function App() {
    return (
        <Routes>
            <Route path="/" />
            <Route path="line-chart" element={<LineChart />} />
            <Route path="doughnut-chart" />
        </Routes>
    );
}

export default App;
