import { FixedSizeList } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';
import Input from '@/components/input';
import { useInput } from '@/hooks';
import * as St from './chat.module.ts';

interface IMessage {
  index: number;
  style: React.CSSProperties;
}
interface IChat {
  data: { user: string; text: string; timestamp: string; isMine: boolean }[];
  name: string;
}

const Chat = ({ data, name }: IChat) => {
  // 채팅
  const [message, changeMessage] = useInput('');
  // 올라온 채팅
  const rowRenderer = ({ index, style }: IMessage) => {
    const post = data[index];
    return <St.DmChatRow style={style}>{post.text}</St.DmChatRow>;
  };
  return (
    <St.DmChat>
      <St.DmChatMessage>
        <AutoSizer>
          {({ height, width }) => (
            <FixedSizeList
              height={height}
              width={width}
              itemCount={data.length}
              itemData={data}
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
          placeholder={`@${name}에 메시지 보내기`}
        />
      </St.InputMessage>
    </St.DmChat>
  );
};

export default Chat;
