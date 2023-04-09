import SectionTitle from "./SectionTitle";

const FeaturedCustomers = () => {
  return (
    <section className="section-py bg-[#f4f9fd]">
      <div className="container">
        <SectionTitle
          center={true}
          heading="Featured Customers & Partners"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          className="mb-[2.1875rem] md:mb-[3.75rem]"
        />
      </div>
    </section>
  );
};

export default FeaturedCustomers;
