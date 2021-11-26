import { ArrowLeftOutlined } from '@ant-design/icons'
import { PageWrapper } from '@qonsoll/react-design'
import { GroupSimpleForm } from '../../../../domains/Group/components'
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
        title: 'Create Group',
        titleSize: 3
      }}
    >
      <GroupSimpleForm />
    </PageWrapper>
  )
}

export default Create
