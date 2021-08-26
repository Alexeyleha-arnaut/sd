const renderFolder = doc => {
    const folder =
        `
        <div>
            <p>${doc.data().name}</p>
            <button>удалить<button>
        </div
        `

    document.querySelector('.container').insertAdjacentHTML('beforeend', folder)
}


const firebaseConfig = {
    apiKey: "AIzaSyAzS9O6T2J3vkgToGSoCSIzunRkzEDizhg",
    authDomain: "totemic-point-304116.firebaseapp.com",
    projectId: "totemic-point-304116",
    storageBucket: "totemic-point-304116.appspot.com",
    messagingSenderId: "718593865665",
    appId: "1:718593865665:web:372678b2a1a0bbf03c2140"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore()

db.collection('folders').get().then(querySnapshot => {
    querySnapshot.forEach(doc => {
        renderFolder(doc)
    });
})

document.querySelector('.add').addEventListener('click', e => {
    db.collection('folders').add({
        name: document.querySelector('.add-name').value
    })
})