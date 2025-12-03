/* app/components/tutor/TutorList.tsx */
import { ChevronDown, Edit, Eye, Search, Trash2 } from "lucide-react";
import { useTutors } from "./TutorContext";

export default function TutorList() {
  const { tutors } = useTutors();

  return (
    <div>
      {/* TOP BAR */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6 gap-4">
        <div className="flex flex-col sm:flex-row flex-wrap gap-4 w-full lg:w-auto">
          <div className="flex items-center h-10 sm:h-11 w-full sm:w-64 rounded-full gap-2 ring-1 ring-[#E5E7EB] px-3">
            <Search className="w-4 h-4 text-[#A4A7AE]" />
            <input
              type="text"
              placeholder="Search Tutor"
              className="font-normal text-sm sm:text-[14px] text-[#A4A7AE] outline-none w-full"
            />
          </div>

          {/* DATE */}
          <div className="flex items-center h-10 sm:h-11 w-full sm:w-32 gap-2 rounded-full ring-1 ring-[#E5E7EB] px-3">
            <span className="font-normal text-sm sm:text-[14px] text-[#A4A7AE]">
              Date range
            </span>
            <ChevronDown className="w-4 h-4 text-[#A4A7AE]" />
          </div>

          {/* SORT */}
          <div className="flex items-center h-10 sm:h-11 w-full sm:w-32 gap-2 rounded-full ring-1 ring-[#E5E7EB] px-3">
            <span className="font-normal text-sm sm:text-[14px] text-[#A4A7AE]">
              Sort by
            </span>
            <ChevronDown className="w-4 h-4 text-[#A4A7AE]" />
          </div>
        </div>

        {/* RIGHT BUTTON */}
        <div className="flex mt-2 lg:mt-0">
          <button
            type="button"
            className="w-full sm:w-[156px] h-12 sm:h-12 px-6 py-2 rounded-full bg-[#144B8A] font-semibold text-sm sm:text-[16px] text-white"
          >
            + Add Tutor
          </button>
        </div>
      </div>

      {/* TABLE */}
      <div className="overflow-x-auto rounded-lg">
        <table className="w-full min-w-[600px] bg-white border-separate border-spacing-0">
          <thead className="bg-[#ECECEC] text-[#081E37] text-xs sm:text-sm lg:text-base font-medium">
            <tr>
              <th className="py-2 px-2 sm:py-3 sm:px-4 text-left">Join Date</th>
              <th className="py-2 px-2 sm:py-3 sm:px-4 text-left">Full Name</th>
              <th className="py-2 px-2 sm:py-3 sm:px-4 text-left">Email</th>
              <th className="py-2 px-2 sm:py-3 sm:px-4 text-left">Phone</th>
              <th className="py-2 px-2 sm:py-3 sm:px-4 text-left">Status</th>
              <th className="py-2 px-2 sm:py-3 sm:px-4 text-center">Action</th>
            </tr>
          </thead>

          <tbody className="text-[#535862] text-[10px] sm:text-sm lg:text-base">
            {tutors.map((tutor) => (
              <tr key={tutor.id} className="border-b h-10 sm:h-12 lg:h-14">
                <td className="py-1 sm:py-2 px-2 sm:px-4">{tutor.joinDate}</td>
                <td className="py-1 sm:py-2 px-2 sm:px-4 font-medium">{tutor.name}</td>
                <td className="py-1 sm:py-2 px-2 sm:px-4">{tutor.email}</td>
                <td className="py-1 sm:py-2 px-2 sm:px-4">{tutor.phone}</td>
                <td className="py-1 sm:py-2 px-2 sm:px-4">
                  <span
                    className={`inline-flex items-center justify-center rounded-full px-2 py-1 sm:px-3 sm:py-1 text-[10px] sm:text-[12px] lg:text-[16px] ${
                      tutor.status === "Active"
                        ? "bg-[#ECFDF3] text-[#17B26A]"
                        : "bg-[#FAE9EB] text-[#D01F34]"
                    }`}
                  >
                    {tutor.status}
                  </span>
                </td>
                <td className="py-1 sm:py-2 px-2 sm:px-4 flex gap-2 sm:gap-3 justify-center">
                  <button className="bg-[#E9EAEB] rounded-[6px] w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 flex items-center justify-center">
                    <Eye className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
                  </button>
                  <button className="bg-[#D4FFE9] rounded-[6px] w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 flex items-center justify-center">
                    <Edit className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-[#2ABC73]" />
                  </button>
                  <button className="bg-[#FFEBEB] rounded-[6px] w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 flex items-center justify-center">
                    <Trash2 className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-[#E31E27]" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
