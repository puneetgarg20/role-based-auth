import { useState } from "react";
function App() {
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
  return (
    <div className="App">
      <h1 className="text-red-200 underline">Hello</h1>
    </div>
  );
}

export default App;
