import React, { useState } from 'react';
import '../medicalLog/medicalLogStyle/TestLog.css'


const TestLog = () => {
  const [testName, setTestName] = useState('');
  const [testDate, setTestDate] = useState('');
  const [recommendedTests, setRecommendedTests] = useState([]);

  const handleTestNameChange = (event) => {
    setTestName(event.target.value);
  };

  const handleTestDateChange = (event) => {
    setTestDate(event.target.value);
  };

  const handleAddTest = () => {
    if (testName && testDate) {
      // Create a new object containing test name and test date
      const newTest = {
        testName,
        testDate,
      };

      // Add the new test to the recommendedTests array
      setRecommendedTests([...recommendedTests, newTest]);

      // Clear the input fields
      setTestName('');
      setTestDate('');
    }
  };

  return (
    <div className="test-component">
      <div className='test-component-content-con'>
      <div className='test-component-content'>
      <h2>Tests</h2>
      <button className='test-component-btn'>Add</button>
      </div>

      <div className='test-output-con'>
     <p>Test Name</p>
     <button>View</button>
     
      </div>
      </div>
      
      
      {/* <div className="test-inputs">
      <p>Test Name</p>
        <input
          type="text"
          placeholder="Enter test name"
          value={testName}
          onChange={handleTestNameChange}
        />
        <p>Test Date</p>
        <input
          type="date"
          placeholder="Test Date"
          value={testDate}
          onChange={handleTestDateChange}
        />
        <button onClick={handleAddTest}>Add Test</button>
      </div> */}
      {/* <ul>
        {recommendedTests.map((test, index) => (
          <li key={index}>
            <span className="test-name">{test.testName}</span>
            <span className="test-date">{test.testDate}</span>
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default TestLog;
