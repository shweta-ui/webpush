var push = require('web-push')

let vapidKeys = {
    publicKey: 'BEPNAMd0USSrnz8rS5_u5PZns7eI_u_vGZ2oE8T9dTJFenrc3rXwNGwYphlHiMFIgz1ZxS6lpgozBwAVf_j7kVo',
    privateKey: '0amfN_qDy87qyAixpLskmUc7kZjkHdejTJZyQ5J0geQ'
  }

// push.generateVAPIDKeys();
// console.log(vapidKeys)

//send notification

push.setVapidDetails('mailto:test@code.co.uk', vapidKeys.publicKey, vapidKeys.privateKey)

// sub is what we get from db, where pushed notification detail is stored
let sub = {
    "endpoint":"https://updates.push.services.mozilla.com/wpush/v2/gAAAAABiB…DeO2eaJ_NgsidLg6yX1ggErKJA_vkGQKikmWCZfs1HRdZDr2aWBxcbmV2PjQ",
    "keys":{
        "auth":"BNpDjVHbBi8bthoYmipY0w",
        "p256dh":"BLYJZ8lQFihnQmud7s8oHOJX3JnzzesEeoVv7ny7XayVymihUKVnGZoV0u4YcdVl25Dv6fxPRHilVHBVetKH_5c"
    }
}

push.sendNotification(sub, "test message")



