function submitData(name, email) {
    // Return the entire fetch call so it can be chained if needed
    return fetch(' http://localhost:3000', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        email: email
      })
    })
    .then(response => {
      // Check if the response is okay, or throw an error
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      // Do something with the data — for example, display the new user’s ID
      const p = document.createElement('p');
      p.textContent = `User ID: ${data.id}`;
      document.body.appendChild(p);
  
      // Return the data if you need it for another .then() call
      return data;
    })
    .catch(error => {
      // Handle errors — display them on the page or log to console
      const errorMsg = document.createElement('p');
      errorMsg.textContent = `Error: ${error.message}`;
      document.body.appendChild(errorMsg);
    });
  }
  