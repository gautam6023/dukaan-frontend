import React from "react";
import { FiSearch } from "react-icons/fi";

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
        <div className="flex-1 text-[#999] rounded-[6px] px-[16px] py-[10px] flex items-center gap-[8px] border-[1px] border-[#D9D9D9] w-[248px] mb-[12px]">
          <span className="text-[16px]">
            <FiSearch />
          </span>
          <input
            type="text"
            className="text-[14px] font-normal leading-[20px] focus:outline-none w-[100%]"
            placeholder="Search by order ID..."
          />
        </div>
      </div>
    </>
  );
};

export default Transactions;
