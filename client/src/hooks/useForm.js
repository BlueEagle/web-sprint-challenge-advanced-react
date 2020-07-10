// write your custom hook here to control your checkout form
import { useState } from 'react'

const initialValues = {
  firstName: '',
  lastName: '',
  address: '',
  city: '',
  state: '',
  zip: ''
}

export const useForm = () => {
  const key = 'locallyStoredFormValues'
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [values, setValues] = useState(() => {
    if(window.localStorage.getItem(key)) return JSON.parse(window.localStorage.getItem(key)) // it exists in storage, use it in state.
    window.localStorage.setItem(key, JSON.stringify(initialValues)) // set it in storage.
    return initialValues // use it in state
  })

  const setNewValues = values => {
    setValues(values) // set state, like normal
    window.localStorage.setItem(key, JSON.stringify(values))
  }
  
  const handleChanges = e => {
    setNewValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccessMessage(true);
  };

  return [values, showSuccessMessage, handleChanges, handleSubmit] // change the setValues out for custom functions
}