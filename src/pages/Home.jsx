import { Header } from "../components/Header/Header";

export const Home = () => {
  return (
    <>
      <Header />

      <main>
        <section className="search">
          <div className="container">
            <div className="search-box">
              <input type="text" placeholder="Поиск по объявлениям" />
              <button className="btn btn-primary search-btn">
                <img
                  className="search-btn__icon"
                  src="/image/search.svg"
                  alt="search"
                />
                <span className="search-btn__text">Найти</span>
              </button>
            </div>
          </div>
        </section>
        <section className="content">
          <div className="container">
            <div className="content-box">
              <div className="content-main">
                <h2 className="content-main__title">Рекомендации для вас</h2>
                <div className="content-main__list">
                  <a className="content-main__list-item" href="/product.html">
                    <div className="content-main__list-item--img">
                      <img src="/image/card-img.png" alt="card-img" />
                    </div>
                    <h5 className="content-main__list-item--title">
                      Пвх материал 2й сорт
                    </h5>
                    <strong className="content-main__list-item--price">
                      170 ₽
                    </strong>
                    <div className="content-main__list-item--desc-box">
                      <span className="content-main__list-item--desc">
                        Казань, р-н Вахитовский
                      </span>
                      <span className="content-main__list-item--desc">
                        10 июля 11:39
                      </span>
                    </div>
                  </a>
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
      </main>
    </>
  );
};
