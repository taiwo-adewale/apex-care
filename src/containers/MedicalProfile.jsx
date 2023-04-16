import { useState } from "react";
import { SectionTitle, Section } from "../components";

const MedicalProfile = () => {
  const [editMode, setEditMode] = useState(true);

  return (
    <Section padding={true}>
      <div className="container">
        <SectionTitle
          center={true}
          title="Medical Profile"
          heading="View Medical Profile"
          desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum doloremque, hic esse veritatis quisquam excepturi, sint."
        />

        <div className="grid grid-cols-4 gap-y-30px w-full pt-30px">
          <div>
            <label
              htmlFor="first-name"
              className="block text-textPrimary mb-1.5 text-13px md:text-15px"
            >
              First Name:
            </label>
            <input
              type="text"
              value="Adewale"
              className={`block text-secondary py-2 font-medium text-base md:text-[1.125rem] outline-none focus:outline-none ${
                editMode
                  ? "pointer-events-auto focus:border-b-primary transition-300 border-b-2"
                  : "pointer-events-none border-b-transparent"
              }`}
            />
          </div>
          <div>
            <label
              htmlFor="first-name"
              className="block text-textPrimary mb-1.5 text-13px md:text-15px"
            >
              Last Name:
            </label>
            <input
              type="text"
              value="Adewale"
              className={`block text-secondary py-2 font-medium text-base md:text-[1.125rem] outline-none focus:outline-none ${
                editMode
                  ? "pointer-events-auto focus:border-b-primary transition-300 border-b-2"
                  : "pointer-events-none border-b-transparent"
              }`}
            />
          </div>
          <div>
            <label
              htmlFor="first-name"
              className="block text-textPrimary mb-1.5 text-13px md:text-15px"
            >
              Email:
            </label>
            <input
              type="text"
              value="Adewale"
              className={`block text-secondary py-2 font-medium text-base md:text-[1.125rem] outline-none focus:outline-none ${
                editMode
                  ? "pointer-events-auto focus:border-b-primary transition-300 border-b-2"
                  : "pointer-events-none border-b-transparent"
              }`}
            />
          </div>
          <div>
            <label
              htmlFor="first-name"
              className="block text-textPrimary mb-1.5 text-13px md:text-15px"
            >
              State:
            </label>
            <input
              type="text"
              value="Adewale"
              className={`block text-secondary py-2 font-medium text-base md:text-[1.125rem] outline-none focus:outline-none ${
                editMode
                  ? "pointer-events-auto focus:border-b-primary transition-300 border-b-2"
                  : "pointer-events-none border-b-transparent"
              }`}
            />
          </div>
          <div>
            <label
              htmlFor="first-name"
              className="block text-textPrimary mb-1.5 text-13px md:text-15px"
            >
              City:
            </label>
            <input
              type="text"
              value="Adewale"
              className={`block text-secondary py-2 font-medium text-base md:text-[1.125rem] outline-none focus:outline-none ${
                editMode
                  ? "pointer-events-auto focus:border-b-primary transition-300 border-b-2"
                  : "pointer-events-none border-b-transparent"
              }`}
            />
          </div>
          <div>
            <label
              htmlFor="first-name"
              className="block text-textPrimary mb-1.5 text-13px md:text-15px"
            >
              Date of Birth:
            </label>
            <input
              type="text"
              value="Adewale"
              className={`block text-secondary py-2 font-medium text-base md:text-[1.125rem] outline-none focus:outline-none ${
                editMode
                  ? "pointer-events-auto focus:border-b-primary transition-300 border-b-2"
                  : "pointer-events-none border-b-transparent"
              }`}
            />
          </div>
          <div>
            <label
              htmlFor="first-name"
              className="block text-textPrimary mb-1.5 text-13px md:text-15px"
            >
              Height:
            </label>
            <input
              type="text"
              value="Adewale"
              className={`block text-secondary py-2 font-medium text-base md:text-[1.125rem] outline-none focus:outline-none ${
                editMode
                  ? "pointer-events-auto focus:border-b-primary transition-300 border-b-2"
                  : "pointer-events-none border-b-transparent"
              }`}
            />
          </div>
          <div>
            <label
              htmlFor="first-name"
              className="block text-textPrimary mb-1.5 text-13px md:text-15px"
            >
              Weight:
            </label>
            <input
              type="text"
              value="Adewale"
              className={`block text-secondary py-2 font-medium text-base md:text-[1.125rem] outline-none focus:outline-none ${
                editMode
                  ? "pointer-events-auto focus:border-b-primary transition-300 border-b-2"
                  : "pointer-events-none border-b-transparent"
              }`}
            />
          </div>
          <div>
            <label
              htmlFor="first-name"
              className="block text-textPrimary mb-1.5 text-13px md:text-15px"
            >
              Blood Group:
            </label>
            <input
              type="text"
              value="Adewale"
              className={`block text-secondary py-2 font-medium text-base md:text-[1.125rem] outline-none focus:outline-none ${
                editMode
                  ? "pointer-events-auto focus:border-b-primary transition-300 border-b-2"
                  : "pointer-events-none border-b-transparent"
              }`}
            />
          </div>
          <div>
            <label
              htmlFor="first-name"
              className="block text-textPrimary mb-1.5 text-13px md:text-15px"
            >
              Allergies:
            </label>
            <input
              type="text"
              value="Adewale"
              className={`block text-secondary py-2 font-medium text-base md:text-[1.125rem] outline-none focus:outline-none ${
                editMode
                  ? "pointer-events-auto focus:border-b-primary transition-300 border-b-2"
                  : "pointer-events-none border-b-transparent"
              }`}
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default MedicalProfile;
