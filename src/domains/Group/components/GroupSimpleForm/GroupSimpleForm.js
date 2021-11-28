// import { Container, Input, Row, Title, Col } from '@qonsoll/react-design'
// import { Button, DatePicker, Form, Select, message } from 'antd'
// import { useStore } from '../../../../contexts/Store'
// import { useGroupActions } from '../../hooks'
// import useOnComponentDidMount from '../../../../hooks/useOnComponentDidMount'

// const { Option } = Select

// const GroupSimpleForm = ({ id, title }) => {
//   const { store, useGetId, fetchRecords, findRecord, addRecord, saveRecord } =
//     useStore()
//   const [form] = Form.useForm()
//   const { redirectToAll } = useGroupActions()

//   const newId = useGetId('Groups')
//   const recordId = id || newId
//   const GroupData = { collectionPath: 'Groups', id: recordId }
//   useOnComponentDidMount(() => {
//     fetchRecords({ collectionPath: 'Groups' })
//   })
//   const initialValues = findRecord(GroupData)

//   const groupsArr = store['ordered']['groups']

//   const onSubmit = () => {
//     saveRecord(GroupData)
//     redirectToAll()
//   }
//   return (
//     <Form
//       form={form}
//       onFinish={onSubmit}
//       initialValues={initialValues}
//       onValuesChange={(changedValues, allValues) => {
//         addRecord({
//           collectionPath: 'Groups',
//           id: recordId,
//           values: allValues
//         })
//       }}
//     >
//       <Container mb={4}>
//         {title ? (
//           <Row mb={3}>
//             <Col>
//               <Title level={5}>{title}</Title>
//             </Col>
//           </Row>
//         ) : null}
//         <Row mb={3}>
//           <Col>
//             <Form.Item
//               name="firstName"
//               rules={[{ required: true }, { type: 'string', min: 3 }]}
//             >
//               <Input placeholder="Enter firstName" />
//             </Form.Item>
//           </Col>
//           <Col>
//             <Form.Item
//               name="lastName"
//               rules={[{ required: true }, { type: 'string', min: 3 }]}
//             >
//               <Input placeholder="Enter lastName" />
//             </Form.Item>
//           </Col>
//           <Col>
//             <Form.Item
//               name="secondName"
//               rules={[{ required: true }, { type: 'string', min: 3 }]}
//             >
//               <Input placeholder="Enter secondName" />
//             </Form.Item>
//           </Col>
//         </Row>
//         <Row mb={3}>
//           <Col>
//             <Form.Item
//               label="birthDate"
//               name="birthDate"
//               rules={[{ required: true }]}
//             >
//               <DatePicker placeholder="Enter birthdate" />
//             </Form.Item>
//           </Col>

//         <Row>
//           <Col>
//             <Form.Item>
//               <Button type="primary" htmlType="submit">
//                 Submit
//               </Button>
//             </Form.Item>
//           </Col>
//         </Row>
//       </Container>
//     </Form>
//   )
// }

// export default GroupSimpleForm
