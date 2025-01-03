"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { signIn } from "@/lib/auth-client";
import { cn } from "@/lib/utils";
import { LoaderCircle } from "lucide-react";
import { useState } from "react";

export default function SignIn() {
  const [isSigningin, setIsSigningIn] = useState(false);
  const [error,setError]= useState(false)
  return (
    <Card className="w-96 bg-white">
      <CardHeader>
        <CardTitle className="text-lg md:text-xl">Sign In</CardTitle>
        {error&&<p className="text-red-400 font-medium">Something went wrong, please try again.</p>}
        {/* <CardDescription className="text-xs md:text-sm">
          Enter your email below to login to your account
        </CardDescription> */}
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div
            className={cn(
              "w-full gap-2 flex items-center",
              "justify-between flex-col"
            )}
          >
            <Button
              variant="outline"
              className={cn("w-full gap-2")}
              onClick={async () => {
                setIsSigningIn(true)
                setError(false)
                await signIn.social({
                  provider: "google",
                  callbackURL: "/stories",
                }).then(()=>{setError(false);setIsSigningIn(false)}).catch((erorr)=>{
                  console.log(erorr);
                  setError(true)
                  setIsSigningIn(false)
                });
              }}
            >
              {
                (isSigningin)?(<LoaderCircle className="animate-spin text-slate-500" size={35} />):(
                  <>
                  <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M11.99 13.9v-3.72h9.36c.14.63.25 1.22.25 2.05c0 5.71-3.83 9.77-9.6 9.77c-5.52 0-10-4.48-10-10S6.48 2 12 2c2.7 0 4.96.99 6.69 2.61l-2.84 2.76c-.72-.68-1.98-1.48-3.85-1.48c-3.31 0-6.01 2.75-6.01 6.12s2.7 6.12 6.01 6.12c3.83 0 5.24-2.65 5.5-4.22h-5.51z"
                  ></path>
                </svg>

                Sign in with Google
                </>
                )
              }
             
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
