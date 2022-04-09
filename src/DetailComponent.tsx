import {
  Box,
  CallbackOutlined,
  Icon,
  Spacer,
  Tag,
  Typography,
} from '@aircall/tractor';

export function DetailComponent() {
  return (
    <Box my="0.5rem">
      <Spacer space="xs" direction="vertical">
        <Spacer>
          <Typography variant="body" textAlign="initial" color="grey.dark">
            Call Type
          </Typography>
        </Spacer>
        <Spacer space="s">
          <Icon component={CallbackOutlined} mx="auto" color="red.base" />
          <Tag
            size="small"
            variant="blue"
            alignItems="center"
            justifyContent="center"
          >
            Missed
          </Tag>
        </Spacer>
      </Spacer>
    </Box>
  );
}
