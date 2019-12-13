const Mock = require("mockjs");

// const res = {
//   "code": "1",
//     "data": [ 
//         {
//           "total":"6",
//           "numOfSinglePages":"5",
//           "currentPage":"1",
//           "entranceGuardList":[
//             {
//               "entranceGuardId":"0001",
//               "entranceGuardName":"施工区门禁",
//               "enterPartition":"生活区",
//               "exitPartition":"施工区"
//             },
//             {
//               "entranceGuardId":"0002",
//               "entranceGuardName":"办公区门禁",
//               "enterPartition":"生活区",
//               "exitPartition":"办公区"
//             }
//           ]
//         }
//       ]
//   }

// Mock.mock('/api\/getCCEntrance/', 'post', res)


Mock.mock(
  '/api\/getCCEntrance/',
  'post',
  {
    "code": "1",
    "data": [ 
        {
          "total":"6",
          "numOfSinglePages":"5",
          "currentPage":"1",
          "entranceGuardList":[
            {
              "entranceGuardId":"0001",
              "entranceGuardName":"施工区门禁",
              "enterPartition":"生活区",
              "exitPartition":"施工区"
            },
            {
              "entranceGuardId":"0002",
              "entranceGuardName":"办公区门禁",
              "enterPartition":"生活区",
              "exitPartition":"办公区"
            }
          ]
        }
      ]
  }
)