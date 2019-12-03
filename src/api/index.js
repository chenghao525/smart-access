// const BASE_URL = 'http://10.36.30.134:8003/'
const BASE_URL = 'http://10.36.30.226:8003/'


const API = {
    BASE_URL:BASE_URL,

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


    /****************** 人脸识别设备  *******************/
    GET_FACEDEVICEINFO: '/maintain/getAllFaceRecDevInfo',//获取所有人脸识别设备信息
    GET_FACEDEVICEINFO_IP: '/maintain/getFaceRecDevInfoByIp',//获取指定人脸识别设备信息（通过ip）
    GET_FACEDEVICEINFO_SN: '/maintain/getFaceRecDevInfoBySn',//获取指定人脸识别设备信息（通过sn）
    GET_FACEDEVICEINFO_GUARD: '/maintain/getFaceRecDevInfoByEntranceGuardId ',//获取指定人脸识别设备信息（通过门禁）
    DELETE_FACEDEVICE: '/maintain/deleteFaceRecDev',//删除人脸识别设备
    ADD_FACEDEVICE: '/maintain/addFaceRecDev',//添加人脸识别设备
    GET_FACEDEVICE_OPT_RECORD:'/maintain/getFaceRecDevOptRecord',//获取操作记录
    GET_FACEDEVICE_PERSON:'/maintain/getFaceRecDevPerson',//获取已录入人员
    



}

module.exports = API