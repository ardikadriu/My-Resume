import Basket from "@/public/Projects/basketball-web1.png";
import Nikeshoes from "@/public/Projects/nike-shoes.png";
import Watches from "@/public/Projects/Watches.png";
import Signin from "@/public/Projects/simple sign in.png";
import Glases from "@/public/Projects/Glases.png";
import Tomato from "@/public/Projects/Tomato.png";
import TaxiWeb from "@/public/Projects-mobile/taxi-cover.png";
import SimpleLogin from "@/public/Projects-mobile/web-phones.png";
import Renthouses from "@/public/Projects-mobile/rent.png";
import TikTok from "@/public/Projects-mobile/tik tok.png";
import Facebook from "@/public/Projects-mobile/facebook.png";
import { StaticImageData } from "next/image";

export interface ProjectData {
  image: StaticImageData;
  figmaLink: string;
  vercelLink: string;
  githubLink: string;
}

interface ProjectList extends ProjectData {
  devices: "mobile" | "desktop" | "both";
}
export const projectList: ProjectList[] = [
  {
    image: Basket,
    figmaLink:
      "https://www.figma.com/file/Friex6UklMP2wriHhPTR27/Sport-Website-(Community)?type=design&mode=design",
    vercelLink: "https://basketball-web-ruby.vercel.app/",
    githubLink: "https://github.com/ardikadriu/Basketball-web",
    devices: "both",
  },
  {
    image: Nikeshoes,
    figmaLink:
      "https://www.figma.com/file/1qzy1idS9BgNHHpIzD8EUM/nike-shoes-logo-(Community)?mode=dev",
    vercelLink: "https://nike-layout.vercel.app/",
    githubLink: "https://github.com/ardikadriu/nike-layout",
    devices: "desktop",
  },

  {
    image: Watches,
    figmaLink:
      "https://www.figma.com/file/Gyyca3XdpQPQnkhXKqnXqN/Smart-Watch-eCommerce-Website-(Community)?node-id=0%3A1&mode=dev",
    vercelLink: "https://watches-iota.vercel.app/",
    githubLink: "https://github.com/ardikadriu/Watches",
    devices: "desktop",
  },

  {
    image: Signin,
    figmaLink:
      "https://www.figma.com/file/5UAzszP1yzinVOBxCFuoWk/Sign-In-Page-Design-(Community)?mode=dev",
    vercelLink: "https://sign-in-design.vercel.app/",
    githubLink: "https://github.com/ardikadriu/Sign-in-Design",
    devices: "desktop",
  },

  {
    image: Glases,
    figmaLink:
      "https://www.figma.com/file/zYTjfBalkGa7hrLXuQHYgP/Landing-Page-001-(Community)?type=design&node-id=0-1&mode=design&t=d5VRbyWHsfcIP2mR-0",
    vercelLink: "https://sell-web-vert.vercel.app/",
    githubLink: "https://github.com/ardikadriu/Sell-web",
    devices: "desktop",
  },

  {
    image: Tomato,
    figmaLink:
      "https://www.figma.com/file/eIY6VFPmcUUoOQ2EsFLQEC/World-Peas-Tomato-(Community)?type=design&node-id=1-2&mode=design&t=EuiRoxUBihfGcNkI-0",
    vercelLink: "https://tomato-lime.vercel.app/",
    githubLink: "https://github.com/ardikadriu/Tomato",
    devices: "desktop",
  },

  {
    image: TaxiWeb,
    figmaLink:
      "https://www.figma.com/file/Jd1A4gexkxCjeXsP72bo1t/Taxi-App-(Community)?node-id=0%3A1&mode=design",
    vercelLink: "https://taxiapp-mobile.vercel.app/",
    githubLink: "https://github.com/ardikadriu/Taxiapp-mobile",
    devices: "mobile",
  },

  {
    image: SimpleLogin,
    figmaLink:
      "https://www.figma.com/file/esbLh7WF0FlnOVOvJ6dNi2/figma-mobile-application-simple-design-(Community)?mode=dev",
    vercelLink: "https://login-design2.vercel.app/",
    githubLink: "https://login-design2.vercel.app/",
    devices: "mobile",
  },

  {
    image: Renthouses,
    figmaLink:
      "https://www.figma.com/file/1NRkJjfai8AhGC1zOqjkJw/Rent-House-App-(Community)?type=design&node-id=0-1&mode=design&t=f1LFtT0BjPeD01d9-0",
    vercelLink: "https://rent-house-xi.vercel.app/",
    githubLink: "https://github.com/ardikadriu/Rent-house",
    devices: "mobile",
  },

  {
    image: TikTok,
    figmaLink: "",
    vercelLink: "https://tiktok-figma.vercel.app/",
    githubLink: "https://github.com/ardikadriu/Tiktok-figma",
    devices: "mobile",
  },

  {
    image: Facebook,
    figmaLink:
      "https://www.figma.com/file/WqruY50EPcYos61G4sNSo1/facebook-page-(Community)?type=design&node-id=0-1&mode=design&t=aYBUZyjAqdqmx0RB-0",
    vercelLink: "https://ipohne13-facebook.vercel.app/",
    githubLink: "https://github.com/ardikadriu/Ipohne13-Facebook",
    devices: "mobile",
  },
];
