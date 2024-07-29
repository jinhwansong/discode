import Chat from '@/components/chat';
import * as St from './server.module.ts';

const Server = () => {
  // 추후 삭제 예정
  const mock = [
    {
      user: 'a',
      text: '안녕하세요.',
      timestamp: '2023-11-22 10:00:00',
      isMine: true,
    },
    {
      user: 'b',
      text: '반갑습니다.',
      timestamp: '2023-11-22 10:05:00',
      isMine: false,
    },
  ];
  return (
    <St.ServerWrap>
      <St.ServerTop>
        <p>@일반</p>
      </St.ServerTop>
      <Chat data={mock} name="11" />
    </St.ServerWrap>
  );
};

export default Server;
