import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./components/Layout";
import Layout from "./components/Layout";

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
            <div className="mt-[24px] flex gap-[20px]">
              <div className="flex-1 h-[118px] bg-[#FFF] p-[20px]">
                <p className="text-[16px] font-normal leading-6 text-[#4D4D4D]">Online orders</p>
                <p className="text-[32px] font-medium leading-[38px] text-[#1A181E] mt-[16px]">231</p>
              </div>
              <div className="flex-1 h-[118px] bg-[#FFF] p-[20px]">
                <p className="text-[16px] font-normal leading-6 text-[#4D4D4D]">Online orders</p>
                <p className="text-[32px] font-medium leading-[38px] text-[#1A181E] mt-[16px]">₹23,92,312.19</p>
              </div>
            </div>
          </div>
        </Layout>
      </div>
    </div>
  );
}

export default App;
