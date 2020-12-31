import { v4 as uuidv4 } from "uuid";

const Util = () => {
  return [
    {
      name: "If The World Was Ending",
      cover:
        "./static/img/if-the-world-was-ending-jp-saxe-ft-julia-michaels.jpg",
      artist: "JP Saxe ft. Julia Michales",
      audio:
        "./static/audio/if-the-world-was-ending-jp-saxe-ft-julia-michaels.mp3",
      id: uuidv4(),
      active: true,
    },
    {
      name: "One Last Time",
      cover: "./static/img/one-last-time-ariana-grande.jpg",
      artist: "Ariana Grande",
      audio: "./static/audio/one-last-time-ariana-grande.mp3",
      id: uuidv4(),
      active: false,
    },
    {
      name: "Mirrors",
      cover: "./static/img/mirrors-justin-timberlake.jpg",
      artist: "Justin Timberlake",
      audio: "./static/audio/mirrors-justin-timberlake.mp3",
      id: uuidv4(),
      active: false,
    },
    {
      name: "Dusk Till Dawn",
      cover: "./static/img/dusk-till-dawn-zayn-ft.sia.jpg",
      artist: "Zayn ft. Sia",
      audio: "./static/audio/dusk-till-dawn-zayn-ft.sia.mp3",
      id: uuidv4(),
      active: false,
    },
    {
      name: "Rehab",
      cover: "./static/img/rehab-rihanna-ft-justin-timberlake.jpg",
      artist: "Rihanna ft. Justin Timberlake",
      audio: "./static/audio/rehab-rihanna-ft-justin-timberlake.mp3",
      id: uuidv4(),
      active: false,
    },
    {
      name: "Tattooed Heart",
      cover: "./static/img/tattooed-heart-ariana-grande.jpg",
      artist: "Ariana Grande",
      audio: "./static/audio/tattooed-heart-ariana-grande.mp3",
      id: uuidv4(),
      active: false,
    },
    {
      name: "Midnight Sky",
      cover: "./static/img/midnight-sky-miley-cyrus.jpg",
      artist: "Miley Cyrus",
      audio: "./static/audio/midnight-sky-miley-cyrus.mp3",
      id: uuidv4(),
      active: false,
    },
    {
      name: "Fever",
      cover: "./static/img/fever-dua-lipa-ft-angele.jpg",
      artist: "Dua Lipa ft. Angele",
      audio: "./static/audio/fever-dua-lipa-ft-angele.mp3",
      id: uuidv4(),
      active: false,
    },
    {
      name: "Just A Little Bit Of Your Heart",
      cover: "./static/img/just-a-little-bit-of-your-heart-ariana-grande.jpg",
      artist: "Ariana Grande",
      audio: "./static/audio/just-a-little-bit-of-your-heart-ariana-grande.mp3",
      id: uuidv4(),
      active: false,
    },
  ];
};

export default Util;
