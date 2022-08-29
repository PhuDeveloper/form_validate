import { Typography } from '@mui/material';
import { RatFormControlLabelPropsInterface } from './type';

const FormControlLabelCustom = (props: RatFormControlLabelPropsInterface) => {
  const { children, style } = props;
  return (
    <Typography sx={style} variant="body2" component="h2" marginBottom={1}>
      {children}
    </Typography>
  );
};

export default FormControlLabelCustom;
