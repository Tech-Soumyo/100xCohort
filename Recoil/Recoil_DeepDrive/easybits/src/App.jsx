import "./App.css";
import {
  RecoilRoot,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";

import {
  networkAtom,
  jobsAtom,
  messagingAtom,
  notificationsAtom,
  totalNotificationSelector,
  addAtom,
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

  // useRecoilState is alternative of useState hook. It is dynamic. If one have to place a button as a differnt component then It is the only option we have

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
      <ButtonHook />
    </>
  );
}

function ButtonHook() {
  const [addAtomCount, setAddAtomCount] = useRecoilState(addAtom);

  return (
    // <button
    //   onClick={() => {
    //     setAddAtomCount(addAtomCount + 1);
    //   }}
    // > Add Count ({addAtomCount}) </button>
    <button
      onClick={() => {
        setAddAtomCount(addAtomCount + 1);
      }}
    >
      Add Count ({addAtomCount})
    </button>
  );

  // const setAddAtomCount = useSetRecoilState(addAtom);

  // return (
  //   <button
  //     onClick={() => {
  //       setAddAtomCount((c) => c + 1);
  //     }}
  //   >
  //     Add Count ({setAddAtomCount()})
  //   </button>
  // );
}

export default App;
