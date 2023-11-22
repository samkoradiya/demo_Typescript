import React from "react";
import Input from "../comon/Input";
import Button from "../comon/Button";

interface Step2Props {
    onNext: () => void;
  }

  const Step2: React.FC<Step2Props> = ({ onNext }) => {
    return (
      <div className="form-wrapper">
        <div className="form-header">
          <label>Create a job</label>
          <p>Step 2</p>
        </div>
        <form className="step1">
          <div className="form-row-group">
            <div className="form-group">
              <label>Experience</label>
              <Input type="text" placeholder="Minimum" className="form-control" />
            </div>
            <div className="form-group">
              <label>Remote type</label>
              <Input type="text" placeholder="Maximum" className="form-control" />
            </div>
          </div>
          <div className="form-row-group">
            <div className="form-group">
              <label>Salary</label>
              <Input type="text" placeholder="Minimum" className="form-control" />
            </div>
            <div className="form-group">
              <Input type="text" placeholder="Maximum" className="form-control" />
            </div>
          </div>
          <div className="form-row">
            <label>Total employee</label>
            <Input type="text" placeholder="ex. UX UI Designer" className="form-control" />
          </div>
          <div className="form-row">
            <label>Apply type</label>
            <div className="form-radio-row">
              <div className="radio-button">
                <label htmlFor="Quick apply">Quick apply</label>
                <Input type="radio" id="Quick apply" className="radio-control" name="apply type" value="Quick apply" placeholder="" />
              </div>
              <div className="radio-button">
                <label htmlFor="External apply">External apply</label>
                <Input type="radio" id="External apply" className="radio-control" name="apply type" value="External apply" placeholder="" />
              </div>
            </div>
          </div>
          <div className="button-row">
            <Button buttonText="save" onClick={onNext} className="primary-button" />
          </div>
        </form>
      </div>
    );
  };

export default Step2;