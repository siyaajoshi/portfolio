import React from "react";
import { ServiceCard } from "../components";

const ServiceCount = () => {
  return <div className="w-full py6 lg:py-24 mt-24 flex items-center justify-center flex-wrap gap-8">
    <ServiceCard  count={"4th "} text={"Year Bachelors' Student"}/>
    <ServiceCard  count={"16+ Months"} text={"Co-op Experience"}/>
    <ServiceCard  count={"4+"} text={"MS Certifications"}/>
    <ServiceCard  count={"500+"} text={"Student Representation"}/>
    </div>;
};

export default ServiceCount;
