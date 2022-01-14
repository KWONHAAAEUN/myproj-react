import { useCallback, useState } from 'react';

function useFieldValuesBlog(initialValues) {
  const [fieldValues, setFieldValues] = useState(initialValues);

  // useCallback: 함수 객체를 생성할 때, 의존성이 걸린 값이 변경시에만 함수를 재생성
  const handleFieldChange = useCallback((e) => {
    const { name, value } = e.target;
    // name은 식별자 value는 값

    // value가 바뀌었을 때 받아오기 위해
    setFieldValues((prevFieldValues) => {
      return {
        ...prevFieldValues,
        [name]: value,
      };
    });
  }, []);
  // 첫인자 함수 두번째([])는 의존성
  // 값이 바뀌는 대상은 []안에 적어줘야 한다.
  // 그렇게 하지 않으면 새롭게 바뀐 것을 모른다
  // 바뀔 때의 값을 안고 들어와서 그것(예전 값)만 안다

  // 필드 초기화 해주는 부분
  const clearFieldValues = useCallback(() => {
    setFieldValues(initialValues);
  }, []);

  // {}로 했으니 오브젝트로 받겠다는 뜻 -> 필요한 경우 받을 때도 오브젝트로 받아야 한다
  return { fieldValues, handleFieldChange, setFieldValues, clearFieldValues };
}
export default useFieldValuesBlog;
