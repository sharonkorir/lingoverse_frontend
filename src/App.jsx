import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Home from "./pages/Home";
import SharedLayout from "./components/SharedLayout";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Download from "./pages/Download";
import Translate from "./pages/Translate";
import NotFound from "./pages/NotFound";
import Languages from "./pages/Languages";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="languages" element={<Languages />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="download" element={<Download />} />
          <Route path="translator" element={<Translate />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
