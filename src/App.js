import TopNav from 'components/TopNav';
import PageLogin from 'pages/accounts/PageLogin';
import PageProfile from 'pages/accounts/PageProfile';
import Components from 'pages/examples/Components';
import ReviewList from 'pages/reviews/ReviewList';
import ReviewForm from 'pages/reviews/ReviewForm';
import { Navigate, Routes, Route } from 'react-router-dom';
import './App.css';
import PostList from 'pages/blog/PostList';
import PostForm from 'pages/blog/PostForm';
import PostDetail from 'pages/blog/PostDetail';
import Clock from 'pages/examples/Clock';
import useWindowWidth from 'hook/useWindowWidth';
import CssModlue from 'pages/examples/CssModule';
import CssInJs from 'pages/examples/CssInJs';
import ContextApiSample from 'pages/examples/ContextApiSample';
import ContextApiSample2 from 'pages/examples/ContextApiSample2';
import PageNewsIndex from 'pages/news/PageNewsIndex';
import PageNewsArticleDetail from 'pages/news/PageNewsArticleDetail';
import PageNewsArticleForm from 'pages/news/PageNewsArticleForm';
import PageLolList from 'pages/lol/PageLolList';
import PageLolDetail from 'pages/lol/PageLolDetail';
import PageLolForm from 'pages/lol/PageLolForm';

function App() {
  const windowWidth = useWindowWidth();
  return (
    <>
      <div className="app">
        <TopNav />
        <Routes>
          <Route path="/" element={<Navigate to="/reviews/" />} />
          <Route path="/accounts/login/" element={<PageLogin />} />
          <Route path="/accounts/profile/" element={<PageProfile />} />
          <Route path="/reviews" element={<ReviewList />} />
          <Route path="/examples/components/" element={<Components />} />
          <Route path="/reviews/new/" element={<ReviewForm />} />
          <Route path="/reviews/:reviewId/edit/" element={<ReviewForm />} />
          <Route path="/blog/" element={<PostList />} />
          <Route path="/blog/:postId/" element={<PostDetail />} />
          <Route path="/blog/new/" element={<PostForm />} />
          <Route path="/blog/:postId/edit/" element={<PostForm />} />
          <Route path="/examples/css-module" element={<CssModlue />} />
          <Route path="/examples/css-in-js" element={<CssInJs />} />
          <Route path="/examples/context-api" element={<ContextApiSample />} />
          <Route path="/news/" element={<PageNewsIndex />} />
          <Route path="/news/new" element={<PageNewsArticleForm />} />
          <Route path="/lol/:postId/" element={<PageLolDetail />} />
          <Route path="/lol/new/" element={<PageLolForm />} />
          <Route path="/lol/:postId/edit" element={<PageLolForm />} />
          <Route
            path="/news/:articleId/edit"
            element={<PageNewsArticleForm />}
          />
          <Route path="/news/:articleId" element={<PageNewsArticleDetail />} />
          <Route
            path="/examples/context-api-2"
            element={<ContextApiSample2 />}
          />
        </Routes>
      </div>
      {/* <hr />
      윈도우 가로크기 : {windowWidth}px */}
      <Routes>
        <Route path="/examples/clock/" element={<Clock />} />
        <Route path="/lol/" element={<PageLolList />} />
        />
      </Routes>
    </>
  );
}

export default App;
