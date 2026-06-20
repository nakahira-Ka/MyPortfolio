import './App.css'

const work = [
  {
    id:  1,
    title: "Portfolio",
    description: "中平奏人のPortfolio",
    image:"",
    url:""
  }
];


export default function App() {
  return (
    <>
      <header>
        <div className="h-container">
          <h2><a href="/">AAAAのポートフォリオ</a></h2>
          <ul>
            <li><a href="/">HOME</a></li>
            <li><a href="#me">私について</a></li>
            <li><a href="#works">作品</a></li>
            <li><a href="#contact">連絡先</a></li>
          </ul>
        </div>
      </header>
      
      <main>
        <section>
          <div className="hero">
            <h1>AAAAのPortfolio</h1>
          </div>
        </section>
        <section>
          <div className='about-me'>
            <h2 id="me">About me</h2>
            <div className='profile'>
              <img src="/img/me.JPG" alt="AAAAのプロフィール写真" />
              <div>
                <h3>AAAA-AA AA</h3>
                <p>
                  ECCコンピュータ専門学校/マルチメディア研究学科<br />Webデザインコース/27年卒業予定 <br />
                  現在学校で習ったHTML・CSS・JavaScript・PHPを中心に開発をしています。<br />
                  またReact・Three.jsを個人的に勉強しなが制作もしています。<br />
                  趣味はゲーム・スキー・サウナです
                </p>
                <div className='skils-container'>
                  <h2>Skils</h2>
                  <ul>
                    <li><img src="/img/html.png" alt="HTML" /></li>
                    <li><img src="/img/css.png" alt="CSS" /></li>
                    <li><img src="/img/JavaScript.png" alt="JavaScript" /></li>
                    <li><img src="/img/PHP.png" alt="PHP" /></li>
                    <li><img src="/img/React.png" alt="React" /></li>
                    <li><img src="/img/Three.js.png" alt="Threejs" /></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className='works'>
            <h2 id="works">works</h2>
            <p>
              これまでに制作したWebサイトやアプリケーションを紹介しています。<br />
              企画からデザイン、コーディングまで取り組んだ作品を掲載しています。
            </p>

            <div>
              <h3>AAAAのPortfolio</h3>
              <a href="https://click.ecc.ac.jp/ecc/knakahira/ChartNavi/Web/"  target="_blank">サイトを見る</a>
            </div>
          
          
          </div>
        </section>
        <section>
          <div className='thanks'>
            <p>
              最後までご覧いただきありがとうございました。<br />
              このサイトを通して、私のことを少しでも知っていただけたのなら嬉しいです。<br />
              質問などがありましたら、下記メールアドレスからご連絡ください。
            </p>
          </div>
        </section>
      </main>
      
      <footer>
        <div className='contact'>
          <h2 id="contact">Contact</h2>
          <p>AA@gmail.com</p>
        </div>
      </footer>
  </>
  );
}