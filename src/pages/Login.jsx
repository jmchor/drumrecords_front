import axios from "axios";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../context/auth.context';
import { MoonLoader } from 'react-spinners';
import Button from "@mui/material/Button";


const Login = () => {

    const API = import.meta.env.VITE_API;
  const [loginName, setLoginName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);
  const [message, setMessage] = useState('Spinning up the servers...');
  const [isLoading, setIsLoading] = useState(true);



  const navigate = useNavigate();

  const { storeToken, verifyUser } = useContext(AuthContext);

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    const loginBody = { loginName, password };

    axios
      .post(`${API}/login`, loginBody)
      .then((res) => {
        storeToken(res.data.authToken);

        verifyUser();
        setIsLoading(false);
					setMessage('Spinning up the servers...');

        setTimeout(() => {
            navigate('/admin');
        }, 50);
      })
      .catch((err) => {
        console.log(err);
        setErrorMessage(err.response.data.errorMessage)
      });
  };


  if (isLoading) {
		setTimeout(() => {
			setMessage('This might take a moment ...');
			setTimeout(() => {
				setMessage('So, how is your day going? ...');
			}, 2000);
		}, 2000);

		return (
			<section id='main-loader' className="flex justify-center items-center w-in ">
				<div id='main-section' className='p-4 my-4 flex flex-col gap-4 justify-center items-center w-100'>
					<MoonLoader color='#1976D2' size={30} />

					<p>{message}</p>
				</div>
			</section>
		);
	}


  // Store all UI classes into a reusable class variable
  const fixedInputClass =
    "rounded-md appearance-none relative block w-full px-3 py-2 my-4 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm";

  return (
    <div className="my-3 flex justify-center" width='100%'>
      <form onSubmit={handleLoginSubmit}>
        {/* Email input */}
        <input
          type="text"
          name="email"
          value={loginName}
          onChange={(e) => setLoginName(e.target.value)}
          id="email"
          className={fixedInputClass}
          placeholder="Username or email"
        />

        {/* Password input */}
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          id="password"
          className={fixedInputClass}
          placeholder="Password"
        />


        {/* Login button */}
        <div className="mx-auto">
          <Button variant="contained" type="submit" className="my-3">
            Login
          </Button>
        </div>
      </form>

      {/* Error message */}
      <div className="my-2">
        {errorMessage && <p className="text-danger">{errorMessage}</p>}
      </div>
    </div>
  );
}

export default Login;
