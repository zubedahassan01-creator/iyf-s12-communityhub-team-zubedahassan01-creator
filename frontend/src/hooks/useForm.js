import { useState } from 'react';

export default function useForm(initialValues, validate) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  function handleChange(event) {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
  }
  function handleBlur(event) {
    const { name } = event.target;
    setTouched((current) => ({ ...current, [name]: true }));
    if (validate) setErrors(validate(values));
  }
  function reset() { setValues(initialValues); setErrors({}); setTouched({}); }
  return { values, errors, touched, handleChange, handleBlur, reset, setValues };
}
