import Swal, { type SweetAlertIcon, type SweetAlertInput } from 'sweetalert2'

interface Props {
  title: string
  text?: string
  icon: SweetAlertIcon
  showConfirmButton?: boolean
  showCancelButton?: boolean
  confirmButtonText?: string
  confirmButtonColor?: string
  cancelButtonText?: string
  input?: SweetAlertInput
  inputValue?: string
  onConfirm?: (arg0: any) => void
  onDeny?: () => void
}

export const useAlert = ({
  title,
  text,
  icon,
  confirmButtonText = 'Save',
  confirmButtonColor,
  showConfirmButton = false,
  showCancelButton = false,
  cancelButtonText = 'Cancel',
  input,
  inputValue,
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
    input,
    inputValue,
    backdrop: false
  }).then((res) => {
    if (res.isConfirmed) return onConfirm(res)
    if (res.isDenied) return onDeny()
  })
}
