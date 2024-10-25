//Frontend auth.js: Manages storing the token (e.g., in localStorage or cookies) 
//and checking if the user is authenticated by verifying if the token exists.

// Function to check if the user is authenticated
export const isAuthenticated = () => {
    // Check if JWT token exists in localStorage
    const token = localStorage.getItem('token');
    return token !== null;
};

//Function to log the user out
export const logout = () => {
    // Remove JWT token from localStorage
    localStorage.removeItem('token');
};