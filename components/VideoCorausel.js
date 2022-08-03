import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Image from "next/image";
export default function VideoCorausel() {
  React.useEffect(() => {
    console.clear();
  }, []);
  const [isOpen, setOpen] = React.useState(false);
  const [src, setSrc] = useState("wDGCrEUPuwM")
  const mymodal = React.useRef();
  const mymodal1 = React.useRef();
  const openmodal = () => {
    mymodal.current.focus();
   
  };
  const openmodal1 = () => {
    mymodal1.current.focus();
  };
  return (
    <>
      <div className="container mb-5 mt-5">
        {typeof window !== "undefined" && (
          <ModalVideo
            ref={mymodal}
            autoplay
            isOpen={isOpen}
            videoId={src}
            onClose={() => setOpen(false)}
          />
        )}
        {typeof window !== "undefined" && (
          <ModalVideo
            ref={mymodal1}
            autoplay
            isOpen={isOpen}
            videoId="Pe0Ce1WtnUM"
            onClose={() => setOpen(false)}
          />
        )}
        <Splide
          classes={{
            pagination: 'splide__pagvideo',
            prev: 'ArowVideoPrev',
            next: 'ArowVideoNext',

          }}
          options={{
            rewind: true,
            type: 'loop',
            gap: '1rem',
            arrows: false,
            perPage: 1,
            lazyLoad: 'nearby',
            height: '500px',
            padding: '20%',
            perMove: 1,
            focus: 'center',
            autoplay: 'playing',
            
          }}
          
          aria-label="My Favorite Images"
        >
          <SplideSlide >

            <div className="container-fluid pl-0 pr-0">
              <div
                className="video-wrapper section-padding bg-img parallaxie valign"

                data-overlay-dark="4"
              >
                <Image
                  className="VideoDes"
                  src="/assets/img/Youtubekapak2/1.jpg"
                  layout="fill"
                />
                <Image
                  className="VideoMob"
                  src="/assets/img/Youtubekapak2/Mobil/2.webp"
                  layout="fill"
                />
                <div className="full-width text-center">
                  <a
                    className="vid"
                    onClick={(e) => {
                      openmodal
                      e.preventDefault();
                      setOpen(true);
                     
                    }}
                    
                    href={`https://www.youtube.com/watch?v=${src}`}
                  >
                    <div className="vid-butn">
                      <span className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className="bi bi-play-circle" viewBox="0 0 16 16">
                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                          <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z" />
                        </svg>
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide  >
            <div className="container-fluid pl-0 pr-0">
              <div
                className="video-wrapper section-padding bg-img parallaxie valign"

                data-overlay-dark="4"
              >
                <Image
                  className="VideoDes"
                  src="/assets/img/Youtubekapak2/2.jpg"
                  layout="fill"
                />
                <Image
                  className="VideoMob"
                  src="/assets/img/Youtubekapak2/Mobil/4.webp"
                  layout="fill"
                />
                <div className="full-width text-center">
                  <a
                    className="vid"
                    onClick={(e) => {
                      openmodal1
                      e.preventDefault();
                      setOpen(true);
                    }}
                    href="https://youtu.be/Pe0Ce1WtnUM"
                  >
                    <div className="vid-butn">
                      <span className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className="bi bi-play-circle" viewBox="0 0 16 16">
                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                          <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z" />
                        </svg>
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </div>

          </SplideSlide>
          <SplideSlide >
            <div className="container-fluid pl-0 pr-0">
              <div
                className="video-wrapper section-padding bg-img parallaxie valign"

                data-overlay-dark="4"
              >
                <Image
                  className="VideoDes"
                  src="/assets/img/Youtubekapak2/3.jpg"
                  layout="fill"
                />
                <Image
                  className="VideoMob"
                  src="/assets/img/Youtubekapak2/Mobil/3.webp"
                  layout="fill"
                />
                <div className="full-width text-center">
                  <a
                    className="vid"
                    onClick={(e) => {
                      e.preventDefault();
                      setOpen(true);
                    }}
                    href="https://www.youtube.com/embed/As8XIPb9-NA"
                  >
                    <div className="vid-butn">
                      <span className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className="bi bi-play-circle" viewBox="0 0 16 16">
                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                          <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z" />
                        </svg>
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide >
            <div className="container-fluid pl-0 pr-0">
              <div
                className="video-wrapper section-padding bg-img parallaxie valign"
                data-overlay-dark="4"
              >
                <Image
                  className="VideoDes"
                  src="/assets/img/Youtubekapak2/4.jpg"
                  layout="fill"
                />
                <Image
                  className="VideoMob"
                  src="/assets/img/Youtubekapak2/Mobil/1.webp"
                  layout="fill"
                />
                <div className="full-width text-center">
                  <a
                    className="vid"
                    onClick={(e) => {
                      e.preventDefault();
                      setOpen(true);
                    }}
                    href="https://www.youtube.com/embed/As8XIPb9-NA"
                  >
                    <div className="vid-butn">
                      <span className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className="bi bi-play-circle" viewBox="0 0 16 16">
                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                          <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z" />
                        </svg>
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide >
            <div className="container-fluid pl-0 pr-0">
              <div
                className="video-wrapper section-padding bg-img parallaxie valign"

                data-overlay-dark="4"
              >
                <Image
                  className="VideoDes"
                  src="/assets/img/Youtubekapak2/5.jpg"
                  layout="fill"
                />
                <Image
                  className="VideoMob"
                  src="/assets/img/Youtubekapak2/Mobil/5.webp"
                  layout="fill"
                />
                <div className="full-width text-center">
                  <a
                    className="vid"

                    onClick={(e) => {
                      e.preventDefault();
                      setOpen(true);
                    }}
                    href="https://www.youtube.com/embed/As8XIPb9-NA"
                  >
                    <div className="vid-butn">
                      <span className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className="bi bi-play-circle" viewBox="0 0 16 16">
                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                          <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z" />
                        </svg>
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide >
            <div className="container-fluid pl-0 pr-0">
              <div
                className="video-wrapper section-padding bg-img parallaxie valign"

                data-overlay-dark="4"
              >
                <Image
                  className="VideoDes"
                  src="/assets/img/Youtubekapak2/6.jpg"
                  layout="fill"
                />
                <Image
                  className="VideoMob"
                  src="/assets/img/Youtubekapak2/Mobil/2.webp"
                  layout="fill"
                />
                <div className="full-width text-center">

                  <a
                    className="vid"
                    onClick={(e) => {
                      e.preventDefault();
                      setOpen(true);
                    }}
                    href="https://www.youtube.com/embed/3JSit_voEqc"
                  >
                    <div className="vid-butn">
                      <span className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className="bi bi-play-circle" viewBox="0 0 16 16">
                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                          <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z" />
                        </svg>
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </div>


          </SplideSlide>
          <SplideSlide >
            <div className="container-fluid pl-0 pr-0">
              <div
                className="video-wrapper section-padding bg-img parallaxie valign"

                data-overlay-dark="4"
              >
                <Image
                  src="/assets/img/Youtubekapak2/7.jpg"
                  layout="fill"
                />
                <Image
                  className="VideoMob"
                  src="/assets/img/Youtubekapak2/Mobil/6.webp"
                  layout="fill"
                />
                <div className="full-width text-center">

                  <a
                    className="vid"

                    onClick={(e) => {

                      e.preventDefault();
                      setOpen(true);
                    }}
                    href="https://www.youtube.com/embed/jDHpSpilFuU"
                  >
                    <div className="vid-butn">
                      <span className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className="bi bi-play-circle" viewBox="0 0 16 16">
                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                          <path d="M6.271  5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z" />
                        </svg>
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </SplideSlide>
        </Splide>
      </div>
    </>
  );
};