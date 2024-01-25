async function fetchAllowedEmails() {
  const response = await fetch('/allowedMails');
  const allowedEmails = await response.json();
  
  console.log(allowedEmails);

  // Get the table element
  const table = document.querySelector('#emailTable');

  // Clear the table body
  table.innerHTML = '';

  // Add a row for each email
  allowedEmails.forEach((email, index) => {
    // Create a new row
    const row = table.insertRow();

    // Add the serial number column
    const sNoCell = row.insertCell();
    sNoCell.textContent = index + 1;

    // Add the email column
    const emailCell = row.insertCell();
    emailCell.textContent = email;

    // Add the action column with a delete button
    const actionCell = row.insertCell();
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('btn', 'btn-danger');
    deleteButton.addEventListener('click', async () => {
      try {
        const response = await fetch('/remove-email', {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        });

        if (response.status === 200) {
          // Remove the row from the table
          // table.deleteRow(row.rowIndex);
          alert('Email removed successfully')
          window.location.reload();
        } else {
          const data = await response.json();
          console.log(data.message);
        }
      } catch (error) {
        alert('Error removing email:', error);
      }
    });
    actionCell.appendChild(deleteButton);
  });
}

// Call fetchAllowedEmails() to populate the table on page load
fetchAllowedEmails();


// Signup functionality

const signupForm = document.querySelector("#signup-form");
signupForm.addEventListener("submit", async (e) => {
  
  e.preventDefault();
  
  const email = signupForm["email"].value;
  try {
    const response = await fetch('/add-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    if (response.status === 201) {
      alert('Email added successfully')
    } else {
      const data = await response.json();
      console.log(data.message)
    }
  } catch (error) {
    alert('Error adding email:', error);
  }
});
  

