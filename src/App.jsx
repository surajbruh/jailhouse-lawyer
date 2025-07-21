import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function App() {

  const pageWrapper = useRef(null)
  const cursorRef = useRef(null)
  useEffect(() => {
    const cursor = cursorRef.current
    console.log(cursor)

    document.body.addEventListener('mouseenter', () => {
      gsap.to(cursor, {
        opacity: 1,
        duration: 0.5
      })
    })

    document.body.addEventListener('mouseleave', () => {
      gsap.to(cursor, {
        opacity: 0,
        duration: 0.5
      })
    })

    document.body.addEventListener('mousemove', (e) => {
      gsap.to(cursor, {
        x: e.x,
        y: e.y
      })
    })

  })


  return (
    <>
      <div className="wrapper overflow-x-hidden relative">
        <div
          ref={cursorRef}
          className="cursor fixed rounded-[50%] z-10 bg-[#00000000] backdrop-invert-100 w-[50px] h-[50px] opacity-0"></div>
        <div className="page1 relative w-screen h-screen bg-[var(--color1)] ">
          <div className="navbar fixed w-full p-[32px] flex items-center justify-between text-[#9b9b9b]">
            <div className="uppercase font-[grotesk] text-xl leading-[20px] flex items-center gap-2">
              <span className="font-black">
                Our Roots •
              </span>
              <span>flashlights</span>
            </div>
            <ul className="uppercase text-xl flex gap-10 relative">
              <li className="">
                <span
                  onMouseEnter={() => {
                    const cont = document.querySelector('.con')
                    gsap.to(cont, {
                      duration: 0.25,
                      opacity: 1
                    })
                  }}
                  onMouseLeave={() => {
                    const cont = document.querySelector('.con')
                    gsap.to(cont, {
                      duration: 0.25,
                      opacity: 0
                    })
                  }}
                  className="tl">timeline</span>
                <div className="con bg-[#E1D4B8] rounded-xl text-nowrap p-8 my-8 absolute left-0 translate-x-[-55%] flex flex-col gap-6 opacity-0 ">
                  <div className="font-[fkscreamer] lowercase text-black text-[40px] leading-[30px] flex gap-2 items-end">
                    <span>1700s-1900s</span>
                    <span className="uppercase font-[grotesk] text-xl leading-[20px]">ch.1</span>
                  </div>
                  <div className="font-[fkscreamer] lowercase text-black text-[40px] leading-[30px] flex gap-2 items-end">
                    <span>1920s-1960s</span>
                    <span className="uppercase font-[grotesk] text-xl leading-[20px]">ch.2</span>
                  </div>
                  <div className="font-[fkscreamer] lowercase text-black text-[40px] leading-[30px] flex gap-2 items-end">
                    <span>1970s-1990s</span>
                    <span className="uppercase font-[grotesk] text-xl leading-[20px]">ch.3</span>
                  </div>
                  <div className="font-[fkscreamer] lowercase text-black text-[40px] leading-[30px] flex gap-2 items-end">
                    <span>2000s-present</span>
                    <span className="uppercase font-[grotesk] text-xl leading-[20px]">ch.4</span>
                  </div>
                </div>
              </li>
              <li><i className="ri-menu-3-line"></i></li>
            </ul>
          </div>
          <div className="w-full flex px-[48px] pt-[calc(2*(32px+48px))] pb-[48px]">
            <div className="history uppercase font-[fkscreamer] w-max">
              <span>the history of</span>
              <br />
              <span>jailhouse lawyers</span>
            </div>
            <div className="w-full  flex items-end justify-center">
              <p className="w-[60%] text-2xl leading-[24px]">
                A brief historical overview of the
                emergence and impact of jailhouse
                lawyers in the legal system
              </p>
            </div>

          </div>
        </div>
        <div
          className="page2 bg-[#E8465E] font-[fkscreamer] text-5xl text-center flex flex-col justify-around uppercase w-screen h-screen">
          <div>period 1</div>
          <div className="text-[200px]">1700s- <br /> 1900s</div>
          <div className="flex flex-col items-center">
            <span>establishment</span>
            <span>of the prison system</span>
          </div>
        </div>
      </div >
    </>
  )
}
