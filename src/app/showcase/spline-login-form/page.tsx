"use client";
import { LoadingSpinner } from "@/components/loading-spinner";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { DividerHorizontalIcon } from "@radix-ui/react-icons";

const Spline = React.lazy(() => import("@splinetool/react-spline"));

import { Application } from "@splinetool/runtime";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import React, { Suspense, useEffect, useRef, useState } from "react";

const BLUR_FADE_DELAY = 0.04;

function SplineLoginPage() {
  const spline = useRef<Application | null>(null);

  const [showPassword, setShowPassword] = useState(false);

  function onLoad(splineApp: Application) {
    // save the app in a ref for later use
    spline.current = splineApp;
  }

  useEffect(() => {
    if (spline.current) {
      console.log("setting as", showPassword);
      spline.current.setVariable("show_password", showPassword);

      const v = spline.current.getVariables();
      console.log("variables", v);
    }
  }, [showPassword]);

  const handleSubmit = () => {
    if (spline.current) {
      spline.current.setVariable("form_complete", true);
    }
  };

  return (
    <>
      <div className="flex flex-col w-full h-full lg:hidden justify-end absolute  bottom-1/4 px-6">
        <BlurFade delay={BLUR_FADE_DELAY}>
          <h1 className="font-medium text-2xl mb-8 tracking-tight">
            sorry, desktop only
          </h1>
        </BlurFade>
        <div className="flex flex-col w-full gap-4">
          <BlurFade delay={BLUR_FADE_DELAY * 2}>
            <p>
              This demo is only available on screen sizes larger than 1024px.
              <br />
              You can visit the home page to see other demos or about me.
            </p>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <Link href="/">
              <Button>Go back to home</Button>
            </Link>
          </BlurFade>
        </div>
      </div>

      <div className="w-full h-full absolute hidden lg:block top-0 left-0 gap-10 bg-[#FFF8F1] !font-parkinsans">
        <Suspense
          fallback={
            <div className="absolute z-0 top-1/2 -translate-y-1/2 left-[20vw]">
              <LoadingSpinner size={48} />
            </div>
          }
        >
          <div className="absolute z-0 left-10 lg:-left-10 w-full h-full">
            <Spline
              onLoad={onLoad}
              scene="https://prod.spline.design/VTjRxBqFqcfLH1H1/scene.splinecode"
            />
          </div>
        </Suspense>

        <div className="form absolute z-10 right-40 lg:right-60 h-full pointer-events-none">
          <div className=" flex flex-col h-full w-[30vw] min-w-[300px] max-w-[450px] justify-center items-center text-slate-950">
            <BlurFadeText
              yOffset={8}
              delay={BLUR_FADE_DELAY}
              className="text-3xl font-bold mb-10 text-center"
              text="Welcome Back!"
            />

            <form
              className="space-y-6 w-full px-4 text-lg"
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
            >
              <div>
                <label
                  htmlFor="email"
                  className="block text-base opacity-60 font-medium"
                >
                  <BlurFadeText
                    yOffset={8}
                    delay={BLUR_FADE_DELAY * 2}
                    text="Email"
                  />
                </label>
                <BlurFade delay={BLUR_FADE_DELAY * 2}>
                  <Input
                    type="email"
                    id="email"
                    formNoValidate
                    placeholder="you@example.com"
                    className="mt-1 pointer-events-auto text-lg md:text-lg h-14 px-4 rounded-xl"
                  />
                </BlurFade>
              </div>
              <BlurFade delay={BLUR_FADE_DELAY * 2}>
                <div>
                  <label
                    htmlFor="password"
                    className="block text-base opacity-60 font-medium"
                  >
                    <BlurFadeText
                      yOffset={8}
                      delay={BLUR_FADE_DELAY * 2 + 0.1}
                      text="Password"
                    />
                  </label>
                  <div className="mt-1 relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      placeholder="••••••••"
                      className="mt-1 pointer-events-auto text-lg md:text-lg h-14 px-4 rounded-xl"
                      formNoValidate
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-auto"
                      onClick={() => setShowPassword((prev) => !prev)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5 text-gray-400" />
                      ) : (
                        <Eye className="h-5 w-5 text-gray-400" />
                      )}
                    </button>
                  </div>
                </div>
              </BlurFade>
              <BlurFade
                delay={BLUR_FADE_DELAY * 3}
                className="flex items-center justify-between"
              >
                <div className="flex items-center">
                  <Checkbox
                    id="remember-me"
                    className="size-4 pointer-events-auto"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm pointer-events-auto "
                  >
                    Remember me
                  </label>
                </div>
                <a href="#" className="text-sm">
                  Forgot password?
                </a>
              </BlurFade>

              <div className="flex flex-col w-full gap-2 pt-2">
                <BlurFade delay={BLUR_FADE_DELAY * 4}>
                  <Button className="w-full bg-slate-950 hover:bg-slate-900 rounded-full h-14  text-white transition pointer-events-auto">
                    Log in
                  </Button>
                </BlurFade>
                <BlurFade delay={BLUR_FADE_DELAY * 4 + 0.2}>
                  <p className="w-full text-center">or</p>
                </BlurFade>
                <BlurFade delay={BLUR_FADE_DELAY * 5}>
                  <Button
                    variant="outline"
                    className="w-full rounded-full h-14 pointer-events-auto"
                    onClick={handleSubmit}
                  >
                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                      <path
                        fill="#4285F4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      />
                      <path fill="none" d="M1 1h22v22H1z" />
                    </svg>
                    Log in with Google
                  </Button>
                </BlurFade>
              </div>
            </form>
            <BlurFade delay={BLUR_FADE_DELAY * 6}>
              <p className="mt-8 text-center text-sm ">
                Don&apos;t have an account?{" "}
                <a href="#" className="font-medium pointer-events-auto ">
                  Sign up
                </a>
              </p>
            </BlurFade>
          </div>
        </div>
      </div>
    </>
  );
}

export default SplineLoginPage;
