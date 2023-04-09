import SectionTitle from "./SectionTitle";

const Feedback = () => {
  return (
    <section className="section-py">
      <div className="container">
        <SectionTitle
          center={true}
          title="Feedback"
          heading="Our Happy Clients Says About Us"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          className="mb-[2.1875rem] md:mb-[3.75rem]"
        />
      </div>
    </section>
  );
};

export default Feedback;
