export function DiscountCornerBadge({ value }) {
  if (!value) {
    return null;
  }

  return (
    <div
      className="absolute right-0 top-0 z-10 h-[112px] w-[112px] bg-red-600 shadow-lg"
      style={{ clipPath: "polygon(100% 0, 18% 0, 100% 82%)" }}
    >
      <div className="absolute right-[6px] top-2 flex w-[58px] flex-col items-end text-white">
        <span className="text-[10px] font-black uppercase leading-none tracking-[0.12em]">Save</span>
        <span className="mt-1 text-[17px] font-black leading-none">{value}%</span>
        <span className="mt-1 text-[10px] font-black uppercase leading-none tracking-[0.12em]">Off</span>
      </div>
    </div>
  );
}
