// import images
import Logo from "../src/img/header/logo.svg";
import GalleryImg1 from "../src/img/gallery/1.png";
import GalleryImg2 from "../src/img/gallery/2.png";
import GalleryImg3 from "../src/img/gallery/3.png";
import GalleryImg4 from "../src/img/gallery/4.png";
import GalleryImg5 from "../src/img/gallery/5.png";
import GalleryImg6 from "../src/img/gallery/6.png";
import GalleryImg7 from "../src/img/gallery/7.png";
import GalleryImg8 from "../src/img/gallery/8.png";
import QuoteImg from "../src/img/testimonial/quote.svg";
// import icons
import { GrFacebookOption } from "react-icons/gr";
import { IoMdArrowForward } from "react-icons/io";
import { FiSend } from "react-icons/fi";
import { FaPlay, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { IoLogoGoogleplus, IoIosCart } from "react-icons/io";

export const headerData = {
  logo: Logo,
};

export const navData = {
  items: [
    { href: "/", name: "" },
    { href: "/", name: "Service" },
    { href: "/", name: "Gsm" },
    { href: "/", name: "Buzau" },
    { href: "/", name: "KM 0" },
    { href: "/", name: "" },
  ],
};

export const socialData = [
  { href: "/", icon: <GrFacebookOption /> },
  {
    href: "/",
    icon: <IoIosCart />,
  },
  {
    href: "https://www.google.com/maps/@45.1512746,26.8174033,3a,75y,262.55h,88.85t/data=!3m6!1e1!3m4!1s-R7K2bb1WbFn8MRi_ihdzw!2e0!7i16384!8i8192",
    icon: <IoLogoGoogleplus />,
  },
];

export const heroData = {
  title: "Magazin GSM Buzau Km 0",
  subtitle: "Vânzări, Cumpărări, Reparații, Reîncarcari cartele SIM",
  btnText: "Accesorii",
  btnIcon: <IoMdArrowForward />,
};

export const aboutData = {
  title: "Servicii GSM",
  subtitle1:
    "Decodări și Deblocări. Ai uitat codul telefonului? Ai uitat contul de Google, sau codul de brand? Ai un telefon din altă țară și nu funcționează? Te putem ajuta noi! Prețurile diferă în funcție de model, brand, operațiune, țara/rețeaua de unde provine și complexitatea intervenției. Dispunem de echipamente de ultima generație si personal specializat ce vă poate ajuta intr-un timp scurt și eficient la aprox. 98% din telefoanele blocate / codate de pe piață. ",
  subtitle2:
    "Vindem, Cumpărăm și Reparăm. Ne ocupăm cu tot ce ține de repararea, cumpărarea și vânzarea de electronice, multimedia și gadgeturi incluzând telefoane, tablete, smart watches si multe altele. De asemenea puteți achiziționa accesorii pentru telefonul, tableta sau laptopul dumneavoastră la cele mai bune prețuri. Pe lângă toate acestea mai efectuăm și reîncărcări de cartele SIM în: Orange, Vodafone și Telekom.",
  btnText: "",
  btnIcon: <IoMdArrowForward />,
};

export const galleryData = {
  title: "Galerie",
  btnText: "Mai multe pot fi văzute in service",
  btnIcon: <IoMdArrowForward />,
  images: [
    {
      src: GalleryImg1,
      original: GalleryImg1,
      width: 465,
      height: 412,
    },
    {
      src: GalleryImg2,
      original: GalleryImg2,
      width: 465,
      height: 540,
    },
    {
      src: GalleryImg3,
      original: GalleryImg3,
      width: 465,
      height: 412,
    },
    {
      src: GalleryImg4,
      original: GalleryImg4,
      width: 465,
      height: 540,
    },
    {
      src: GalleryImg5,
      original: GalleryImg5,
      width: 465,
      height: 540,
    },
    {
      src: GalleryImg6,
      original: GalleryImg6,
      width: 464,
      height: 412,
    },
    {
      src: GalleryImg7,
      original: GalleryImg7,
      width: 465,
      height: 540,
    },
    {
      src: GalleryImg8,
      original: GalleryImg8,
      width: 465,
      height: 412,
    },
  ],
};

export const interviewData = {
  title: "",
  btnText: "Videoclip de prezentare",
  btnIcon: <FaPlay />,
};

export const testimonialData = [
  {
    quoteImg: QuoteImg,
    message: "“Calitate Înalta, Prețuri Accesibile și Reparații în Timp Util”",
    name: "",
    occupation: "",
  },
  {
    quoteImg: QuoteImg,
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam culpa asperiores officia natus dignissimos autem possimus molestias aperiam?",
    name: "Douglas Hane",
    occupation: "Tattoo Artist",
  },
];

export const contactData = {
  title: "Contact",
  info: [
    {
      title: "Luni până Vineri",
      subtitle: "09:00 - 17:00",
      address: {
        icon: <FaMapMarkerAlt />,
        name: "Strada Unirii bloc 10b parter",
      },
      phone: {
        icon: <FaPhoneAlt />,
        number: "0726 204 562",
      },
      email: {
        icon: <FaEnvelope />,
        address: "cotetmarius2@yahoo.com",
      },
      link: "",
    },
    {
      title: "Sambăta si Duminică",
      subtitle: "Sambăta: 09:00 - 13:00 Duminică: Închis",
      address: {
        icon: <FaMapMarkerAlt />,
        name: "Strada Unirii bloc 10b parter",
      },
      phone: {
        icon: <FaPhoneAlt />,
        number: "0726 204 562",
      },
      email: {
        icon: <FaEnvelope />,
        address: "cotetmarius2@yahoo.com",
      },
      link: "",
    },
  ],
  form: {
    name: "Nume",
    email: "Prenume",
    message: "Scrieți-ne un mesaj aici",
    btnText: "Trimiteţi",
  },
};

export const footerData = {
  about: {
    title: "",
    subtitle: "",
    address: {
      icon: <FaMapMarkerAlt />,
      name: "Strada Unirii bloc 10b parter",
    },
    phone: {
      icon: <FaPhoneAlt />,
      number: "0726 204 562",
    },
    email: {
      icon: <FaEnvelope />,
      address: "cotetmarius2@yahoo.com",
    },
  },
  links: {
    title: "",
    items: [
      { href: "/", name: "" },
      { href: "/", name: "" },
      { href: "/", name: "" },
      { href: "/", name: "" },
    ],
  },
  program: {
    title: "",
    items: [{ name: "" }, { name: "" }, { name: "" }, { name: "" }],
  },
  newsletter: {
    title: "Înapoi pe pagina principală",
    subtitle: "",
    form: {
      placeholder: "",
      icon: <FiSend />,
    },
  },
};
