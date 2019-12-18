var local = window.location.host;
var port = window.location.port;
const BASE_URL = 'http://'+local
// const BASE_URL = 'http://128.64.203.151:8003/'

// const BASE_URL = 'http://localhost:8080/'

const API = {
    BASE_URL:BASE_URL,

    /****************** 登录  *******************/
    USER_LOGIN: '/maintain/userLogin',

    
    /****************** 分区  *******************/
    ADD_PARTITION: '/maintain/addPartition',//添加分区
    DELETE_PARTITION: '/maintain/deletePartition',//删除分区
    GET_PARTITION: 'maintain/getAllPartition', //获取所有分区
    GET_ALL_PARTITION_NAME: '/maintain/getPartitionName',//获取所有分区名字


    /****************** 门禁  *******************/
    ADD_ENTRANCEGUARD:'/maintain/addEntranceGuard',//门禁添加
    DELETE_ENTRANCEGUARD:'/maintain/deleteEntranceGuard',//门禁删除
    UPDATE_ENTRANCEGUARD:'/maintain/updateEntranceGuard',//门禁更新
    GET_ENTRANCEGUARD:'/maintain/getAllEntranceGuard', //获取所有门禁
    GET_ENTRANCEGUARD_BY_NAME: '/maintain/getEntranceGuardByName ',//指定门禁名称
    GET_ALL_ENTRANCE_NAME:'/maintain/getEntranceName',//获取门禁下拉框
    GET_ENTRANCEGUARD_DEVICES: '/maintain/getEntranceGuardDevices',//查询门禁设备信息
    MODIFY_ENTRANCEGUARD_DEVICES: '/maintain/modifyEntranceGuardDevices',//修改门禁设备信息


    /****************** 人脸识别设备  *******************/
    GET_FACEDEVICEINFO: '/maintain/getAllFaceRecDevInfo',//获取所有人脸识别设备信息
    GET_FACEDEVICEINFO_IP: '/maintain/getFaceRecDevInfoByIp',//获取指定人脸识别设备信息（通过ip）
    GET_FACEDEVICEINFO_SN: '/maintain/getFaceRecDevInfoBySn',//获取指定人脸识别设备信息（通过sn）
    GET_FACEDEVICEINFO_GUARD: '/maintain/getFaceRecDevInfoByEntranceGuardId ',//获取指定人脸识别设备信息（通过门禁）
    DELETE_FACEDEVICE: '/maintain/deleteFaceRecDev',//删除人脸识别设备
    ADD_FACEDEVICE: '/maintain/addFaceRecDev',//添加人脸识别设备
    GET_FACEDEVICE_OPT_RECORD:'/maintain/getFaceRecDevOptRecord',//获取操作记录
    GET_FACEDEVICE_PERSON:'/maintain/getFaceRecDevPerson',//获取已录入人员
    GET_ALL_DEVICE_MODEL: '/maintain/getmodel', //获取所有设备型号
    



}

module.exports = API