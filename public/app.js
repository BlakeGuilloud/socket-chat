(function() {
  'use strict';

  const socket = io();
  let author = 'anonymous';

  $('#chat').hide();

  $('#userLogin').click(() => {
    author = $('#userInput').val();

    $('#login').hide();
    $('#chat').show();
  });

  $('#chatSubmit').click(() => {
    const content = $('#chatInput').val();

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
    if (!item.author) item.author = 'anonymous';
    return $('#list').append(`
      <div class="chat-item">
        <div class="content">${item.content}</div>
        <div class="author">- ${item.author}</div>
      </div>
    `);
  }

  socket.on('submit', (content) => {
    $('#chatInput').val('');

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
