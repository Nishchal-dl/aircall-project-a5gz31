import {
  ArchiveOutlined,
  Box,
  CallbackOutlined,
  Dropdown,
  DropdownButton,
  Grid,
  Icon,
  InboundOutlined,
  Menu,
  MenuItem,
  MenuVerticalOutlined,
  Tag,
  Typography,
  VoicemailOutlined,
} from '@aircall/tractor';
import { Call } from '../types/Call';
import { formatdate, secondsToHms } from '../utils/DateTimeUtils';

type CallRowComponentProps = {
  call: Call;
};

export const CallRowComponent: React.FC<CallRowComponentProps> = ({ call }) => {
  return (
    <Grid
      gridTemplateColumns="2rem 6rem 7rem 6rem 10rem auto 6rem 2rem"
      gridGap={4}
      borderBottom="1px solid #ccc"
      alignItems="center"
    >
      {call.call_type === 'missed' ? (
        <Icon component={CallbackOutlined} mx="auto" color="red.base" />
      ) : call.call_type === 'answered' ? (
        <Icon component={CallbackOutlined} mx="auto" color="primary.base" />
      ) : (
        <Icon component={VoicemailOutlined} mx="auto" color="blue.base" />
      )}
      <Tag
        size="small"
        variant="blue"
        alignItems="center"
        justifyContent="center"
      >
        {call.call_type}
      </Tag>
      <Typography variant="body" textAlign="center">
        {secondsToHms(call.duration)}
      </Typography>
      <Tag
        size="small"
        variant="blue"
        alignItems="center"
        justifyContent="center"
      >
        <InboundOutlined size="16px" />
        {call.direction}
      </Tag>
      <Typography variant="body" textAlign="center">
        {formatdate(call.created_at)}
      </Typography>
      <Typography textAlign="left" ellipsis>
        {call.notes.map((note) => note.content).join(',')}
      </Typography>
      {call.is_archived ? (
        <Tag
          size="small"
          variant="blue"
          alignItems="center"
          justifyContent="center"
        >
          <ArchiveOutlined size="16px" />
          Archived
        </Tag>
      ) : (
        <p></p>
      )}
      <Box>
        <Dropdown
          trigger={
            <DropdownButton
              mode="link"
              variant="primary"
              iconClose={<MenuVerticalOutlined />}
            ></DropdownButton>
          }
          position="bottom"
          anchor="end"
        >
          <Menu>
            <MenuItem>Archive</MenuItem>
            <MenuItem>Details</MenuItem>
          </Menu>
        </Dropdown>
      </Box>
    </Grid>
  );
};
