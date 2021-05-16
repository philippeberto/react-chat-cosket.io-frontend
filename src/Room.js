const Room = (props) => {
  return (
    <div className="room" >
      <div className="messages">
        <div className='message'>
          <span className='msgBody'>Entrou na sala.</span>
        </div>
      </div>
      <div className="new-message-form w-form">
        <form className="form">
          <textarea id="msg" name="msg" maxlength="5000" placeholder="Digite sua mensagem e pressione &lt;Enter&gt;"
            autofocus="true" className="msg w-input">
          </textarea>
          <button className="send-audio w-button" id="send-audio">Enviar<br />Áudio</button>
        </form>
      </div>
    </div>
  )
}

export default Room
