import React, { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";

const FormLayout = () =>{

    const [currentStep, setCurrentStep] = useState(1);
    
    const nextStep = () => {
        setCurrentStep(currentStep + 1);
      };

    return(
        <div className="form">

            {currentStep === 1 &&  <Step1 onNext={nextStep} />}
            {currentStep === 2 && <Step2 />}

    </div>
    )
}



export default FormLayout;