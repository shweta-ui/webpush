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
    "endpoint":"https://fcm.googleapis.com/fcm/send/c3lrU1_32fQ:APA91bHLNJ46fGHG759HI67uty9o1MExzjgTVNhxy4UuYSnn8pYuQWesQnE_YnRW3qzldbEU_2ivXdKlgYRO4F1Yo6jk9eCEinS5YFeQvcGH-F0DY4D8zyfav2ZCU_xtmviaBChsAefc",
    "expirationTime":null,
    "keys":{
        "p256dh":"BADzW85S9vAWQ0ePDnYJIlQulhmncZb_nbBX4FH0iYz4POisB88Wlg2JY1kL9o13P0_qJ0tzVk3kIhkHjNZ27eI",
        "auth":"H6HagIBG0Z9lyrkgEAwpZg"
    }
}

push.sendNotification(sub, "test message")



