import React from "react";

const FormTextArea = ({ value, dispatch, name, label, icon, placeholder }) => {
  return (
    <div className="relative pl-10 md:pl-[3.25rem] flex flex-col md:col-span-2">
      <label
        htmlFor={name}
        className="mb-2 uppercase text-textPrimary font-medium text-xs md:text-13px font-poppins"
      >
        {label}
      </label>

      <textarea
        placeholder={placeholder}
        value={value}
        id={name}
        onChange={(e) =>
          dispatch({
            type: "CHANGE_INPUT",
            payload: { name, value: e.target.value },
          })
        }
        className="border-b border-b-[#eeeeee] font-semibold pb-2 text-secondary transition-500 outline-none focus:border-b-primary focus:outline-none text-sm md:text-15px lg:text-17px placeholder:text-secondary font-poppins min-h-[80px]"
      />

      <div className="absolute left-0 top-4 text-primary text-3xl">{icon}</div>
    </div>
  );
};

export default FormTextArea;
