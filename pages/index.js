import React from "react";
import Navbar from "../components/Navbar.jsx";
import SearchBar from "../components/SearchBar";
import LeftSection from "../components/LeftSection";
import MainSection from "../components/MainSection";
import Footer from "../components/Footer";
import DepartmentModal from "../components/DepartmentModal";
import FilterProvider from "../components/Hooks/FilterProvider";

export default function Home() {
  return (
    <FilterProvider>
      <div className="relative flex flex-col flex-1 min-h-screen bg-gray-100">
        <Navbar />
        <SearchBar />
        <div className="flex lg:mx-5 flex-1">
          <LeftSection />
          <MainSection />
        </div>
        <DepartmentModal />
        <Footer />
      </div>
    </FilterProvider>
  );
}
