import { Link } from 'react-router-dom';
import { BiDotsVerticalRounded, BiMessageSquareDetail, BiSearch } from 'react-icons/bi';
import { useInput } from '@/hooks';
import Input from '../input';
import DmImg from '../dmImg';
import * as St from './friendList.module';

interface IFriendList {
  list?: {
    id: number;
    name: string;
    profileImage: string;
    user_state: string;
    created_at: string;
  }[];
  title: string;
  none: string;
}

const FriendList = ({ list, title, none }: IFriendList) => {
  const [search, changeSearch] = useInput('');
  if (list?.length === 0 || list === undefined) {
    return <St.None>{none}</St.None>;
  }
  return (
    <>
      <St.InputForm>
        <Input placeholder="검색하기" onChange={changeSearch} value={search} />
        <button type="submit">
          <BiSearch />
        </button>
      </St.InputForm>
      <St.Title>
        {title} - {list?.length}명
      </St.Title>
      <St.List>
        {list?.map((lists) => (
          <div key={lists.id}>
            <Link to={`/service/dm/${lists.id}`} state={{ user: lists }}>
              <St.LeftBox>
                <DmImg
                  profile={lists.profileImage}
                  name={lists.name}
                  online={lists.user_state}
                />
                <p>
                  {lists.name}
                  <span>
                    {lists.user_state === 'online' ? '온라인' : '오프라인'}
                  </span>
                </p>
              </St.LeftBox>
            </Link>
            <St.RightBox>
              <Link to={`/service/dm/${lists.id}`} state={{ user: lists }}>
                <BiMessageSquareDetail />
              </Link>
              <button type="button"><BiDotsVerticalRounded /></button>
            </St.RightBox>
          </div>
        ))}
      </St.List>
    </>
  );
};

export default FriendList;
