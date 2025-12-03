import ClassCards from "../dashboard/ClassCards";
import EarningsChart from "../dashboard/EarningsChart";
import Recent from "../dashboard/Recent";
import RecentForum from "../dashboard/RecentForum";
import TopStats from "../dashboard/TopStats";

export default function Dashboard() {
  return (
    <section
      className="
        w-full 
        max-w-[1174px] 
        mx-auto 
        px-4 sm:px-6 lg:px-0
      "
    >
    
      <p className="w-full max-w-[213px] h-[36px] font-semibold text-[22px] text-[#081E37]">
        Good Morning, Rana!
      </p>

      <div className="mt-[20px]">
        <TopStats />
      </div>

      <div
        className="
          flex 
          flex-col lg:flex-row 
          mt-[24px] 
          gap-[19px] 
          w-full
        "
      >
        <EarningsChart />

        <RecentForum />
      </div>

      <div className="mt-[24px] w-full">
        <ClassCards />
      </div>

      <div className="mt-[24px] w-full">
        <Recent />
      </div>
    </section>
  );
}
