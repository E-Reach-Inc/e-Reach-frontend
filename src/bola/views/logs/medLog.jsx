import React, { useState } from 'react';
import TestEntry from './testEntry';
import VitalsEntry from './prescriptionsEntry';
import PrescriptionsEntry from './prescriptionsEntry';
import DoctorsReportEntry from './doctorReports';

function MedLog() {
  const [selectedEntryType, setSelectedEntryType] = useState('TestEntry');

  return (
    <div>
      <h2>Medical Log</h2>
      <div className="entry-type-selector">
        <select
          value={selectedEntryType}
          onChange={(e) => setSelectedEntryType(e.target.value)}
        >
          <option value="TestEntry">Test Entry</option>
          <option value="VitalsEntry">Vitals Entry</option>
          <option value="PrescriptionsEntry">Prescriptions Entry</option>
          <option value="DoctorsReportEntry">Doctors Report Entry</option>
        </select>
      </div>
      {selectedEntryType === 'TestEntry' && <TestEntry />}
      {selectedEntryType === 'VitalsEntry' && <VitalsEntry />}
      {selectedEntryType === 'PrescriptionsEntry' && <PrescriptionsEntry />}
      {selectedEntryType === 'DoctorsReportEntry' && <DoctorsReportEntry />}
    </div>
  );
}

export default MedLog;
