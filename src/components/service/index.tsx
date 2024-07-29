import { useCallback } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/stores/store';
import { togglePopup } from '@/stores/reducers/server';
import DmImg from '@/components/dmImg';
import { IcClosepop, IcPeople, IcPlus } from '@/assets';
import { friend } from '@/mocks/server';
import * as St from './service.module';
import Group from '../group';

const Service = () => {
  const location = useLocation();
  const param = useParams();
  const link = [
    { name: '친구', to: '/service/friend', param: 'friend', img: <IcPeople /> },
    // { name: '상점', to: '/service/store', param: 'store', img: <IcCart /> },
  ];
  // dm생성
  const dispatch = useDispatch();
  const { popupOpen, popupType } = useSelector(
    (state: RootState) => state.server
  );

  const onPopup = useCallback(() => {
    dispatch(togglePopup('friend'));
  }, [dispatch]);

  // dm 삭제 리스트 추후 id값 불러서 사용 하면됨.
  const onDmListDelete = useCallback(() => {
    console.log('asd');
  }, []);

  return (
    <St.DmWrap>
      <St.Find>
        <button>사용자 또는 채널 찾기</button>
      </St.Find>
      <St.Article>
        <St.Nav>
          {link.map((links) => (
            <St.Links
              to={links.to}
              key={links.to}
              $active={location.pathname.split('/')[2] === links.param}
            >
              {links.img}
              {links.name}
            </St.Links>
          ))}
        </St.Nav>
        <St.DmTitle>
          <h4>다이렉트 메시지</h4>
          <button onClick={onPopup}>
            <IcPlus />
          </button>
        </St.DmTitle>
        <St.Nav>
          {friend.map((dms, i) => (
            <St.Dmlist key={i} $active={param.id === String(dms.id)}>
              <Link to={`/service/dm/${dms.id}`} state={{ user: dms }}>
                <DmImg
                  profile={dms.profileImage}
                  name={dms.name}
                  online={dms.user_state}
                />

                <p>{dms.name}</p>
              </Link>
              <button onClick={onDmListDelete}>
                <IcClosepop />
              </button>
            </St.Dmlist>
          ))}
        </St.Nav>
      </St.Article>
      <St.Popup>{popupOpen && popupType === 'friend' && <Group />}</St.Popup>
    </St.DmWrap>
  );
};

export default Service;
