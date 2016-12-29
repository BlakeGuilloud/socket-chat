(function() {
  'use strict';

  const socket = io();

  let user = 'anonymous';

  $('#chat').hide();

  $('#user').click(() => {
    user = $('#userInput').val();

    $('#login').hide();
    $('#chat').show();
  });

  $('#submit').click(() => {
    const message = $('#input').val();

    socket.emit('submit', message);

    fetch('/chats', {
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      body: JSON.stringify({
        content: message,
        author: user,
      }),
    });
  });

  socket.on('submit', (msg) => {
    $('#input').val('');

    $('#list').append(`
      <div>${msg}</div>
      <span>-- ${user}</span>
      <br />
    `);
  });

  fetch('/chats')
    .then(data => data.json())
    .then((data) => {
      data.map((item) => {
        if (!item.content) return;

        $('#list').append(`
          <div>${item.content}</div>
          <span>-- ${item.author}</span>
          <br />
        `)
      })
    });
}());









// $('#lightOff').hide();
//
// $('#lightOn').click(() => {
//   socket.emit('lightOn');
//   $('#lightOn').hide();
//   $('#lightOff').show();
// });
//
// $('#lightOff').click(() => {
//   socket.emit('lightOff');
//   $('#lightOff').hide();
//   $('#lightOn').show();
// });
//
// socket.on('lightOn', () => {
//   $('#messages').append(`<li>message</li>`);
// });
//
// socket.on('lightOff', () => {
//   $('#messages').append(`<li>message</li>`);
// });
