import { atom, selector } from "recoil";
import axios from "axios";

export const notifications = atom({
  key: "networkAtom",
  default: selector({
    key: "networkSelector",
    get: async () => {
      const res = await axios.get(
        "https://sum-server.100xdevs.com/notifications"
      );
      return res.data;
    },
  }),
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
