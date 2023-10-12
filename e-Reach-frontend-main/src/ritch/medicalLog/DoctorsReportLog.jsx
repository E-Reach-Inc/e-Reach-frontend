import React, { useState } from 'react';
import '../medicalLog/medicalLogStyle/DoctorsReportLog.css'


const DoctorsReport = () => {
  const [report, setReport] = useState({
    report: '',
    diagnosis: '',
    treatment: '',
  });
  const [activeSection, setActiveSection] = useState('report');

  const handleReportChange = (event) => {
    const { name, value } = event.target;
    setReport((prevReport) => ({
      ...prevReport,
      [name]: value,
    }));
  };

  const switchToSection = (section) => {
    setActiveSection(section);
  };

  const saveReport = () => {
    // Send the entire report object to the server for saving.
    console.log(report); // Replace with an HTTP POST request to the server.
  };

  return (
    <div className="doctors-report-component">
      <h2>Doctor's Report</h2>
      <div className="report-inputs">
        <div className="report-section">
          <div className="section-tabs">
            <button
              onClick={() => switchToSection('diagnosis')}
              className={activeSection === 'diagnosis' ? 'active' : ''}
            >
              Diagnosis
            </button>
            <button
              onClick={() => switchToSection('treatment')}
              className={activeSection === 'treatment' ? 'active' : ''}
            >
              Treatment
            </button>
            <button
              onClick={() => switchToSection('report')}
              className={activeSection === 'report' ? 'active' : ''}
            >
              Report
            </button>
          </div>
          <textarea
            rows="4"
            cols="50"
            name={activeSection}
            placeholder={`Enter ${
              activeSection === 'report' ? 'General Report' : activeSection
            }`}
            value={report[activeSection]}
            onChange={handleReportChange}
          />
        </div>
      </div>
      <button onClick={saveReport}>Save Report</button>
    </div>
  );
};

export default DoctorsReport;
