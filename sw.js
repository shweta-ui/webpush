self.addEventListener('push', function(e) {
    var options = {
        body: "This is a test notification generated by push!",
        icon: "image/example.jpg",
        vibrate: [100,50, 100],
        data:{
            dateOfArribal: Date.now(),
            primaryKey: '2'
        },
        actions: [
            {
                action: 'explore', title: "Click",
                icon: 'image/check.jpg'
            },
            {
                action: 'close', title: "Close",
                icon: 'image/xmark.jpg'
            },
        ]

    }
    e.waitUntil(
        self.registration.showNotification('Hello World', options)
    );
});