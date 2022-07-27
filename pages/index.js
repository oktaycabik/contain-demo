import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import ContainerInto from "../components/ContainerInto";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper";
import { useRef } from "react";
export default function Home() {
  let stop = useRef()

  return (
    <>
      <ContainerInto />
      <ContainerInto />
      <ContainerInto />
      
    </>
  );
}
