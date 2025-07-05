import headphonesImg from "./assets/Headphones.jpg";
import tshirtImg from "./assets/White-T.webp";
import backpackImg from "./assets/backpack.jpg";
import desklampImg from "./assets/desklamp.webp";
import walletImg from "./assets/LeatherWallet.webp";
import chargerImg from "./assets/portablecharger.webp";
import shoesImg from "./assets/Runningshoes.avif";
import smartwatchImg from "./assets/smartwatch.png";
import speakerImg from "./assets/speaker.webp";
import steelwaterImg from "./assets/Steelwater.jpg";
import sunglassesImg from "./assets/sungalsses.jpg";
import travelmugImg from "./assets/travelmug.webp";
import yogamatImg from "./assets/yogamat.webp";

const products = [
  {
    name: "Wireless Bluetooth Headphones",
    price: 89,
    category: "Electronics",
    brand: "SoundTech",
    freeShipping: true,
    image: headphonesImg,
  },
  {
    name: "Organic Cotton T-Shirt",
    price: 25,
    category: "Clothing",
    brand: "EcoWear",
    freeShipping: true,
    image: tshirtImg,
  },
  {
    name: "Leather Wallet",
    price: 45,
    category: "Accessories",
    brand: "CraftLeather",
    freeShipping: false,
    image: walletImg,
  },
  {
    name: "Running Shoes",
    price: 99,
    category: "Sports",
    brand: "RunFast",
    freeShipping: true,
    image: shoesImg,
  },
  {
    name: "Bluetooth Speaker",
    price: 59,
    category: "Electronics",
    brand: "SoundTech",
    freeShipping: false,
    image: speakerImg,
  },
  {
    name: "Steel Water Bottle",
    price: 35,
    category: "Home & Garden",
    brand: "HydroLife",
    freeShipping: true,
    image: steelwaterImg,
  },
  {
    name: "Smartwatch",
    price: 129,
    category: "Electronics",
    brand: "TechEase",
    freeShipping: false,
    image: smartwatchImg,
  },
  {
    name: "Backpack",
    price: 60,
    category: "Accessories",
    brand: "UrbanStyle",
    freeShipping: true,
    image: backpackImg,
  },
  {
    name: "Portable Charger",
    price: 49,
    category: "Electronics",
    brand: "ClickTech",
    freeShipping: false,
    image: chargerImg,
  },
  {
    name: "Desk Lamp",
    price: 29,
    category: "Home & Garden",
    brand: "BrewMaster",
    freeShipping: true,
    image: desklampImg,
  },
  {
    name: "Travel Mug",
    price: 20,
    category: "Home & Garden",
    brand: "BrewMaster",
    freeShipping: false,
    image: travelmugImg,
  },
  {
    name: "Yoga Mat",
    price: 40,
    category: "Sports",
    brand: "ZenFit",
    freeShipping: true,
    image: yogamatImg,
  },
  {
    name: "Sunglasses",
    price: 35,
    category: "Accessories",
    brand: "UrbanStyle",
    freeShipping: false,
    image: sunglassesImg,
  },
];

export default products;
