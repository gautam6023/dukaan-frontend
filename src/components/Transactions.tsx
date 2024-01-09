import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import Table from "./Table";
import { TbArrowsSort } from "react-icons/tb";
import { GoDownload } from "react-icons/go";

const Transactions = () => {
  return (
    <>
      <p className="text-[20px] font-medium leading-7 text-[#1A181E]">Transactions | This Month</p>
      <div
        className="p-[12px] bg-[#FFF] rounded-[8px] mt-[20px]"
        style={{
          boxShadow: "0px 2px 6px 0px rgba(26, 24, 30, 0.04)",
        }}
      >
        <div className="mb-[12px] flex items-center justify-between">
          <div className="flex-1 text-[#999] rounded-[6px] px-[16px] py-[10px] flex items-center gap-[8px] border-[1px] border-[#D9D9D9] max-w-[248px]">
            <span className="text-[16px]">
              <FiSearch />
            </span>
            <input
              type="text"
              className="text-[14px] font-normal leading-[20px] focus:outline-none w-[100%]"
              placeholder="Search by order ID..."
            />
          </div>
          <div className="flex gap-[12px] items-center">
            <button
              className="text-[#4D4D4D] px-[12px] py-[6px] flex gap-[6px] items-center border-[1px] border-[#D9D9D9] hover:bg-slate-50"
              style={{
                borderRadius: "4px",
              }}
            >
              <p>Sort</p>
              <span className="w-[16px]">
                <TbArrowsSort />
              </span>
            </button>
            <button
              className="text-[#4D4D4D] p-[8px] flex gap-[6px] items-center border-[1px] border-[#D9D9D9] hover:bg-slate-50"
              style={{
                borderRadius: "4px",
              }}
            >
              <span className="text-[20px] text-[#4D4D4D]">
                <GoDownload />
              </span>
            </button>
          </div>
        </div>

        <Table />
      </div>
    </>
  );
};

export default Transactions;
