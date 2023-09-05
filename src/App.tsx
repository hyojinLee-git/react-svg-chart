import { Route, Routes } from "react-router-dom";
import "./App.css";
import LineChart from "pages/LineChart";

function App() {
    return (
        <Routes>
            <Route path="/" />
            <Route path="svg-line" element={<LineChart />} />
            <Route path="svg-doughnut" />
        </Routes>
    );
}

export default App;
