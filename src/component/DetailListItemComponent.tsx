import {
  Box,
  CallbackOutlined,
  Icon,
  Spacer,
  Tag,
  Typography,
} from '@aircall/tractor';

type DetailListItemComponentProps = {
  label: string;
}

export const DetailListItemComponent:React.FC<DetailListItemComponentProps> = ({ label, children}) => {
  return (
    <Box my="0.75rem">
      <Spacer space="xxs" direction="vertical">
        <Spacer>
          <Typography variant="body" textAlign="initial" color="grey.dark">
            {label}
          </Typography>
        </Spacer>
        <Spacer space="xxs">
          {children}
        </Spacer>
      </Spacer>
    </Box>
  );
}
