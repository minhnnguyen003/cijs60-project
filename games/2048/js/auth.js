const commentList = document.querySelector('.comment-list')
const setupComment = (data) => {
    let html = '';
    data.forEach(doc => {
        const comment = doc.data();
        const commentImport = `
<section>
    <div class='friend'>
        <div class="avatar"><img src='./img/blank_ava.jpg'></div>
        <div class="usercomment">
            <div class="name">
                ${comment.name}
            </div>
            <br>
            <div class="comment">${comment.comment}</div>
            <br>
            <div class="timeCreate">${comment.created.toDate()}</div>
        </div>

    </div>
</section>
`;
        html += commentImport
    })
    commentList.innerHTML = html;
}

db.collection('comment').orderBy('created').onSnapshot(snapshot => {
    setupComment(snapshot.docs);

})

const createForm = document.querySelector('#create-form')
createForm.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('comment').add({
        name: createForm['name'].value,
        comment: createForm['comment'].value,
        created: firebase.firestore.FieldValue.serverTimestamp()
    })



})