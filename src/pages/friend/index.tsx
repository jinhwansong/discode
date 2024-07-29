import { useState } from 'react';
import Service from '@/components/service';
import FriendList from '@/components/friendList';
import { IcPeople } from '@/assets/index.ts';
import { friend } from '@/mocks/server.ts';
import * as St from './friend.module.ts';

const Friend = () => {
  const tap = [
    { id: 1, name: '온라인' },
    { id: 2, name: '모두' },
    { id: 3, name: '대기중' },
    { id: 4, name: '차단목록' },
    { id: 5, name: '친구추가' },
  ];
  const [tapId, setTapId] = useState(1);
  const online = friend.filter((onlines) => onlines.user_state === 'online');
  return (
    <>
      <Service />
      <St.FriendWrap>
        <St.FriendTop>
          <St.Title>
            <IcPeople />
            <p>친구</p>
          </St.Title>
          {tap.map((taps) => (
            <St.Taps
              type="button"
              key={taps.id}
              onClick={() => setTapId(taps.id)}
              $active={taps.id === tapId}
            >
              {taps.name}
            </St.Taps>
          ))}
        </St.FriendTop>
        <St.FriendContent>
          <St.FriendTap>
            {tapId === 1 && (
              <FriendList
                list={online}
                title="온라인"
                none="아무도 같이 안놀아 주네요."
              />
            )}
            {tapId === 2 && (
              <FriendList
                list={friend}
                title="모든 친구"
                none="친구를 기다리고 있어요."
              />
            )}
            {tapId === 3 && (
              <FriendList title="대기" none="대기중인 친구 요청이 없네요." />
            )}
            {tapId === 4 && (
              <FriendList title="차단" none="차단중인 친구가 없네요." />
            )}
          </St.FriendTap>
          <St.Activity>
            <h4>현재 활동 중</h4>
            <p>지금은 조용하네요...</p>
            <span>
              친구가 게임이나 음성 채팅과 같은 활동을 시작하면
              <br />
              여기에 표시되요
            </span>
          </St.Activity>
        </St.FriendContent>
      </St.FriendWrap>
    </>
  );
};

export default Friend;
