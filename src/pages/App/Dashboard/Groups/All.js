import { PageWrapper, Button } from '@qonsoll/react-design'
import { GroupsList } from '../../../../domains/Group/components/GroupsList'
import { useGroupActions } from '../../../../domains/Group/hooks'

const Groups = () => {
  const { redirectToCreate } = useGroupActions()

  return (
    <PageWrapper
      headingProps={{
        textAlign: 'left',
        title: 'Groups',
        titleSize: 3
      }}
      action={
        <>
          <Button type="primary" onClick={redirectToCreate}>
            Create
          </Button>
        </>
      }
    >
      <GroupsList />
    </PageWrapper>
  )
}

export default Groups
