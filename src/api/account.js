import axios from 'axios'
import config from './config'

const serverRequest = axios.create({
    baseURL: config.domain,
    timeout: 5000
})

export default {
    getAccounts() {
        return serverRequest.get('ajax_analysis').then(({
            data
        }) => data)
    }
}