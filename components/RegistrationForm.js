import React from 'react';

const RegistrationForm = () => {
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
        <input type="text" name="country" id="country" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
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
