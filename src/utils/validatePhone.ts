const validatePhone = (phoneNumber: string): boolean => {
  const minLength: Number = 10;
  const maxLength: Number = 10;
  return phoneNumber.length >= minLength && phoneNumber.length <= maxLength;
};

export default validatePhone;
