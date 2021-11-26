import { useStore } from '../../../../contexts/Store'
import UserSimpleView from '../UserSimpleView/UserSimpleView'
import useOnComponentDidMount from '../../../../hooks/useOnComponentDidMount'
import { RECORD_TYPES } from '../../../../contexts/Store/__constants__'
import { Container } from '@qonsoll/react-design'
import { Col, Row } from 'antd'

const UsersList = () => {
  const { store, fetchRecords } = useStore()
  useOnComponentDidMount(() => {
    fetchRecords({ collectionPath: 'users' })
  })
  const {ORDERED} = RECORD_TYPES


  return (
    <div>
      <Container>
            {store[ORDERED]['users'] &&
              store[ORDERED]['users'].map((user) => {
                const { id, firstName, lastName, secondName, role } = user
                return (
                  <Row style={{marginBottom:"4px"}}>
                    <Col span={24}>
                      <UserSimpleView
                        key={id}
                        id={id}
                        firstName={firstName}
                        lastName={lastName}
                        secondName={secondName}
                        role={role}
                        age={role}
                      />
                    </Col>
                  </Row>
                )
              })}
      </Container>
    </div>
  )
}

export default UsersList
