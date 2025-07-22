import gsap from "gsap";
import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function App() {

  const pageRef = useRef(null)
  const cursorRef = useRef(null)
  useGSAP(() => {
    const cursor = cursorRef.current

    function cursorMove() {
      document.body.addEventListener('mousemove', (e) => {
        gsap.to(cursor, {
          x: e.x,
          y: e.y
        })
      })
    }
    cursorMove()

    function cursorWide() {
      const elements = document.querySelectorAll('.cursor-overlay')

      elements.forEach((e) => {
        e.addEventListener('mouseenter', () => {
          gsap.to(cursor, {
            scale: 2,
          })
        })

        e.addEventListener('mouseleave', () => {
          gsap.to(cursor, {
            scale: 1,
          })
        })
      })
    }
    cursorWide()

    function cursorDisplay() {
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
    }
    cursorDisplay()

    console.log(pageRef.current.closest('div'), pageRef.current.parentNode)
    gsap.to(pageRef.current, {
      x: '-100%',
      scrollTrigger: {
        trigger: pageRef.current.parentNode,
        scroller: 'body',
        scrub: true,
        start: 'top 0%',
        end: 'top -100%',
        pin: true
      }
    })

  }, [])
  return (
    <>
      <div className="wrapper relative">
        <div
          ref={cursorRef}
          className="cursor fixed rounded-[50%] z-10 bg-[#00000000] backdrop-invert-100 w-[50px] h-[50px] opacity-0"></div>
        <div className="page1 relative w-screen h-max bg-[var(--color1)] ">
          <div className="navbar z-90 fixed w-full p-[32px] flex items-center justify-between text-[#9b9b9b]">
            <div className="cursor-wide uppercase font-[grotesk] text-xl leading-[20px] flex items-center gap-2">
              <div className="cursor-overlay"></div>
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
                <div
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

                  className="con bg-[#E1D4B8] font-[fkscreamer] rounded-xl text-nowrap p-8 my-8 absolute left-0 translate-x-[-55%] flex flex-col gap-6 opacity-0 ">
                  <div className="cursor-overlay"></div>
                  <div className="lowercase text-black text-[40px] leading-[30px] flex gap-2 items-end">
                    <span>1700s-1900s</span>
                    <span className="uppercase font-[grotesk] text-xl leading-[20px]">ch.1</span>
                  </div>
                  <div className="lowercase text-black text-[40px] leading-[30px] flex gap-2 items-end">
                    <span>1920s-1960s</span>
                    <span className="uppercase font-[grotesk] text-xl leading-[20px]">ch.2</span>
                  </div>
                  <div className="lowercase text-black text-[40px] leading-[30px] flex gap-2 items-end">
                    <span>1970s-1990s</span>
                    <span className="uppercase font-[grotesk] text-xl leading-[20px]">ch.3</span>
                  </div>
                  <div className="lowercase text-black text-[40px] leading-[30px] flex gap-2 items-end">
                    <span>2000s-present</span>
                    <span className="uppercase font-[grotesk] text-xl leading-[20px]">ch.4</span>
                  </div>
                </div>
              </li>
              <li>
                <i className="cursor-wide ri-menu-3-line">
                  <div className="cursor-overlay"></div>
                </i>
              </li>
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
        <div className="page-wrapper font-[fkscreamer]">
          <div
            ref={pageRef}
            className="pages bg-red-300 w-max h-screen flex shrink-0 flex-nowrap">
            <div className="bg-[#E8465E]  text-5xl text-center flex flex-col justify-around uppercase w-screen h-screen">
              <div>period 1</div>
              <div className="text-[200px]">1700s- <br /> 1900s</div>
              <div className="flex flex-col items-center">
                <span>establishment</span>
                <span>of the prison system</span>
              </div>
            </div>
            <div className="bg-[#F1EADA] text-5xl text-center flex flex-col gap-4 justify-center items-center uppercase w-screen h-screen">
              <div className="font-sans text-3xl">1790</div>
              <div className="relative w-max text-[110px] leading-[100px] flex flex-col items-center">
                <div className="gif w-[80px] h-[80px] absolute top-0 right-0 translate-x-[-50%] translate-y-[-50%]">
                  <img className="w-full h-full object-cover" src="\img\672cbe9e4b4768e7dbe38394_IMG_1581.gif" alt="" />
                </div>
                <span>THE FIRST</span>
                <span>US PENITENTIARY,</span>
              </div>
              <div className="images relative flex items-center gap-6">
                <div className="gif w-[80px] h-[80px] absolute top-0 left-0 right-0 translate-x-[-45%] translate-y-[-20%]">
                  <img className="w-full h-full object-cover object-center overflow-visible" src="\img\672cbe9ef2157b7ffb72d4d1_02.gif" alt="" />
                </div>
                <div className="w-[25vh] h-[18vh] ">
                  <img className="w-full h-full object-cover" src="\img\66827cb5cad72ab67811a7f0_1.png" alt="" />
                </div>
                <div className="frame bg-[url(/img/66827cb588b1e8bb18a0ed67_2-bg.png)] p-4 ">
                  <div className="w-[25vh] h-[18vh] ">
                    <img className="w-full h-full object-cover" src="\img\66827cb57fca884f616c98de_2.png" alt="" />
                  </div>
                </div>
                <div className="w-[25vh] h-[18vh] ">
                  <img className="w-full h-full object-cover" src="\img\66827cb561bfb3113a1c9bfb_3.png" alt="" />
                </div>
              </div>
              <div className="relative text-[110px] leading-[100px] flex flex-col items-center">
                <div className="gif w-[80px] h-[80px] absolute bottom-0 right-0 translate-x-[25%] translate-y-[-50%]">
                  <img className="w-full h-full object-cover" src="\img\672cbe9e7db11de41aaa3388_IMG_1562 2.gif" alt="" />
                </div>
                <span>WALNUT STREET JAIL,</span>
                <span>OPENS IN PHILADELPHIA</span>
              </div>
            </div>
            <div className="bg-[#101010] text-[#F1EADA] text-left w-screen h-screen flex flex-col justify-around gap-4">
              <div className="font-sans text-3xl">1826</div>
              <div className="w-max text-[110px] leading-[100px] flex flex-col items-start">
                <div className="relative flex items-center w-max h-max">
                  <div className="gif w-[10vh] absolute right-0 translate-x-[125%] translate-y-[0]">
                    <img className="w-full h-full object-cover" src="\img\672cbe9eca8293d6eaae8e39_03.gif" alt="" />
                  </div>
                  <span>FIRST “PROFITABLE”</span>
                </div>
                <div className="relative flex items-center w-max h-max">
                  <div className="gif w-[full] absolute right-0 bottom-0 translate-y-[125%]">
                    <img className="w-full h-full object-cover" src="\img\672cbe9f62e041c5a4bb2ff2_04.gif" alt="" />
                  </div>
                  <span>PRISON</span>
                </div>
                <div className="border border-white font-[grotesk] w-[30vw] text-[40px] leading-[40px] ">
                  <p>
                    <span className="text-xl">Fame</span>
                    After being constructed
                    by incarcerated people, Sing Sing
                    opens in New York. It is infamous for its harsh conditions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="newpage bg-yellow-300 w-screen h-screen"></div>
      </div >
    </>
  )
}
