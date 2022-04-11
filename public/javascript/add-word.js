async function newEntryHandler(event) {
    event.preventDefault();
  
    const word = document.querySelector('#enter-word').value;
    const definition = document.querySelector('#enter-def').value;
    //const user_id = document.querySelector('input[name="user_id"]').value;
  
    const response = await fetch(`/api/words`, {
      method: 'POST',
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
      document.location.replace('/words');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('#create-entry-btn').addEventListener('submit', newEntryHandler);