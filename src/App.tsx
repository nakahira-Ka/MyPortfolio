import { useState } from "react";
import './App.css'

const works = [
  {
    id: 1,
    title: "BilliarasCafe",
    description: `【制作背景】
                  1年生の時に学校の課題で初めて作ったWebサイトです。
                  この制作を通してHTMLとCSSの基本的なことを学びました
                  【工夫した点】
                  見やすいレイアウトと画像配置を意識しました。
                  【学んだこと】
                  HTMLの構造化とCSSによるデザインの基礎を学びました。`,
    period: `【制作期間】
              企画,ワイヤーフレーム:5週間
              デザイン:２週間
              コーディング:5週間`,
    language:"HTML / CSS",
    image: "/img/BilliarasCafe.png",
    url:"https://click.ecc.ac.jp/ecc/knakahira/billiardscaff_rack-launge/index.html"
  },
  {
    id:2,
    title:"IdeaSummary",
    description: `【制作背景】
                  学校の自由参加講座で制作した作品です。
                  2人1組のチーム開発で、私はコーディング、ペアのメンバーはデザインを担当しました。
                  【実装した機能】
                  ・カテゴリごとの表示切り替え機能
                  ・キーワード検索機能
                  ・カテゴリに応じた背景色変更
                  【工夫した点】
                  学習サイトを「デザイン」と「プログラミング」に分類し、
                  必要な情報へ素早くアクセスできる構成を意識しました。
                  
                  【学んだこと】
                  この制作で初めてJavaScriptを使用しました。
                  DOM操作やイベント処理を学び、クリックによる表示切り替えや
                  リアルタイム検索機能を実装しました。
                  
                  また、初めてデザイナーと協力して制作を行い、
                  役割分担やコミュニケーションの重要性を学びました。
                  `,
    period:`【制作期間】
            2日間（1日目は企画・役割分担、2日目に実装）`,
    language:"HTML / CSS / JavaScript",
    image: "/img/IdeaSummary.png",
    url:"https://click.ecc.ac.jp/ecc/knakahira/13,14/code/"
  },
  {
    id:3,
    title:"SesekiNavi",
    description:`【制作背景】
            2年生の課題で制作した。瀬石温泉の魅力を発信することを目的として制作した温泉紹介サイトです。
            【実装した機能】
            ・外部API（Open-Meteo / Tide736）を用いた気象・潮汐データの取得
            ・複数の気象要素を統合したコンディションスコア算出ロジック
            ・スコアに基づくサーフィンコンディション判定機能
            ・判定結果に応じたUIの動的切り替え（評価表示・画像変更）
            【工夫した点】
            天気予報はOpen-Meteo APIから取得しています。
              
            また、潮汐情報は Tide736 API を利用しましたが、
            ブラウザから直接取得できなかったため、
            PHPで中継用APIを作成しサーバー側でデータを取得、
            JSON形式でReactへ返す仕組みを実装しました。
            【苦労した点】
            外部APIによって利用方法が異なり、
            フロントエンドから直接利用できないケースがあることを学びました。
            
            その問題を解決するために、
            PHPを利用したAPI連携の仕組みを調査し実装しました。
            
            【学んだこと】
            この作品で初めてReactを使用し、
            コンポーネント設計や状態管理の基礎を学びました。
            
            また、フロントエンドだけでなく、
            サーバーサイドを介したAPI連携の流れについても理解を深めることができました。
            `,
    period:`企画,ワイヤーフレーム:7週間
            デザイン:1週間
            コーディング:5週間`,
    language:`React / HTML / CSS / JavaScript / PHP
              使用したAPI
              Open-Meteo API / Tide736 API`,
    image:"/img/SesekiNavi.png",
    url:"https://seseki.vercel.app/",
  },
  {
    id: 4,
    title: "TrainGuide",
    description: `【制作背景】
    乗換案内アプリを自作することで、API連携や経路探索ロジックの理解を深めるために制作しています。
    現在は経路検索の最適化に向けて開発中です。

      【実装した機能】
      ・出発／到着駅のサジェスト検索
      ・経路検索
      ・複数ルートの表示
      ・所要時間・乗換回数の表示
  
      【工夫した点】
      ・APIレスポンスをそのまま表示せず、フロント側で整形してUI表示
      ・乗換回数や徒歩区間を考慮したルート選択ロジック
      ・サジェストUIの表示制御（開閉・選択後の自動クローズ）`,
  
    period: `開発中(3週目)`,
  
    image: "/img/TrainGuide.png",
  
    language: `React / TypeScript 
              使用したAPI
              Transit API`,
  
    url: "https://train-guide-zeta.vercel.app/"
  },
  {
    id: 6,
    title: "Portfolio",
    description: `【制作背景】
    自分自身を企業へ紹介するために制作したポートフォリオサイトです。
    
    【実装した機能】
    ・作品一覧表示
    ・モーダルによる作品詳細表示
    ・useStateを利用した状態管理
    【工夫した点】
    作品カードのホバーアニメーションやモーダル表示を実装し、
    閲覧しやすいUIを意識しました。`,
    period:`デザイン:1週間
            コーディング:1週間`,
    image:"/img/Portfolio.png",
    language:"React / TypeScript / CSS",
    url:"https://kanatonakahira-portfolio.vercel.app/"
  }
];


export default function App() {
  const [selectedWork, setSelectedWork] =
  useState<(typeof works)[number] | null>(null);
  return (
    <>
      <header>
        <div className="h-container">
          <h2><a href="/">中平奏人のポートフォリオ</a></h2>
          <ul>
            <li><a href="#top ">HOME</a></li>
            <li><a href="#me">私について</a></li>
            <li><a href="#works">作品</a></li>
            <li><a href="#contact">連絡先</a></li>
          </ul>
        </div>
      </header>
      
      <main>
        <section>
          <div className="hero" id="top">
            <h1>中平奏人のPortfolio</h1>
          </div>
        </section>
        <section>
          <div className='about-me'>
            <h2 id="me">About me</h2>
            <div className='profile'>
              <img src="/img/me.JPG" alt="中平奏人のプロフィール写真" />
              <div>
                <h3>中平奏人-Nakahira Kanato</h3>
                <p>
                  ECCコンピュータ専門学校/マルチメディア研究学科<br />Webデザインコース/27年卒業予定 <br />
                  現在学校で習ったHTML・CSS・JavaScript・PHPを中心に開発をしています。<br />
                  React・Three.jsを個人的に学習しながら、<br />
                  Webサイトやアプリケーションの制作にも取り組んでいます。<br />
                  趣味はゲーム・スキー・サウナです。
                </p>
                <div className='skills-container'>
                  <h2>Skills</h2>
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
            <h2 id="works">Works</h2>
            <p>
              これまでに制作したWebサイトやアプリケーションを紹介しています。<br />
              企画からデザイン、コーディングまで取り組んだ作品を掲載しています。
            </p>

            <div className="work">
              {works.map((work) => (
                <article
                  className="work-card"
                  key={work.id}
                  onClick={() => setSelectedWork(work)}
                >
                  <div className="work-img">
                    <img src={work.image} alt={work.title} />
                  </div>
              
                  <div className="work-info">
                    <h3>{work.title}</h3>
                  </div>
                </article>
              ))}
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
      
      
{selectedWork && (
  <div className="modalOverlay" onClick={() => setSelectedWork(null)}>
    <div className="modalContent" onClick={(e) => e.stopPropagation()}>
      
      <img src={selectedWork.image} alt={selectedWork.title}/>
      <div className="modalText">
        <h2>{selectedWork.title}</h2>
        <p>{selectedWork.description}</p>
        <p>{selectedWork.period}</p>
        <h2>使用言語</h2>
        <p>{selectedWork.language}</p>
        <a
          href={selectedWork.url}
          target="_blank"
          rel="noopener noreferrer"
          >
          サイトを見る
        </a>
      </div>
    </div>
  </div>
)}


      <footer>
        <div className='contact'>
          <h2 id="contact">Contact</h2>
          <p>kanatonakahira@gmail.com</p>
        </div>
      </footer>
  </>
  );
}