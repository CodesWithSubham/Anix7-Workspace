// /components/LoginSignup.js
"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { toast } from "react-toastify";
import { PopUpBox } from "../ui/Boxes";
import { Button } from "../ui/Button";
import { Input, OTPInput, PasswordInput } from "../ui/Input";
import { useSession } from "next-auth/react";
import { signInSchema, signupSchema } from "@shared/lib/zod";
import { doCredentialLogin, doSocialLogin } from "@shared/lib/auth/action";

export default function LoginSignup() {
  const { data: session } = useSession();

  const RESEND_OTP_INTERVAL = 60; // 60 seconds
  const [isLoginTab, setIsLoginTab] = useState(true);
  const [isRefer, setIsRefer] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const searchParams = useSearchParams();
  const referedBy = searchParams.get("r") ?? null;
  const goNext = searchParams.get("next") ?? null;
  const defaultOpen = searchParams.has("openLogin");

  // ====================================
  // ========= Sign Up Function =========
  // ====================================

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    refer: "",
  });

  const [errors, setErrors] = useState({});
  const [verifyOtpPage, setVerifyOtpPage] = useState(false);
  const [otp, setOtp] = useState(null);

  const handleSignUpChange = (e) => {
    const { name, value } = e.target;
    const updatedData = { ...formData, [name]: value };
    const validation = signupSchema.safeParse(updatedData);

    setErrors((prev) => {
      const { [name]: _, ...rest } = prev;
      const issue = validation.success
        ? null
        : validation.error.errors.find((err) => err.path[0] === name);
      return issue ? { ...rest, [name]: issue.message } : rest;
    });

    setFormData(updatedData);
  };

  const [timer, setTimer] = useState(0);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const handleSignUp = async () => {
    setIsLoading(true);
    setErrors({});

    if (otp.length !== 6) {
      setErrors({ otp: "Please enter a valid OTP" });
      setIsLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, otp }),
      });

      const result = await res.json();

      if (res.ok) {
        const formD = new FormData();
        formD.append("email", formData.email);
        formD.append("password", formData.password);

        const loginRes = await doCredentialLogin(formD);
        toast.success("Sign up successful!");
        window.location.href = goNext || window.location.href;
      } else {
        setErrors(result.errorPath ? { [result.errorPath]: result.error } : {});
        if (!result.errorPath) toast.error(result.error || "Sign up failed.");
      }
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const onSubmit = async (e) => {
    e?.preventDefault();
    setIsLoading(true);
    setErrors({});

    try {
      signupSchema.parse(formData);

      const res = await fetch("/api/sendOtp/signUpVerification", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.email,
          firstName: formData.firstName,
          lastName: formData.lastName,
        }),
      });

      const result = await res.json();

      if (res.ok) {
        setVerifyOtpPage(true);
        setTimer(RESEND_OTP_INTERVAL);
        e?.target?.reset();
      } else {
        setErrors(result.errorPath ? { [result.errorPath]: result.error } : {});
        if (!result.errorPath)
          toast.error(result.error || "Failed to send OTP.");
      }
    } catch (err) {
      setErrors(
        err.errors?.reduce(
          (acc, { path, message }) => ({ ...acc, [path[0]]: message }),
          {}
        ) || {}
      );
      if (!err.errors) toast.error("An unexpected error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  // ====================================
  // ========= Sign In Function =========
  // ====================================
  const [signInError, setSignInError] = useState({});

  async function handleSignIn(e) {
    e.preventDefault();
    setIsLoading(true);
    setSignInError({});

    try {
      const { email, password } = e.currentTarget;
      const credentials = signInSchema.parse({
        email: email.value,
        password: password.value,
      });

      const res = await doCredentialLogin(credentials);
      if (res?.error) throw new Error(res.error);

      toast.success("Sign Success!");
      window.location.href = goNext || window.location.href;
    } catch (err) {
      const errors = err.errors?.reduce((acc, { path, message }) => {
        acc[path[0]] = message;
        return acc;
      }, {}) || { password: err.message || "Something went wrong?" };

      setSignInError(errors);
    } finally {
      setIsLoading(false);
    }
  }

  if (session) return null;

  return (
    <PopUpBox
      visible={defaultOpen}
      id="loginSignupCheckId"
      closeable={!isLoading}
      svg={
        <svg
          fillRule="evenodd"
          strokeLinejoin="round"
          strokeMiterlimit="2"
          clipRule="evenodd"
          viewBox="0 0 64 64"
        >
          <path
            className="svgC"
            d="M59 43H5v-8a1 1 0 0 0-2 0v13a3 3 0 0 0 3 3h4a1 1 0 0 0 0-2H6a1 1 0 0 1-1-1v-3h54v3a1 1 0 0 1-1 1H14a1 1 0 0 0 0 2h12.6c-.2 2.7-.8 6.1-3.4 8h-1.7a1 1 0 0 0 0 2h21a1 1 0 0 0 0-2h-1.7c-2.6-1.9-3.2-5.3-3.4-8H58a3 3 0 0 0 3-3V18a3 3 0 0 0-3-3H48a1 1 0 0 0 0 2h10a1 1 0 0 1 1 1v25Zm-23.6 8h-6.8c-.1 2.5-.8 5.7-2.6 8h12a14.8 14.8 0 0 1-2.6-8ZM53 29a3 3 0 0 0-3-3H14a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h36a3 3 0 0 0 3-3v-9Zm-2 0v9c0 .6-.4 1-1 1H14a1 1 0 0 1-1-1v-9c0-.6.4-1 1-1h36c.6 0 1 .4 1 1Zm-7.2 2.8-.8-.5a1 1 0 0 0-1 1.8l.8.4-.8.4a1 1 0 0 0 1 1.8l.8-.5v.8a1 1 0 0 0 2 0v-.8l.7.5a1 1 0 0 0 1-1.8l-.7-.4.7-.4a1 1 0 0 0-1-1.8l-.7.5V31a1 1 0 0 0-2 0v.8Zm-12.8 0-.8-.5a1 1 0 0 0-1 1.8l.8.4-.8.4a1 1 0 0 0 1 1.8l.8-.5v.8a1 1 0 0 0 2 0v-.8l.8.5a1 1 0 0 0 1-1.8l-.8-.4.8-.4a1 1 0 0 0-1-1.8l-.8.5V31a1 1 0 0 0-2 0v.8Zm-12.7 0-.8-.5a1 1 0 0 0-1 1.8l.8.4-.8.4a1 1 0 0 0 1 1.8l.8-.5v.8a1 1 0 0 0 2 0v-.8l.7.5a1 1 0 0 0 1-1.8l-.7-.4.7-.4a1 1 0 0 0-1-1.8l-.7.5V31a1 1 0 0 0-2 0v.8ZM16 15H6a3 3 0 0 0-3 3v13.5a1 1 0 0 0 2 0V18a1 1 0 0 1 1-1h10a1 1 0 0 0 0-2Zm10.1-2.3a9.4 9.4 0 0 0-4 7.7v.6a3 3 0 0 0 3 3H39a3 3 0 0 0 3-3v-.6a9.3 9.3 0 0 0-4-7.7 6.7 6.7 0 1 0-11.8 0Zm13.8 7.7v.6c0 .6-.5 1-1 1H25a1 1 0 0 1-1-1v-.6a7.3 7.3 0 0 1 7.3-7.3h1.2a7.3 7.3 0 0 1 7.3 7.3ZM36 11.8a4.7 4.7 0 1 0-8.2 0c1-.5 2.3-.7 3.5-.7h1.2c1.2 0 2.4.2 3.5.7Z"
          />
        </svg>
      }
      header={
        <div
          className={`logOrSign flex p-1 border border-(color:--linkC) rounded-full *:p-2 *:flex-1 *:w-[50%] *:rounded-full *:transition-all duration-500 *:ease-in-out relative`}
        >
          <div
            className={`z-10 ${
              isLoginTab ? "text-white" : "text-(--linkC) cursor-pointer"
            }`}
            onClick={() => setIsLoginTab(true)}
          >
            Login
          </div>
          <div
            className={`z-10 ${
              !isLoginTab ? "text-white" : "text-(--linkC) cursor-pointer"
            }`}
            onClick={() => setIsLoginTab(false)}
          >
            Sign Up
          </div>
          <span
            className={`absolute bg-(--linkC) top-[1px] bottom-[1px] ${
              isLoginTab ? "left-[1px] right-[50%]" : "left-auto right-[1px]"
            } rounded-full`}
          ></span>
        </div>
      }
    >
      {isLoginTab ? (
        <form onSubmit={handleSignIn} className="px-1">
          <Input type="email" name="email" placeholder="Email" />
          {signInError?.email && (
            <p className="text-xs pl-2  text-red-600">{signInError.email}</p>
          )}
          <PasswordInput name="password" placeholder="Password" />

          {signInError?.password && (
            <p className="text-xs pl-2  text-red-600">{signInError.password}</p>
          )}
          <div className="flex gap-5 mt-5 justify-between items-center">
            <div className="text-xs text-gray-500">
              By continuing, you agree to Our&apos;s{" "}
              <Link href="/page/terms" target="_blank">
                Terms of Use
              </Link>{" "}
              and{" "}
              <Link href="/page/privacy-policy" target="_blank">
                Privacy Policy
              </Link>
              .
            </div>
            <Button
              type="submit"
              className="min-w-26"
              loading={isLoading}
              loadingText="Loading"
            >
              Submit
            </Button>
          </div>
        </form>
      ) : verifyOtpPage ? (
        <div className="w-full max-w-sm mt-5 mx-auto">
          <p className="text-sm text-green-600 text-center mt-2">
            An OTP has been sent to <b>{formData.email}</b>
          </p>
          <p className="text-sm text-gray-700 text-center font-semibold mt-1">
            Please enter OTP to verify
          </p>

          {/* OTP Input Fields */}
          <OTPInput onChange={setOtp} />
          {errors.otp && (
            <p className="text-xs mt-1 text-red-600">{errors.otp}</p>
          )}
          <div className="text-right text-xs mt-2">
            <button
              onClick={() => onSubmit()}
              disabled={isLoading || timer > 0}
              className="text-(--linkC) font-semibold disabled:opacity-60 hover:underline cursor-pointer"
            >
              {timer > 0 ? `Resend OTP in ${timer}s` : "Resend OTP"}
            </button>
          </div>
          <div className="flex justify-between items-center mt-8">
            <button
              className="text-red-500 cursor-pointer hover:underline"
              onClick={() => setVerifyOtpPage(false)}
              disabled={isLoading}
            >
              Change Email
            </button>
            <Button onClick={handleSignUp} loading={isLoading}>
              Verify OTP
            </Button>
          </div>
        </div>
      ) : (
        <form
          className="px-1"
          onSubmit={onSubmit}
          onChange={handleSignUpChange}
        >
          <div className="flex gap-2">
            <Input name="firstName" placeholder="First Name" />
            <Input name="lastName" placeholder="Last Name" />
          </div>
          {errors.firstName && (
            <p className="text-xs pl-2 -mt-1 text-red-600">
              {errors.firstName}
            </p>
          )}
          {errors.lastName && (
            <p className="text-xs pl-2 -mt-1 text-red-600">{errors.lastName}</p>
          )}
          <Input type="email" name="email" placeholder="Email" />
          {errors.email && (
            <p className="text-xs pl-2 -mt-1 text-red-600">{errors.email}</p>
          )}

          <PasswordInput name="password" placeholder="Password" />
          {errors.password && (
            <p className="text-xs pl-2 -mt-1 text-red-600">{errors.password}</p>
          )}
          <PasswordInput
            name="confirmPassword"
            placeholder="Confirm Password"
          />
          {errors.confirmPassword && (
            <p className="text-xs pl-2 -mt-1 text-red-600">
              {errors.confirmPassword}
            </p>
          )}

          <div>
            {referedBy ? (
              <Input name="refer" disabled value={referedBy} />
            ) : (
              <>
                <div
                  id="enterRef"
                  onClick={() => setIsRefer((prev) => !prev)}
                  className={`mt-2 cursor-pointer  ${
                    isRefer ? "text-red-500" : "text-(--linkC)"
                  }`}
                >
                  {isRefer ? (
                    <>&times; Remove Refer Code</>
                  ) : (
                    <>&#43; Enter Refer Code</>
                  )}
                </div>
                <div
                  className={`transition-all duration-500 ${
                    isRefer ? "max-h-32" : "max-h-0 overflow-hidden"
                  }`}
                >
                  <Input
                    type="number"
                    name="refer"
                    placeholder="Enter Refer Code"
                  />
                </div>
              </>
            )}
          </div>
          <div className="flex gap-5 mt-5 justify-between items-center">
            <div className="text-xs text-gray-500">
              By continuing, you agree to Our&apos;s{" "}
              <Link href="/page/terms" target="_blank">
                Terms of Use
              </Link>{" "}
              and{" "}
              <Link href="/page/privacy-policy" target="_blank">
                Privacy Policy
              </Link>
              .
            </div>
            <Button
              type="submit"
              className="min-w-26"
              disabled={Object.keys(errors).length > 0}
              onClick={() => console.log(Object.keys(errors).length)}
              loading={isLoading}
              loadingText="Loading"
            >
              Submit
            </Button>
          </div>
        </form>
      )}

      {!verifyOtpPage && (
        <>
          <div className=" relative inline-flex items-center justify-center w-full">
            <hr className="w-5/6 h-px my-8 bg-gray-300 border-0 dark:bg-gray-700" />
            <span className="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-slate-50 left-1/2 dark:text-white dark:bg-neutral-900">
              or
            </span>
          </div>
          <form
            action={doSocialLogin}
            className="w-full flex flex-row gap-3 justify-center"
          >
            {referedBy && (
              <input type="hidden" name="referCode" value={referedBy} />
            )}
            <Button
              className="text-lg flex bg-transparent text-inherit items-center gap-1 border-2 shadow-md hover:scale-100 hover:shadow-inner"
              type="submit"
              name="action"
              value="google"
              svg={
                <svg viewBox="0 0 48 48">
                  <path
                    fill="#FFC107"
                    d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12
              c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24
              c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                  ></path>
                  <path
                    fill="#FF3D00"
                    d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657
              C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                  ></path>
                  <path
                    fill="#4CAF50"
                    d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36
              c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                  ></path>
                  <path
                    fill="#1976D2"
                    d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571
              c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                  ></path>
                </svg>
              }
            >
              Sign In With Google
            </Button>

            {/* <button
                className="bg-black text-white p-1 rounded-md m-1 text-lg"
                type="submit"
                name="action"
                value="github"
            >
                Sign In With GitHub
            </button> */}
          </form>
        </>
      )}
    </PopUpBox>
  );
}
