import Conversation from "./Conversation";
import useGetConversations from "../../hooks/useGetConversations";
import { getRandomEmoji } from "../../utils/emoji";
function Conversations() {
  const { conversations, loading } = useGetConversations();

  return (
    <div className="py-2 flex flex-col overflow-auto">
      {conversations?.map((conversation) => (
        <Conversation
          key={conversation._id}
          conversation={conversation}
          emoji={getRandomEmoji()}
          lastIdx={conversations.length - 1}
        />
      ))}
      {loading ? <span className="loading loading-spinner"></span> : null}
    </div>
  );
}

export default Conversations;
