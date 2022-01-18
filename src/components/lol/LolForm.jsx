import { useApiAxios } from 'api/base';
import useFieldValues from 'hook/useFieldValues';
import { useEffect } from 'react';
import produce from 'immer';
import H2 from 'components/H2';
import LoadingIndicator from 'components/LoadingIndicator';
import Button from 'components/Button';
import DebugStates from 'components/DebugStates';
import useAuth from 'hook/useAuth';

const INIT_FIELD_VALUES = { champion: '', role: '암살자', story: '' };

function LolForm({ postId, handleDidSave }) {
  const [auth] = useAuth();
  const [{ data: post, loading: getLoading, error: getError }] = useApiAxios(
    {
      url: `lol/api/posts/${postId}`,
      method: 'GET',
      headers: {
        Authorization: `Bearer ${auth.access}`,
      },
    },
    { manual: !postId },
  );
  // 위 loading,error 와 다르게 구별하기 위해 서로 이름을 지정해줬다
  // 아래 코드는 사진이 있는 상태에서 수정을 할 때 사진의 경로가 자동으로 뜨지 않아
  // 저장 시에 사진이 없다고 하는 오류를 해결하기 위함입니다
  const [
    { loading: saveLoading, error: saveError, errorMessage: saveErrorMessages },
    saveRequest,
  ] = useApiAxios(
    {
      url: !postId ? 'lol/api/posts/' : `/lol/api/posts/${postId}/`,
      method: !postId ? 'POST' : 'PUT',
      headers: {
        Authorization: `Bearer ${auth.access}`,
      },
    },
    { manual: true },
  );

  const { fieldValues, handleFieldChange, setFieldValues } = useFieldValues(
    post || INIT_FIELD_VALUES,
  );

  useEffect(() => {
    setFieldValues(
      produce((draft) => {
        draft.photo = '';
      }),
    );
  }, [post]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // 이미지는 파일이다. 파일을 업로드 하기 위해서는 FormData 인스턴스를 사용!
    const formData = new FormData();
    Object.entries(fieldValues).forEach(([name, value]) => {
      if (Array.isArray(value)) {
        const fileList = value;
        fileList.forEach((file) => formData.append(name, file));
      } else {
        formData.append(name, value);
      }
    });
    saveRequest({
      data: formData,
    }).then((response) => {
      const savedPost = response.data;
      if (handleDidSave) handleDidSave(savedPost);
    });
  };
  console.log(fieldValues.champion);
  return (
    <div>
      <H2>새로운 챔피언 등록</H2>

      {saveLoading && <LoadingIndicator>저장 중..</LoadingIndicator>}
      {saveError &&
        `저장 중 에러가 발생했습니다 (${saveError.response?.status} ${saveError.response?.statusText})`}
      <form onSubmit={handleSubmit}>
        <div className="my-3">
          <h2>챔피언 이름</h2>
          <input
            name="champion"
            value={fieldValues.champion}
            onChange={handleFieldChange}
            type="text"
            className="p-1 bg-gray-100 w-full outline-none focus:border focus:border-gray-400 focus:border-dashed"
          />
          {saveErrorMessages?.champion?.map((message, index) => (
            <p key={index} className="text-xs text-red-400">
              {message}
            </p>
          ))}
        </div>

        <h2 className="mb-1">챔피언 역할</h2>
        <select
          name="role"
          onChange={handleFieldChange}
          value={fieldValues.role}
        >
          <option>암살자</option>
          <option>마법사</option>
          <option>원거리딜러</option>
          <option>서포터</option>
          <option>탱커</option>
          <option>전사</option>
        </select>

        <div className="my-3">
          <h2>챔피언 스토리</h2>
          <textarea
            name="story"
            value={fieldValues.story}
            onChange={handleFieldChange}
            type="text"
            className="p-1 bg-gray-100 w-full outline-none focus:border focus:border-gray-400 focus:border-dashed"
          />
          {saveErrorMessages?.story?.map((message, index) => (
            <p key={index} className="text-xs text-red-400">
              {message}
            </p>
          ))}
        </div>

        <div className="my-3">
          <input
            type="file"
            accept=".png, .jpg, .jpeg"
            name="photo"
            onChange={handleFieldChange}
          />
          {saveErrorMessages?.champion?.map((message, index) => (
            <p key={index} className="text-xs text-red-400">
              {message}
            </p>
          ))}
        </div>
        <div className="my-3">
          <Button>save</Button>
        </div>
      </form>
      <DebugStates
        post={post}
        getLoading={getLoading}
        getError={getError}
        saveErrorMessages={saveErrorMessages}
        fieldValues={fieldValues}
      />
    </div>
  );
}
export default LolForm;
