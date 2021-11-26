import { ArrowLeftOutlined } from '@ant-design/icons'
import { PageWrapper } from '@qonsoll/react-design'
import { useParams } from 'react-router-dom'
import { GroupSimpleForm } from '../../../../domains/Group/components'
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
        title: 'Edit Group',
        titleSize: 3
      }}
    >
      <GroupSimpleForm id={id} />
    </PageWrapper>
  )
}

export default Edit
