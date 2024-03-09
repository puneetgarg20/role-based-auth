import React, { useState } from "react";

export const login = () => {
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
    console.log("login form");
  };
  return (
    <>
      <div>
        <div>
          <div>SIGN UP</div>
          <div>
            <form onSubmit={handlesubmit}>
              <label>UserName : </label>
              <input
                type="text"
                placeholder="Enter your name"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setuseinfo({ ...useinfo, name: e.target.value })
                }
              />
              <label>Email_id : </label>
              <input
                type="text"
                placeholder="Enter your name"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setuseinfo({ ...useinfo, email_id: e.target.value })
                }
              />
              <label>Password : </label>
              <input
                type="text"
                placeholder="Enter your Password"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setuseinfo({ ...useinfo, password: e.target.value })
                }
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
