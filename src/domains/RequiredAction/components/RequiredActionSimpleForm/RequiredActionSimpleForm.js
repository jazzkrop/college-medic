import { Container, Input, TextArea, Row } from '@qonsoll/react-design'
import { Form, Col, Button } from 'antd'
import { useForm, Controller } from 'react-hook-form'

const RequiredActionSimpleForm = (props) => {

  const { control, handleSubmit } = useForm({
    defaultValues: {
      title: '',
      select: {}
    }
  })
  const onSubmit = (data) => console.log(data)
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Container mb={4}>
        <Row mb={3}>
          <Col span={14} offset={5}>
            <Controller
              name="attendees"
              control={control}
              render={({ field }) => (
                <Input {...field} placeholder="Enter attendees" />
              )}
            />
          </Col>
        </Row>
        <Row mb={3}>
          <Col span={14} offset={5}>
            <Controller
              name="title"
              control={control}
              render={({ field }) => (
                <Input {...field} placeholder="Enter title" />
              )}
            />
          </Col>
        </Row>
        <Row mb={3}>
          <Col span={14} offset={5}>
            <Controller
              name="details"
              control={control}
              render={({ field }) => (
                <TextArea
                  rows={4}
                  {...field}
                  allowClear
                  placeholder="Enter details"
                />
              )}
            />
          </Col>
        </Row>
        <Row>
          <Col span={14} offset={5}>
            <Controller
              name="details"
              control={control}
              render={({ field }) => (
                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>
              )}
            />
          </Col>
        </Row>
      </Container>
    </Form>
  )
}
export default RequiredActionSimpleForm
