import React, { useState } from 'react'
import logom from './logo/Logo 804444 192.png'
import './CSS/MainTheme.css'
import NavBar from './NavBar'
import { Link, useNavigate } from 'react-router-dom'
import { authenticateUser, fetchUsers } from './Ecommerce/Eapi'


const SignIn = () => {


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [showUsers, setShowUsers] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleSignIn = async (e) => {
    e.preventDefault();
    setError(''); // Clear previous errors

    try {
      const data = await authenticateUser(email, password); // Make API call

      if (data && data.token) {
        localStorage.setItem('authToken', data.token); // Save the token to localStorage
        console.log('Token stored in localStorage:', localStorage.getItem('authToken')); // Log the stored token
        navigate('/store'); // Redirect to the store page
        // window.location.href = '/store';

      } else {
        setError('Request time out !!');
      }

      } catch (error) {
      setError('Invalid email or password'); // Show error message
    }
  };

  const handlefetchUsers = async (e) =>{
    e.preventDefault();
    setError('');

    try {
      const cred = await fetchUsers();      
      if (cred.length > 0) {
        setSelectedUser(cred[Math.floor(Math.random() * cred.length)]); // Store a single random user
      }
      setShowUsers(true);
    } catch (error) {
      setError('error fetching data');
    }
  };


  return (
    <>
      <NavBar />    

        <div className="pt-24 flex flex-col md:flex-row justify-center items-center min-h-screen bg-gray-50 px-4">
          
        {/* Sign-In Form */}
        <div className="w-full md:w-3/4 max-w-md p-6 bg-white rounded-lg shadow-md">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img src={logom} alt="" className="mx-auto h-10 w-auto"/>
            <h2 className="mt-1 text-center text-2xl font-bold tracking-tight maintext">
              Sign in to your account
            </h2>
          </div>

          <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
            <form onSubmit={handleSignIn} className="space-y-6">
              {error && <p className="text-red-500">{error}</p>}
              <div>
                <label htmlFor="email" className="block text-sm font-medium maintext">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-teal-700 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium maintext">
                    Password
                  </label>
                  <div className="text-sm">
                    <Link className="font-semibold mainlink">
                      Forgot password?
                    </Link>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    autoComplete="current-password"
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-teal-700 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold text-white shadow-sm mainbutton"
                >
                  Sign in
                </button>
              </div>
            </form>

            <p className="mt-6 text-center text-sm maintext">
              Not a member?{' '}
              <Link className="font-semibold mainlink">
                Register Now
              </Link>
            </p>
          </div>
        </div>

        {/* User Credentials Box */}
        <div className="w-full md:w-1/4 p-4 bg-white rounded-lg shadow-md mt-6 md:mt-0 md:ml-4">
          <button
            onClick={handlefetchUsers}
            className="mb-4 rounded-md bg-teal-700 px-4 py-2 text-white font-semibold hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-700 focus:ring-offset-2"
          >
            Demo Login
          </button>

          {showUsers && selectedUser && (
            <div className="border rounded-lg p-4 bg-gray-100 shadow-sm text-sm">
              <h6 className="text-lg font-bold text-teal-600 mb-2">Access granted.</h6>
              <p><span className="font-semibold">Email:</span> {selectedUser.username}@mkp.com</p>
              <p><span className="font-semibold">Password:</span> {selectedUser.password}</p>
            </div>
          )}
        </div>

      </div>


    </>
  )
}

export default SignIn
