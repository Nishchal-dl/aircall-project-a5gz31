import { Spacer, Tag, ArchiveOutlined, Typography, Grid, InboundOutlined, FormItem, TextFieldInput, Button, CallbackOutlined, Icon, ClockOutlined } from '@aircall/tractor';
import { Modal } from '@aircall/tractor/es/components/Modal';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import { CallApi } from '../api/CallApi'
import { DetailListItemComponent } from './DetailListItemComponent';
import { Call, ID } from '../types/Call'
import { formatdate, secondsToHms } from '../utils/DateTimeUtils';
import { CallType } from './CallType';
import { CallIcon } from './CallIcon';

type CallDetailComponentProp = {
  call: Call | undefined;
}

export const CallDetailComponent: React.FC<CallDetailComponentProp> = ({call}) => {
  const navigate = useNavigate()
  const closeModal = () => {
    navigate(`/calls`);
  } 
  return <>
    {call && <Modal.Dialog show={true} onHide={closeModal}>
      <Modal.Header>
        <Modal.Title>
          <Spacer space="xs">
            Call Details
            {call?.is_archived && <Tag
              size="small"
              alignItems="center"
              justifyContent="center"
              bg="yellow.light"
              color="yellow.darker"
            >
              <ArchiveOutlined size="16px" />
              Archived
            </Tag>}
          </Spacer>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body backgroundColor="white">
        <Typography variant="body">
          <Grid gridTemplateColumns="33% 33% 33%">
            <DetailListItemComponent label="Call Type">
              <CallIcon callType={call.call_type} />
              <CallType callType={call.call_type}/>
            </DetailListItemComponent>
            <DetailListItemComponent label="Call Duration">
              {call && secondsToHms(call?.duration)}
            </DetailListItemComponent>
            <DetailListItemComponent label="Call Direction">
              <Tag
                size="small"
                variant="blue"
                alignItems="center"
                justifyContent="center"
              >
              {call?.direction}
              </Tag>
            </DetailListItemComponent>
          </Grid>

          <Grid gridTemplateColumns="33% 33% 33%">
            <DetailListItemComponent label="Called At">
              {formatdate(call.created_at)}
            </DetailListItemComponent>
            <DetailListItemComponent label="Call From">
              {call.from}
            </DetailListItemComponent>
            <DetailListItemComponent label="Call To">
              {call?.to}
            </DetailListItemComponent>
          </Grid>

          <Grid gridTemplateColumns="auto auto auto">
            <DetailListItemComponent label="Called Via">
              {call?.via}
            </DetailListItemComponent>
          </Grid>
          
          <DetailListItemComponent label="Notes">
            <Typography textAlign="left">
              {call.notes.map(note => <li key={note.id}>{note.content}</li>)}
              <br />
              <FormItem name="note">
                <TextFieldInput placeholder="Type in Notes" />
              </FormItem>
              <Button mode="link" type="button" className="padding-0">
                + Add Notes
              </Button>
            </Typography>
          </DetailListItemComponent>
          
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
  </Modal.Dialog>}
  </>
}
