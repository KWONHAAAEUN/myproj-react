import useFieldValues from 'hook/useFieldValues';
// import Axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import DebugStates from 'components/DebugStates';
import ReviewForm from 'components/ReviewForm';
// import { API_HOST } from 'Constants';
import { axiosInstance } from 'api/base';

function PageReviewForm() {
  // 상탯값 정의. 훅 호출
  const navigate = useNavigate();
  // route할 때 :으로 시작했던 값들을 가져올 수 있다
  const { reviewId } = useParams();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // 훅 호출
  const { fieldValues, handleFieldChange, setFieldValues, clearFieldValues } =
    useFieldValues({
      score: 5,
      content: '',
    });

  const [errorMessages, setErrorMessages] = useState({});

  // 변화되는 값에 적용하기 위함
  // 어떤 값이 변경되면 지정된 함수를 호출하겠다
  // useEffect(() => {
  //   setLoading(true);
  //   setError(null);

  //   const url = `http://127.0.0.1:8000/shop/api/reviews/${reviewId}/`;
  //   Axios.get(url)
  //     .then((response) => {
  //       setFieldValues(response.data);
  //     })
  //     .catch((e) => {
  //       setError(e);
  //     })
  //     .finally(() => {
  //       setLoading(false);
  //     });
  // }, [reviewId, setFieldValues]);

  // async 버전
  useEffect(() => {
    const fetchReview = async () => {
      setLoading(true);
      setError(null);

      const url = `/shop/api/reviews/${reviewId}/`;
      try {
        const response = await axiosInstance.get(url);
        setFieldValues(response.data);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    if (reviewId) fetchReview();
    else clearFieldValues();
  }, [reviewId, setFieldValues, clearFieldValues]);

  // async-await 짝꿍
  const saveReview = async () => {
    setLoading(true);
    setError(null);
    setErrorMessages({});

    const url = !reviewId
      ? `/shop/api/reviews/`
      : `/shop/api/reviews/${reviewId}/`;

    try {
      if (!reviewId) {
        await axiosInstance.post(url, fieldValues);
      } else {
        await axiosInstance.patch(url, fieldValues);
      }
      navigate('/reviews/');
    } catch (e) {
      setError(e);
      console.error(e);

      setErrorMessages(e.response.data);
    }

    setLoading(false);
  };

  // then 방식
  // const createReview = () => {
  //   let { id: creatingReviewId } = fieldValues;
  //   const url = 'http://127.0.0.1:8000/shop/api/reviews/';

  //   Axios.post(url, fieldValues).then(() => {
  //     console.log('저장 성공');
  //     if (!creatingReviewId) {
  //       creatingReviewId = new Date().getTime();
  //       const createdReview = { ...fieldValues, id: creatingReviewId };
  //       setReviewList((prevReviewList) => [...prevReviewList, createdReview]);
  //     }
  //   });
  // };

  // jsx로 표현
  return (
    <div>
      <h2>
        Review Form
        {reviewId ? '수정' : '생성'}
      </h2>
      <ReviewForm
        fieldValues={fieldValues}
        errorMessages={errorMessages}
        handleFieldChange={handleFieldChange}
        handleSubmit={saveReview}
        disabled={loading}
      />
      <DebugStates
        reviewId={reviewId}
        fieldValues={fieldValues}
        errorMessages={errorMessages}
      />
    </div>
  );
}
export default PageReviewForm;
