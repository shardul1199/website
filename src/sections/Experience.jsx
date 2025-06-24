import React from 'react';

export default function Experience() {
  return (
    <section id="experience" className="py-16 px-4">
      <h2 className="text-3xl font-semibold mb-8">Experience</h2>
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-bold">Infosys Pvt. Ltd (Jan 2021 - Apr 2022)</h3>
          <p className="text-sm text-gray-400 mb-2">Role: Systems Engineer, Pune</p>
          <ul className="list-disc list-inside ml-4 text-left">
            <li>Developed and deployed changes for Oracle PeopleSoft and Oracle EBS systems.</li>
            <li>Provided technical support for IMF (Washington DC).</li>
            <li>Monitored high-priority automated finance jobs via ServiceNow.</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold">IIT Guwahati (Jul 2023 - Present)</h3>
          <p className="text-sm text-gray-400 mb-2">Teaching Assistant – CS578 (IoT) & CS101 (C Programming)</p>
          <ul className="list-disc list-inside ml-4 text-left">
            <li>Managed 40–50 students per batch, supporting learning and guidance.</li>
            <li>Improved communication and leadership skills through direct engagement.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}