import { useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FixedSizeList } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';
import { RootState } from '@/stores/store';
import { togglePopup } from '@/stores/reducers/server';
import { useInput } from '@/hooks';
import Service from '@/components/service';
import DmImg from '@/components/dmImg';
import Group from '@/components/group';
import Input from '@/components/input';
import { IcAddfriend, IcCall } from '@/assets';
import * as St from './dm.module';

interface IMessage {
  index: number;
  style: React.CSSProperties
}

const Dm = () => {
  const location = useLocation();
  const { user } = location.state;
  const { popupOpen, popupType } = useSelector(
    (state: RootState) => state.server
  );
  const dispatch = useDispatch();
  const onPopup = useCallback(() => {
    dispatch(togglePopup('friends'));
  }, [dispatch]);
  // 채팅
  const [message, changeMessage] = useInput('');
  // 추후 삭제 예정
  const mock = [
    {
      user: 'a',
      text: '안녕하세요.',
      timestamp: '2023-11-22 10:00:00',
      isMine: true,
    },
    {
      user: user.name,
      text: '반갑습니다.',
      timestamp: '2023-11-22 10:05:00',
      isMine: false,
    },
  ];
  // 올라온 채팅

  const rowRenderer = ({ index, style }: IMessage) => {
    const post = mock[index];
    return (
      <St.DmChatRow style={style}>
        {post.text}
      </St.DmChatRow>
    );
  };
  return (
    <>
      <Service />
      <St.DmWrap>
        <St.DmTop>
          <St.DmProfile>
            <DmImg
              id={user.server_id}
              profile={user.profile}
              name={user.name}
            />
            <span>{user.name}</span>
          </St.DmProfile>
          <St.DmLinks>
            <button>
              <IcCall />
            </button>
            <button onClick={onPopup}>
              <IcAddfriend />
            </button>
          </St.DmLinks>
        </St.DmTop>
        <St.DmContent>
          <St.DmChat>
            <St.DmChatMessage>
              <AutoSizer>
                {({ height, width }) => (
                  <FixedSizeList
                    height={height}
                    width={width}
                    itemCount={mock.length}
                    itemData={mock}
                    itemSize={30}
                  >
                    {rowRenderer}
                  </FixedSizeList>
                )}
              </AutoSizer>
            </St.DmChatMessage>
            <St.InputMessage>
              <Input
                onChange={changeMessage}
                value={message}
                placeholder={`@${user.name}에 메시지 보내기`}
              />
            </St.InputMessage>
          </St.DmChat>
          <St.DmFriend>
            <St.Back />
            <St.FriendProfile>
              <St.FriendProfileImg>
                <DmImg
                  id={user.server_id}
                  profile={user.profile}
                  name={user.name}
                />
              </St.FriendProfileImg>
              <p>{user.name}</p>
              <St.FriendInfo>
                <span>가입시기 :</span>
                <p>2024년 6월 8일</p>
              </St.FriendInfo>
            </St.FriendProfile>
          </St.DmFriend>
        </St.DmContent>
        <St.Popup>
          {popupOpen && popupType === 'friends' && <Group user={user} />}
        </St.Popup>
      </St.DmWrap>
    </>
  );
};

export default Dm;
