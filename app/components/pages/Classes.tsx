// app/components/pages/Classes.tsx
import { Outlet } from "react-router-dom";

export default function Classes() {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 2xl:px-0 mx-auto">
  <p className="text-2xl sm:text-[26px] font-semibold text-[#081E37] mb-6 lg:mb-8">
    Class Management
  </p>

  <div className="w-full bg-white rounded-[16px] min-h-[800px] p-4 sm:p-6 lg:p-8">
    <Outlet />
  </div>
</section>

  );
}