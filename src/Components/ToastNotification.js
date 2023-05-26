import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const successNotification = () => {
  toast.success("New todo has added", {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
};

const warningNotification = () => {
  toast.warn("Todo deleted", {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
};

export default function ToastNotification() {
  return <ToastContainer></ToastContainer>;
}

export { successNotification, warningNotification };
