import React from "react";


interface InputProps {
    type: string;
    placeholder: string;
    className?: string; 
    value?: string; 
    name?: string; 
    id?: string; 
  }

const Input:React.FC<InputProps> = ({type, placeholder, className,value,name,id}) => {
    return(
        <input
            type={type}
            placeholder={placeholder}
            className={className}
            id={id}
            value={value}
            name={name}
        />
        
    )
}

export default Input;