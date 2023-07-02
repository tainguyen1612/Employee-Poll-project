import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import UserLayout from "./layout/UserLayout";
import NotFound from "./components/NotFound";
import LoginPage from "./pages/User/Login";
import Home from "./pages/User/Home";
import DetailQuestion from "./pages/User/DetailQuestion";

function App() {
    return (
        <BrowserRouter>
            <div className="app">
                <Routes>
                    <Route path="/" element={<UserLayout />}>
                        <Route path="/" element={<Home />} />
                        <Route
                            path="questions/:question_id"
                            element={<DetailQuestion />}
                        />
                    </Route>
                    <Route path="/login" element={<LoginPage />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
