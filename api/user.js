const http = require('./http.js')

const login = (account, password) => http.post({
  'method.name': 'mash5.user.loginBatch',
  'user.password': password,
  'user.telphone': account
})

const getUser = (id) => {
  return http.post({
    'method.name': 'mash5.user.queryUserInfo',
    'method.optimize': 'includeField',
    'method.optimize.includeField.fieldName': ['_id', 'name', 'telphone', 'email', 'mainTenantCode', 'tenants', 'playRole']
  })
}

module.exports = {
  login,
  getUser
}