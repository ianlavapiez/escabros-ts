import Swal, { SweetAlertIcon } from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export const fireAlertWithConfirmation = (
  confirmationText: string,
  callback: (confirmed: boolean) => void
) => {
  const MySwal = withReactContent(Swal);

  MySwal.fire({
    title: <p> {confirmationText}</p>,
    footer: "Escabros Pharmacy v2",
    icon: "warning",
    showCancelButton: true,
    cancelButtonColor: "#d33",
    confirmButtonColor: "#3085d6",
  }).then((confirmed) => {
    callback(confirmed && confirmed.value === true);
  });
};

export const fireAlert = (text: string, icon: SweetAlertIcon) => {
  const MySwal = withReactContent(Swal);

  MySwal.fire({
    title: <p>{text}</p>,
    icon,
  });
};
