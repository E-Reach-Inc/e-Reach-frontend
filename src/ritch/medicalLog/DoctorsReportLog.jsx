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
  
    console.log(report); 
  };

  return (
    <div className="doctors-report-component">
     
      <div className="report-inputs">
        <div className="report-section">
        <h2> Report</h2>
          <div className="report-section-tabs">
        
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
        <button type='button' id='save-report-comp-btn' onClick={saveReport}>Save Report</button>
      </div>
    
    </div>
  );
};

export default DoctorsReport;
