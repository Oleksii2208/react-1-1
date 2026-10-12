import FriendList from "./components/FriendList/FriendList";
import Profile from "./components/Profile/Profile";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";

const App = () => {
  return (
    <>
      <Profile />
      <FriendList />
      <TransactionHistory />
    </>
  );
};

export default App;
