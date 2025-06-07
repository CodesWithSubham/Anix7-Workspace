import Image from "next/image";
import { verifyMail } from "@shared/components/ui/mail";
import { sendNoReplyMail } from "@shared/lib/sendMail";



export default function Mail() {
  return (
    <div className="w-full h-screen flex flex-col gap-1 justify-center items-center">
      <h1>Mail</h1>
      <button
        className="button"
        onClick={async () => {
          "use server";
          const { props } = verifyMail({
            userName: "Subham Duari",
            userEmail: "subhamduary111@gmail.com",
            otp: 546524,
            profilePicLink: "http://localhost:3000/_next/image?url=%2Fassets%2Fimg%2Flogo.png&w=256&q=75",
          });
          const children = props.children;
          const res = await sendNoReplyMail({
            sendTo: "subhamduary111@gmail.com",
            subject: "Test Verification Mail",
            html: children,
          });
          console.log(res);
        }}
      >
        Send
      </button>
      <Image alt="Logo" src="/assets/img/logo.png" width={128} height={128} />
    </div>
  );
}
