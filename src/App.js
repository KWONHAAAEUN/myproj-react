import TopNav from 'components/TopNav';
import Login from 'pages/accounts/Login';
import Profile from 'pages/accounts/Profile';
import ReviewList from 'pages/reviews/ReviewList';
import { Routes, Route } from 'react-router-dom';
import app from 'App.css';

function App() {
  return (
    <div className="app">
      <TopNav />
      <Routes>
        <Route path="/accounts/login/" element={<Login />} />
        <Route path="/accounts/profile/" element={<Profile />} />
        <Route path="/reviews" element={<ReviewList />} />
      </Routes>
    </div>
  );
}

export default App;
