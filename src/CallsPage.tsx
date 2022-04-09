import {
  ArchiveOutlined,
  Avatar,
  Box,
  Button,
  CallbackOutlined,
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
import { Modal } from '@aircall/tractor/es/components/Modal';
import Reacct, { useState } from 'react';
import { DetailComponent } from './DetailComponent';

export function CallsPage() {
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
          gridTemplateColumns="2rem 6rem  5rem 6rem 10rem auto 5rem 2rem"
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

        <Grid
          gridTemplateColumns="2rem 6rem 5rem 6rem 10rem auto 5rem 2rem"
          gridGap={4}
          borderBottom="1px solid #ccc"
          alignItems="center"
        >
          <Icon component={CallbackOutlined} mx="auto" color="red.base" />
          <Tag
            size="small"
            variant="blue"
            alignItems="center"
            justifyContent="center"
          >
            Missed
          </Tag>
          <Typography variant="body" textAlign="center">
            1m 8s
          </Typography>
          <Tag
            size="small"
            variant="blue"
            alignItems="center"
            justifyContent="center"
          >
            <InboundOutlined size="16px" />
            Inbound
          </Tag>
          <Typography variant="body" textAlign="center">
            June 11 2022 | 8pm
          </Typography>
          <Typography textAlign="left" ellipsis>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            tempus ex tempus, dictum dolor quis, condimentum nisi. Maecenas vel
            turpis ut tortor ullamcorper sagittis. Aliquam commodo volutpat
            neque. Sed dignissim faucibus velit, nec blandit eros. Praesent vel
            fermentum magna. In et vulputate lectus, ac lobortis nisl. Duis ac
            convallis nisi, mattis condimentum lacus. Cras suscipit posuere
            metus
          </Typography>
          <Tag
            size="small"
            variant="blue"
            alignItems="center"
            justifyContent="center"
          >
            <ArchiveOutlined size="16px" />
            Archived
          </Tag>
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
                <MenuItem onClick={showModal}>Details</MenuItem>
              </Menu>
            </Dropdown>
          </Box>
        </Grid>
      </Box>

      <Modal.Dialog show={isOpen} onHide={closeModal}>
        <Modal.Header>
          <Modal.Title>
            <Spacer space="xs">
              Call Details
              <Tag
                size="small"
                variant="blue"
                alignItems="center"
                justifyContent="center"
              >
                <ArchiveOutlined size="16px" />
                Archived
              </Tag>
            </Spacer>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body backgroundColor="white">
          <Typography variant="body">
            <Grid gridTemplateColumns="auto auto auto">
              <DetailComponent />
              <DetailComponent />
              <DetailComponent />
            </Grid>
            <Spacer>
              <Typography variant="body" textAlign="center">
                1m 8s
              </Typography>

              <Tag
                size="small"
                variant="blue"
                alignItems="center"
                justifyContent="center"
              >
                <InboundOutlined size="16px" />
                Inbound
              </Tag>
              <Typography variant="body" textAlign="center">
                June 11 2022 | 8pm
              </Typography>
            </Spacer>

            <Typography variant="body" textAlign="initial" color="grey.dark">
              Notes
            </Typography>
            <Typography textAlign="left">
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              </li>
              <li>
                tempus ex tempus, dictum dolor quis, condimentum nisi. Maecenas
              </li>
              <br />
              <FormItem name="note">
                <TextFieldInput placeholder="Type in Notes" />
              </FormItem>
              <Button mode="link" type="button" className="padding-0">
                + Add Notes
              </Button>
            </Typography>
          </Typography>
        </Modal.Body>
        <Modal.Footer>
          <Button mode="link" type="button" onClick={closeModal}>
            UnArchive
          </Button>
          <Button mode="link" type="button" onClick={closeModal}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </Box>
  );
}
