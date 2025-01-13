import React from 'react'
import logom from './logo/Logo 804444 192.png'
import './CSS/MainTheme.css'
import NavBar from './NavBar'
import { Link } from 'react-router-dom'


const SignIn = () => {
  return (
    <>
      <NavBar />

      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img src={logom} alt="" className="mx-auto h-10 w-auto"/>
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight maintext">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm/6 font-medium maintext">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-teal-700 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm/6 font-medium maintext">
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
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-teal-700 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <Link to="/store"><button
                type="submit"
                className="flex w-full justify-center rounded-md px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 mainbutton"
              >
                Sign in
              </button></Link>
            </div>
          </form>

          <p className="mt-10 text-center text-sm/6 maintext">
            Not a member?{' '}
            <Link className="font-semibold mainlink">
              Register Now
            </Link>
          </p>
        </div>
      </div>

    </>
  )
}

export default SignIn
