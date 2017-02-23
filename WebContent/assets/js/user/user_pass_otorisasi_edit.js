var hasil=false;
$(document).ready(function(){
	
	var form = $("#user_new");

	form.submit(function(event) {
		if (validatePasswordOtorisasi()) {
			
			var id = $('#id').val();
			var passwordOtorisasi = $('#passwordOtorisasi').val();
		
	
			var json = {
				"id" : id,
				"passwordOtorisasi" : passwordOtorisasi,
				
			};
			
			if(isUserAktif()==false){
				alert(getMessageSessionTimeout());
				return false;
			}else if(isUpdateOveride()){
				$.blockUI({ message: '<br>Loading...</br></br>' });
				$.ajax({
					url : getUrl+ "/master/user/user_pass_otorisasi_edit_save.html",
					data : JSON.stringify(json),
					type : "POST",
					beforeSend : function(xhr) {
						xhr.setRequestHeader(	"Accept","application/json");
						xhr.setRequestHeader("Content-Type","application/json");
					},
					success : function(result) {
						if(result==true){
							var respContent =  "Data Dengan User Id : "+id+" Berhasil Di Rubah";
							setNotificationEdit(respContent);
						}else if(result==false){
							var respContent = "";
							respContent += "Data Dengan User ID  : " + $('#id').val()+" Gagal Di Rubah";
							alert(respContent);
							return false;
						}else{
							generateError(result, 'User', $('#id').val());
						}
					}
				});
	
				event.preventDefault();
			}else{
				alert("Permintaan Tidak Dapat Diproses , Anda Tidak Memiliki Hak Akses 'Edit'");
				return false;
			}
		}
			
		return true;
		
	});
	
});

function validateNip(){
	var nip=$("#nip").val().length;
	if(nip < 1){
		$("#nipInfo").text("NIP Harus Diisi");
		$("#nipInfo").addClass("error");
		return false;
	}else{
		$("#nipInfo").addClass("error");
		$("#nipInfo").text("");
		return true;
	}
}



function validatePasswordOtorisasi(){
	return true;
}


function isUpdateOveride(){
	var isUpdate=null;
	$.ajax({
		url:getUrl+'/akses_user/is_update.html',
		async: false,
		beforeSend : function(xhr) {
			xhr.setRequestHeader(	"Accept","application/json");
			xhr.setRequestHeader("Content-Type","application/json");
		},
		success:function(result){
			if(result==true){
				isUpdate=true;
			}else{
				isUpdate=false;
			}
		}
	});
	
	return isUpdate;
}

function isCreateOveride(){
	var isCreate=null;
	$.ajax({
		url:getUrl+'/akses_user/is_create.html',
		async: false,
		beforeSend : function(xhr) {
			xhr.setRequestHeader(	"Accept","application/json");
			xhr.setRequestHeader("Content-Type","application/json");
		},
		success:function(result){
			if(result==true){
				isCreate=true;
			}else{
				isCreate=false;
			}
		}
	});
	
	return isCreate;
}