"use client";

import {
  AdsterraBannerStrip,
  AdsterraNativeBanner,
  MonetagMultiTag01,
} from "@shared/components/ads";
import { WorkBox } from "@shared/components/ui/Boxes";
import { Button } from "@shared/components/ui/Button";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
const activeID = [999, 1, 2, 3];
const links = [
  "https://stenexeb.xyz/4/5629269", // Monetag 01
  "https://stenexeb.xyz/4/9179850", // Monetag 02
  "https://jewelsobstructionerosion.com/fzdk687pxj?key=28292e58043b9d3855e670331d410dfe", // Adsterra 01
  // "https://jewelsobstructionerosion.com/sbem1r394?key=a2f20231a014961d12715300c8c82ffa", // Adsterra Adult 01
  "https://11745.xml.4armn.com/direct-link?pubid=941647&siteid=[SITE_ID]", // Richads 01
];
export default function Click() {
  const { id } = useParams();
  const isActive = activeID.includes(parseInt(id));
  const totalPage = isActive ? 3 : 1;

  const [completed, setCompleted] = useState(0);
  const [timer, setTimer] = useState(() => (isActive ? 8 : 0));

  // Load completed count from sessionStorage
  useEffect(() => {
    const stored = sessionStorage.getItem(`task-${id}`);
    setCompleted(stored ? parseInt(stored) : 0);
  }, [id]);

  // Start timer on page load
  useEffect(() => {
    if (timer <= 0) return;
    const interval = setInterval(() => {
      setTimer((t) => t - 1);
    }, 1100);
    return () => clearInterval(interval);
  }, [timer]);

  const handleClick = () => {
    const newCount = completed + 1;
    sessionStorage.setItem(`task-${id}`, newCount);

    // Open the same page in a new tab
    if (isActive) {
      window.open(window.location.href, "_blank");

      // Redirect current tab to an ad/redirect URL
      const randomLink = links[Math.floor(Math.random() * links.length)];
      window.location.replace(randomLink); // change this to your redirect link
    } else {
      window.location.reload();
    }
  };

  return (
    <>
      <WorkBox>
        <div className="select-none space-y-4">
          <h1 className="text-xl font-bold">Click Task #{id}</h1>
          {isActive && (
            <div className="my-1">
              <AdsterraBannerStrip />
            </div>
          )}
          {completed >= totalPage && timer <= 0 ? (
            <Firework />
          ) : (
            <p>
              Click on <strong>Complete task</strong>
              {isActive && " after the timer ends"}.
            </p>
          )}
          {timer > 0 ? (
            <div className="text-lg font-mono">⏳ {timer}s</div>
          ) : (
            <>
              {completed >= totalPage ? (
                <>
                  <p className="bg-green-600 text-white my-2 inline-block px-6 py-2 rounded-sm">
                    Task Completed
                  </p>
                  <p>{new Date().toLocaleDateString("en-GB")}</p>
                </>
              ) : (
                <Button onClick={handleClick}>
                  Complete Task ({completed}/{totalPage})
                </Button>
              )}
            </>
          )}
          {isActive && (
            <p className="text-xs text-yellow-600 font-medium">
              ⚠️ Beware of ads. If redirected, close and retry.
            </p>
          )}
        </div>
      </WorkBox>
      {isActive && <AdsterraNativeBanner />}
      {isActive && <MonetagMultiTag01 />}
    </>
  );
}

function Firework() {
  const particles = 50;
  const width = 500;
  const height = 500;

  const boxShadow = Array.from({ length: particles }, () => {
    const x = Math.floor(Math.random() * width - width / 2);
    const y = Math.floor(Math.random() * height - height / 1.2);
    const h = Math.floor(Math.random() * 360);
    return `${x}px ${y}px hsl(${h}, 100%, 50%)`;
  }).join(",");

  return (
    <div className="fixed inset-0 z-1 overflow-hidden">
      <div className="absolute inset-0">
        <div
          className=" absolute w-1 h-1 rounded-full"
          style={{
            boxShadow: "0 0 #fff",
            animation:
              "bang 1s ease-out infinite backwards, gravity 1s ease-in infinite backwards, position 5s linear infinite backwards",
          }}
        />
        <div
          className="absolute w-1 h-1 rounded-full"
          style={{
            boxShadow: "0 0 #fff",
            animation:
              "bang 1.25s ease-out infinite backwards, gravity 1.25s ease-in infinite backwards, position 6.25s linear infinite backwards",
            animationDelay: "1.25s, 1.25s, 1.25s",
          }}
        />
        <style>{`
          @keyframes bang {
            to {
              box-shadow: ${boxShadow};
            }
          }
          @keyframes gravity {
            to {
              transform: translateY(200px);
              opacity: 0;
            }
          }
          @keyframes position {
            0%,
            19.9% {
              margin-top: 10%;
              margin-left: 40%;
            }
            20%,
            39.9% {
              margin-top: 40%;
              margin-left: 30%;
            }
            40%,
            59.9% {
              margin-top: 20%;
              margin-left: 70%;
            }
            60%,
            79.9% {
              margin-top: 30%;
              margin-left: 20%;
            }
            80%,
            99.9% {
              margin-top: 30%;
              margin-left: 80%;
            }
          }
        `}</style>
      </div>
    </div>
  );
}
