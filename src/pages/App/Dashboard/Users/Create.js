import { ArrowLeftOutlined } from '@ant-design/icons'
import { PageWrapper } from '@qonsoll/react-design'
import { UserSimpleForm } from '../../../../domains/User/components'
import { useHistory } from 'react-router-dom'

const Create = () => {
  const history = useHistory()
  return (
    <PageWrapper
      onBack={() => history.goBack()}
      backBtnProps={{
        icon: <ArrowLeftOutlined />
      }}
      headingProps={{
        textAlign: 'left',
        title: 'Create user',
        titleSize: 3
      }}
    >
      <UserSimpleForm />
    </PageWrapper>
  )
}

export default Create
