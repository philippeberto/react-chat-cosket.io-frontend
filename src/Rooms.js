import React, { Component } from 'react'
import io from 'socket.io-client'
import { Route, Link } from 'react-router-dom'
import Room from './Room'
import SelectRoom from './SelectRoom'


class Rooms extends Component {
  constructor(props) {
    super(props)
    const token = window.localStorage.getItem('token')
    const socket = io('http://localhost:3001/?token=' + token)

    this.state = {
      rooms: [],
      msgs: {}
    }

    // get new room
    socket.on('newRoom', room => {
      this.state({ rooms: [...this.state.rooms, room] })
    })

    // get initial list of room
    socket.on('roomList', rooms => {
      this.setState({ rooms })
    })

    // socket.on('newMsg', msg => {
    //   if (selectedRoom === msg.room) addMsg(msg)
    // })

    // socket.on('newAudio', msg => {
    //   if (selectedRoom === msg.room) addMsg(msg)
    // })

    // socket.on('msgsList', msgs => {
    //   $('.messages').html('')
    //   msgs.map(addMsg)
    // })

  }
  render() {
    return (
      <div className="container w-container">
        <div className="rooms">
          <h1 className="title-rooms">Salas Disponíveis</h1>
          <ul className="room-list w-list-unstyled">
            {
              this.state.rooms.map(room => {
                return (
                  <li className='room-item' key={room._id}>
                    <Link to={`/rooms/${room._id}`}>
                      {room.name}
                    </Link>
                  </li>
                )
              })
            }
          </ul>
          <div className="add-room">+</div>
        </div>
        <Route path='/rooms' exact component={SelectRoom} />
        <Route path='/rooms/:room' component={Room} />
      </div>
    )
  }
}

export default Rooms