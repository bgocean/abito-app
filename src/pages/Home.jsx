import { useOutlet, useOutletContext } from "react-router-dom";
import { Card } from "../components/Card/Card";


export const Home = () => {
  const {products} = useOutletContext();
  
  return (
    <section className="content">
          <div className="container">
            <div className="content-box">
              <div className="content-main">
                <h2 className="content-main__title">Рекомендации для вас</h2>
                <div className="content-main__list">
                  {products.map((card) => (
                    <Card
                      key={card.id}
                      id={card.id}
                      img={card.img}
                      title={card.title}
                      price={card.price}
                      desc={card.desc}
                      date={card.date}
                    />
                  ))}
                </div>
              </div>
              <div className="content-side">
                <h3 className="content-side__title">Сервисы и услуги</h3>
                <div className="content-side__box">
                  <div className="content-side__list">
                    <div className="content-side__list-item">
                      <img
                        className="content-side__list-item--img"
                        src="/image/side-info-1.svg"
                        alt=""
                      />
                      <h5 className="content-side__list-item--title">
                        Доставка
                      </h5>
                      <p className="content-side__list-item--text">
                        Проверка при получении и возможность бесплатно вернуть
                        товар
                      </p>
                    </div>
                    <div className="content-side__list-item">
                      <img
                        className="content-side__list-item--img"
                        src="/image/side-info-2.svg"
                        alt=""
                      />
                      <h5 className="content-side__list-item--title">
                        Автотека
                      </h5>
                      <p className="content-side__list-item--text">
                        Отчёт с историей авто: пробег, владельцы, сведения о
                        залоге, ДТП и ремонтах
                      </p>
                    </div>
                    <div className="content-side__list-item">
                      <img
                        className="content-side__list-item--img"
                        src="/image/side-info-3.svg"
                        alt=""
                      />
                      <h5 className="content-side__list-item--title">
                        Онлайн-бронирование жилья
                      </h5>
                      <p className="content-side__list-item--text">
                        Посуточная аренда квартир и домов: большой выбор
                        вариантов для поездок по городам
                      </p>
                    </div>
                  </div>
                  <div className="content-side__footer">
                    <p className="content-side__footer--item">
                      © ООО «Абито», 2011–2021
                    </p>
                    <a className="content-side__footer--item" href="#!">
                      Политика конфиденциальности
                    </a>
                    <a className="content-side__footer--item" href="#!">
                      Обработка данных
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  );
};
