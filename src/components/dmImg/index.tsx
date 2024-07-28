import { useParams } from 'react-router-dom';
import * as St from './dm.module';

interface IDmImg {
  id: number;
  profile: string;
  name: string;
}

const DmImg = ({ id, profile, name }: IDmImg) => {
  const param = useParams();
  return (
    <St.DmImgWrap $active={param.id === String(id)}>
      <img src={profile} alt={name} />
    </St.DmImgWrap>
  );
};

export default DmImg;
