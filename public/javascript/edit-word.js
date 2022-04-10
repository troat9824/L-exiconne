async function editFormHandler(event) {
    event.preventDefault();
  
    const word = document.querySelector(/*'input[name="word"]'*/).value.trim();
    const definition = document.querySelector(/*'input[name="definition"]'*/).value;

    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
    const response = await fetch(`/api/words/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        word,
        definition
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard/');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.edit-post-btn').addEventListener('submit', editFormHandler);
  