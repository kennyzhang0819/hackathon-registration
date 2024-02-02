"use client";
import React, { useState } from 'react';

const RegistrationForm = () => {
  const [resume, setResume] = useState(null);
  const [previewUrl, setPreviewUrl] = useState('');

  const handleResumeChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setResume(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  return (
    <form className="space-y-4">

      <div>
        <label htmlFor="fullName" className="form-field">Participant Full Name</label>
        <input type="text" name="fullName" id="fullName" required className="form-input"/>
      </div>

      <div>
        <label htmlFor="university" className="form-field">University</label>
        <input type="text" name="university" id="university" required className="form-input"/>
      </div>
      
      <div>
        <label htmlFor="major" className="form-field">Major</label>
        <input type="text" name="major" id="major" required className="form-input"/>
      </div>

      <div>
        <label htmlFor="graduationDate" className="form-field">Graduation Date</label>
        <input type="date" name="graduationDate" id="graduationDate" required className="form-input"/>
      </div>

      <div>
        <label htmlFor="gender" className="form-field">Gender</label>
        <select name="gender" id="gender" required className="form-input">
          <option value="">Select...</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="country" className="form-field">Country of Residence</label>
        <input type="text" name="country" id="country" required className="form-input" />
      </div>

      <div>
        <label htmlFor="essay" className="form-field">Why are you interested in attending Cal Hacks 11.0? What are you interested in building?</label>
        <textarea
          name="essay"
          id="essay"
          rows="4"
          required
          className="form-input"
          placeholder="1000 character maximum"
          maxLength="1000"
        ></textarea>
      </div>

      <div>
        <label>
          <input type="checkbox" name="ageConfirmation" required />
          <span className="ml-2 form-field">I confirm I am 18 years of age or older</span>
        </label>
      </div>

      <div>
        <label htmlFor="resume" className="form-field">Resume</label>
        <input
          type="file"
          name="resume"
          id="resume"
          accept=".pdf"
          required
          className="form-input"
          onChange={handleResumeChange}
        />
        {previewUrl && (
          <div className="mt-2">
            <label className="form-field">Resume Preview:</label>
            <iframe src={previewUrl} className="w-full h-64"></iframe>
          </div>
        )}
      </div>
      
      <div>
        <button type="submit" className="form-button">
          Register
        </button>
      </div>
    </form>
  );
};

export default RegistrationForm;
