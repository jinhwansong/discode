import { useLocation } from 'react-router-dom';
import Service from '@/components/service';
import * as St from './friend.module.ts';
import { IcPeople } from '@/assets/index.ts';

const Friend = () => {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <Service />
      <St.FriendWrap>
        <St.FriendTop>
          <St.Title>
            <IcPeople /><p>친구</p>
          </St.Title>
        </St.FriendTop>
        <St.FriendContent>
          <St.FriendTap>asd</St.FriendTap>
          <St.Activity>asd</St.Activity>
        </St.FriendContent>
      </St.FriendWrap>
    </>
  );
};

export default Friend;
