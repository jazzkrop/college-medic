import { Container, Input, Row, Title, Col } from '@qonsoll/react-design'
import { Button, DatePicker, Form, Select } from 'antd'
import './UserAdvancedView.css'
import UserSimpleView from '../UserSimpleView/UserSimpleView'
import RequiredActionsList from '../../../RequiredAction/components/RequiredActionsList/RequiredActionsList'
import { useStore } from '../../../../contexts/Store'
import useOnComponentDidMount from '../../../../hooks/useOnComponentDidMount'
import { useHistory } from 'react-router-dom';


const UserAdvancedView = ({ id }) => {
  const { store,fetchRecords, findRecord } = useStore()
  const userData = { collectionPath: 'users', id }
  const history = useHistory()
  // useOnComponentDidMount(() => {
  //   fetchRecords(userData)
  // })
  const user = findRecord(userData)

  return (
    <div>
      {/* <Container>
        <Row>
          <Col>
            <h1>
 
          </Col>
          <Col>
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
              curator: <UserSimpleView />
            </h2>
          </Col>
        </Row>
        <RequiredActionsList userId={id} />
      </Container> */}

      <div className="page-content page-container" id="page-content">
        <Button
          onClick={() => {
            console.log('go edit ->')
            history.push(`/users/${id}/edit`)
          }}
          style={{ position: 'absolute', right: '360px' }}
        >
          Edit
        </Button>Z
        <div className="padding">
          <div className="row container d-flex justify-content-center">
            <div className="col-xl-6 col-md-12">
              <div className="card user-card-full">
                <div className="row m-l-0 m-r-0" style={{ display: 'flex' }}>
                  <div className="col-sm-4 bg-c-lite-green user-profile">
                    <div className="card-block text-center text-white">
                      <div className="m-b-25">
                        {' '}
                        <img
                          src="https://img.icons8.com/bubbles/100/000000/user.png"
                          className="img-radius"
                          alt="User-Profile-Image"
                        />{' '}
                      </div>
                      <h6 className="f-w-600">
                        {user.lastName} {user.firstName} {user.secondName}
                      </h6>
                      <p style={{ color: '#eee' }}>{user.role}</p>{' '}
                      <i className=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                    </div>
                  </div>
                  <div className="col-sm-8" style={{ flexGrow: '1' }}>
                    <div className="card-block">
                      <h6 className="m-b-20 p-b-5 b-b-default f-w-600">
                        Information
                      </h6>
                      <div
                        className="row"
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between'
                        }}
                      >
                        <div className="col-sm-6">
                          <p className="m-b-10 f-w-600">Gender</p>
                          <h6 className="text-muted f-w-400">{user.gender}</h6>
                        </div>
                        <div className="col-sm-6">
                          <p className="m-b-10 f-w-600">Group</p>
                          {/* store['structured']['groups'][ */}
                          <h6 className="text-muted f-w-400">{user.group}</h6>
                        </div>
                        <div className="col-sm-6">
                          <p className="m-b-10 f-w-600">Birth Year</p>
                          <h6 className="text-muted f-w-400">
                            {user.birthDate.substring(0, 4)}
                          </h6>
                        </div>
                      </div>
                      <h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">
                        Projects
                      </h6>
                      <div className="row" style={{ display: 'flex' }}>
                        <div className="col-sm-6">
                          <p className="m-b-10 f-w-600">Recent</p>
                          <h6 className="text-muted f-w-400">Sam Disuja</h6>
                        </div>
                        <div className="col-sm-6">
                          <p className="m-b-10 f-w-600">Most Viewed</p>
                          <h6 className="text-muted f-w-400">
                            Dinoter husainm
                          </h6>
                        </div>
                      </div>
                      <ul className="social-link list-unstyled m-t-40 m-b-10">
                        <li>
                          <a
                            href="#!"
                            data-toggle="tooltip"
                            data-placement="bottom"
                            title=""
                            data-original-title="facebook"
                            data-abc="true"
                          >
                            <i
                              className="mdi mdi-facebook feather icon-facebook facebook"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#!"
                            data-toggle="tooltip"
                            data-placement="bottom"
                            title=""
                            data-original-title="twitter"
                            data-abc="true"
                          >
                            <i
                              className="mdi mdi-twitter feather icon-twitter twitter"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#!"
                            data-toggle="tooltip"
                            data-placement="bottom"
                            title=""
                            data-original-title="instagram"
                            data-abc="true"
                          >
                            <i
                              className="mdi mdi-instagram feather icon-instagram instagram"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default UserAdvancedView
