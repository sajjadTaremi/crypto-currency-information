import Axios from "axios";
import { useState, useEffect } from "react";
import Coin from "../Pages/Coin";
import "./Styles/CoinPage.css";
import { FaSearch } from "react-icons/fa";
import Header from "../Components/Header/Header";

function Home() {
  const [coins, setCoins] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    refreshPage();
  }, []);

  const filterCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const refreshPage = () => {
    setIsLoading(true);
    Axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    ).then((response) => {
      console.log(response.data);
      setIsLoading(false);
      setCoins(response.data);
    });
  };

  return (
    <div className="App">
      <Header />
      <div className="headerContainer">
        <h2>قیمت لحظه ای بازار</h2>
        {/* <div className="buttonContainer">
          <input placeholder="جستجو..." type="text" onChange={handleSearch} />
          <h3 className="search-icon">
            <FaSearch />
          </h3>
        </div> */}
      </div>
        <div className="coinContainer">
          <div className="coinContainer-Header">
            <div>
              <div className="coinContainer-Header_list">
                <button className="coinContainer-Header_btn">اصلی</button>
                <button className="coinContainer-Header_btn">
                  مثبت ترین ها
                </button>
                <button className="coinContainer-Header_btn">
                  منفی ترین ها
                </button>
              </div>
            </div>
          </div>
          <div className="buttonContainer">
            <input placeholder="جستجو..." type="text" onChange={handleSearch} />
            <h3 className="search-icon">
              <FaSearch />
            </h3>
          </div>
        <div>
          <div className="coinCutter"></div>
        </div>
        {isLoading && <h1 className="loadingMssg">....کمی صبر کنید</h1>}
        {filterCoins.splice(0, 6).map((coins) => {
          return (
            <div>
              <Coin
                id={coins.id}
                icon={coins.image}
                coinName={coins.name}
                coinSymbol={coins.symbol}
                price={coins.current_price}
                marketCap={coins.market_cap}
                priceChange={coins.price_change_percentage_24h}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
