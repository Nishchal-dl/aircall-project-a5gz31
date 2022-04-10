import { Tag } from "@aircall/tractor"

type CallTypeProp = {
    callType: string;
}

export const CallType:React.FC<CallTypeProp> = ({ callType }) => (
    <>
      {callType === 'answered' ? (
      <Tag
        size="small"
        variant="primary"
        alignItems="center"
        justifyContent="center"
      >
        {callType}
      </Tag>
    ) : callType === 'missed' ? (
      <Tag
        size="small"
        variant="red"
        alignItems="center"
        justifyContent="center"
      >
        {callType}
      </Tag>
    ) : (
      <Tag
        size="small"
        variant="blue"
        alignItems="center"
        justifyContent="center"
      >
        {callType}
      </Tag>
      )}
    </>
)