import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import ContainerInto from "../components/ContainerInto";
import introContainer from "../data/containerIntro.json"
import "swiper/css";
import "swiper/css/pagination";

export default function Home() {
  const {buroconteiner} =introContainer
  const {wohncontainers} =introContainer
  const {sanitacontainers} =introContainer
  const {flatpackcontainers} =introContainer
  const {specialeditatons} =introContainer
  
  return (
    <>
      <ContainerInto data={buroconteiner}/>
      <ContainerInto data={wohncontainers}/>
      <ContainerInto data={sanitacontainers}/>
      <ContainerInto data={flatpackcontainers}/>
      <ContainerInto data={specialeditatons}/>
    </>
  );
}
