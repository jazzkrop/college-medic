import { Col } from '@qonsoll/react-design'
import { Row } from 'antd'
import RequiredActionSimpleView from '../RequiredActionSimpleView/RequiredActionSimpleView'
const RequiredActionsList = ({ userId }) => {
  const reqAct = {
    1: {
      id: 1,
      attendees: [3, 5],
      title: 'Make flurography',
      createdBy: 35,
      details: 'Make for your health and walk healthy'
    },
    2: {
      id: 2,
      attendees: [3, 4],
      title: 'Go to army',
      createdBy: 99,
      details: 'Defend ypur country!'
    },
    3: {
      id: 3,
      attendees: [4, 5],
      title: 'Make sleep',
      createdBy: 0,
      details: 'Sleep is very good for youw health'
    }
  }
  //
  const requiredActions = userId
    ? Object.values(reqAct).filter((item) => item.attendees.includes(parseInt(userId)))
    : Object.values(reqAct)

  return (
    <div>
      {!requiredActions.length ? (
        <Row>
          <Col>No required actions</Col>
        </Row>
      ) : null}
      {requiredActions.map((requiredAction) => (
        <RequiredActionSimpleView {...requiredAction} />
      ))}
    </div>
  )
}
export default RequiredActionsList
