import { Col, Row } from 'antd'
import { Link } from 'react-router-dom'
import { Button } from '@qonsoll/react-design'

const UserSimpleView = ({ id, firstName, lastName, secondName, role}) => {
  const textStyle = {
    marginRight: '4px'
  }
  return (
    <Link to={'/users/' + id}>
      <Button style={{ width: '100%' }}>
        <Row>
          <Col>
            <h3 style={textStyle}>{lastName}</h3>
          </Col>
          <Col>
            <h3 style={textStyle}>{firstName} </h3>
          </Col>
          <Col>
            <h3 style={textStyle}>{secondName}</h3>
          </Col>
          <Col>
            <h3 style={textStyle}>{role}</h3>
          </Col>
        </Row>
      </Button>
    </Link>
  )
}
export default UserSimpleView
