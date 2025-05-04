import { TextField, Button, Typography, Box } from '@mui/material';
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
      <Box sx={{ mt: 4 }}>
        <Typography variant='h4'>
          Thank you for your interest, {submittedName}!
        </Typography>
      </Box>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        {...register('name', { required: 'Name is required' })}
        label='Name'
        fullWidth
        margin='normal'
        error={!!errors.name}
        helperText={errors.name?.message}
      />
      
      <TextField
        {...register('email', { 
          required: 'Email is required',
          pattern: {
            value: /^\S+@\S+$/i,
            message: 'Invalid email address'
          }
        })}
        label='Email'
        fullWidth
        margin='normal'
        error={!!errors.email}
        helperText={errors.email?.message}
      />
      
      <TextField
        {...register('message', { required: 'Message is required' })}
        label='Message'
        multiline
        rows={4}
        fullWidth
        margin='normal'
        error={!!errors.message}
        helperText={errors.message?.message}
      />
      
      <Button 
        type='submit' 
        variant='contained' 
        sx={{ mt: 2 }}
      >
        Submit
      </Button>
    </form>
  );
}