async function newEntryHandler(event) {
    event.preventDefault();
  
    const word = document.querySelector('input[name="word"]').value;
    const definition = document.querySelector('input[name="definition"]').value;
    const user_id = document.querySelector('input[name="user_id"]').value;
  
    const response = await fetch(`/api/words`, {
      method: 'POST',
      body: JSON.stringify({
        word,
        definition,
        user_id
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('#create-entry-btn').addEventListener('submit', newEntryHandler);