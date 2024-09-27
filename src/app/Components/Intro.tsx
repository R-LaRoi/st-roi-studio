import React from 'react';
import { Contact } from './Contact'
import { Reveal } from './Reveal'
import { ScrollPage } from './Scroll'
import { Btn } from './Btn'
import { AnimatedText } from './AnimatedText';
import './Stylesheets/intro.css'
import { WorkCards } from './WorkCards';
import { Marquee } from './Marquee';
import Link from "next/link"



export const Intro = (): React.ReactElement => {
  return (
    <section>
      <section className="--intro " id="hero">
        <Reveal>
          <div className='double-cards'>
            <div className="col-1">
              <AnimatedText />
              <div>
                <a href="#about">
                  <Btn>
                    <span>meet rachel</span>
                  </Btn></a>
              </div>
            </div>

            <video playsInline autoPlay muted loop className="col-2 rounded-2xl" id='jmp'>
              <source
                src="
https://github.com/R-LaRoi/st-studio-app/assets/114012059/dc455318-5eea-48d3-9e8a-7aeb69cf2166
"  type="video/mp4"
              />
            </video>

            {/* <img  className="col-2 rounded-2xl" src="https://github.com/R-LaRoi/st-roi-studio/assets/114012059/ad4bc82d-3351-4f17-ae2a-66824e7bf460" alt="woman jumping rope"  /> */}

          </div>
        </Reveal>
      </section>

      <div className="horizontal-line">

      </div>

      <section className="about" id="about">
        <Reveal>

          <h3 className='abt-title'>about me</h3>

        </Reveal>
        <Reveal>
          <p className='abt-p'>
            As a creative developer, I blend design and development skills to transform ideas into dynamic web experiences. From concept to deployment, I navigate the complexities of starting from scratch, creating unique layouts and interactions that bring visions to life.
          </p>
        </Reveal>
      </section>

      <div className="horizontal-line"
      >

      </div>
      <section className="about
">
        <ScrollPage>
          <h3 className="abt-title">
            Here&apos;s what I do
          </h3>
        </ScrollPage>
        <Reveal>
          <div className="--cards " style={{ fontFamily: 'var(--font-visby)' }}>
            <div>
              <div className=" h-full flex px-3 py-5 bg-neutral-700 rounded-lg ">
                <div className="max-w-sm rounded overflow-hidden ">
                  <svg
                    viewBox="0 0 1024 1024"
                    fill="currentColor"
                    height="2em"
                    width="2em"

                  >
                    <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM513.1 518.1l-192 161c-5.2 4.4-13.1.7-13.1-6.1v-62.7c0-2.3 1.1-4.6 2.9-6.1L420.7 512l-109.8-92.2a7.63 7.63 0 01-2.9-6.1V351c0-6.8 7.9-10.5 13.1-6.1l192 160.9c3.9 3.2 3.9 9.1 0 12.3zM716 673c0 4.4-3.4 8-7.5 8h-185c-4.1 0-7.5-3.6-7.5-8v-48c0-4.4 3.4-8 7.5-8h185c4.1 0 7.5 3.6 7.5 8v48z" />
                  </svg>
                  <div className="  py-2" >
                    <div className="text-3xl pb-12">Web Development</div>
                    <p className="text-white text-base mt-12 pt-20" >
                      Building responsive and interactive applications with React, offering users a seamless web experience across all devices.
                    </p>
                  </div>
                  <div className=" py-2">
                    <span className="inline-block border border-white rounded-full px-3 py-1 text-xs font-semibold text-white mr-2">React</span>
                    <span className="inline-block border border-white rounded-full px-3 py-1 text-xs font-semibold text-white mr-2">NextJS</span>
                    <span className="inline-block border border-white rounded-full px-3 py-1 text-xs font-semibold text-white mr-2">Vercel</span>
                    <span className="inline-block border border-white rounded-full px-3 py-1 text-xs font-semibold text-white mr-2">MongoDB</span>
                    <span className="inline-block border border-white rounded-full px-3 py-1 text-xs font-semibold text-white mr-2">Tailwind</span>
                  </div>
                </div>

              </div>
              <br />

              <Btn><a href="#explorework">
                <span className='p-2 uppercase'>explore work </span>
              </a>
              </Btn>
            </div>

            <div>
              <div className="h-full flex px-3 py-5 bg-neutral-700 rounded-lg ">
                <div className="max-w-sm rounded overflow-hidden ">
                  <svg
                    viewBox="0 0 1024 1024"
                    fill="currentColor"
                    height="2em"
                    width="2em"

                  >
                    <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM513.1 518.1l-192 161c-5.2 4.4-13.1.7-13.1-6.1v-62.7c0-2.3 1.1-4.6 2.9-6.1L420.7 512l-109.8-92.2a7.63 7.63 0 01-2.9-6.1V351c0-6.8 7.9-10.5 13.1-6.1l192 160.9c3.9 3.2 3.9 9.1 0 12.3zM716 673c0 4.4-3.4 8-7.5 8h-185c-4.1 0-7.5-3.6-7.5-8v-48c0-4.4 3.4-8 7.5-8h185c4.1 0 7.5 3.6 7.5 8v48z" />
                  </svg>
                  <div className="  py-2">
                    <div className="text-3xl pb-12">UI Design</div>
                    <p className="text-white text-base mt-12 pt-20">
                      Creating dynamic interfaces with key features, including user-friendly interactions, animations, and intuitive design, that together cultivate a vibrant and engaging user experience.
                    </p>
                  </div>
                  <div className=" py-2">
                    <span className="inline-block border border-white rounded-full px-3 py-1 text-xs font-semibold text-white mr-2">Figma</span>
                    <span className="inline-block border border-white rounded-full px-3 py-1 text-xs font-semibold text-white mr-2">Framer</span>
                    <span className="inline-block border border-white rounded-full px-3 py-1 text-xs font-semibold text-white mr-2">GSAP</span>
                    <span className="inline-block border border-white rounded-full px-3 py-1 text-xs font-semibold text-white mr-2">Shopify</span>
                    <span className="inline-block border border-white rounded-full px-3 py-1 text-xs font-semibold text-white mr-2">Wordpress</span>
                    <span className="inline-block border border-white rounded-full px-3 py-1 text-xs font-semibold text-white mr-2">Webflow</span>
                  </div>

                </div>
              </div>

            </div>

          </div>

        </Reveal>
      </section>
      <br /><br /><br />
      <div className='' id="explorework">
        <WorkCards />
        <section className=' second-marquee uppercase' >
          <Marquee>
            <span>Explore Projects Explore Projects Explore Projects Explore Projects Explore Projects Explore Projects Explore Projects Explore Projects Explore Projects Explore Projects Explore Work</span>

          </Marquee>
        </section>
      </div>


      <section className='mp4-wrapper'>

        <div className='parallax text-center' >

        </div>

        <img className="mq-parallax" src="https://github.com/R-LaRoi/st-studio-app/assets/114012059/11968111-d19c-4f65-b09d-eefb362fbfad" alt="" />

        <ul className=' wk-list mt-12'>
          <Link href="/Menu/Work" >
            <li className='li-list'>
              <span className='number'>
                01.
              </span>
              <span>
                PROJECTS
              </span>
            </li>
          </Link>
          <Link href="/Menu/Connect" >
            <li className='li-list'>
              <span className='number'>
                02.
              </span>
              <span>
                CONTACT
              </span>
            </li>
          </Link>
          <li className='li-list'><span className='number'>03.</span><span><a href="https://www.rachelstroy.com/" target="_blank"> studio_ </a></span></li>
        </ul>

        <section className='mt-12'>

          <Contact />
        </section>

      </section>


    </section>




  );
}


// https://github.com/R-LaRoi/st-studio-app/assets/114012059/112092a5-1ff3-4c1b-af28-bc5374adf0d8