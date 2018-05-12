import Mock from 'mockjs'

const Random = Mock.Random
const list = []
const count = 50

for (let i = 0; i < count; i++) {
    list.push(Mock.mock({
        id: '@increment',
        name: '@cname',
        telephone: /^(13[0-9]|14[579]|15([0-3]|[5-9])|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/,
        password: () => Random.string(8, 16)
    }))
}

export default {
    getAccounts: () => {
        return list
    }
}