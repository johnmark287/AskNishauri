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
                <Label htmlFor="phone">Phone Number</Label>
                <Input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" placeholder="07********" />
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
            <Button className="w-full" type="submit">Login</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

export default Login;
