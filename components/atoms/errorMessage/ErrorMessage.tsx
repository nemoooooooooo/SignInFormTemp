import { Box, Typography } from '@mui/material'
import { FC } from 'react'

interface ErrorMessageTypes {
  errorMessage: string
  color?: string
  mt?: number
  alignItems?: string
  justifyContent?: string
  fontSize?: string
  fontWeight?: string
}

export const ErrorMessage: FC<ErrorMessageTypes> = ({
  errorMessage,
  color = '#F91732',
  mt = 0,
  alignItems = 'left',
  justifyContent = 'left',
  fontSize = '14px',
  fontWeight = '400'
}) => {
  return (
    <Box
      mt={mt}
      display="flex"
      alignItems={alignItems}
      justifyContent={justifyContent}
    >
      <Typography sx={{ color, fontSize, fontWeight }}>{errorMessage}</Typography>
    </Box>
  )
}
