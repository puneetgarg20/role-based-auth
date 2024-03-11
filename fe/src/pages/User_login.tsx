import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const User_login = () => {
  type logindetail = {
    email_id: string;
    password: string;
  };
  const navigate = useNavigate();

  const [useinfo, setuseinfo] = useState<logindetail>({
    email_id: "",
    password: "",
  });

  const handlesubmit = (e: any) => {
    e.preventDefault();
    setuseinfo({
      email_id: "",
      password: "",
    });
    console.log("user_login -form");

    axios
      .post("http://localhost:5000/login/user", {
        email_id: useinfo.email_id,
        password: useinfo.password,
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className="h-screen  flex justify-center items-center">
        <div className="bg-blue-300 h-[auto] w-[35%] flex flex-col items-center rounded-[5px]">
          <div className="m-[5%] text-center text-2xl underline ">
            <h1>SIGN IN</h1>
          </div>
          <div className="text-xl mt-[5%]">
            <form onSubmit={handlesubmit}>
              <label>UserName :</label>
              <br />
              <input
                className="my-[15px] rounded-[5px] h-[30px]"
                type="text"
                value={useinfo.email_id}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setuseinfo({ ...useinfo, email_id: e.target.value })
                }
              />
              <br />

              <label>Password : </label>
              <br />
              <input
                className="my-[15px] rounded-[5px] h-[30px]"
                type="text"
                value={useinfo.password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setuseinfo({ ...useinfo, password: e.target.value })
                }
              />
              <br />
              <button
                type="submit"
                className="bg-blue-500 h-[35px] w-[100px] my-[20px] rounded-[10px]"
              >
                Log In
              </button>
            </form>
            <h2>
              Not Register Yet? {"  "}
              <button
                className="hover:underline hover:text-blue-100"
                onClick={() => navigate("/signup")}
              >
                Sign Up{" "}
              </button>{" "}
            </h2>
            <h2 className="mt-[5%]">
              Log In As Admin? {"  "}
              <button
                className="hover:underline hover:text-blue-100"
                onClick={() => navigate("/adminlogin")}
              >
                Login In{" "}
              </button>{" "}
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};
