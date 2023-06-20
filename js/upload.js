const previewImage = () =>{
    let file = document.querySelector("#fileInput");
    let picture = document.querySelector(".picture");
    let message = document.querySelector(".message");
    let btnUpload = document.querySelector(".btnUpload");

    picture.src = window.URL.createObjectURL(file.files[0]);

    // To avoid any unwanted file being uploaded, let us validate the file from the user
    let regex = new RegExp("[^.]+$");
    fileExtension = file.value.match(regex);
    if(fileExtension == "jpeg" || fileExtension == "jpg" || fileExtension == "png"){
        btnUpload.style.display="block"; 
        message.innerHTML="";
    }else{ 
        picture.src="images/error.png";
        btnUpload.style.display="none"
        message.innerHTML="<b>." +fileExtension+ 
                "</b> file is not allowed.<br/>Choose a .jpg or .png file only"
    }
};