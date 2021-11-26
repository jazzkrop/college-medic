import { ArrowLeftOutlined } from '@ant-design/icons'
import { PageWrapper } from '@qonsoll/react-design'
import { RequiredActionSimpleForm } from '../../../../domains/RequiredAction/components/'
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
        title: 'Create required action',
        titleSize: 3
      }}
    >
      <RequiredActionSimpleForm />
    </PageWrapper>
  )
}

export default Create
