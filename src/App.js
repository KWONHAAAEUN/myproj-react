import TopNav from 'components/TopNav';
import Login from 'pages/accounts/Login';
import Profile from 'pages/accounts/Profile';
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

function App() {
  const windowWidth = useWindowWidth();
  return (
    <>
      <div className="app">
        <TopNav />
        <Routes>
          <Route path="/" element={<Navigate to="/reviews/" />} />
          <Route path="/accounts/login/" element={<Login />} />
          <Route path="/accounts/profile/" element={<Profile />} />
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
          <Route
            path="/examples/context-api-2"
            element={<ContextApiSample2 />}
          />
        </Routes>
      </div>
      <hr />
      윈도우 가로크기 : {windowWidth}px
      <Routes>
        <Route path="/examples/clock/" element={<Clock />} />
      </Routes>
    </>
  );
}

export default App;
