const testthis = async () => {
    const response = await fetch('/api/users/amiloggedin', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });
}

document.querySelector('#testbtn').addEventListener('click', testthis);