import { PageWrapper, Button } from '@qonsoll/react-design'
import { UsersList } from '../../../../domains/User/components/UsersList'
import { useUserActions } from '../../../../domains/User/hooks'

const Users = () => {
  const { redirectToCreate } = useUserActions()

  return (
    <PageWrapper
      headingProps={{
        textAlign: 'left',
        title: 'Users',
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
      <UsersList />
    </PageWrapper>
  )
}

export default Users
