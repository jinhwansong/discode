import { useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/stores/store';
import { togglePopup } from '@/stores/reducers/server';
import Service from '@/components/service';
import DmImg from '@/components/dmImg';
import Group from '@/components/group';
import Chat from '@/components/chat';
import { IcAddfriend, IcCall } from '@/assets';
import * as St from './dm.module';

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
  return (
    <>
      <Service />
      <St.DmWrap>
        <St.DmTop>
          <St.DmProfile>
            <DmImg
              profile={user.profileImage}
              name={user.name}
              online={user.user_state}
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
          <Chat data={mock} name={user.name} />
          <St.DmFriend>
            <St.Back />
            <St.FriendProfile>
              <St.FriendProfileImg>
                <DmImg
                  profile={user.profileImage}
                  name={user.name}
                  online={user.user_state}
                />
              </St.FriendProfileImg>
              <p>{user.name}</p>
              <St.FriendInfo>
                <span>가입시기 :</span>
                <p>
                  {user.created_at.split('-')[0]}년
                  {user.created_at.split('-')[1]}월
                  {user.created_at.split('-')[2]}일
                </p>
              </St.FriendInfo>
            </St.FriendProfile>
          </St.DmFriend>
        </St.DmContent>
        <St.Popup>{popupOpen && popupType === 'friends' && <Group />}</St.Popup>
      </St.DmWrap>
    </>
  );
};

export default Dm;
