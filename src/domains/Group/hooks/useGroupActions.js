import { useHistory } from 'react-router-dom'
import * as models from '../../../models'
import PATHS from '../../../pages/paths'
import { useStore } from '../../../contexts/Store'

// const { group } = models

const useGroupActions = (id) => {
  const history = useHistory()
  // const {
  //   removeRecord,
  //   destroyRecord,
  //   destroyDirty,
  //   updateRecord,
  //   saveRecord
  // } = useStore()

  // const collectionPath = group.collectionPath
  // const groupId = id || group.newId
  // const groupData = { collectionPath, id: groupId }

  // const remove = () => removeRecord(groupData)
  // const destroy = () => destroyRecord(groupData)
  // const destroyDirtyUsers = () => destroyDirty({ collectionPath })
  // const save = () =>
  //   id ? updateRecord(groupData) : saveRecord(groupData)

  // Redirects
  const redirectToCreate = () =>
    history.push(PATHS.AUTHENTICATED.GROUP_CREATE)
  const redirectToEdit = () => history.push(`required-action/${id}/edit`)
  const redirectToAll = () => history.push(PATHS.AUTHENTICATED.GROUPS_ALL)

  return {
    redirectToEdit,
    redirectToCreate,
    // remove,
    redirectToAll
    // destroy,
    // destroyDirtyUsers,
    // save
  }
}

export default useGroupActions
