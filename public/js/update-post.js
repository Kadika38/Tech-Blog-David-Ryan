const updatePostFormHandler = async (event) => {
    event.preventDefault();

    const headline = document.querySelector('#updated-headline').value.trim();
    const content = document.querySelector('#updated-content').value.trim();

    if (headline && content) {
        const postid = event.target.name;
        const address = `/api/posts/currentuser/${postid}`;
        const response = await fetch(address, {
            method: 'PUT',
            body: JSON.stringify({ headline, content }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to log in');
        }
    };
};

document.querySelector('#save-submit').addEventListener('click', updatePostFormHandler);