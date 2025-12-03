// app/components/pages/Students.tsx
import { Outlet } from "react-router-dom";
import { StudentProvider } from "../student/StudentContext";

export default function Students() {
  return (
    <StudentProvider>
      <section className="w-full px-4 sm:px-6 lg:px-8 2xl:px-0 mx-auto">
        <p className="w-full lg:w-[261px] h-[36px] font-semibold text-[20px] md:text-[24px] lg:text-[26px] text-[#081E37] mb-[20px] lg:mb-[26px]">
          Student Management
        </p>

        <div className="w-full min-h-[922px] pt-[20px] md:pt-[24px] px-[16px] md:px-[24px] lg:px-[24px] 2xl:px-[24px] rounded-[16px] bg-[#FFFFFF] overflow-x-auto">
          <Outlet />
        </div>
      </section>
    </StudentProvider>
  );
}
