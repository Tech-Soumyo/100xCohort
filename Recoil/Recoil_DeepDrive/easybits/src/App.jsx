import "./App.css";
import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";

import {
  networkAtom,
  jobsAtom,
  messagingAtom,
  notificationsAtom,
  totalNotificationSelector,
} from "./atom";
function App() {
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  );
}

function MainApp() {
  const networkFunctionCount = useRecoilValue(networkAtom);
  const jobsCount = useRecoilValue(jobsAtom);
  const messagingCount = useRecoilValue(messagingAtom);
  const notificationsCount = useRecoilValue(notificationsAtom);
  const totalNotiCount = useRecoilValue(totalNotificationSelector);

  return (
    <>
      <button>Home</button>
      <button>
        My Network ({networkFunctionCount >= 100 ? "99+" : networkFunctionCount}
        )
      </button>
      <button>jobs {jobsCount}</button>
      <button>Messaging {messagingCount}</button>
      <button>Notifications {notificationsCount}</button>
      <button>Me {totalNotiCount}</button>
    </>
  );
}

export default App;
