
// import { BrowserRouter, Routes, Route } from "react-router-dom"
// import Dashboard from "./pages/Dashboard"

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Dashboard />} />
//       </Routes>
//     </BrowserRouter>
//   )
// }

// export default App
// src/App.tsx
// src/App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AppSidebar from "./components/Slidebar";
import Header from "./components/Header";
import  { useState } from "react";

function App() {
  const [currentTab, setCurrentTab] = useState("Articles");
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <BrowserRouter>
      <div className="flex h-screen">
        <AppSidebar />
        <div className="flex-1 overflow-auto bg-gray-50">
          <Header
            currentTab={currentTab}
            setCurrentTab={setCurrentTab}
            onSearch={handleSearch}
          />
          <div className="p-6">
            <Routes>
              <Route
                path="/"
                element={<Dashboard currentTab={currentTab} searchQuery={searchQuery} />}
              />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
