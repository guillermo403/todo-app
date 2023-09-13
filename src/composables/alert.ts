import Swal, { type SweetAlertIcon } from 'sweetalert2'

interface Props {
  title: string
  text?: string
  icon: SweetAlertIcon
  showConfirmButton?: boolean
  showCancelButton?: boolean
  confirmButtonText?: string
  confirmButtonColor?: string
  cancelButtonText?: string
  onConfirm?: () => void
  onDeny?: () => void
}

export const useAlert = ({
  title,
  text,
  icon,
  confirmButtonText,
  confirmButtonColor,
  showConfirmButton = false,
  showCancelButton = false,
  cancelButtonText = 'Cancel',
  onConfirm = () => null,
  onDeny = () => null
}: Props) => {
  Swal.fire({
    title,
    text,
    icon,
    confirmButtonText,
    confirmButtonColor,
    cancelButtonText,
    showConfirmButton,
    showCancelButton,
    backdrop: false
  }).then((res) => {
    if (res.isConfirmed) return onConfirm()
    if (res.isDenied) return onDeny()
  })
}
