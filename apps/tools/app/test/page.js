"use client";
import { Button } from "@shared/components/ui/Button";
import { Note, PopUpBox, WorkBox } from "@shared/components/ui/Boxes";
import { useEffect, useRef, useState } from "react";
import { OTPInput } from "@shared/components/ui/Input";

export default function TestPage() {
  const [loading, setLoading] = useState(false);
  const [changed, setChanged] = useState(0);
  useEffect(() => {
    setChanged((p) => p + 1);
    const t = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => {
      clearTimeout(t);
    };
  }, [loading]);

  const text =
    "Lourm ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut laborecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  const [r, setR] = useState(10);

  return (
    <>
      <Button htmlFor="SideBarInput" className="block w-full h-96 max-h-screen">
        Side Bar Toggle
      </Button>
      <div>
        <input type="checkbox" name="" id="" className="peer/navI" />
        <div className="bg-amber-900 text-red-900 peer-checked/navI:text-white p-2">
          <div className="bg-amber-700  p-2">
            <div className="bg-amber-500 peer-checked/navI:[div_>_div_>_div]:bg-pink-500 p-2">
              <span className="bg-amber-300  peer-checked/navI:[div_&]:bg-amber-200">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error
                laborum maiores repellat voluptas neque esse dignissimos, amet
                eos hic quaerat nobis ad repudiandae tempora aspernatur commodi
                consequatur, cumque eligendi quidem.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div>Loading: {loading.toString()}</div>
      <div>Changed: {changed}</div>
      <Button
        className="rounded-lg"
        onClick={() => setLoading((p) => !p)}
        loading={loading}
        svg={
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
          >
            <path d="M176 216h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16H176c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16zm-16 80c0 8.84 7.16 16 16 16h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16H176c-8.84 0-16 7.16-16 16v16zm96 121.13c-16.42 0-32.84-5.06-46.86-15.19L0 250.86V464c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V250.86L302.86 401.94c-14.02 10.12-30.44 15.19-46.86 15.19zm237.61-254.18c-8.85-6.94-17.24-13.47-29.61-22.81V96c0-26.51-21.49-48-48-48h-77.55c-3.04-2.2-5.87-4.26-9.04-6.56C312.6 29.17 279.2-.35 256 0c-23.2-.35-56.59 29.17-73.41 41.44-3.17 2.3-6 4.36-9.04 6.56H96c-26.51 0-48 21.49-48 48v44.14c-12.37 9.33-20.76 15.87-29.61 22.81A47.995 47.995 0 0 0 0 200.72v10.65l96 69.35V96h320v184.72l96-69.35v-10.65c0-14.74-6.78-28.67-18.39-37.77z"></path>
          </svg>
        }
      >
        Get
      </Button>
      <Button
        className="rounded-lg"
        onClick={() => setLoading((p) => !p)}
        loading={loading}
      >
        Get Started
      </Button>
      <Button className="rounded-lg" as="label" htmlFor="pppp">
        Open Pop Up
      </Button>
      <WorkBox className="flex gap-4">
        {/* <!-- First Div --> */}
        <div className="flex-1 bg-gray-100 p-4">
          {/* <!-- Some content --> */}
          <div>{text.repeat(r)}</div>
          <div className="flex justify-around">
            <Button onClick={() => setR((p) => --p)} disabled={r <= 0}>
              Remove
            </Button>
            <Button onClick={() => setR((p) => ++p)}>Add</Button>
          </div>
        </div>

        {/* <!-- Second Div --> */}
        <div className="max-w-20 bg-gray-200 p-4">
          <section className="sticky top-20">
            {/* <!-- This will stay sticky inside the second div --> */}
            <div className="bg-white shadow-md p-4 rounded-sm">
              Sticky Section
            </div>
          </section>
        </div>
      </WorkBox>

      <WorkBox>
        <div>ehwhewhfiuhiuhef hvhj</div>
        <div>ehwhewhfiuhiuhef hvhj</div>
        <div>ehwhewhfiuhiuhef hvhj</div>
      </WorkBox>
      <PopUpBox
        className=""
        id="pppp"
        closeable={true}
        visible={false}
        header={
          <>
            <div>Hello</div>
            <h1 className="text-center">{r}</h1>
            <div className="flex justify-around">
              <Button onClick={() => setR((p) => --p)} disabled={r <= 0}>
                Remove
              </Button>
              <Button onClick={() => setR((p) => ++p)}>Add</Button>
            </div>
          </>
        }
      >
        <div>{text.repeat(r)}</div>
        <div className="flex justify-around">
          <Button onClick={() => setR((p) => --p)} disabled={r <= 0}>
            Remove
          </Button>
          <Button onClick={() => setR((p) => ++p)}>Add</Button>
        </div>
      </PopUpBox>

      <WorkBox className="w-full h-20 bg-gray-100 text-blue-600">
        {" "}
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos laboriosam
        suscipit saepe laborum excepturi eaque molestiae placeat unde quam
        facilis! Voluptate incidunt voluptatum placeat minus eos porro maiores
        magnam natus?
      </WorkBox>
      <div className="note">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam placeat
        voluptatum fugiat commodi voluptate vel voluptatem fugit accusamus
        adipisci. Placeat, tenetur. Tenetur corporis mollitia aspernatur, odit{" "}
        <span>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum,
          necessitatibus libero cum odit quas, minus ad tempora eligendi,
          dolores animi magni et! Minus quae nulla fugit nisi corporis,
          perspiciatis necessitatibus?
        </span>
        temporibus assumenda quam aperiam placeat aliquid delectus fugit nobis!
        Architecto, optio quo commodi mollitiacumque, fugit ex ipsum id, reru
      </div>
      <Note>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam
        voluptatibus vero molestias exercitationem, facere veniam cum corporis
        alias dolores at! Molestias repellendus ut perspiciatis architecto
        inventore aut voluptatem rem magnam!
      </Note>

      <div>
        <OTPInput
          className="w-1/2"
          maxLength={7}
          onChange={(e) => console.log(e)}
        />
      </div>
    </>
  );
}
