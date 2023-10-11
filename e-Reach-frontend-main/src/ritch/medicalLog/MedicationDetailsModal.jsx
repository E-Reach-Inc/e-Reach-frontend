import React from 'react';

const MedicationDetailsModal = ({ medication, closeModal }) => {
  return (
    <div className="medication-details-modal">
      <div className="modal-content">
        <h2>Medication Details</h2>
        {medication && (
          <div>
            <p><strong>Name:</strong> {medication.medicationName}</p>
            <p><strong>Dosage:</strong> {medication.dosage}</p>
            <p><strong>Dosage Frequency:</strong> {medication.dosageFrequency}</p>
            <p><strong>Start Date:</strong> {medication.startDate}</p>
            <p><strong>Prescription Date:</strong> {medication.prescriptionDate}</p>
            {/* Add other medication details here */}
          </div>
        )}
        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  );
};

export default MedicationDetailsModal;
