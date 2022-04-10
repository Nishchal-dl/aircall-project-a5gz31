import {
  ArchiveOutlined,
  Avatar,
  Box,
  Button,
  CallbackOutlined,
  ChevronLeftOutlined,
  ChevronRightOutlined,
  Divider,
  Dropdown,
  DropdownButton,
  Flex,
  FormItem,
  Grid,
  Icon,
  InboundOutlined,
  Menu,
  MenuItem,
  MenuVerticalOutlined,
  Persona,
  PreferencesOutlined,
  Spacer,
  Tag,
  TextFieldInput,
  Typography,
} from '@aircall/tractor';
import React, { useState } from 'react';
import { Call } from '../types/Call';
import { CallRowComponent } from './CallRowComponent';

type CallsPageProps = {
  calls: Array<Call>;
  setPage: (pageNumber: number) => void;
  page: number;
  previousPage: () => void;
  nextPage: () => void;
};

export const CallsPage: React.FC<CallsPageProps> = ({
  calls,
  page,
  setPage,
  previousPage,
  nextPage,
}) => {
  const [isOpen, toggleModal] = useState(true);

  const showModal = () => {
    toggleModal(true);
  };

  const closeModal = () => {
    toggleModal(false);
  };
  return (
    <Box px="1rem" py="0.5rem">
      <Flex flexDirection="row-reverse">
        <Spacer direction="horizontal" alignItems="center" space="xxxs">
          <Avatar size="large">NI</Avatar>
          <Persona title="Alicia Schmidt" subtitle="call" size="xSmall" />
        </Spacer>
      </Flex>
      <Box width="80%" m="auto">
        <Typography variant="displayM" mt="1rem">
          Call History
        </Typography>
        <Flex py="0.01rem" alignItems="center" justifyContent="space-between">
          <FormItem name="firstName" my="1rem" flex="1">
            <TextFieldInput placeholder="# Search" />
          </FormItem>
          <Dropdown
            trigger={
              <DropdownButton
                mode="link"
                variant="primary"
                iconClose={<PreferencesOutlined />}
              >
                Filters
              </DropdownButton>
            }
            position="bottom"
            anchor="end"
          >
            <Menu>
              <MenuItem>Age 18+</MenuItem>
              <MenuItem>Age under 18</MenuItem>
            </Menu>
          </Dropdown>
        </Flex>
        {/* Heading */}
        <Grid
          gridTemplateColumns="2rem 6rem  7rem 6rem 10rem auto 5rem 2rem"
          gridGap={4}
          py="0.5rem"
          borderY="1px solid #ccc"
        >
          <Typography variant="body" textAlign="center" gridColumn="2">
            Call Type
          </Typography>
          <Typography variant="body" textAlign="center">
            Duration
          </Typography>
          <Typography variant="body" textAlign="center">
            Direction
          </Typography>
          <Typography variant="body" textAlign="center">
            Called At
          </Typography>
          <Typography variant="body" textAlign="center">
            Notes
          </Typography>
          <Typography textAlign="center">Archive</Typography>
        </Grid>

        {calls.map((call) => (
          <CallRowComponent call={call} key={call.id} />
        ))}

        <Flex flexDirection="row-reverse">
          <ChevronRightOutlined onClick={nextPage} />
          {page}
          <ChevronLeftOutlined onClick={previousPage} />
        </Flex>
      </Box>
    </Box>
  );
};
