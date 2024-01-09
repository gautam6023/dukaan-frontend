const Stats = () => {
  return (
    <div className="mt-[24px] flex gap-[20px] mb-[32px]">
      <div
        className="flex-1 h-[118px] bg-[#FFF] p-[20px] rounded-[8px]"
        style={{
          boxShadow: "0px 2px 6px 0px rgba(26, 24, 30, 0.04)",
        }}
      >
        <p className="text-[16px] font-normal leading-6 text-[#4D4D4D]">Online orders</p>
        <p className="text-[32px] font-medium leading-[38px] text-[#1A181E] mt-[16px]">231</p>
      </div>
      <div
        className="flex-1 h-[118px] bg-[#FFF] p-[20px] rounded-[8px]"
        style={{
          boxShadow: "0px 2px 6px 0px rgba(26, 24, 30, 0.04)",
        }}
      >
        <p className="text-[16px] font-normal leading-6 text-[#4D4D4D]">Online orders</p>
        <p className="text-[32px] font-medium leading-[38px] text-[#1A181E] mt-[16px]">₹23,92,312.19</p>
      </div>
    </div>
  );
};

export default Stats;
