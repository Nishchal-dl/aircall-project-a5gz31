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
  OutboundOutlined,
  Tag,
  Typography,
  VoicemailOutlined,
} from '@aircall/tractor';
import { Link, useNavigate } from 'react-router-dom';
import { Call } from '../types/Call';
import { formatdate, secondsToHms } from '../utils/DateTimeUtils';
import { CallIcon } from './CallIcon';
import { CallType } from './CallType';

type CallRowComponentProps = {
  call: Call;
};

export const CallRowComponent: React.FC<CallRowComponentProps> = ({ call }) => {
  const navigate = useNavigate()
  return (
    <Grid
      gridTemplateColumns="2rem 6rem 7rem 6rem 10rem auto 6rem 2rem"
      gridGap={4}
      borderBottom="1px solid #ccc"
      alignItems="center"
    >
      <CallIcon callType={call.call_type} />
      <CallType callType={call.call_type}/>
      <Typography variant="body" textAlign="center">
        {secondsToHms(call.duration)}
      </Typography>

      <Tag
        size="small"
        variant="blue"
        alignItems="center"
        justifyContent="center"
      >
        {call.direction === 'inbound' ? (
          <InboundOutlined size="16px" />
        ) : (
          <OutboundOutlined size="16px" />
        )}

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
          bg="yellow.light"
          color="yellow.darker"
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
            <MenuItem onClick={() => navigate(`/calls/${call.id}`)}>
              Details
            </MenuItem>
          </Menu>
        </Dropdown>
      </Box>
    </Grid>
  );
};
