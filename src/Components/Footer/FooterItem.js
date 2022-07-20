import {
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { BiPhoneIncoming } from "react-icons/bi";

const FooterItem = [
  {
    title: "",
    url: "/",
    cName: "footer-link",
    icon: <AiOutlineInstagram />,
  },

  {
    title: "",
    url: "product",
    cName: "footer-link",
    icon: <AiOutlineLinkedin />,
  },
  {
    title: "",
    url: "about",
    cName: "footer-link",
    icon: <BiPhoneIncoming />,
  },
  {
    title: "",
    url: "singup",
    cName: "footer-link",
    icon: <AiOutlineWhatsApp />,
  },
];

export default FooterItem;
