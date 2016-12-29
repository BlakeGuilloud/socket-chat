(function() {
  'use strict';

  const socket = io();

  let author = 'anonymous';

  $('#chat').hide();

  $('#user').click(() => {
    author = $('#userInput').val();

    $('#login').hide();
    $('#chat').show();
  });

  $('#submit').click(() => {
    const content = $('#input').val();

    socket.emit('submit', content);

    fetch('/chats', {
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      body: JSON.stringify({
        content,
        author,
      }),
    });
  });

  function appendToList(item) {
    return $('#list').append(`
      <div>${item.content}</div>
      <div>-- ${item.author}</div>
    `);
  }

  socket.on('submit', (content) => {
    $('#input').val('');

    const item = {
      content,
      author,
    };

    appendToList(item);
  });

  fetch('/chats')
    .then(data => data.json())
    .then((data) => {
      data.map((item) => {
        if (!item.content) return;

        appendToList(item);
      });
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
