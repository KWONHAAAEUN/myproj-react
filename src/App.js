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

function App() {
  return (
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
      </Routes>
    </div>
  );
}

export default App;
