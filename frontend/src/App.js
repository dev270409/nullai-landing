import React from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppShell from "@/components/AppShell";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppShell />} />
          <Route path="*" element={<AppShell />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
