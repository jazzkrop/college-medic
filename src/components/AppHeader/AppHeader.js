import { Link, useHistory } from 'react-router-dom'
import {
  Header,
  Container,
  Row,
  Col,
  Button,
  Text,
  Img
} from '@qonsoll/react-design'
import { LeftOutlined } from '@ant-design/icons'
import PATHS from '../../pages/paths'
import { useSession } from '../../contexts/Session'

const { REQUIRED_ACTIONS_ALL, USERS_ALL, GROUPS_ALL } = PATHS.AUTHENTICATED

const AppHeader = () => {
  const { logout } = useSession()
  return (
    <Header
      alignItems="center"
      bg="#fff"
      color="#fff"
      justifyContent="center"
      shadow="0px 7px 25px 0px rgba(34, 60, 80, 0.2)"
    >
      <Container>
        <Row h="between">
          <Col cw="auto">
            <Text>
              <Img src="/logo-ql-full-primary.svg" height="40px" />
            </Text>
          </Col>
          <Col cw="auto">
            <Row>
              <Col cw="auto">
                <Link to={REQUIRED_ACTIONS_ALL}>
                  <Button type="link">Required actions</Button>
                </Link>
              </Col>
              <Col cw="auto">
                <Link to={USERS_ALL}>
                  <Button type="link" to={USERS_ALL}>
                    Users
                  </Button>
                </Link>
              </Col>
              <Col cw="auto">
                <Link to={GROUPS_ALL}>
                  <Button type="link" to={GROUPS_ALL}>
                    Groups
                  </Button>
                </Link>
              </Col>
            </Row>
          </Col>
          <Col cw="auto">
            <Button type="danger" onClick={logout}>
              Logout
            </Button>
          </Col>
        </Row>
      </Container>
    </Header>
  )
}

export default AppHeader
