import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
    return (
        <Routes>
            <Route path="/" />
            <Route path="svg-line" />
            <Route path="svg-doughnut" />
        </Routes>
    );
}

export default App;
