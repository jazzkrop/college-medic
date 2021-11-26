import { ArrowLeftOutlined } from '@ant-design/icons'
import { PageWrapper } from '@qonsoll/react-design'
import { useParams } from 'react-router-dom'
import { GroupAdvancedView } from '../../../../domains/Group/components'
import { useHistory } from 'react-router-dom'

const Show = () => {
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
        title: 'Show Group',
        titleSize: 3
      }}
    >
      <GroupAdvancedView id={id} />
    </PageWrapper>
  )
}

export default Show
