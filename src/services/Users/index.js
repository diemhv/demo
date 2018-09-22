import UtilServie from '../Util/index';

export const UserService = {
    getByUser
}

function getByUser(userParam) {
    return UtilServie.get(userParam);
}

export default UserService 