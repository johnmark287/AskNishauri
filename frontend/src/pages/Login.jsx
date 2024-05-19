/*Phone number 
  Password
*/

import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { useState } from "react";

// const [patientName, setPatientName] = useState("");

function Login() {
  const navigate = useNavigate();
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(e) {
    e.preventDefault();
    const phone = document.getElementById("phone").value;
    const password = document.getElementById("password").value;
    console.log(phone, password);

    if (!phone || !password) {
      alert("Please fill all fields");
      return;
    }

    await fetch("http://127.0.0.1:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ phone: phone, password: password }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "success") {
          localStorage.setItem("user", data.name);
          localStorage.setItem("id", data.id);
          localStorage.setItem("details", JSON.stringify(data.details));
          localStorage.setItem("history", JSON.stringify(data.history));
          navigate("/home", { replace: true });
        } else {
          console.error(data.message);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    console.log("Login");
  }

  return (
    <div className="">
      <div className="bg-gradient-to-b from-[#fbe2ff] to-white h-screen flex justify-center items-center">
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>Welcome to Nishauri</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-2">
              <div className="flex flex-col items-start space-y-2 my-[10px]">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  type="tel"
                  id="phone"
                  name="phone"
                  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                  placeholder="07********"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>
            <div className="grid gap-2">
              <div className="flex flex-col items-start space-y-2 my-[10px]">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button
              onClick={handleLogin}
              className="w-full bg-[#c791fb] hover:bg-[#B273F0]"
              type="submit"
              disabled={!phone || !password }
            >
              Login
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

export default Login;
