import { Section, SectionTitle } from "../components";

const Calendar = () => {
  return (
    <Section padding={true}>
      <div className="container">
        <SectionTitle
          center={true}
          title="Calendar"
          heading="Determine Your Date to Come"
          desc="Stay up-to-date with your appointments by viewing them on our easy-to-use online calendar. Manage your schedule and ensure you never miss a visit with us."
          className="mb-[2.1875rem] md:mb-[3.75rem]"
        />

        <div className="overflow-x-auto shadow-table">
          <table className="w-full text-center">
            <thead>
              <tr>
                <th className="py-4 font-medium text-white uppercase border-b bg-primary whitespace-nowrap text-15px md:text-base border-b-white">
                  Time
                </th>
                <th className="py-4 font-medium text-white uppercase border-b bg-primary whitespace-nowrap text-15px md:text-base border-b-white">
                  Monday
                </th>
                <th className="py-4 font-medium text-white uppercase border-b bg-primary whitespace-nowrap text-15px md:text-base border-b-white">
                  Tuesday
                </th>
                <th className="py-4 font-medium text-white uppercase border-b bg-primary whitespace-nowrap text-15px md:text-base border-b-white">
                  Wednesday
                </th>
                <th className="py-4 font-medium text-white uppercase border-b bg-primary whitespace-nowrap text-15px md:text-base border-b-white">
                  Thursday
                </th>
                <th className="py-4 font-medium text-white uppercase border-b bg-primary whitespace-nowrap text-15px md:text-base border-b-white">
                  Friday
                </th>
                <th className="py-4 font-medium text-white uppercase border-b bg-primary whitespace-nowrap text-15px md:text-base border-b-white">
                  Saturday
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="group hover:bg-primary p-4 border border-[#eeeeee] border-t-0 transition-500 md:p-6 first:border-l-0 last:border-r-0">
                  <span className="w-[3.4375rem] h-[3.4375rem] !leading-[3.4375rem] text-sm inline-block bg-[#dff5e8] text-primary rounded-full font-medium transition-500 md:w-[4.0625rem] md:h-[4.0625rem] md:!leading-[4.0625rem] md:text-base group-hover:bg-white group-hover:text-primary">
                    9.00
                  </span>
                </td>
                <td className="group hover:bg-primary p-4 border border-[#eeeeee] border-t-0 transition-500 md:p-6 first:border-l-0 last:border-r-0">
                  <h3 className="font-semibold text-15px text-secondary transition-500 group-hover:text-white md:text-base">
                    Dr. Tanner
                  </h3>
                  <span className="text-13px md:text-15px text-textPrimary block mt-1.5 transition-500 group-hover:text-white">
                    Dermatologists
                  </span>
                </td>
                <td className="group hover:bg-primary p-4 border border-[#eeeeee] border-t-0 transition-500 md:p-6 first:border-l-0 last:border-r-0">
                  <h3 className="font-semibold text-15px text-secondary transition-500 group-hover:text-white md:text-base">
                    Dr. Kwak
                  </h3>
                  <span className="text-13px md:text-15px text-textPrimary block mt-1.5 transition-500 group-hover:text-white">
                    Ear, Nose
                  </span>
                </td>
                <td className="group hover:bg-primary p-4 border border-[#eeeeee] border-t-0 transition-500 md:p-6 first:border-l-0 last:border-r-0">
                  <h3 className="font-semibold text-15px text-secondary transition-500 group-hover:text-white md:text-base">
                    Dr. Slaughter
                  </h3>
                  <span className="text-13px md:text-15px text-textPrimary block mt-1.5 transition-500 group-hover:text-white">
                    Neurologist
                  </span>
                </td>
                <td className="group hover:bg-primary p-4 border border-[#eeeeee] border-t-0 transition-500 md:p-6 first:border-l-0 last:border-r-0"></td>
                <td className="group hover:bg-primary p-4 border border-[#eeeeee] border-t-0 transition-500 md:p-6 first:border-l-0 last:border-r-0">
                  <h3 className="font-semibold text-15px text-secondary transition-500 group-hover:text-white md:text-base">
                    Dr. Foley
                  </h3>
                  <span className="text-13px md:text-15px text-textPrimary block mt-1.5 transition-500 group-hover:text-white">
                    Oncologist
                  </span>
                </td>
                <td className="group hover:bg-primary p-4 border border-[#eeeeee] border-t-0 transition-500 md:p-6 first:border-l-0 last:border-r-0">
                  <h3 className="font-semibold text-15px text-secondary transition-500 group-hover:text-white md:text-base">
                    Dr. Palmer
                  </h3>
                  <span className="text-13px md:text-15px text-textPrimary block mt-1.5 transition-500 group-hover:text-white">
                    Maxine lowe
                  </span>
                </td>
              </tr>

              <tr>
                <td className="group hover:bg-primary p-4 border border-[#eeeeee] border-t-0 transition-500 md:p-6 first:border-l-0 last:border-r-0">
                  <span className="w-[3.4375rem] h-[3.4375rem] !leading-[3.4375rem] text-sm inline-block bg-[#dff5e8] text-primary rounded-full font-medium transition-500 md:w-[4.0625rem] md:h-[4.0625rem] md:!leading-[4.0625rem] md:text-base group-hover:bg-white group-hover:text-primary">
                    12.00
                  </span>
                </td>
                <td className="group hover:bg-primary p-4 border border-[#eeeeee] border-t-0 transition-500 md:p-6 first:border-l-0 last:border-r-0"></td>
                <td className="group hover:bg-primary p-4 border border-[#eeeeee] border-t-0 transition-500 md:p-6 first:border-l-0 last:border-r-0">
                  <h3 className="font-semibold text-15px text-secondary transition-500 group-hover:text-white md:text-base">
                    Dr. Megahead
                  </h3>
                  <span className="text-13px md:text-15px text-textPrimary block mt-1.5 transition-500 group-hover:text-white">
                    Orthopedics
                  </span>
                </td>
                <td className="group hover:bg-primary p-4 border border-[#eeeeee] border-t-0 transition-500 md:p-6 first:border-l-0 last:border-r-0">
                  <h3 className="font-semibold text-15px text-secondary transition-500 group-hover:text-white md:text-base">
                    Dr. Neupane
                  </h3>
                  <span className="text-13px md:text-15px text-textPrimary block mt-1.5 transition-500 group-hover:text-white">
                    Pain Management
                  </span>
                </td>
                <td className="group hover:bg-primary p-4 border border-[#eeeeee] border-t-0 transition-500 md:p-6 first:border-l-0 last:border-r-0">
                  <h3 className="font-semibold text-15px text-secondary transition-500 group-hover:text-white md:text-base">
                    Dr. Breidin
                  </h3>
                  <span className="text-13px md:text-15px text-textPrimary block mt-1.5 transition-500 group-hover:text-white">
                    Radiologist
                  </span>
                </td>
                <td className="group hover:bg-primary p-4 border border-[#eeeeee] border-t-0 transition-500 md:p-6 first:border-l-0 last:border-r-0"></td>
                <td className="group hover:bg-primary p-4 border border-[#eeeeee] border-t-0 transition-500 md:p-6 first:border-l-0 last:border-r-0">
                  <h3 className="font-semibold text-15px text-secondary transition-500 group-hover:text-white md:text-base">
                    Dr. Pipe
                  </h3>
                  <span className="text-13px md:text-15px text-textPrimary block mt-1.5 transition-500 group-hover:text-white">
                    Surgeons
                  </span>
                </td>
              </tr>

              <tr>
                <td className="group hover:bg-primary p-4 border border-[#eeeeee] border-t-0 transition-500 md:p-6 first:border-l-0 last:border-r-0">
                  <span className="w-[3.4375rem] h-[3.4375rem] !leading-[3.4375rem] text-sm inline-block bg-[#dff5e8] text-primary rounded-full font-medium transition-500 md:w-[4.0625rem] md:h-[4.0625rem] md:!leading-[4.0625rem] md:text-base group-hover:bg-white group-hover:text-primary">
                    15.00
                  </span>
                </td>
                <td className="group hover:bg-primary p-4 border border-[#eeeeee] border-t-0 transition-500 md:p-6 first:border-l-0 last:border-r-0">
                  <h3 className="font-semibold text-15px text-secondary transition-500 group-hover:text-white md:text-base">
                    Dr. Tanner
                  </h3>
                  <span className="text-13px md:text-15px text-textPrimary block mt-1.5 transition-500 group-hover:text-white">
                    Dermatologists
                  </span>
                </td>
                <td className="group hover:bg-primary p-4 border border-[#eeeeee] border-t-0 transition-500 md:p-6 first:border-l-0 last:border-r-0">
                  <h3 className="font-semibold text-15px text-secondary transition-500 group-hover:text-white md:text-base">
                    Dr. Kwak
                  </h3>
                  <span className="text-13px md:text-15px text-textPrimary block mt-1.5 transition-500 group-hover:text-white">
                    Ear, Nose
                  </span>
                </td>
                <td className="group hover:bg-primary p-4 border border-[#eeeeee] border-t-0 transition-500 md:p-6 first:border-l-0 last:border-r-0"></td>
                <td className="group hover:bg-primary p-4 border border-[#eeeeee] border-t-0 transition-500 md:p-6 first:border-l-0 last:border-r-0">
                  <h3 className="font-semibold text-15px text-secondary transition-500 group-hover:text-white md:text-base">
                    Dr. Slaughter
                  </h3>
                  <span className="text-13px md:text-15px text-textPrimary block mt-1.5 transition-500 group-hover:text-white">
                    Neurologist
                  </span>
                </td>
                <td className="group hover:bg-primary p-4 border border-[#eeeeee] border-t-0 transition-500 md:p-6 first:border-l-0 last:border-r-0">
                  <h3 className="font-semibold text-15px text-secondary transition-500 group-hover:text-white md:text-base">
                    Dr. Foley
                  </h3>
                  <span className="text-13px md:text-15px text-textPrimary block mt-1.5 transition-500 group-hover:text-white">
                    Oncologist
                  </span>
                </td>
                <td className="group hover:bg-primary p-4 border border-[#eeeeee] border-t-0 transition-500 md:p-6 first:border-l-0 last:border-r-0"></td>
              </tr>

              <tr>
                <td className="group hover:bg-primary p-4 border border-[#eeeeee] border-t-0 transition-500 md:p-6 first:border-l-0 last:border-r-0">
                  <span className="w-[3.4375rem] h-[3.4375rem] !leading-[3.4375rem] text-sm inline-block bg-[#dff5e8] text-primary rounded-full font-medium transition-500 md:w-[4.0625rem] md:h-[4.0625rem] md:!leading-[4.0625rem] md:text-base group-hover:bg-white group-hover:text-primary">
                    18.00
                  </span>
                </td>
                <td className="group hover:bg-primary p-4 border border-[#eeeeee] border-t-0 transition-500 md:p-6 first:border-l-0 last:border-r-0">
                  <h3 className="font-semibold text-15px text-secondary transition-500 group-hover:text-white md:text-base">
                    Dr. Slaughter
                  </h3>
                  <span className="text-13px md:text-15px text-textPrimary block mt-1.5 transition-500 group-hover:text-white">
                    Neurologist
                  </span>
                </td>
                <td className="group hover:bg-primary p-4 border border-[#eeeeee] border-t-0 transition-500 md:p-6 first:border-l-0 last:border-r-0">
                  <h3 className="font-semibold text-15px text-secondary transition-500 group-hover:text-white md:text-base">
                    Dr. Megahead
                  </h3>
                  <span className="text-13px md:text-15px text-textPrimary block mt-1.5 transition-500 group-hover:text-white">
                    Orthopedics
                  </span>
                </td>
                <td className="group hover:bg-primary p-4 border border-[#eeeeee] border-t-0 transition-500 md:p-6 first:border-l-0 last:border-r-0">
                  <h3 className="font-semibold text-15px text-secondary transition-500 group-hover:text-white md:text-base">
                    Dr. Neupane
                  </h3>
                  <span className="text-13px md:text-15px text-textPrimary block mt-1.5 transition-500 group-hover:text-white">
                    Pain Management
                  </span>
                </td>
                <td className="group hover:bg-primary p-4 border border-[#eeeeee] border-t-0 transition-500 md:p-6 first:border-l-0 last:border-r-0">
                  <h3 className="font-semibold text-15px text-secondary transition-500 group-hover:text-white md:text-base">
                    Dr. Breidin
                  </h3>
                  <span className="text-13px md:text-15px text-textPrimary block mt-1.5 transition-500 group-hover:text-white">
                    Radiologist
                  </span>
                </td>
                <td className="group hover:bg-primary p-4 border border-[#eeeeee] border-t-0 transition-500 md:p-6 first:border-l-0 last:border-r-0">
                  <h3 className="font-semibold text-15px text-secondary transition-500 group-hover:text-white md:text-base">
                    Dr. Kwak
                  </h3>
                  <span className="text-13px md:text-15px text-textPrimary block mt-1.5 transition-500 group-hover:text-white">
                    Ear, Nose
                  </span>
                </td>
                <td className="group hover:bg-primary p-4 border border-[#eeeeee] border-t-0 transition-500 md:p-6 first:border-l-0 last:border-r-0">
                  <h3 className="font-semibold text-15px text-secondary transition-500 group-hover:text-white md:text-base">
                    Dr. Pipe
                  </h3>
                  <span className="text-13px md:text-15px text-textPrimary block mt-1.5 transition-500 group-hover:text-white">
                    Surgeons
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Section>
  );
};

export default Calendar;
