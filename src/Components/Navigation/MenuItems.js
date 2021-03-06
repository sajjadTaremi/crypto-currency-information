import { AiOutlineHome, AiOutlineSliders, AiOutlineFund } from "react-icons/ai";
import { BiPhoneIncoming } from "react-icons/bi";
const menuItems = [
  {
    title: "صفحه اصلی",
    url: "/",
    cName: "nav-links",
    icon: <AiOutlineHome />,
  },
  {
    title: "وبلاگ",
    url: "cart",
    cName: "nav-links",
    icon: <AiOutlineFund />,
  },
  {
    title: "تحلیل ها",
    url: "product",
    cName: "nav-links",
    icon: <AiOutlineSliders />,
  },
  {
    title: "تماس با من",
    url: "about",
    cName: "nav-links",
    icon: <BiPhoneIncoming />,
  },
  {
    title: "ثبت نام / ورود",
    url: "singup",
    cName: "nav-links-mobile",
  },
];

export default menuItems;
