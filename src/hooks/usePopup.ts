import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { togglePopup } from '@/stores/reducers/server';
import { RootState } from '@/stores/store';

// 팝업 외부 클릭시 닫기용
const usePopup = () => {
  const dispatch = useDispatch();
  const popupRef = useRef<HTMLDivElement>(null);
  const { popupOpen, popupType } = useSelector(
    (state: RootState) => state.server
  );
  useEffect(() => {
    const closePopup = (e: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
        dispatch(togglePopup(''));
      }
    };
    window?.addEventListener('mousedown', closePopup);
    return () => {
      window?.removeEventListener('mousedown', closePopup);
    };
  }, [dispatch, popupOpen, popupType]);
  return { popupRef };
};

export default usePopup;
