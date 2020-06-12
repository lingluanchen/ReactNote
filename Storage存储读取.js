import StorageUtil from './StorageUtil';


StorageUtil.get('cur_user_info', (error, object) => {
    if (!error && object) {
        cur_user_info = JSON.parse(object);
    }
});




