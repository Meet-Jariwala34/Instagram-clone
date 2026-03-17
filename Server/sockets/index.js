const handshake = (io) => {
    io.on('connection', (Socket)=>{
        console.log(`The user is connected with socketId ${Socket.id}`)
    })
}

module.exports = handshake;