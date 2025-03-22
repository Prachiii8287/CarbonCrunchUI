import React from "react";

const CubeIcon = (props) => {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#23B30E" stroke="#23B30E" {...props}>
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <path fill="#23B30E" fillRule="evenodd" d="M11.47 2.152a1 1 0 0 1 1.06 0l6.904 4.315L12 10.84 4.566 6.467l6.904-4.315zM3.008 7.871A1.001 1.001 0 0 0 3 8v8a1 1 0 0 0 .47.848L11 21.554v-8.982L3.008 7.87zM13 21.554l7.53-4.706A1 1 0 0 0 21 16V8c0-.043-.003-.087-.008-.129L13 12.571v8.983z" clipRule="evenodd"></path>
      </g>
    </svg>
  );
};

const Card = ({ children }) => {
  return <div className="p-8  pb-24 shadow-sm bg-white h-full transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-md">{children}</div>;
};

const features = [
  {
    title: "Automated Data Collection",
    description:
    <>
    Our system automates carbon data collection,
    <br />
    saving time, reducing errors, and ensuring 
    <br />
    accurate sustainability reporting.
  </>
  },
  {
    title: "Monitoring & Reporting",
    description:
      <>
      Effortlessly track and report carbon emissions
      <br />
      with automated monitoring, ensuring accuracy
      <br />
      and compliance in sustainability reporting.
      </>
  },
  {
    title: "Monitoring & Reporting",
    description:
    <>
    Effortlessly track and report carbon emissions
    <br />
    with automated monitoring, ensuring accuracy
    <br />
    and compliance in sustainability reporting.
    </>
  },
  {
    title: "Simplified Certification Process",
    description:
      <>
      Streamline your certification process with our
      <br />
      simplified, automated solution, reducing 
      <br />
      complexity and ensuring faster compliance.
      </>
  },
  {
    title: "AI-Driven Insights",
    description:
      <>
      Leverage AI-driven insights to uncover hidden 
      <br />
      patterns, optimize sustainability strategies, and
      <br />
      drive impactful decision-making.
      </>
  },
  {
    title: "AI-Driven Insights",
    description:
    <>
    Leverage AI-driven insights to uncover hidden 
    <br />
    patterns, optimize sustainability strategies, and
    <br />
    drive impactful decision-making.
    </>
  },
];

const CarbonCrunchFeatures = () => {
  return (
    <div className="bg-gray-50 py-16 px-4 md:px-8 w-full min-w-full box-border overflow-x-hidden">
      <div className="max-w-full mx-auto">
        <div className="flex justify-center mb-6">
          <div className="bg-white rounded-full px-6 py-2">
            <span className="text-[#23B30E] font-medium">FEATURES</span>
          </div>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-16">
          Why Carbon Crunch?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index}>
              <div className="bg-[#e6f7e6] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <CubeIcon className="w-8 h-8" />
              </div>

              <h3 className="text-[#23B30E] text-xl font-semibold mb-4">
                {feature.title}
              </h3>

              <p className="text-gray-700">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarbonCrunchFeatures;
