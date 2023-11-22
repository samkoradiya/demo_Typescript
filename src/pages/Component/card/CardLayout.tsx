import React from "react";
import Image from "next/image";
import Button from "../comon/Button";

interface CardLayoutProps {
    image: string;
    title: string;
    Name: string;
    Address: string;
    time: string;
    experience: string;
    salary: string;
    employees: string;
    buttonName: string;
    buttonClassName: string;
  }

const CardLayout: React.FC<CardLayoutProps> = ({image,title,Name,Address,time,experience,salary,employees,buttonName,buttonClassName}) =>{
    console.log(buttonName,"buttonName");
    return (
        <div className="card-col">
          <div className="card">
            <div className="company-logo">
              <Image src={image} alt="logo" width={48} height={48} />
            </div>
            <div className="job-details">
              <div className="job-heading">
                <h2>{title}</h2>
                <h3>{Name}</h3>
                <p>{Address}</p>
              </div>
              <div className="job-descirption">
                <p>{time}</p>
                <p>{experience}</p>
                <p>{salary}</p>
                <p>{employees}</p>
              </div>
              <div className="card-button">
                <Button className={buttonClassName} buttonText={buttonName} />
              </div>
            </div>
          </div>
        </div>
      );
   
}

export default CardLayout;