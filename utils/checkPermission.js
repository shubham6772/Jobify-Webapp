import {unAuthenticatedError} from '../errors/index.js'

const checkPermissions = (requestUser , resourceUserId) => {
   
    if(requestUser == resourceUserId.toString()) return

    throw new unAuthenticatedError('Not authorized to access this route')
}

export default checkPermissions