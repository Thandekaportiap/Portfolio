import { useState, useEffect } from "react";
import CertificationCard from "./CertificationCard";

const Certifications = () => {
  const [certifications, setCertifications] = useState([]);

  useEffect(() => {
    import("../data/certifications.json").then((data) => setCertifications(data.default));
  }, []);

  return (
    <section className="py-10 min-h-screen">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-6">Certifications</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <CertificationCard key={index} cert={cert} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
