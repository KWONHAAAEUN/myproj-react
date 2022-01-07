import Axios from 'axios';
import DebugStates from 'components/DebugStates';
import { useEffect, useState } from 'react';
import Review from 'components/Review';

function PageReviewList() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [reviewList, setReviewList] = useState([]);

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

  return (
    <div>
      <h2>Review List</h2>

      {loading && <div>Loading...</div>}
      {error && <div>통신 중 오류 발생</div>}

      <button
        onClick={() => refetch()}
        className="bg-yellow-400 hover:bg-yellow-200"
      >
        새로고침
      </button>

      {reviewList.map((review) => (
        <Review review={review} />
      ))}
      <hr />
      <DebugStates loading={loading} error={error} reviewList={reviewList} />
    </div>
  );
}

export default PageReviewList;
