import { ArrowLeftOutlined } from '@ant-design/icons'
import { PageWrapper } from '@qonsoll/react-design'
import { useParams } from 'react-router-dom'
import { RequiredActionSimpleForm } from '../../../../domains/RequiredAction/components'
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
        title: 'Edit Required Action',
        titleSize: 3
      }}
    >
      <RequiredActionSimpleForm id={id} />
    </PageWrapper>
  )
}

export default Edit
