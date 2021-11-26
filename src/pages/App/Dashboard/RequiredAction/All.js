import { PageWrapper, Button } from '@qonsoll/react-design'
import {useRequiredActionActions} from '../../../../domains/RequiredAction/hooks'
import RequiredActionsList from '../../../../domains/RequiredAction/components/RequiredActionsList/RequiredActionsList'

const Users = () => {
  const { redirectToCreate } = useRequiredActionActions()

  return (
    <PageWrapper
      headingProps={{
        textAlign: 'left',
        title: 'Required Actions',
        titleSize: 3
      }}
      action={
        <>
          {/* <Button onClick={destroyDirtyUsers} mr={'8px'}>
            Clean dirty
          </Button> */}
          <Button type="primary" onClick={redirectToCreate}>
            Create
          </Button>
        </>
      }
    >
      <RequiredActionsList />
    </PageWrapper>
  )
}

export default Users
