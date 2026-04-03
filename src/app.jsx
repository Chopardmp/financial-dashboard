import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import FinancialTable from "./components/FinancialTable";
import AddYearModal from "./components/AddYearModal";
import data from "./data/financials.json";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import CompanyHeader from "./components/CompanyHeader";

const getYear = (dateStr) => {
  if (!dateStr) return 0;
  return parseInt(dateStr.toString().slice(0, 4)) || 0;
};

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activePage, setActivePage] = useState("financial");
  const [financialData, setFinancialData] = useState(() =>
    [...data].sort((a, b) => getYear(b.year) - getYear(a.year)),
  );

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddYear = (newYear) => {
    setFinancialData((prev) => {
      const updated = [...prev, newYear];

      return updated.sort((a, b) => getYear(b.year) - getYear(a.year));
    });
  };

  return (
    <div>
      {/* TOP NAVBAR */}
      <Navbar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

      <div className="flex">
        {/* SIDEBAR */}
        <Sidebar isOpen={isSidebarOpen} setActivePage={setActivePage} />

        {/* MAIN CONTENT */}
        <div className="flex-1 p-6 bg-gray-100 min-h-screen">
          {/* COMPANY HEADER */}
          {activePage === "financial" && (
            <>
              <CompanyHeader onAdd={() => setIsModalOpen(true)} />

              <div className="bg-white rounded-lg shadow p-4 mt-4">
                <FinancialTable data={financialData} />
              </div>
            </>
          )}
        </div>
      </div>

      {/* MODAL */}
      <AddYearModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAdd={handleAddYear}
      />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
