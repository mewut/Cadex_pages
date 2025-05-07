import { useForm } from 'react-hook-form';
import { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedName, setSubmittedName] = useState('');

  const onSubmit = (data: FormData) => {
    console.log(data);

    // пока так, потом захостить на версель
    setSubmittedName(data.name);
    setIsSubmitted(true);
    

    // fetch('/api/submit', { 
    //   method: 'POST',
    //   body: JSON.stringify(data)
    // })
    // .then(() => {
    //   setSubmittedName(data.name);
    //   setIsSubmitted(true);
    // })
  };

  if (isSubmitted) {
    return (
      <div className='success_message'>
        <h2>Thank you for your interest, {submittedName}!</h2>
      </div>
    );
  }

  return (
    <form className='contact_form' onSubmit={handleSubmit(onSubmit)}>
      <div className='form_group'>
        <label htmlFor='name'>Name</label>
        <input
          id='name'
          {...register('name', { required: 'Name is required' })}
          className={errors.name ? 'input_error' : ''}
        />
        {errors.name && <span className='error_message'>{errors.name.message}</span>}
      </div>

      <div className='form_group'>
        <label htmlFor='email'>Email</label>
        <input
          id='email'
          type='email'
          {...register('email', { 
            required: 'Email is required',
            pattern: {
              value: /^\S+@\S+$/i,
              message: 'Invalid email address'
            }
          })}
          className={errors.email ? 'input_error' : ''}
        />
        {errors.email && <span className='error_message'>{errors.email.message}</span>}
      </div>

      <div className='form_group'>
        <label htmlFor='message'>Message</label>
        <textarea
          id='message'
          {...register('message', { required: 'Message is required' })}
          rows={4}
          className={errors.message ? 'input_error' : ''}
        />
        {errors.message && <span className='error_message'>{errors.message.message}</span>}
      </div>

      <button type='submit' className='submit_button'>
        Submit
      </button>
    </form>
  );
}