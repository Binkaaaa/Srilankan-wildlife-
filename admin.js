function goToSubscription() {
    document.getElementById('subscriptionsTable').style.display = 'block';
    displaySubscriptions();
}

function displaySubscriptions() {
    // Retrieve subscriptions from localStorage
    const subscriptions = JSON.parse(localStorage.getItem('newsletterSubscriptions')) || [];

    // Clear previous entries in the table
    const subscriptionList = document.getElementById('subscriptionList');
    subscriptionList.innerHTML = '';

    // Display subscriptions in the table
    subscriptions.forEach(email => {
        const row = document.createElement('tr');
        const cell = document.createElement('td');
        cell.textContent = email;
        row.appendChild(cell);
        subscriptionList.appendChild(row);
    });
}

