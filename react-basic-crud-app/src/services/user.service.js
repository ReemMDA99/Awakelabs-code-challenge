// import GET POST PUT DELETE from http-common file
import { _get, _post, _put, _delete } from "../http-common";

class UserDataService {
    // get all users
    getAll() {
        return _get("users");
    }
    get(id) {
        // get user by id
        return _get(`users/${id}`);
    }
    create(data) {
        // create a new user
        return _post(data, 'users')
    }
    update(id, data) {
        // edit or update
        return _put(data, `user/${id}`);
    }
    // delete user by Id
    delete(id) {
        return _delete(`users/${id}`);
    }
    // find user by Email
    findByEmail(email) {
        return _get(`users?email=${email}`);
    }
}
// export UserDataService() modal
export default new UserDataService();