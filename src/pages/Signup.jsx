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

function Signup() {
  return (
    <div className="">
      <div className="h-screen flex justify-center items-center">
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Sign up</CardTitle>
            <CardDescription>Sign up to use AskNishauri</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-2">
              <div className="flex flex-col items-start space-y-1 my-[10px]">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="m@example.com" />
              </div>
            </div>
            <div className="grid gap-2">
              <div className="flex flex-col items-start space-y-1 my-[10px]">
                <Label htmlFor="password">Create a Password</Label>
                <Input id="password" type="password" />
              </div>
            </div>
            <div className="grid gap-2">
              <div className="flex flex-col items-start space-y-1 my-[10px]">
                <Label htmlFor="password">Confirm your Password</Label>
                <Input id="password" type="password" />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Create account</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

export default Signup;
