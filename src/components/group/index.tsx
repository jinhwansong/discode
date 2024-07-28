import { useCallback } from 'react';
import { usePopup, useCheck } from '@/hooks';
import Button from '../button';
import DmImg from '../dmImg';
import { friend } from '@/mocks/server';
import * as St from './group.module';

interface IGroup {
  user?: {
    server_id: number;
    profile: string;
    name: string;
  };
}

const Group = ({ user }: IGroup) => {
  const { popupRef } = usePopup();
  // 친구 선택하기
  const [checkbox, singlecheck] = useCheck(
    friend.filter((users) => users.server_id !== user?.server_id)
  );
  // 9명 미만으로 막기
  const remain = checkbox.filter(
    (checkboxs) => checkboxs.isChecked === true
  ).length;
  const changeCheck = useCallback(
    (id: number) => {
      if (
        remain >= 9 &&
        !checkbox.find((item) => item.server_id === id && item.isChecked)
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
          <St.SeletFreindItem htmlFor={String(links.server_id)} key={i}>
            <div>
              <DmImg
                id={links.server_id}
                profile={links.profile}
                name={links.name}
              />
              {links.name}
            </div>
            <input
              checked={links.isChecked}
              onChange={() => changeCheck(links.server_id)}
              type="checkbox"
              id={String(links.server_id)}
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
