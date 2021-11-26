import { Col, Row } from 'antd'
import { Link } from 'react-router-dom'
import { Button, Container } from '@qonsoll/react-design'
import useTextAbstract from '../../../../hooks/useTextAbstract';

const RequiredActionSimpleView = ({
  id,
  attendees,
  title,
  createdBy,
  details
}) => {

  const textAbstract = useTextAbstract()
  const textStyle = {
    marginRight: '4px'
  }
  
  return (
    <div
      // to={'/required-actions/' + id}
      style={{ display: 'block', width: '100%', marginBottom: '4px' }}
    >
      <Button style={{ display: 'block', width: '100%' }}>
        <Container>
          <Row>
            <Col span={18} push={6}>
              <h3 style={textStyle}>{textAbstract(details, 10)}</h3>
            </Col>
            <Col span={6} pull={18}>
              <h3 style={textStyle}>{title}</h3>
            </Col>
          </Row>
        </Container>
      </Button>
    </div>
  )
}
export default RequiredActionSimpleView
