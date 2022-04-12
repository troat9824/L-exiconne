async function getWordHandler(event) {
    event.preventDefault();
  
    const word = document.querySelector('#enter-search').value;
    //const definition = document.querySelector('input[name="definition"]').value;
    //const user_id = document.querySelector('input[name="user_id"]').value;

    /*function getSearch() {
        console.log(word);
    };*/
  
    const response = await fetch(`/api/words/:${word}`, {
        
      //method: 'GET'
      /*body: JSON.stringify({
        word,
        definition,
        user_id
      }),
      headers: {
        'Content-Type': 'application/json' */
    
    });
    console.log(response);
  
    if (response.ok) {
      document.location.replace('/words');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('#search-entry-btn').addEventListener('submit', getWordHandler);