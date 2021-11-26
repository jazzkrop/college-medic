import { useHistory } from 'react-router-dom'
import * as models from '../../../models'
import PATHS from '../../../pages/paths'
import { useStore } from '../../../contexts/Store'

// const { requiredAction } = models

const useRequiredActionActions = (id) => {
  const history = useHistory()
  // const {
  //   removeRecord,
  //   destroyRecord,
  //   destroyDirty,
  //   updateRecord,
  //   saveRecord
  // } = useStore()

  // const collectionPath = requiredAction.collectionPath
  // const requiredActionId = id || requiredAction.newId
  // const requiredActionData = { collectionPath, id: requiredActionId }

  // const remove = () => removeRecord(requiredActionData)
  // const destroy = () => destroyRecord(requiredActionData)
  // const destroyDirtyUsers = () => destroyDirty({ collectionPath })
  // const save = () =>
  //   id ? updateRecord(requiredActionData) : saveRecord(requiredActionData)

  // Redirects
  const redirectToCreate = () =>
    history.push(PATHS.AUTHENTICATED.REQUIRED_ACTION_CREATE)
  const redirectToEdit = () => history.push(`required-action/${id}/edit`)
  const redirectToAll = () =>
    history.push(PATHS.AUTHENTICATED.REQUIRED_ACTIONS_ALL)

  return {
    redirectToEdit,
    redirectToCreate,
    // remove,
    redirectToAll,
    // destroy,
    // destroyDirtyUsers,
    // save
  }
}

export default useRequiredActionActions
