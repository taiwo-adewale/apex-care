import { useState, useRef, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";

const FormSelect = ({ id, label, selectList, icon, value, dispatch, name }) => {
  const ref = useRef();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen((prevVal) => !prevVal);
  };

  const handleChangeValue = (item) => {
    dispatch({ type: "CHANGE_INPUT", payload: { name, value: item } });
    setOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (
        ref.current &&
        !ref.current.contains(e.target) &&
        e.target.id !== id
      ) {
        setOpen(false);
      }
    };

    if (open) {
      document.body.addEventListener("click", handleOutsideClick);
    }

    return () => {
      document.body.removeEventListener("click", handleOutsideClick);
    };
  }, [open]);

  return (
    <div className="relative pl-10 md:pl-[3.25rem] flex flex-col">
      <label
        htmlFor={name}
        className="mb-2 uppercase text-textPrimary font-medium text-xs md:text-13px font-poppins"
      >
        {label}
      </label>

      <span
        id={id}
        className="border-b border-b-[#eeeeee] font-semibold pb-2 text-secondary transition-500 text-sm md:text-15px lg:text-17px capitalize flex items-center justify-between cursor-pointer font-poppins"
        onClick={handleOpen}
      >
        {value}{" "}
        <FaChevronDown
          className={`text-sm transition-500 ${open ? "rotate-180" : ""}`}
        />
      </span>

      <div className="absolute left-0 top-1/2 -translate-y-[50%] text-primary text-3xl">
        {icon}
      </div>

      <ul
        ref={ref}
        className={`absolute left-10 md:left-[3.25rem] right-0 overflow-x-hidden py-2.5 bg-white z-20 transition-500 max-h-[260px] top-full origin-top shadow-[0_0_29px_0_rgba(102,102,102,0.1)] ${
          open
            ? "opacity-100 pointer-events-auto scale-100"
            : "opacity-0 pointer-events-none scale-50"
        }`}
      >
        {selectList.map((item, index) => (
          <li
            key={`select-${item}-${index}`}
            onClick={() => handleChangeValue(item)}
            className={`text-15px font-poppins px-5 cursor-pointer leading-[2.5rem] min-h-[2.5rem] capitalize transition-300 hover:bg-primary  hover:text-white ${
              value === item ? "font-bold" : ""
            }`}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FormSelect;
