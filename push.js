var push = require('web-push')

let vapidKeys = {
    publicKey: 'BEPNAMd0USSrnz8rS5_u5PZns7eI_u_vGZ2oE8T9dTJFenrc3rXwNGwYphlHiMFIgz1ZxS6lpgozBwAVf_j7kVo',
    privateKey: '0amfN_qDy87qyAixpLskmUc7kZjkHdejTJZyQ5J0geQ'
  }

// push.generateVAPIDKeys();
// console.log(vapidKeys)

//send notification

push.setVapidDetails('mailto:test@code.co.uk', vapidKeys.publicKey, vapidKeys.privateKey)

// sub is what we get from db where pushed notification detail is stored
let sub = {};

push.sendNotification(sub, "test message")



