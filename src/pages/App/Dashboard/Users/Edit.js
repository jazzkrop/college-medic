import { ArrowLeftOutlined } from '@ant-design/icons'
import { PageWrapper } from '@qonsoll/react-design'
import { useParams } from 'react-router-dom'
import { UserSimpleForm } from '../../../../domains/User/components'
import { useHistory } from 'react-router-dom'

const Edit = () => {
  const { id } = useParams()
  const history = useHistory()
  return (
    <PageWrapper
      onBack={() => history.goBack()}
      backBtnProps={{
        icon: <ArrowLeftOutlined />
      }}
      headingProps={{
        textAlign: 'left',
        title: 'Edit user',
        titleSize: 3
      }}
    >
      <UserSimpleForm id={id} />
    </PageWrapper>
  )
}

export default Edit
