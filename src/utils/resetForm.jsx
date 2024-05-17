export const resetForm = (setFormData, setFormErrors) => {
  setFormData({
    firstName: '',
    lastName: '',
    email: '',
    queryType: '',
    message: '',
    consent: false
  });
  setFormErrors({
    firstName: '',
    lastName: '',
    email: '',
    queryType: '',
    message: '',
    consent: ''
  });
}
