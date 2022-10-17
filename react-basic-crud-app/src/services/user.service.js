import { _get, _post, _put, _delete } from "../http-common";

class UserDataService {
    getAll() {
        return _get("users");
    }
    get(id) {
        return _get(`users/${id}`);
    }
    create(data) {
        return _post(data, 'users')
    }
    update(id, data) {
        return _put(data, `user/${id}`);
    }
    delete(id) {
        return _delete(`users/${id}`);
    }
    findByEmail(email) {
        return _get(`users?email=${email}`);
    }
}

export default new UserDataService();