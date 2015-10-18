
//online
var apipath_base_photo_dm='http://eapps001.cloudapp.net/mrepacme/syncmobile_prescription/dm_prescription_path?HTTPPASS=e99business321cba'

//local
//var apipath_base_photo_dm='http://127.0.0.1:8000/mrepacme/syncmobile_prescription/dm_prescription_path?HTTPPASS=e99business321cba'


var apipath="";

var url =''
var latitude="";
var longitude="";

function getLocation() {
	$("#error_prescription_submit").html("Confirming location. Please wait.");
	$("#btn_prescription_submit").show();
	var options = { enableHighAccuracy: false};
	navigator.geolocation.getCurrentPosition(onSuccess, onError , options);	
}

// onSuccess Geolocation
function onSuccess(position) {
	$("#lat").val(position.coords.latitude);
	$("#long").val(position.coords.longitude);
	$("#error_prescription_submit").html("Location Confirmed");
	$("#btn_prescription_submit").show();
}

// onError Callback receives a PositionError object
function onError(error) {
   $("#lat").val(0);
   $("#long").val(0);
   $("#error_prescription_submit").html("Failed to Confirmed Location.");
   $("#btn_prescription_submit").hide();
}

function replace_special_char(string_value){
	var real_value=string_value.replace(/\)/g,'').replace(/\(/g,'').replace(/\$/g,'').replace(/\{/g,'').replace(/\}/g,'').replace(/\[/g,'').replace(/\]/g,'').replace(/\"/g,'').replace(/\'/g,"").replace(/\>/g,'').replace(/\</g,'').replace(/\%/g,'').replace(/\&/g,'').replace(/\#/g,'').replace(/\@/g,'').replace(/\|/g,'').replace(/\//g,"").replace(/\\/g,'').replace(/\~/g,'').replace(/\!/g,'').replace(/\;/g,'');
	return real_value;
}

// -------------

$(document).ready(function(){
		$("#wait_image_login").hide();
		$("#loginButton").show();		
		
		$("#q_lat").val("");
		$("#q_long").val("");
		
		
		$("#wait_image_prescription").hide();	
		$("#btn_prescription_submit").show();
		
		
		//alert(localStorage.synced)
		// -------------- If Not synced, Show login
		if ((localStorage.synced!='YES')){	
			$("#c_id").val("")
			$("#user_id").val("")
			$("#user_pass").val("")
			
			url = "#login";		
		}else{
			$("#c_id").val(localStorage.c_id)
			$("#user_id").val(localStorage.user_id)
			$("#user_pass").val(localStorage.user_pass)
						
			url = "#pageHome";
		}
		
		$.mobile.navigate(url);
		
	});

function get_login() {
	url = "#login";
	$.mobile.navigate(url);
	}


//================= Clear authorization
function clear_autho(){
	var check_clear=$("input[name='clear_auth_check']:checked").val();
	
	if(check_clear!='Yes'){
		$("#error_login").html("Required Confirm Clear");			
	}else{
		localStorage.base_url='';
		localStorage.photo_url='';
		localStorage.photo_submit_url='';
		
		localStorage.synced='';
		localStorage.c_id='';
		localStorage.user_id='';
		localStorage.user_pass='';		
		localStorage.sync_code='';
		
		url = "#login";
		$.mobile.navigate(url);	
		location.reload();
	};
}

//========================= Longin: Check user
function check_user() {
	
	var c_id=$("#c_id").val().toUpperCase();
	var user_id=$("#user_id").val().toUpperCase();
	var user_pass=$("#user_pass").val();
	
	var base_url='';
	var photo_url='';
	var photo_submit_url=''
	//-----
	if (c_id=="" || c_id==undefined || user_id=="" || user_id==undefined || user_pass=="" || user_pass==undefined){
		$("#error_login").html("Required CID, User ID and Password");	
	}else{
			
			$("#wait_image_login").show();
			$("#loginButton").hide();
			$("#error_login").html("")
			$("#error_home_page").html("")
			
			localStorage.base_url='';
			localStorage.photo_url='';
			localStorage.photo_submit_url='';
			
			//----
			$.ajax({
				 type: 'POST',
				 url: apipath_base_photo_dm,
				 success: function(result) {					
					if (result==''){
						$("#wait_image_login").hide();
						$("#loginButton").show();
						$("#error_login").html('Base URL not available');
					}else{
						var startIndex=result.indexOf('<start>');
						var endIndex=result.indexOf('<end>');
						
						var urlResult=result.substring(startIndex+7,endIndex);
						
						var resultArray = urlResult.split('<fd>');		
						if(resultArray.length==3){
							base_url=resultArray[0]
							photo_url=resultArray[1]
							photo_submit_url=resultArray[2]
							
							//-------------
							if(base_url=='' || photo_url==''){	
								$("#wait_image_login").hide();
								$("#loginButton").show();
								$("#error_login").html('Base URL not available');	
							}else{
								//--------------------------
								$("#error_login").html("");		
								$("#loginButton").hide();
								$("#wait_image_login").show();
								
								localStorage.base_url=base_url;
								localStorage.photo_url=photo_url;
								localStorage.photo_submit_url=photo_submit_url;
								
								localStorage.synced='NO'
								
								//-----------------
								//alert(localStorage.base_url+'check_user?cid='+c_id+'&rep_id='+encodeURIComponent(user_id)+'&rep_pass='+encodeURIComponent(user_pass)+'&synccode='+localStorage.sync_code);
								
								$.ajax({
										 type: 'POST',
										 url: localStorage.base_url+'check_user?cid='+c_id+'&rep_id='+encodeURIComponent(user_id)+'&rep_pass='+encodeURIComponent(user_pass)+'&synccode='+localStorage.sync_code,
										 success: function(result) {											
												if (result==''){
													$("#wait_image_login").hide();
													$("#loginButton").show();
													$("#error_login").html('Network timeout. Please ensure you have active internet connection.');
													
												}else{
													syncResult=result
																					
													var syncResultArray = syncResult.split('<SYNCDATA>');
													
													if (syncResultArray[0]=='FAILED'){						
														$("#error_login").html(syncResultArray[1]);
														$("#wait_image_login").hide();
														$("#loginButton").show();
													}else if (syncResultArray[0]=='SUCCESS'){
														
														localStorage.synced='YES';	
														localStorage.c_id=c_id;	
														localStorage.user_id=user_id;
														localStorage.user_pass=user_pass
														
														localStorage.sync_code=syncResultArray[1];
																	
														$("#wait_image_login").hide();
														$("#loginButton").show();
														
														//----------------									
														url = "#pageHome";
														$.mobile.navigate(url);								
														
													}else {									
														$("#wait_image_login").hide();
														$("#loginButton").show();									
														$("#error_login").html("Sync Failed. Authorization or Network Error.");									
													}								
												}
											  },
										  error: function(result) {					 
											  $("#wait_image_login").hide();
											  $("#loginButton").show();
											  $("#error_login").html("Sync Failed. Network Error.");		
											
										  }
									  });//end ajax
									  
									}//base url check
									
						}
					}
				 }
			
			});//end ajax
	   }
	}//function

function takePictureNext(){	
	$("#error_home_page").html("");
	$("#btn_prescription_submit").hide();
	
	var pres_photo=$("#prescriptionPhoto").val();
	
	if (pres_photo==''|| pres_photo==undefined){
		$("#error_home_page").html("Required Picture")
	}else{
		
		//--------------------------	
		url = "#page_prescription";
		$.mobile.navigate(url);
	}
}

function prescription_submit(){
	$("#error_prescription_submit").html("")		
	$("#wait_image_prescription").hide();
	
	
	var doctor_name=$("#doctor_name").val();
	
	if (doctor_name==''){		
		$("#error_prescription_submit").text("Required Doctor");
	}else{
		
		var latitude=$("#lat").val();
		var longitude=$("#long").val();		
		var prescriptionPhoto=$("#prescriptionPhoto").val();
		
		if (prescriptionPhoto==''){
			$("#error_prescription_submit").html('Required picture');
		}else{			
			var now = $.now();
			var imageName=localStorage.user_id+'_'+now.toString()+'.jpg';
			
			if (latitude=='' || latitude==0 || longitude=='' || longitude==0){
				$("#error_prescription_submit").html('Location not Confirmed');		
			}else{
								
				$("#wait_image_prescription").show();
				$("#btn_prescription_submit").hide();
				
				var medicine_1=$("#medicine_1").val();
				var medicine_2=$("#medicine_2").val();
				var medicine_3=$("#medicine_3").val();
				var medicine_4=$("#medicine_4").val();
				var medicine_5=$("#medicine_5").val();
				
				//alert(localStorage.base_url+'prescription_submit?cid='+localStorage.c_id+'&rep_id='+localStorage.user_id+'&rep_pass='+encodeURIComponent(localStorage.user_pass)+'&synccode='+localStorage.sync_code+'&doctor_name='+encodeURIComponent(doctor_name)+'&medicine_1='+encodeURIComponent(medicine_1)+'&medicine_2='+encodeURIComponent(medicine_2)+'&medicine_3='+encodeURIComponent(medicine_3)+'&medicine_4='+encodeURIComponent(medicine_4)+'&medicine_5='+encodeURIComponent(medicine_5)+'&latitude='+latitude+'&longitude='+longitude+'&pres_photo='+imageName)							
				
				$.ajax({
					 type: 'POST',
					 url: localStorage.base_url+'prescription_submit?cid='+localStorage.c_id+'&rep_id='+localStorage.user_id+'&rep_pass='+encodeURIComponent(localStorage.user_pass)+'&synccode='+localStorage.sync_code+'&doctor_name='+encodeURIComponent(doctor_name)+'&medicine_1='+encodeURIComponent(medicine_1)+'&medicine_2='+encodeURIComponent(medicine_2)+'&medicine_3='+encodeURIComponent(medicine_3)+'&medicine_4='+encodeURIComponent(medicine_4)+'&medicine_5='+encodeURIComponent(medicine_5)+'&latitude='+latitude+'&longitude='+longitude+'&pres_photo='+imageName,
					 success: function(result) {						
							if (result==''){
								$("#error_prescription_submit").html('Network timeout. Please ensure you have active internet connection.');
								$("#wait_image_prescription").hide();
								$("#btn_prescription_submit").show();
							}else{
								var resultArray = result.split('<SYNCDATA>');			
								if (resultArray[0]=='FAILED'){						
									$("#error_prescription_submit").html(resultArray[1]);
									$("#wait_image_prescription").hide();
									$("#btn_prescription_submit").show();
								}else if (resultArray[0]=='SUCCESS'){									
									var result_string=resultArray[1];
									
									
									document.getElementById('myImagePrescription').src = '';
									
									//image upload function									
									//uploadPhoto(prescriptionPhoto, imageName);
									
									
									$("#doctor_name").val("");
									$("#medicine_1").val("");
									$("#medicine_2").val("");
									$("#medicine_3").val("");
									$("#medicine_4").val("");
									$("#medicine_5").val("");
									
									$("#lat").val("");
									$("#long").val("");
									
									$("#prescriptionPhoto").val("");
									$("#wait_image_prescription").hide();
									$("#btn_prescription_submit").hide();
									
									//--------------------------
									url = "#page_success";
									$.mobile.navigate(url);	
									
								}else{						
									$("#error_prescription_submit").html('Authentication error. Please register and sync to retry.');
									$("#wait_image_prescription").hide();
									$("#btn_prescription_submit").show();
									}
							}
						  },
					  error: function(result) {			  
						  $("#error_prescription_submit").html('Invalid Request'); 
						  $("#wait_image_prescription").hide();
						  $("#btn_prescription_submit").show();
					  }
					  });//end ajax
				}
			}
		
		}
	//}
}

//---------------------- Exit Application
function exit() {	
	navigator.app.exitApp();
}

// ----------------Camera------------

//image Profile
function getPrescriptionImage() {
	navigator.camera.getPicture(onSuccessProfile, onFailProfile, { quality: 10,
		destinationType: Camera.DestinationType.FILE_URI });
}
function onSuccessProfile(imageURI) {
    var image = document.getElementById('myImagePrescription');
    image.src = imageURI;
	imagePath = imageURI;
	$("#prescriptionPhoto").val(imagePath);
}
function onFailProfile(message) {
	imagePath="";
    alert('Failed because: ' + message);
}


//------------------------------------------------------------------------------

//File upload 
function uploadPhoto(imageURI, imageName) {
    var options = new FileUploadOptions();
    options.fileKey="upload";
    options.fileName=imageName;
    options.mimeType="image/jpeg";
	
    var params = {};
    params.value1 = "test";
    params.value2 = "param";
	
    options.params = params;
	
    var ft = new FileTransfer();
     ft.upload(imageURI, encodeURI(localStorage.photo_submit_url+"fileUploaderPrescription/"),winProfile,failProfile,options);
}

function winProfile(r) {
}

function failProfile(error) {
	$("#error_prescription_submit").text('Memory Error. Please take new picture and Submit');
}




