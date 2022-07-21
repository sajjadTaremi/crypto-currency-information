import "../Header/Header.css";
import Backgroundimg from "../../Images/Crypto-Header.png";
const Header = () => {
  return (
    <div>
      <div className="Header">
        <img
          className="Header-img"
          src={Backgroundimg}
          height="400px"
          alt="سایت اطلاعات ارزهای دیجیتال"
        ></img>
      </div>
      <div className="main">
        <h1 className="main-txt">بزرگترین سایت اطلاعات ارزهای دیجیتال</h1>
        <strong className="strong-txt">
          به معتبرترین بازار رمز ارز ایران با محیطی امن و حرفه‌ای با بهترین و
          سریع ترین پشتیبانی خوش آمدید.
        </strong>
      </div>
    </div>
  );
};

export default Header;
