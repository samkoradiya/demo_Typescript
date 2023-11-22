import React from "react";
import Input from "../comon/Input";
import Button from "../comon/Button";

interface Step1Props {
    onNext: () => void;
  }
  const Step1: React.FC<Step1Props> = ({ onNext }) => {
    return (
      <div className="form-wrapper">
        <div className="form-header">
          <label>Create a job</label>
          <p>Step 1</p>
        </div>
        <form className="step1">
          <div className="form-row">
            <label>Job title<span>*</span></label>
            <Input type="text" placeholder="ex. UX UI Designer" className="form-control" />
          </div>
          <div className="form-row">
            <label>Company name<span>*</span></label>
            <Input type="text" placeholder="ex. Google" className="form-control" />
          </div>
          <div className="form-row">
            <label>Industry<span>*</span></label>
            <Input type="text" placeholder="ex. Information Technology" className="form-control" />
          </div>
          <div className="form-row-group">
            <div className="form-group">
              <label>Location</label>
              <Input type="text" placeholder="ex. Chennai" className="form-control" />
            </div>
            <div className="form-group">
              <label>Remote type</label>
              <Input type="text" placeholder="ex. in-office" className="form-control" />
            </div>
          </div>
          <div className="button-row">
            <Button buttonText="Next" onClick={onNext} className="primary-button" />
          </div>
        </form>
      </div>
    );
  };

export default Step1;