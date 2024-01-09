import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./components/Layout";
import Layout from "./components/Layout";
import Stats from "./components/Stats";
import Transactions from "./components/Transations";

function App() {
  return (
    <div className="App">
      <div className="h-[50px] w-[100%]">
        <Layout>
          {/* Overview */}
          <div className=" bg-[#FAFAFA] p-[32px]">
            <div className="flex justify-between">
              <p className="text-[#1A181E] text-[20px] font-medium leading-7">Overview</p>
              <div>
                <div className="flex items-center px-[14px] py-[6px] gap-[7px] text-[#4D4D4D] cursor-pointer">
                  <p className="text-[16px] font-normal leading-6">Last Month</p>
                  <span className="material-symbols-outlined w-[16px]">expand_more</span>
                </div>
              </div>
            </div>
            {/* Stats */}
            <Stats />

            {/* Transactions */}
            <Transactions />
          </div>
        </Layout>
      </div>
    </div>
  );
}

export default App;
