/*Phone number 
  Password
*/

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";


// const [patientName, setPatientName] = useState("");

async function handleLogin(e) {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;


  if (!email || !password) {
    alert("Please fill all fields");
    return;
  }

  await fetch("http://127.0.0.1:5000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: email, password: password }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.status === "success") {
        localStorage.setItem("user", data.name);
        window.location.href = "/home";
      } else {
        console.error(data.message);
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  console.log("Login");
}

function Login() {
  return (
    <div className="">
      <div className="h-screen flex justify-center items-center">
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>Welcome to AskNishauri</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-2">
              <div className="flex flex-col items-start space-y-2 my-[10px]">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="m@example.com" />
              </div>
            </div>
            <div className="grid gap-2">
              <div className="flex flex-col items-start space-y-2 my-[10px]">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={handleLogin} className="w-full" type="submit">
              Login
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

export default Login;
