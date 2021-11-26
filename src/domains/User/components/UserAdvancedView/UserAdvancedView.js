import { Container, Input, Row, Title, Col } from '@qonsoll/react-design'
import { Button, DatePicker, Form, Select } from 'antd'
import UserSimpleView from '../UserSimpleView/UserSimpleView'
import RequiredActionsList from '../../../RequiredAction/components/RequiredActionsList/RequiredActionsList'
import { useStore } from '../../../../contexts/Store'

const UserAdvancedView = ({ id }) => {

  const {findRecord} = useStore()
  const user = findRecord({collectionPath: 'users', id})

  return (
    <Container>
      <Row>
        <Col>
          <h1>
            {user.lastName} {user.firstName} {user.secondName}
          </h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>gender: {user.gender}</h2>
        </Col>
        <Col>
          <h2>birthDate: {user.birthDate}</h2>
        </Col>
        <Col>
          <h2>group: {user.group}</h2>
        </Col>
        <Col>
          <h2>course: {user.course}</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>
            curator: <UserSimpleView  />
          </h2>
        </Col>
      </Row>
      <RequiredActionsList userId={id} />
    </Container>
  )
}
export default UserAdvancedView
