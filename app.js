// init
const gitHub = new GitHub;
// search input
const searchUser = document.getElementById('searchUser');
// search input event listener
searchUser.addEventListener('keyup', (e) => {
    const userText = e.target.value;
    // get input text
    if(userText !== ''){
        // make http call
        gitHub.getUser(userText)
        .then(data => {
            if(data.profile.message === 'Not Found'){
               // show alert
            } else {
               // show profile                
            }
        })
    } else {
        // clear profile
    }
});
