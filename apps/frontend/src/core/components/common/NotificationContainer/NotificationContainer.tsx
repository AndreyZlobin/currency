import { VFC } from 'react';
import { toast } from 'react-toastify';
import { NOTIFICATION_TIMEOUT } from '@core/constants';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NotificationContainerProps } from '@components/common/NotificationContainer/types';

export const NotificationContainer: VFC<NotificationContainerProps> = ({
  position = toast.POSITION.BOTTOM_RIGHT,
  autoClose = NOTIFICATION_TIMEOUT,
  ...props
}) => {
  return (
    <ToastContainer
      hideProgressBar
      closeOnClick
      pauseOnFocusLoss
      pauseOnHover
      position={position}
      autoClose={autoClose}
      draggable={false}
      rtl={false}
      newestOnTop={false}
      {...props}
    />
  );
};
