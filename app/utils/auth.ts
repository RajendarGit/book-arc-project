export const isAuthenticated = () => {
    // Check if user token or session is available
    return !!localStorage.getItem("userToken");
  };  