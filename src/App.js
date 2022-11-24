import { BrowserRouter, Route, Routes } from "react-router-dom";
import Account from "./pages/Account/Account";
import Login from "./pages/LogIn/LogIn";
require("helvatica-neue-lt/index.css");

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/account" element={<Account />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
