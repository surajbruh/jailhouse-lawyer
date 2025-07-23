import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const pageRef = useRef(null)
  const cursorRef = useRef(null)
  const navbarRef = useRef(null)
  const textRef = useRef(null)
  const wordRef = useRef(null)
  const tempRef = useRef(null)

  useGSAP(() => {
    const cursor = cursorRef.current

    function cursorMove() {
      document.body.addEventListener('mousemove', (e) => {
        gsap.to(cursor, {
          x: e.x - 20,
          y: e.y - 20
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

    //for pages
    function slidesAnimation() {
      gsap.to(pageRef.current, {
        x: -(pageRef.current.offsetWidth - tempRef.current.offsetWidth),
        scrollTrigger: {
          trigger: pageRef.current.parentNode,
          scroller: 'body',
          scrub: 2,
          start: 'top 0%',
          end: 'top -250%',
          pin: true
        }
      })
    }
    slidesAnimation()

    //for navbar
    const tl = gsap.timeline()
    function navbarAnimation() {
      tl.from(navbarRef.current, {
        y: '-100%',
        duration: 0.5,
        opacity: 0
      })
    }
    navbarAnimation()

    function bannerAnimate() {
      // console.log(textRef.current.querySelector('p'))
      const target = textRef.current.querySelector('p');

      tl.from(target, {
        y: '100%',
        duration: 0.5,
        ease: "power4.out",
        opacity: 0
      })
    }
    bannerAnimate()

    //period 1 slide animation
    const pageTL = gsap.timeline()
    function pagesAnimation() {
      pageTL.from('.period1', {
        y: "100%",
        opacity: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: '.period1-con',
          scroller: 'body',
          scrub: 2,
          start: "top 50%",
          end: 'top 30%',
        }
      })

      //page2 slide animation
      pageTL.from('.image-con', {
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: '.image-con',
          scroller: 'body',
          start: 'top 25%',
          end: 'top 10%',
          scrub: 2
        }
      })

      pageTL.from('.frame', {
        rotate: 45,
        duration: 1,
        y: "100%",
        opacity: 0,
        scrollTrigger: {
          trigger: '.frame',
          scroller: 'body',
          start: 'top 18%',
          end: 'top 15%',
          scrub: 2
        }

      })

      //last page text animation
      pageTL.from('.text-div', {
        y: "100%",
        opacity: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: '.newpage',
          scroller: 'body',
          // markers: true,
          scrub: 2,
          start: "top 50%",
          end: 'top 30%',
        }
      })
    }
    pagesAnimation()

    function wordAnimation() {
      const words = wordRef.current.textContent.split(" ")
      let clutter = "";
      words.forEach((word) => {
        clutter += `<span>${word}</span>`
      })
      document.querySelector('.history').innerHTML = clutter;

      gsap.from('.history span', {
        opacity: 0,
        scale: 1.5,
        stagger: 0.25,
      })
    }
    wordAnimation()
  }, [])
  return (
    <>
      <div className="wrapper overflow-x-hidden relative">
        <div
          ref={cursorRef}
          className="cursor fixed z-5 bg-[#00000000] rounded-[50%] backdrop-invert-100 w-[50px] h-[50px] opacity-0">
          {/* <img className="w-full h-full object-cover" src="/img/PikPng.com_png-pig_5159817.png" alt="" /> */}
        </div>
        <div className="page1 relative w-screen h-max bg-[var(--color1)] ">
          <div
            ref={navbarRef}
            className="navbar z-10 fixed w-full p-[32px] flex items-center justify-between text-[#9b9b9b]">
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
                    const element = document.querySelector('.con')
                    element.removeAttribute('hidden')
                    gsap.to('.con', {
                      opacity: 1,
                      duration: 0.5,
                    })
                  }}
                  // onMouseLeave={() => {
                  //   const element = document.querySelector('.con')
                  //   element.setAttribute('hidden', 'hidden')
                  //   gsap.to('.con', {
                  //     opacity: 0,
                  //     duration: 0.5,
                  //   })
                  // }}
                  className="tl">timeline</span>
                <div>
                  <div
                    hidden
                    className="con bg-[#E1D4B8] cursor-pointer font-[fkscreamer] rounded-xl text-nowrap p-8 my-8 absolute left-0 translate-x-[-55%] flex opacity-0 flex-col gap-6">
                    <div className="lowercase hover:text-[#E8465E] transition-all text-black text-[40px] leading-[30px] flex gap-2 items-end">
                      <span>1700s-1900s</span>
                      <span className="uppercase font-[grotesk] text-xl leading-[20px]">ch.1</span>
                    </div>
                    <div className="lowercase hover:text-[#E8465E] transition-all text-black text-[40px] leading-[30px] flex gap-2 items-end">
                      <span>1920s-1960s</span>
                      <span className="uppercase font-[grotesk] text-xl leading-[20px]">ch.2</span>
                    </div>
                    <div className="lowercase hover:text-[#E8465E] transition-all text-black text-[40px] leading-[30px] flex gap-2 items-end">
                      <span>1970s-1990s</span>
                      <span className="uppercase font-[grotesk] text-xl leading-[20px]">ch.3</span>
                    </div>
                    <div className="lowercase hover:text-[#E8465E] transition-all text-black text-[40px] leading-[30px] flex gap-2 items-end">
                      <span>2000s-present</span>
                      <span className="uppercase font-[grotesk] text-xl leading-[20px]">ch.4</span>
                    </div>
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
          <div
            ref={textRef}
            className="w-full flex px-[48px] pt-[calc(2*(32px+48px))] pb-[48px]">
            <div
              className="history uppercase font-[fkscreamer] min-w-[67vw] w-clamp(max, 60vw, 80vw) flex flex-wrap">
              <h1
                ref={wordRef}>the history of <br />jailhouse lawyers</h1>
            </div>
            <div className="w-full flex items-end">
              <p className="w-[60%] text-2xl leading-[24px] mx-[48px] my-[24px] ">
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
            <div
              ref={tempRef}
              className="period1-con bg-[#E8465E]  text-5xl text-center flex flex-col justify-around uppercase w-screen h-screen">
              <div>period 1</div>
              <div className="period1 text-[200px]">1700s- <br /> 1900s</div>
              <div className="flex flex-col items-center">
                <span>establishment</span>
                <span>of the prison system</span>
              </div>
            </div>
            <div className="bg-[#F1EADA] text-5xl text-center flex flex-col gap-4 justify-center items-center uppercase w-screen h-screen">
              <div className="font-sans text-3xl">1790</div>
              <div className="relative w-max text-[110px] leading-[100px] flex flex-col items-center">
                <div className="gif z-10 w-[80px] h-[80px] absolute top-0 right-0 translate-x-[-50%] translate-y-[-50%]">
                  <img className="w-full h-full object-cover" src="\img\672cbe9e4b4768e7dbe38394_IMG_1581.gif" alt="" />
                </div>
                <span>THE FIRST</span>
                <span>US PENITENTIARY,</span>
              </div>
              <div className="images relative flex items-center gap-6">
                <div className="gif z-10 w-[80px] h-[80px] absolute top-0 left-0 right-0 translate-x-[-45%] translate-y-[-20%]">
                  <img className="w-full object-cover object-center" src="\img\672cbe9ef2157b7ffb72d4d1_02.gif" alt="" />
                </div>
                <div className="image-con overflow-hidden w-[25vh] h-[18vh] ">
                  <img className="image scale-[110%] w-full h-full object-cover" src="\img\66827cb5cad72ab67811a7f0_1.png" alt="" />
                </div>
                <div className="frame-con bg-[url(/img/66827cb588b1e8bb18a0ed67_2-bg.png)] p-4 ">
                  <div className="frame overflow-hidden w-[25vh] h-[18vh] ">
                    <img className="image scale-[110%] w-full h-full object-cover" src="\img\66827cb57fca884f616c98de_2.png" alt="" />
                  </div>
                </div>
                <div className="image-con overflow-hidden w-[25vh] h-[18vh] ">
                  <img className="image scale-[110%] w-full h-full object-cover" src="\img\66827cb561bfb3113a1c9bfb_3.png" alt="" />
                </div>
              </div>
              <div className="relative text-[110px] leading-[100px] flex flex-col items-center">
                <div className="gif z-10 w-[80px] h-[80px] absolute bottom-0 right-0 translate-x-[25%] translate-y-[-50%]">
                  <img className="w-full h-full object-cover" src="\img\672cbe9e7db11de41aaa3388_IMG_1562 2.gif" alt="" />
                </div>
                <span>WALNUT STREET JAIL,</span>
                <span>OPENS IN PHILADELPHIA</span>
              </div>
            </div>
            <div className="bg-[#101010] text-[#F1EADA] text-left w-screen h-screen flex flex-col items-start p-[100px] ">
              <div className="font-sans text-3xl">1826</div>
              <div className="w-max text-[110px] leading-[100px] mb-auto flex flex-col items-start">
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
              </div>
              <div className="font-[grotesk] w-[30vw] text-[40px] leading-[40px] ">
                <p>
                  After being constructed
                  by incarcerated people, Sing Sing
                  opens in New York. It is infamous for its harsh conditions.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="newpage bg-[#101010] text-[#F1EADA] font-[fkscreamer] p-[60px] uppercase w-screen h-screen flex flex-col justify-start">
          <div className="relative w-[3.5vw] mb-10">
            <div className="cursor-overlay"></div>
            <img className="w-full h-full object-cover" src="\img\66e44315c7d92c94e5df8ba0_JLI logo.png" alt="" />
          </div>
          <div className="text-div flex flex-col mb-10">
            <span className="text-[215px] leading-[215px] ">FLASHLIGHTS</span>
            <span className="text-[110px] leading-[110px] ">we are jailhouse lawyers</span>
          </div>
          <div className="font-sans text-2xl w-[40vw] mb-10">
            <p>The <span className="underline">Jailhouse Lawyers Initiative (JLI)</span> and <span className="underline">Zealous</span> collaborated on this public education and advocacy project to raise the visibility of jailhouse lawyers as human rights defenders and push for policy changes identified by these community justice advocates.
            </p>
          </div>
          <div className="uppercase font-sans flex gap-8 items-center">
            <button className="relative px-8 py-4 bg-[#E8465E] hover:bg-[#F1EADA] hover:text-black transition-all uppercase rounded-md text-2xl font-sans">
              <div className="cursor-overlay"></div>
              play project intro</button>
            <span className="relative transition-all hover:text-[rgb(241,234,218)] text-[rgba(241,234,218,0.5)] text-2xl underline">
              <div className="cursor-overlay"></div>
              back to home</span>
          </div>
        </div>
      </div >
    </>
  )
}
