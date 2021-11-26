import { Container, Input, Row, Title, Col } from '@qonsoll/react-design'
import { Button, DatePicker, Form, Select, message } from 'antd'
import { useStore } from '../../../../contexts/Store'
import { useUserActions } from '../../hooks'

const { Option } = Select

const UserSimpleForm = ({ id, title, onValuesChange }) => {
  const { useGetId, findRecord, addRecord, saveRecord } = useStore()
  const [form] = Form.useForm()
  const { redirectToAll } = useUserActions()

  const newId = useGetId('users')
  const recordId = id || newId
  const userData = { collectionPath: 'users', id: recordId }

  const groups = {
    2: {
      id: '2',
      name: 'PI-182',
      curator: '100',
      students: ['3', '4']
    },
    1: {
      id: '1',
      name: 'PI-181',
      curator: '100',
      students: ['5', '6']
    },
    3: {
      id: '3',
      name: 'AT-181',
      curator: '100',
      students: ['5', '6']
    }
  }
  const groupsArr = Object.values(groups)

  const onSubmit = () => {
    saveRecord(userData)
    console.log('redirectTOall')
    redirectToAll()
  }
  return (
    <Form
      form={form}
      onFinish={onSubmit}
      initialValues={findRecord(userData)}
      onValuesChange={(changedValues, allValues) => {
        addRecord({
          collectionPath: 'users',
          id: recordId,
          values: allValues
        })
      }}
    >
      <Container mb={4}>
        {title ? (
          <Row mb={3}>
            <Col>
              <Title level={5}>{title}</Title>
            </Col>
          </Row>
        ) : null}
        <Row mb={3}>
          <Col>
            <Form.Item
              name="firstName"
              rules={[{ required: true }, { type: 'string', min: 3 }]}
            >
              <Input placeholder="Enter firstName" />
            </Form.Item>
          </Col>
          <Col>
            <Form.Item
              name="lastName"
              rules={[{ required: true }, { type: 'string', min: 3 }]}
            >
              <Input placeholder="Enter lastName" />
            </Form.Item>
          </Col>
          <Col>
            <Form.Item
              name="secondName"
              rules={[{ required: true }, { type: 'string', min: 3 }]}
            >
              <Input placeholder="Enter secondName" />
            </Form.Item>
          </Col>
        </Row>
        <Row mb={3}>
          <Col>
            <Form.Item
              label="birthDate"
              name="birthDate"
              rules={[{ required: true }]}
            >
              <DatePicker placeholder="Enter birthdate" />
            </Form.Item>
          </Col>
          <Col>
            <Form.Item label="group" name="group">
              <Select defaultValue="" style={{ width: 120 }}>
                {groupsArr.map((group) => {
                  return <Option value={group.id}>{group.name}</Option>
                })}
              </Select>
            </Form.Item>
          </Col>
          <Col>
            <Form.Item
              rules={[{ required: true }]}
              name="gender"
              label="Your gender:"
            >
              <Select defaultValue="" style={{ width: 120 }}>
                <Option value="man">Man</Option>
                <Option value="female">Female</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row mb={3}>
          <Col>
            <Form.Item
              rules={[{ required: true }]}
              name="role"
              label="Your role:"
            >
              <Select defaultValue="" style={{ width: 120 }}>
                <Option value="student">Student</Option>
                <Option value="curator">Curator</Option>
                <Option value="nurse">Nurse</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col>
            <Form.Item name="course" label="Your course:">
              <Select defaultValue="" style={{ width: 120 }}>
                <Option value="1">1</Option>
                <Option value="2">2</Option>
                <Option value="3">3</Option>
                <Option value="4">4</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col>
            <Form.Item name="fieldOfStudy" label="Your field of study:">
              <Select defaultValue="" style={{ width: 200 }}>
                <Option value="software-engineering">
                  Software engineering
                </Option>
                <Option value="road-transport">Road transport</Option>
                <Option value="other">Other</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>

        <Row>
          <Col>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Container>
    </Form>
  )
}

export default UserSimpleForm
