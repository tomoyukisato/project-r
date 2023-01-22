import React from 'react';
// import logo from './logo.svg';
import './tutorial/Row.scss';
// import AdmissionFeeCalculator from './sample/AdmissionFeeCalculator';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
// import {Row} from './tutorial/Row';
// import {requests} from './tutorial/request';
// import {Banner} from './tutorial/Banner';
// import {Nav} from './tutorial/Nav';
// import ProjectsPage from './ui/pages/projects/ProjectsPage';
import { BlogPage } from './ui/pages/blogs/BlogPage';
import { MemoIndex } from './ui/components/templetes/MemoIndex';
import { MemoDetail } from './ui/components/templetes/MemoDetail';
import { MemoRegister } from './ui/components/templetes/MemoRegister';

function App() {
return (
    <BrowserRouter>
      <Routes>
        <Route path={`/memo`} element={<BlogPage />} >
          <Route index element={<MemoIndex />} />
            {/* <Route path={`/register`} element={<MemoRegister />} /> */}
          <Route path=":memoId" element={<MemoDetail />} />
          <Route path="register" element={<MemoRegister />} />
        </Route>
        {/* <Route path={`/login/`} element={<Login />} /> */}
        {/* <Route path={`/sample`} element={<AdmissionFeeCalculator />} /> */}
        {/* <Route path={`/tutorial`} element={<Netflix />} /> */}
      </Routes>
      {/* <div className='container'>
        <ProjectsPage />
      </div> */}

    </BrowserRouter>
  );
}

// const Home = () => {
//   return (
//     <>
//       <h1>ホーム</h1>
//       <div>
//         新規登録は<Link to={`/register/`}>こちら</Link>
//       </div>
//     </>
//   );
// };

// const Login = () => {
//   return (
//     <>
//       <h1>ログインページ</h1>
//       <div>
//         新規登録は<Link to={`/register/`}>こちら</Link>
//         <Link to={`/tutorial/`}>Netflix</Link>
//       </div>
//       <div>
//         <Link to={`/`}>ホームに戻る</Link>
//       </div>
//     </>
//   );
// };

// const Register = () => {
//   return (
//     <>
//       <h1>新規登録ページ</h1>
//       <div>
//         ログインは<Link to={`/login/`}>こちら</Link>
//       </div>
//       <div>
//         <Link to={`/`}>ホームに戻る</Link>
//       </div>
//     </>
//   );
// };

// const Netflix = () =>{
//   return (
//     <div className="App">
//       <Nav />
//       <Banner />
//       <Row 
//         title="NETFIX ORIGINALS"
//         fetchUrl={requests.feachNetflixOriginals}
//         isLargeRow
//       />
//       <Row title="Top Reted" fetchUrl={requests.feactTopRated}/>
//       <Row title="Action Movies" fetchUrl={requests.feactActionMovies}/>
//       <Row title="Comedy Movies" fetchUrl={requests.feactComedyMovies}/>
//       <Row title="Horror Movies" fetchUrl={requests.feactHorrorMovies}/>
//       <Row title="Romance Movies" fetchUrl={requests.feactRomanceMovies}/>
//       <Row title="Documentaries" fetchUrl={requests.feactDocumentMovies}/>
//     </div>
//   )
// } 


// const Header = () => {
//   return (
//     <section className="hero is-warning">
//       <div className="hero-body">
//         <div className="container">
//           <h1 className="title">
//             日大文理
//             <br className="is-hidden-tablet" />
//             ラーメンレビュー
//           </h1>
//         </div>
//       </div>
//     </section>
//   );
// }

// const Footer = () => {
//   return (
//     <footer className="footer ">
//       <div className="content">
//         <p className="has-text-centered">
//           これは日本大学文理学部情報科学科の開講科目「Web
//           プログラミング」の教材として作成されたサンプルアプリケーションです。
//         </p>
//       </div>
//     </footer>
//   );
// }

export default App;
