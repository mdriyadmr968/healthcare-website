import React from 'react';
import useAuth from '../../hooks/useAuth';

const Login = () => {
  const { signInUsingGoogle, signInUsingGithub} = useAuth();
  return (
    <div>
      <h2>Please Login </h2>
      <button onClick={signInUsingGoogle} className="btn btn-warning">
        <i class="bi bi-google"></i> Google Sign In
      </button>
      <br />
      <button onClick={signInUsingGithub} className="btn btn-secondary mt-3">
        <i class="bi bi-google"></i>GitHub Sign In</button>
      <br />  
    </div>
  );
};

export default Login;
