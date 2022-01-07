import Axios from 'axios';
import DebugStates from 'components/DebugStates';
import { useEffect, useState } from 'react';
import Review from 'components/Review';
import { useNavigate } from 'react-router-dom';

function PageReviewList() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [reviewList, setReviewList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    refetch();
  }, []);

  const refetch = () => {
    setLoading(true);
    setError(null);

    const url = 'http://127.0.0.1:8000/shop/api/reviews';
    Axios.get(url)
      .then(({ data }) => {
        // console.group('정상 응답');
        // console.log(data);
        // console.groupEnd();
        setReviewList(data);
      })
      .catch((error) => {
        // console.group('에러 응답');
        console.error(error);
        // console.groupEnd();
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const deleteReview = (deletingReview) => {
    const { id: deletingReviewId } = deletingReview;
    const url = `http://127.0.0.1:8000/shop/api/reviews/${deletingReviewId}/`;

    setLoading(true);
    setError(null);

    Axios.delete(url)
      .then(() => {
        console.log('삭제 성공');
        // 방법1. 삭제된 항목만 상탯값에서 제거
        setReviewList((prevReviewList) => {
          return prevReviewList.filter((review) => {
            return review.id !== deletingReviewId;
          });
        });
        // 방법2. 전체를 새로고침
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div>
      <h2>Review List</h2>

      {loading && <div>Loading...</div>}
      {error && <div>통신 중 오류 발생</div>}

      <button
        onClick={() => refetch()}
        className="bg-yellow-400 hover:bg-yellow-200 mr-1"
      >
        새로고침
      </button>

      <button
        onClick={() => navigate('/reviews/new/')}
        className="bg-blue-400 hover:bg-blue-200"
      >
        새 리뷰
      </button>

      {reviewList.map((review) => (
        <Review
          key={review.id}
          review={review}
          handleDelete={() => deleteReview(review)}
        />
      ))}
      <hr />
      <DebugStates loading={loading} error={error} reviewList={reviewList} />
    </div>
  );
}

export default PageReviewList;
