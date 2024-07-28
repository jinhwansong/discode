import { useLocation, useParams } from 'react-router-dom';
import * as St from './server.module';

interface IServer {
  data: {
    server_id: number;
    name: string;
    profile: string;
  };
  name: string;
}

const ServerImg = ({ data, name }: IServer) => {
  const location = useLocation();
  const param = useParams();
  const path = location.pathname.split('/')[1];
  const active = () => {
    if (name === 'service') {
      return path === name;
    }
    return path === name && param.name === data.name;
  };
  return (
    <St.ImgWrap $active={active()}>
      <div>
        <img src={data.profile} alt={data.name} />
      </div>
    </St.ImgWrap>
  );
};

export default ServerImg;
