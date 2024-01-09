import React, { useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import { CiCircleInfo } from "react-icons/ci";
import TransactionData from "../assets/orders.json";
import dayjs from "dayjs";

interface ProductData {
  id: number;
  date: string;
  order_amount: string;
}
const Table = () => {
  const [data, setData] = useState<ProductData[]>(TransactionData);
  const tableHeader = [
    { name: "Order ID", icon: "" },
    { name: "Order date", icon: <FaCaretDown /> },
    { name: "Order amount", icon: "" },
    { name: "Transaction fees", icon: <CiCircleInfo /> },
  ];

  return (
    <>
      <div className="rounded-[4px] bg-[#F2F2F2] text-[#4D4D4D] w-[100%] px-[12px] py-[10px] flex justify-between">
        {tableHeader.map((el) => {
          return (
            <div
              className="flex gap-[4px] items-center"
              style={{
                cursor: el.icon ? "pointer" : "",
              }}
            >
              <p className="text-[14px] font-medium leading-5">{el.name}</p>
              <span>{el.icon}</span>
            </div>
          );
        })}
      </div>
      {data.map((el) => {
        return (
          <div className="rounded-[4px] bg-[#FFF] text-[#4D4D4D] w-[100%] px-[12px] py-[14px] flex justify-between border-b-[1px] gap-[40px] hover:bg-slate-50 hover:rounded-[0px]">
            <div className="flex-1">
              {" "}
              <p className="text-[14px] font-medium leading-5 text-[#146EB4] cursor-pointer">#{el.id}</p>
            </div>
            <div className="flex-1">
              {" "}
              <p className="text-[14px] font-normal leading-5">{dayjs(el.date, "D-M-YYYY").format("D MMMM YYYY")}</p>
            </div>
            <div className="flex-1 flex justify-center">
              <p className="text-[14px] font-normal leading-5">₹{Number(el.order_amount).toLocaleString("en-IN")}</p>
            </div>
            <div className="flex-1 flex justify-end">
              <p className="text-[14px] font-normal leading-5">₹22</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Table;
