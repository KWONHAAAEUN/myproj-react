import TopNav from 'components/TopNav';
import Login from 'pages/accounts/Login';
import Profile from 'pages/accounts/Profile';
import Components from 'pages/examples/Components';
import ReviewList from 'pages/reviews/ReviewList';
import ReviewForm from 'pages/reviews/ReviewForm';
import { Navigate, Routes, Route } from 'react-router-dom';
import './App.css';
import PageBlog from 'pages/blog/PageBlog';

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
        <Route path="/blog/" element={<PageBlog />} />
      </Routes>
    </div>
  );
}

export default App;
