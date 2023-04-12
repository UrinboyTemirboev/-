import React,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom'


export default function Nav() {
const [matches, setMatches] = useState(
  window.matchMedia("(max-width: 768px)").matches
);

useEffect(() => {
  window
    .matchMedia("(max-width: 768px)")
    .addEventListener("change", (e) => setMatches(e.matches));
}, []);
  return (
    <>
      {!matches&&
        <div className="header">
          <div className="header-nav">
            <h3>ОНЛАЙН ЗАКАЗ ЛЕКАРСТВ - КУПИ НЕ ВЫХОДЯ ИЗ ДОМА </h3>
            <div className="header-links">
              <ul>
                <Link to="/" className="link">
                  {" "}
                  Главная
                </Link>
                <Link to="/drugStore" className="link">
                  Аптека
                </Link>
                <Link to="/faq" className="link">
                  FAQ
                </Link>
                <Link to="/review" className="link">
                  Отзывы
                </Link>
              </ul>
            </div>
          </div>
        </div>
      }
      



       {matches&& (<div className="headerforTable">
          <div className="header-nav1">
            <h3>ОНЛАЙН ЗАКАЗ ЛЕКАРСТВ - КУПИ НЕ ВЫХОДЯ ИЗ ДОМА </h3>
            </div>
            </div>)}

    
    </>
  );
}
