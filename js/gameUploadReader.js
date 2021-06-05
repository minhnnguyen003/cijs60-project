//getElement

var $uploader = document.getElementById('uploader');
var $fileUploadbutton = document.getElementById('folder-picker');
var $gameName = document.getElementById('game-name');
var $gameUploader = document.querySelectorAll('.game-uploader');

$gameName.addEventListener('input', () => {
    if($gameName.value == '')
    {
        for(let i of $gameUploader) 
        {
            i.style.display = 'none';    
        }
    }
    else
    {
        for(let i of $gameUploader) 
        {
            i.style.display = 'block';    
        }
    }
})

$fileUploadbutton.addEventListener('change', function () {

    //Get File
    var files = event.target.files;

    for(let file of files)
    {
        //Create a storage Ref
        let storageRef = firebase.storage().ref(file.webkitRelativePath);
    
        //Upload File
        let task = storageRef.put(file);
        // console.log(file.webkitRelativePath);
            //Update progress bar
        task.on('stage changed', 

            function progress(snapshot) {
                var percentage = (snapshot.bytesTransferred / snapshot.totalBytes)*100
                $uploader.value = percentage;
            },

            function error(err) {

            },

            function complete() {

            },
        )
    }
});