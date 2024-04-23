import { atom, selector } from "recoil";

export const networkAtom = atom({
  key: "networkAtom",
  default: 102,
});

export const jobsAtom = atom({
  key: "jobsAtom",
  default: 0,
});

export const notificationsAtom = atom({
  key: "notificationsAtom",
  default: 12,
});

export const messagingAtom = atom({
  key: "messagingAtom",
  default: 0,
});

export const addAtom = atom({
  key: "addAtom",
  default: 0,
});

export const totalNotificationSelector = selector({
  key: "totalNotificationSelector",
  get: ({ get }) => {
    const networkAtomCount = get(networkAtom);
    const jobsAtomCount = get(jobsAtom);
    const notificationsAtomCount = get(notificationsAtom);
    const messagingAtomCount = get(messagingAtom);
    return (
      networkAtomCount +
      jobsAtomCount +
      notificationsAtomCount +
      messagingAtomCount
    );
  },
});

export const notifications = atom({
  key: "notificationAtom",
  default: {
    // networks: 4,
    // jobs: 6,
    // masseging: 3,
    // notifications: 3,
  },
});

export const totalNotificationCountSelector = selector({
  key: "totalNotificationCountSelector",
  get: ({ get }) => {
    const allNotifications = get(notifications);
    return (
      allNotifications.networks +
      allNotifications.jobs +
      allNotifications.masseging +
      allNotifications.notifications
    );
  },
});
