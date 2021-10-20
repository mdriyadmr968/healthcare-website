import React from 'react';

import useAuth from '../../hooks/useAuth';

const Login = () => {
  const { signInUsingGoogle } = useAuth();
  return (
    <div>
      <h2>Please Login with google</h2>
      <button onClick={signInUsingGoogle} className="btn btn-warning">
        <i class="bi bi-google"></i> Google Sign In
      </button>
    </div>
  );
};

export default Login;
