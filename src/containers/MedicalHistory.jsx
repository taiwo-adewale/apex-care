import { SectionTitle, Section } from "../components";

const MedicalHistory = () => {
  return (
    <Section padding={true}>
      <div className="container">
        <SectionTitle
          center={true}
          title="Medical History"
          heading="View Medical History"
          desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum doloremque, hic esse veritatis quisquam excepturi, sint culpa cupiditate eius, iure eos nesciunt necessitatibus exercitationem. Delectus placeat quisquam quaerat harum dignissimos."
        />
      </div>
    </Section>
  );
};

export default MedicalHistory;
