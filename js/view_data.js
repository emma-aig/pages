const user_detail_container = document.querySelector(".user_detail_container"),
close = document.querySelector(".close"),
table_rows = document.querySelectorAll("tr"),
dim_background = document.querySelector(".dim_background"),
picture = document.querySelector(".picture"),
username = document.querySelector(".username"),
first_name = document.querySelector(".first_name"),
last_name = document.querySelector(".last_name"),
date = document.querySelector(".date"),

// Declare the new variables for the delete task
user_id = document.querySelector(".user_id"),
 current_picture = document.querySelector(".current_picture"),
 btn_delete = document.querySelector(".btn_delete"),
 confirm_delete = document.querySelector(".confirm_delete"),
 confirm_box = document.querySelector(".confirm_box"),
 user_info = document.querySelector(".user_info"),
 btnNo = document.querySelector(".btnNo");

 //Popup the confirm box
btn_delete.addEventListener("click", ()=>{
    confirm_box.style.display="block";
    user_info.style.display="none";
    confirm_delete.innerHTML="<h3> Confirm Delete </h3><p>Are you sure you want to delete this account?  <br/><br/> This account belongs to "+ first_name.innerHTML+ " "+last_name.innerHTML+ " and it was created "+date.innerHTML+"</p>";
});
 


//Descard the confirm box
btnNo.addEventListener("click", ()=>{
    confirm_box.style.display="none";
    user_info.style.display="block";
});




const slideUpContiner=()=>{
    dim_background.style.pointerEvents="none";
    dim_background.style.opacity="0";
    user_detail_container.style.top="-800px";
};

table_rows.forEach(table_row => {
table_row.addEventListener("click", ()=>{

    dim_background.style.pointerEvents="auto";
    dim_background.style.opacity=".8";
    user_detail_container.style.top="5%";

    const td2 = table_row.querySelector("td:nth-of-type(2)").innerHTML,
          td3 = table_row.querySelector("td:nth-of-type(3)").innerHTML,
          td4 = table_row.querySelector("td:nth-of-type(4)").innerHTML,
          td5 = table_row.querySelector("td:nth-of-type(5)").innerHTML,
          td6 = table_row.querySelector("td:nth-of-type(6)").innerHTML,           
          //New variables for confirm box
          td7 = table_row.querySelector("td:nth-of-type(7)").innerHTML,
          td8 = table_row.querySelector("td:nth-of-type(8)").innerHTML;

          picture.innerHTML = td2;
          username.innerHTML = td3;
          first_name.innerHTML = td4;
          last_name.innerHTML = td5;
          date.innerHTML = td6;
          
          //Pass the values to the various input boxes
          user_id.value = td7;
          current_picture.value=td8;

});
});

dim_background.addEventListener("click", ()=>{
    slideUpContiner();
});

close.addEventListener("click", ()=>{
    slideUpContiner();
});