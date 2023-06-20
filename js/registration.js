$(()=>{
$("#btnRegister").click(()=>{
$("#btnRegister").hide();

$.post($("#registrationForm").attr("action"),
$("#registrationForm :input").serializeArray(),
(data)=>{
    $("#msg").show().html(data);
    $("#btnRegister").show();
    return false;
});
$("#registrationForm").submit(()=>{
return false;
});
});
});