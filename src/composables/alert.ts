import Swal, { type SweetAlertIcon } from 'sweetalert2'

interface Props {
  title: string
  text: string
  icon: SweetAlertIcon
  confirmButtonText: string
  confirmButtonColor: string
  onConfirm: () => void
  onDeny: () => void
}

export const useAlert = ({
  title,
  text,
  icon,
  confirmButtonText,
  confirmButtonColor,
  onConfirm,
  onDeny
}: Props) => {
  Swal.fire({
    title,
    text,
    icon,
    confirmButtonText,
    confirmButtonColor,
    cancelButtonText: 'Cancel',
    showCancelButton: true,
    backdrop: false
  }).then((res) => {
    if (res.isConfirmed) return onConfirm()
    if (res.isDenied) return onDeny()
  })
}
