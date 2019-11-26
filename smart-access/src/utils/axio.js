import axios from 'axios'
import {BASE_URL} from '../api/index'
import router from '../router'



/**
 * 封装get请求，使用方式为this.$get
 * @param url
 * @param params
 * @returns {Promise<any>}
 */
export function get(url, params={}) {
    return new Promise((resolve, reject) => {
      axios.get(url, {
        params: params
      }).then(response => {
        resolve(response.data)
      }).catch(err => {
        reject(err)
      })
    })
  }
  
  /**
   * 封装post请求，使用方式为this.$post
   * @param url
   * @param data
   * @param config
   * @returns {Promise<any>}
   */
  export function post(url, data = {}, config = { showLoading: true, isUpload: false }) {
    return new Promise((resolve, reject) => {
      axios.post(url, data, config).then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
    })
  }