
function newsletterApplication() {
    return {
      email: '',
      subscriptions: JSON.parse(localStorage.getItem('newsletterSubscriptions')) || [],
  
      subscribe() 
      {
        this.subscriptions.push(this.email);
        localStorage.setItem('newsletterSubscriptions', JSON.stringify(this.subscriptions));
        console.log('Subscribed:', this.email);
        this.email = '';
        alert('You have been subscribed successfully!');
      }
      
    };
  }


  let editingEnabled = false; 


  function toggleEditing() {
      editingEnabled = !editingEnabled; 
      const editableElements = document.querySelectorAll('[contenteditable]');
      editableElements.forEach(element => {
          element.contentEditable = editingEnabled ? "true" : "false"; 
      });
  
      const editButton = document.getElementById('editBtn');
      const saveButton = document.getElementById('saveBtn');
      editButton.style.display = editingEnabled ? "none" : "inline-block"; 
      saveButton.style.display = editingEnabled ? "inline-block" : "none"; 
  }
  
 
  function saveChanges() {
      alert('Changes saved successfully!');
  }


  function toggleEditing() {
      editingEnabled = !editingEnabled; 
      const editableElements = document.querySelectorAll('[contenteditable]');
      editableElements.forEach(element => {
          element.contentEditable = editingEnabled ? "true" : "false"; 
      });

      const editButton = document.getElementById('editBtn');
      const saveButton = document.getElementById('saveBtn');
      editButton.style.display = editingEnabled ? "none" : "inline-block"; 
      saveButton.style.display = editingEnabled ? "inline-block" : "none";
  }
  

  function editTextContent(event) {
      if (!editingEnabled) return; 
  
      const target = event.target;
      if (target.hasAttribute('contenteditable')) {
          const newText = prompt("Enter the new content:");
          if (newText !== null) {
              target.innerText = newText;
          }
      }
  }
  

  function editTextContent(event) {
    if (!editingEnabled) return; 

  
}

function saveChanges() {

  const indexDataData = JSON.parse(localStorage.getItem("indexData"));
  const editableElements = document.querySelectorAll('[contenteditable]');
  editableElements.forEach(element => {
      const key = element.dataset.key; 
      if (key && indexDataData.hasOwnProperty(key)) {
          indexDataData[key] = element.innerText.trim(); 
      }
  });

  
  localStorage.setItem("indexData", JSON.stringify(indexDataData));
  
  alert('Changes saved successfully!');
}


  document.addEventListener('click', editTextContent);
  