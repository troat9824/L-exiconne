async function newEntryHandler(event) {
  console.log("button clicked!");
  event.preventDefault();

  const word = document.querySelector('#enter-word').value.trim();
  const definition = document.querySelector('#enter-def').value.trim();
  //const user_id = document.querySelector('input[name="user_id"]').value;

  const response = await fetch(`/api/words`, {
    method: 'post',
    body: JSON.stringify({
      word,
      definition,
      //user_id
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert(response.statusText);
  }
};
  
  document.querySelector('.create-entry-btn').addEventListener('click', newEntryHandler);