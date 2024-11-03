// Formun tüm içeriğini içeren bileşen.
import React from 'react';
import FormInput from "./FormInput";
import ValidationMessage from "./ValidationMessage";

export default function ResgisterForm({formData, handleInputChange, handleFormSubmit, errors}) {
    return (
        <div>
            
            <form onSubmit={handleFormSubmit}>
            <FormInput
            label="Username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            type="text"
            />

         
            <FormInput 
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            type="email"
            />

           {errors.email && <ValidationMessage message={errors.email} />}
            
            <FormInput
            label="Password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            type="password"
            />

            {errors.password && <ValidationMessage message={errors.password} />}

            <FormInput
            label="Confirm Password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            type="password"
            />

            {errors.confirmPassword && <ValidationMessage message={errors.confirmPassword} />}

            <button type="submit">Kaydol</button>

            </form>
        </div>
    )
}