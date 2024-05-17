export const validateForm = (formData) => {

  const errors = {};
  if (!formData.firstName) errors.firstName = "This field is required";
  if (!formData.lastName) errors.lastName = "This field is required";
  if (!formData.email) {
    errors.email = "This field is required";
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    errors.email = "Please enter a valid email";
  }
  if (!formData.queryType) errors.queryType = "Please select a query type";
  if (!formData.message) errors.message = "This field is required";
  if (!formData.consent) errors.consent = "To submit this form, please consent to being contacted";
  return errors;
};
