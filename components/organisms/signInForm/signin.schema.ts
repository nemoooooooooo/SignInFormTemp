import * as yup from 'yup'
export const SigninSchema = yup
  .object({
    email: yup
      .string()
      .email('This is an invalid email')
      .required('This value  is required'),
    password: yup.string().min(8).max(32).required('This value is required')
  })
  .required()
