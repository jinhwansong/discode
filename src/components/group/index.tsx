import { useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { usePopup, useCheck } from '@/hooks';
import Button from '../button';
import DmImg from '../dmImg';
import { friend } from '@/mocks/server';
import * as St from './group.module';

const Group = () => {
  const { popupRef } = usePopup();
  const param = useParams();
  // 친구 선택하기
  const [checkbox, singlecheck] = useCheck(
    friend.filter((users) => users.id !== Number(param.id))
  );
  // 9명 미만으로 막기
  const remain = checkbox.filter(
    (checkboxs) => checkboxs.isChecked === true
  ).length;
  const changeCheck = useCallback(
    (id: number) => {
      if (
        remain >= 9 &&
        !checkbox.find((item) => item.id === id && item.isChecked)
      ) {
        return;
      }

      singlecheck(id);
    },
    [checkbox, singlecheck, remain]
  );
  // Dm생성
  const onCreateDm = useCallback(() => {}, []);
  return (
    <St.SeletFreind ref={popupRef}>
      <St.SeletFreindTitle>
        <h4>친구 선택하기</h4>
        <span>친구를 {9 - remain}명 더 추가할수 있어요.</span>
      </St.SeletFreindTitle>
      <St.SeletFreindList>
        {checkbox.map((links, i) => (
          <St.SeletFreindItem htmlFor={String(links.id)} key={i}>
            <div>
              <DmImg
                profile={links.profileImage}
                name={links.name}
                online={links.user_state}
              />
              <p>{links.name}</p>
            </div>
            <input
              checked={links.isChecked}
              onChange={() => changeCheck(links.id)}
              type="checkbox"
              id={String(links.id)}
            />
          </St.SeletFreindItem>
        ))}
      </St.SeletFreindList>
      <St.SeletFreindBtn>
        <Button type="button" onClick={onCreateDm}>
          Dm생성
        </Button>
      </St.SeletFreindBtn>
    </St.SeletFreind>
  );
};

export default Group;
