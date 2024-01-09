import React, { useState } from "react";

const Pagination = () => {
  const [select, setSelect] = useState(10);
  const btns = [1, "...", 10, 11, 12, 13, 14, 15, 16, 17, 18];

  return (
    <div className="flex gap-[24px] items-center">
      <button
        disabled={select === 1}
        onClick={() => {
          if (select === 10) {
            setSelect(1);
            return;
          }
          setSelect(select - 1);
        }}
        className="text-[#4D4D4D] border-[1px] flex items-center px-[12px] py-[6px] gap-[6px] border-[#D9D9D9] rounded hover:bg-slate-50"
      >
        <span className="material-symbols-outlined text-[16px]">arrow_back_ios</span>
        <p>Previous</p>
      </button>

      <div className="flex items-center gap-2">
        {btns.map((el) => {
          return (
            <button
              onClick={() => {
                if (typeof el === "number") {
                  setSelect(el);
                }
              }}
              className="w-[28px] h-[28px] text-[14px] font-normal leading-5 text-[#4D4D4D] hover:bg-slate-50"
              style={{
                background: el === select ? "#146EB4" : "",
                fontWeight: el === select ? 500 : "",
                color: el === select ? "#FFFFFF" : "",
                borderRadius: "4px",
              }}
            >
              {el}
            </button>
          );
        })}
      </div>
      <button
        className="text-[#4D4D4D] border-[1px] flex items-center px-[12px] py-[6px] gap-[6px] border-[#D9D9D9] rounded hover:bg-slate-50"
        disabled={select === 18}
        onClick={() => {
          if (select === 1) {
            setSelect(10);
            return;
          }
          setSelect(select + 1);
        }}
      >
        <p>Next</p>
        <span className="material-symbols-outlined text-[16px]">arrow_forward_ios</span>
      </button>
    </div>
  );
};

export default Pagination;
