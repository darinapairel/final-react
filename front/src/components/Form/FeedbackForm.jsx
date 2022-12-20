import React from 'react';
import { useForm } from 'react-hook-form';
import './styles.css'

export default function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log('DATA:', data);
  console.log('ERRORS ', errors);
  
  return (

    // ADD Validation Register

    <form onSubmit={handleSubmit(onSubmit)}>
    <div>
      <input type="text" placeholder="Your name" {...register("Firstname", {required: true, minLength: 2, maxLength: 80})} />
        {errors["Email"] && <p>This field is required</p>}
    </div>
      
      <input type="text" placeholder="Last name" {...register("Last name", {required: false, maxLength: 100})} />
      <input type="text" placeholder="Email" {...register("Email", {required: true, min: 3, pattern: /^\S+@\S+$/i})} />
      <input type="tel" placeholder="Mobile number" {...register("Mobile number", {required: true, minLength: 6, maxLength: 12})} />
      <select {...register("Title", { required: true })}>
        <option value="Mr">Mr</option>
        <option value="Mrs">Mrs</option>
        <option value="Miss">Miss</option>
        <option value="Dr">Dr</option>
      </select>

      <input type="submit" />
    </form>
  );
}