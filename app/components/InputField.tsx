import React from 'react'
import { FieldError } from 'react-hook-form';

type InputFieldProps ={
    label: string;
    type?: string;
    register: any;
    name: string;
    defaultValue?: string;
    error?: FieldError;
    inputProps: React.InputHTMLAttributes<HTMLInputElement>;


}
const InputField = ({
    label,
    type = "text",
    register,
    name,
    defaultValue,
    error,
    inputProps,
}: InputFieldProps) => {
  return <div className=''>InputField</div>
}

export default InputField