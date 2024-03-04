import { TextFieldProps, TextField } from '@mui/material'

const CustomTextField = (props: TextFieldProps) => {
  const { size = 'small', InputLabelProps, ...rest } = props

  return <TextField size={size} InputLabelProps={InputLabelProps} {...rest} />
}

export default CustomTextField
