const BASE_URL = 'http://10.36.30.134:8003/'

const API = {
    BASE_URL:BASE_URL,

    /****************** 分区  *******************/
    ADD_PARTITION: '/maintain/addPartition',//添加分区
    DELETE_PARTITION: '/maintain/deletePartition',//删除分区
    GET_PARTITION: 'maintain/getAllPartition', //获取所有分区




    /****************** 门禁  *******************/
    ADD_ENTRANCEGUARD:'/maintain/addEntranceGuard',//门禁添加
    DELETE_ENTRANCEGUARD:'/maintain/deleteEntranceGuard',//门禁删除
    UPDATE_ENTRANCEGUARD:'/maintain/updateEntranceGuard',//门禁更新
    GET_ENTRANCEGUARD:'/maintain/getAllEntranceGuard', //获取所有门禁




    /****************** 人脸识别设备  *******************/






}

module.exports = API