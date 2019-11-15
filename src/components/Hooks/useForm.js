import { useState } from 'react';

const useForm = (callback) => {

  const [values, setValues] = useState({
    comment: ''
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    callback();
    console.log(values)
  };

  const handleChange = (event) => {
    event.persist();
    setValues(values => ({ ...values, [event.target.name]: event.target.value }));
    console.log('WHAT ARE THESE VALUES', values)
  };

  return {
    handleChange,
    handleSubmit,
    values,
  }
};

export default useForm;