import { ArrowLeftOutlined } from '@ant-design/icons'
import { PageWrapper } from '@qonsoll/react-design'
import { useParams } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import {RequiredActionAdvancedView} from '../../../../domains/RequiredAction/components/';

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
        title: 'Show Required Action',
        titleSize: 3
      }}
    >
      <RequiredActionAdvancedView id={id} />
    </PageWrapper>
  )
}

export default Show
