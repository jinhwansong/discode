import * as St from './dm.module';

interface IDmImg {
  profile: string;
  name: string;
  online: string;
}

const DmImg = ({ profile, name, online }: IDmImg) => (
  <St.DmImgWrap $active={online === 'online'}>
    <img src={profile} alt={name} />
  </St.DmImgWrap>
);

export default DmImg;
