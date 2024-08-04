import notification from "antd/es/notification";
import { NotificationArgsProps } from "antd";

const useNotification = () => {
  const [api, contextHolder] = notification.useNotification();

  const openNotification = (
    description: string,
    title: string,
    type: NotificationArgsProps["type"] = "info"
  ) => {
    api[type]({
      description,
      message: title,
      placement: "topRight",
    });
  };

  return {
    contextHolder,
    openNotification,
  };
};

export default useNotification;
