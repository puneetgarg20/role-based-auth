import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const User_signup = () => {
  type logindetail = {
    email_id: string;
    name: string;
    password: string;
    role?: string;
  };

  const [useinfo, setuseinfo] = useState<logindetail>({
    email_id: "",
    name: "",
    password: "",
    role: "user",
  });

  const handlesubmit = (e: any) => {
    e.preventDefault();
    setuseinfo({
      email_id: "",
      name: "",
      password: "",
      role: "user",
    });
    console.log("signup  form");
    axios
      .post("http://localhost:5000/register/user", {
        name: useinfo.name,
        email_id: useinfo.email_id,
        password: useinfo.password,
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    // const register = () => {
    //   fetch("http://localhost:5000/register/user", {
    //     method: "POST",
    //     headers: { "Content-Type": "application / json " },
    //     body: JSON.stringify({
    //       name: useinfo.name,
    //       email_id: useinfo.email_id,
    //       password: useinfo.password,
    //     }),
    //   })
    //     .then((res) => console.log(res))
    //     .catch((e) => console.log(e));
    // };
  };
  const navigate = useNavigate();
  return (
    <>
      <div className="h-screen  flex justify-center items-center">
        <div className="bg-blue-300 h-[auto] w-[35%] flex flex-col items-center rounded-[5px]">
          <div className="m-[5%] text-center text-2xl underline ">
            <h1>SIGN UP</h1>
          </div>
          <div className="text-xl mt-[5%]">
            <form onSubmit={handlesubmit}>
              <label>UserName :</label>
              <br />
              <input
                className="my-[15px] rounded-[5px] h-[30px]"
                type="text"
                value={useinfo.name}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setuseinfo({ ...useinfo, name: e.target.value })
                }
              />
              <br />
              <label>Email_id :</label>
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
                className="bg-blue-500 h-[35px] w-[120px] my-[20px] rounded-[10px]"
              >
                Sign Up
              </button>
            </form>
            <h2 className="mb-[15%]">
              Already Register ? {"  "}
              <button
                className="hover:underline hover:text-blue-100"
                onClick={() => navigate("/")}
              >
                Sign In{" "}
              </button>{" "}
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};
