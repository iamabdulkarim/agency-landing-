import ServiceCard from "./ServiceCard";

export default function SubServiceTwo() {
  return (
    <>
      <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
        <img
          className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
          src="features/feature-2.png"
          alt="feature image 2"
        />
        <ServiceCard
          title="We invest in the world’s potential"
          descriptionTop="Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toil, and deploy changes with ease."
          descriptionBottom="Deliver great service experiences fast - without the complexity of traditional ITSM solutions."
          features={[
            "Dynamic reports and dashboards",
            "Templates for everyone",
            "Development workflow",
            "Limitless business automation",
            "Knowledge management",
          ]}
        />
      </div>
    </>
  );
}
