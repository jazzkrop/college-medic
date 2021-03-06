import { ArrowLeftOutlined } from '@ant-design/icons'
import { PageWrapper } from '@qonsoll/react-design'
import { useParams } from 'react-router-dom'
import { UserAdvancedView } from '../../../../domains/User/components'
import { useHistory } from 'react-router-dom'
import { Button } from 'antd'

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
        title: 'Show user',
        titleSize: 3
      }}
    >
      <Button
        onClick={() => {
          console.log('go edit ->')
          history.push(`user/${id}/edit`)
        }}
        style={{ position: 'absolute', right: '360px' }}
      >
        Edit
      </Button>
      <UserAdvancedView id={id} />
    </PageWrapper>
  )
}

export default Show
