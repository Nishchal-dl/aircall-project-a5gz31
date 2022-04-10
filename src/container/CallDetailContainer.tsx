import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router';
import { CallApi } from '../api/CallApi';
import { CallDetailComponent } from '../component/CallDetailComponent';
import { Call, ID } from '../types/Call';

export const CallDetail:React.FC<{}> = () => {
  const [call, setCall] = useState<Call>();

  const { id } = useParams<ID>()

  useEffect(() => {
    id && CallApi.getCallsById(id)
    .then(res => res.data)
    .then(res => setCall(res))
  }, [])

  return<><CallDetailComponent call={call}/></>
}