import { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  IcClosepop,
  IcCreateServer,
  IcHeadPhone,
  IcHeadphoneMute,
  IcImgInput,
  IcMicMute,
  IcMicOn,
  IcSetting,
} from '@/assets';
import { dm, server } from '@/mocks/server';
import { RootState } from '@/stores/store';
import { togglePopup } from '@/stores/reducers/server';
import ServerImg from '../serverImg';
import Input from '../input';
import Button from '../button';
import { useInput } from '@/hooks';
import * as St from './server.module';

const Server = () => {
  const dispatch = useDispatch();
  const [headphone, setHeadphone] = useState(false);
  const [mic, setMic] = useState(false);
  const onMic = useCallback(() => {
    if (headphone && mic) {
      setHeadphone(false);
      setMic(false);
    } else {
      setMic((prev) => !prev);
    }
  }, [headphone, mic]);
  const onHeadPhone = useCallback(() => {
    switch (true) {
      case headphone === false && mic === false:
        setHeadphone(true);
        setMic(true);
        break;
      case headphone === true && mic === true:
        setHeadphone(false);
        setMic(false);
        break;
      case mic === true:
        setHeadphone((prev) => !prev);
        break;
      default:
        break;
    }
  }, [headphone, mic]);
  // 서버 이름
  const [serverName, changeServerName, setServerName] = useInput('');
  // 서버 추가
  const { popupOpen, popupType } = useSelector(
    (state: RootState) => state.server
  );
  const onPopup = useCallback(() => {
    dispatch(togglePopup('server'));
  }, [dispatch]);
  // 이미지 미리보기
  const [imagePreview, setImagePreview] = useState<null | string>(null);
  const changeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    // 선택파일
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  // 서버 생성 버튼
  const onCreateServer = useCallback(() => {
    if (serverName.trim() === '') return;
    setServerName('');
    setImagePreview(null);
    onPopup();
  }, [serverName, onPopup, setServerName]);
  return (
    <St.Server>
      <div>
        <Link to="/service/friend">
          {dm.map((dms) => (
            <ServerImg data={dms} key={dms.server_id} name="service" />
          ))}
        </Link>
        <St.ServerList>
          {server.map((servers) => (
            <li key={servers.server_id}>
              <Link to={`/server/${servers.name}`}>
                <ServerImg data={servers} name="server" />
              </Link>
            </li>
          ))}
        </St.ServerList>
        <St.CreateServer onClick={onPopup}>
          <IcCreateServer />
        </St.CreateServer>
      </div>
      <St.Setting>
        <button onClick={onHeadPhone}>
          {headphone ? <IcHeadphoneMute /> : <IcHeadPhone />}
        </button>
        <button onClick={onMic}>{mic ? <IcMicMute /> : <IcMicOn />}</button>
        <button>
          <IcSetting />
        </button>
      </St.Setting>
      {popupOpen && popupType === 'server' && (
        <St.PopupWrap>
          <St.PopupContent>
            <St.PopupTop>
              <St.PopupTitle>
                <p /> <h4>서버생성</h4>
                <button onClick={onPopup}>
                  <IcClosepop />
                </button>
              </St.PopupTitle>
              <p>새로운 서버의 아이콘과 이름을 정해주세요.</p>
              <label>
                <div>
                  {imagePreview ? (
                    <img src={imagePreview} alt="미리보기" />
                  ) : (
                    <IcImgInput />
                  )}
                </div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={changeImage}
                  hidden
                />
              </label>
              <span>서버이름</span>
              <Input
                onChange={changeServerName}
                value={serverName}
                placeholder="서버이름"
              />
            </St.PopupTop>
            <St.PopupBtm>
              <St.Back onClick={onPopup}>뒤로가기</St.Back>
              <Button onClick={onCreateServer} type="submit">
                만들기
              </Button>
            </St.PopupBtm>
          </St.PopupContent>
          <St.Popupbg onClick={onPopup} />
        </St.PopupWrap>
      )}
    </St.Server>
  );
};

export default Server;
