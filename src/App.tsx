const GlobalStyles = () => (
  <style>
    {`
      @font-face {
        font-family: 'Gilroy';
        src: url('/fonts/Gilroy-Regular.woff') format('woff');
        font-weight: 400;
        font-style: normal;
      }
      @font-face {
        font-family: 'Gilroy';
        src: url('/fonts/Gilroy-Medium.woff') format('woff');
        font-weight: 500;
        font-style: normal;
      }
      @font-face {
        font-family: 'Gilroy';
        src: url('/fonts/Gilroy-SemiBold.woff') format('woff');
        font-weight: 600;
        font-style: normal;
      }
      @font-face {
        font-family: 'Gilroy';
        src: url('/fonts/Gilroy-Bold.woff') format('woff');
        font-weight: 700;
        font-style: normal;
      }

      * { margin: 0; padding: 0; box-sizing: border-box; }

      body {
        font-family: 'Gilroy', Roboto, sans-serif;
        background: #fff;
        color: #1a1a1a;
      }

      .container {
        max-width: 600px;
        margin: 0 auto;
        padding: 0 20px;
      }

      .section {
        padding: 80px 0;
        background: #F3F3F3;
      }

      .section-title {
        font-size: 28px;
        font-weight: 700;
        margin-bottom: 32px;
        color: #1a1a1a;
      }

      .hero {
        background: #fff;
        padding: 60px 0;
      }

      .hero__container {
        max-width: 1200px;
        padding: 0 40px;
      }

      .hero__grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 60px;
        align-items: center;
      }

      .hero__title {
        color: #F66297;
        font-size: 36px;
        font-weight: 600;
        line-height: 1.15;
        margin-bottom: 12px;
      }

      .hero__subtitle {
        color: #F66297;
        font-weight: 500;
        font-size: 26px;
        line-height: 1.3;
        margin-bottom: 12px;
      }

      .hero__description {
        color: #000;
        font-weight: 500;
        font-size: 18px;
        line-height: 1.6;
        margin-bottom: 32px;
      }



      .marathon-card {
        position: relative;
        background: #fff;
        border-radius: 30px;
        overflow: hidden;
        min-height: 260px;
        padding-bottom: 15px;
        margin-bottom: 20px;
      }

      .marathon-card--accent {
        border: 2px solid #F66297;
      }

      .marathon-card__image {
        position: absolute;
        left: 0;
        bottom: 0;
        height: 100%;
        width: 50%;
        background-color: #d9d9d9;
        background-size: cover;
        background-position: center;
      }

      .marathon-card__body {
        position: relative;
        margin-left: 50%;
        padding: 20px;
        width: 50%;
        display: flex;
        flex-direction: column;
      }

      .marathon-card__badge {
        display: inline-block;
        padding: 4px 14px;
        border-radius: 100px;
        background: #F6629730;
        color: #F66297;
        font-size: 13px;
        font-weight: 600;
        margin-bottom: 10px;
        width: fit-content;
      }

      .marathon-card__tag {
        display: inline-block;
        color: #F66297;
        font-size: 13px;
        font-weight: 600;
        margin-bottom: 10px;
      }

      .marathon-card__title {
        font-size: 22px;
        font-weight: 700;
        margin-bottom: 8px;
        line-height: 1.25;
      }

      .marathon-card__desc {
        font-size: 15px;
        color: #6b6b6b;
        line-height: 1.6;
        margin-bottom: 16px;
      }

      .marathon-card__btn {
        display: inline-block;
        background: #F66297;
        color: #fff;
        padding: 10px 22px;
        border-radius: 100px;
        font-size: 16px;
        font-weight: 600;
        border: none;
        cursor: pointer;
        width: fit-content;
        font-family: inherit;
        transition: opacity 0.2s;
      }

      .marathon-card__btn:hover {
        opacity: 0.9;
      }

      .about__list {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 16px;
      }

      .about__list-item {
        display: flex;
        align-items: center;
        gap: 12px;
        font-size: 16px;
        font-weight: 500;
        line-height: 1.4;
      }

      .about__icon {
        width: 30px;
        height: 30px;
        border-radius: 8px;
        flex-shrink: 0;
      }

      .hero__img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 24px;
      }

      .about__gallery {
        display: flex;
        gap: 16px;
        overflow-x: auto;
        padding-bottom: 4px;
        scrollbar-width: none;
      }

      .about__gallery::-webkit-scrollbar {
        display: none;
      }

      .about__gallery-item {
        width: 300px;
        height: 300px;
        background: #d9d9d9;
        border-radius: 20px;
        flex-shrink: 0;
      }

      .about__card {
        background: #fff;
        border-radius: 30px;
        padding: 28px 24px;
        margin-bottom: 28px;
      }

      @media (max-width: 768px) {
        .section { padding: 60px 0; }
        .hero { padding: 40px 0; }
        .hero__title { font-size: 28px; }
        .hero__subtitle { font-size: 20px; }
        .hero__description { font-size: 16px; }
        .hero__container { padding: 0 20px; }
        .hero__grid { grid-template-columns: 1fr; }

        .marathon-card { min-height: 180px; }

        .marathon-card__image {
          position: absolute;
          left: 0;
          top: 0;
          width: 50%;
          height: 100%;
          object-fit: cover;
        }

        .marathon-card__body {
          margin-left: 50%;
          padding: 20px;
          width: 50%;
        }
      }
    `}
  </style>
)

const Placeholder = ({ width, height, radius = 12, className = '' }) => (
  <div
    className={className}
    style={{
      width: width || '100%',
      height: height || 200,
      background: '#d9d9d9',
      borderRadius: radius,
    }}
  />
)

const MarathonCard = ({ badge, title, description, buttonText = 'Подробнее', image }) => {
  const isAccent = badge === 'Флагман' || badge === 'Бестселлер'

  return (
    <div className={`marathon-card${isAccent ? ' marathon-card--accent' : ''}`}>
      <div className="marathon-card__image" style={image ? { backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}} />
      <div className="marathon-card__body">
        {badge && (
          isAccent
            ? <span className="marathon-card__badge">{badge}</span>
            : <span className="marathon-card__tag">{badge}</span>
        )}
        <h3 className="marathon-card__title">{title}</h3>
        <p className="marathon-card__desc">{description}</p>
        <button className="marathon-card__btn">{buttonText}</button>
      </div>
    </div>
  )
}

const Hero = () => (
  <section className="hero">
    <div className="container hero__container">
      <div className="hero__grid">
        <div>
          <h1 className="hero__title">
            Приведите тело в форму<br />
            с чемпионкой Катей Усмановой
          </h1>
          <p className="hero__subtitle">
            Без диет, голода и запретов<br />
            с пользой для здоровья
          </p>
          <p className="hero__description">
            Похудеть, подтянуть попу и живот, набрать форму в зале,
            восстановиться после родов — тренировки и питание под вашу цель.
          </p>
          <button className="marathon-card__btn">Выбрать программу</button>
        </div>
        <img src="/HeroImg.png" alt="Катя Усманова" className="hero__img" />
      </div>
    </div>
  </section>
)

const About = () => (
  <section className="section">
    <div className="container">
      <h2 className="section-title">
        Доверьте своё тело чемпионке<br />
        фитнес-бикини и тренеру Кате Усмановой
      </h2>

      <p style={{ fontSize: 17, color: '#6b6b6b', lineHeight: 1.65, marginBottom: 32 }}>
        С 2015 года создаёт топовые тренировки для идеальных ягодиц,
        плоского живота и стройности без жёстких диет.<br /><br />
        Уже более 580&nbsp;000 участниц тренируются с Катей.
      </p>

      <div className="about__card">
        <ul className="about__list">
          {[
            { text: 'Вице-чемпионка мира и чемпионка России по фитнес-бикини', icon: '/icons/dumbbell.png' },
            { text: 'Профессиональный фитнес-тренер с опытом более 15 лет', icon: '/icons/dumbbell.png' },
            { text: 'Мама двоих детей', icon: '/icons/dumbbell.png' },
            { text: 'Автор масштабных марафонов стройности', icon: '/icons/dumbbell.png' },
            { text: 'Чемпионка России по жиму лёжа', icon: '/icons/dumbbell.png' },
          ].map((item) => (
            <li key={item.text} className="about__list-item">
              <img src={item.icon} alt="" className="about__icon" />
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="about__gallery">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="about__gallery-item" style={{ backgroundImage: `url(/result${(i % 2) + 1}.png)`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        ))}
      </div>
      <p style={{ marginTop: 10, fontSize: 13, color: '#6b6b6b' }}>Листайте вправо →</p>
    </div>
  </section>
)

const HomePrograms = () => (
  <section className="section" style={{ paddingTop: 0 }}>
    <div className="container">
      <h2 className="section-title">Тренировки дома</h2>

      {[
        { badge: 'Флагман', title: 'Метод Усмановой', description: 'Системный подход к телу: тренировки, питание и режим в одной программе. Для тех, кто хочет устойчивый результат.' },
        { badge: 'Марафон', title: 'Стройности', description: 'Интенсивный курс для снижения веса и формирования привычки к активному образу жизни.' },
        { badge: 'Марафон', title: 'Упругая попа 1.0', description: 'Начальный уровень. Прокачай ягодицы с нуля — без оборудования, дома, в своём ритме.' },
        { badge: 'Марафон', title: 'Упругая попа 2.0', description: 'Продолжение. Повышенная нагрузка, усложнённые связки и работа над рельефом.' },
        { badge: 'Марафон', title: 'Плоский живот', description: 'Комплекс на глубокие мышцы кора. Результат виден уже через 4 недели регулярных занятий.' },
      ].map((p, i) => (
        <MarathonCard key={p.title} {...p} image={`/trainings/train${(i % 3) + 1}.png`} />
      ))}
    </div>
  </section>
)

const GymPrograms = () => (
  <section className="section" style={{ paddingTop: 0 }}>
    <div className="container">
      <h2 className="section-title">Тренировки в зале</h2>

      <MarathonCard
        badge="Курс"
        title="Для зала"
        description="Мышцы снова растут, когда дома прогресс уже остановился. Готовая программа на мышечный объём."
        image="/result1.png"
      />
    </div>
  </section>
)

const Maternity = () => (
  <section className="section" style={{ paddingTop: 0 }}>
    <div className="container">
      <h2 className="section-title">Беременность и после родов</h2>

      <MarathonCard
        badge="Курс"
        title="Для беременных"
        description="Лёгкие роды и тело без перегрузки. Безопасные тренировки на всех триместрах."
        image="/result1.png"
      />

      <MarathonCard
        badge="Курс"
        title="Восстановление после родов"
        description="Вернитесь в форму после родов и кесарева."
        image="/result2.png"
      />
    </div>
  </section>
)

const Nutrition = () => (
  <section className="section" style={{ paddingTop: 0 }}>
    <div className="container">
      <h2 className="section-title">Питание</h2>

      <MarathonCard
        badge="Бестселлер"
        title="ИИ-нутрициолог"
        description="Едите без срывов и понимаете своё тело. Питание, тренировки и анализы в одном месте."
        image="/result1.png"
      />

      <MarathonCard
        badge="Курс"
        title="По питанию"
        description="Сбросить вес без диет и жёстких ограничений."
        image="/result2.png"
      />
    </div>
  </section>
)

const App = () => (
  <>
    <GlobalStyles />
    <Hero />
    <About />
    <HomePrograms />
    <GymPrograms />
    <Maternity />
    <Nutrition />
  </>
)

export default App
