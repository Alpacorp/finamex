const typeDevice = () => {
  if (window.innerWidth <= 800 && window.innerHeight <= 800) {
    return "mobile";
  }
  return "desktop";
};

export default typeDevice;
