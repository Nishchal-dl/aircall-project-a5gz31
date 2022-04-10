import { Icon, CallbackOutlined, VoicemailOutlined } from "@aircall/tractor";

type CallIconProp = {
  callType: string;
}

export const CallIcon:React.FC<CallIconProp> = ({ callType }) => (
    <>
    {callType === 'missed' ? (
        <Icon component={CallbackOutlined} mx="auto" color="red.base" />
      ) : callType === 'answered' ? (
        <Icon component={CallbackOutlined} mx="auto" color="primary.base" />
      ) : (
        <Icon component={VoicemailOutlined} mx="auto" color="blue.base" />
      )}
    </>
)