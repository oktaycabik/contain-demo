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
      <ContainerInto content={"Wo Sie auch sind, Ihr Bürocontainer kommt immer mit!"} src={"https://www.containhaus.de/assets/img/FrontPage/BuroMainpageUpdate.webp"} />
      <ContainerInto content={"mehr Raum, mehr Komfort, mehr Freiheit mit XL 3x7 Container"} src={"https://www.containhaus.de/assets/img/FrontPage/XLMainpageUpdate.webp"} />
      <ContainerInto content={"Containhaus Sanitärcontainer, der Retter des Tages"} src={"https://www.containhaus.de/assets/img/FrontPage/SanitaMainpageUpdate.webp"} />
      <ContainerInto content={"Flat Pack Bau es Selbst! Sparen & Spass Haben"} src={"https://www.containhaus.de/assets/img/FrontPage/FlatpackMainPage.webp"} />
      <ContainerInto content={"Mit Containhaus werden Träume wahr"} src={"https://www.containhaus.de/assets/img/FrontPage/SpecialMainpageUpdate.webp"} />
    </>
  );
}
