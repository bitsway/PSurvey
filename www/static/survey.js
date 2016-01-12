

var mobile_off_flag=0;
var url = "";
var base_url='';
var photo_url='';

var j = 0;
var i = 0;

function reload_function() {
	location.reload();
}
//-------GET GEO LOCATION
function getLocationInfo() { //location
	$("#wait_image_visit_submit").show();
	$("#visit_submit").hide();
	$("#btn_location").hide();
	
	$("#checkLocation").html(''); 
	$("#checkLocationProfileUpdate").html('');
	
	
	$("#wait_image_visit_submit_doc").show();
	$("#visit_submit_doc").hide();
	$("#btn_location_doc").hide();
	
	$("#checkLocation_doc").html('');
	var options = { enableHighAccuracy: false};
	
	navigator.geolocation.getCurrentPosition(onSuccess, onError , options);
}

// onSuccess Geolocationshom

function onSuccess(position) {
	$("#lat").val(position.coords.latitude);
	$("#longitude").val(position.coords.longitude);
	
	$("#lat_p").val(position.coords.latitude);
	$("#long_p").val(position.coords.longitude);
	
	$("#errorChkVSubmit").html('');
	$("#errorConfiProfileUpdate").html('');
	$("#errorChkVSubmit_doc").html('');
	
	
	
	$("#checkLocation").html('Location Confirmed'); 
	$("#checkLocationProfileUpdate").html('Location Confirmed');
	
		
	
	$("#wait_image_visit_submit").hide();
	$("#visit_submit").show();
	$("#btn_location").hide();
	
	$("#checkLocation_doc").html('Location Confirmed'); 

	$("#wait_image_visit_submit_doc").hide();
	$("#visit_submit_doc").show();
	$("#btn_location_doc").hide();
	
	
} function onError(error) {
	$("#lat").val(0);
	$("#longitude").val(0);
	
	$("#lat_p").val(0);
	$("#long_p").val(0);
	
	$("#checkLocation").html('Location not found');
	$("#checkLocationProfileUpdate").html('Location not found');
	
	
	
	$("#wait_image_visit_submit").hide();
	$("#visit_submit").hide();
	$("#btn_location").show();
	
	$("#checkLocation_doc").html('Location not found');
	$("#wait_image_visit_submit_doc").hide();
	$("#visit_submit_doc").hide();
	$("#btn_location_doc").show();
	
	//$("#wait_image_visit_submit").hide();
//	$("#visit_submit").show();
//	$("#btn_location").hide();
//	
//	$("#checkLocation_doc").html('Location Confirmed'); 
//
//	$("#wait_image_visit_submit_doc").hide();
//	$("#visit_submit_doc").show();
//	$("#btn_location_doc").hide();
	}


//set confirm page

function set_confirm_page(){
	$("#wait_image_visit_submit").hide();
	$("#visit_submit").hide();
	$("#btn_location").show();
	
	
	$("#lat").val(0);
	$("#longitude").val(0);
	
	$("#lat_p").val(0);
	$("#long_p").val(0);
	$("#checkLocation").html('');
	
	
	$("#wait_image_visit_submit_doc").hide();
	$("#visit_submit_doc").hide();
	$("#btn_location_doc").show();
	$("#checkLocation_doc").html('');
	
	
}


// -------------- If Not synced, Show login
function first_page(){
	if ((localStorage.synced!='YES')){
		url = "#login";
		$.mobile.navigate(url);		
	}
	else{
		url = "#pageHome";
		$.mobile.navigate(url);		
	}
}

// -------------- visit page show if mobile off 
function cancelVisitPage(){
	localStorage.visit_page=""
	mobile_off_flag=0;
	
	localStorage.visitMarketStr="";
	localStorage.visit_distributor_nameid=""
	localStorage.visit_type="";
	localStorage.scheduled_date="" ;
	localStorage.visit_client="";
	
	localStorage.productListStr='';
	localStorage.product_tbl_cart='';
	cancel_cart();
	
	
	//$("#btn_visit_submit").hide();
	
	
//	============Doctor=========
	localStorage.campaign_show_1="";
	localStorage.gift_show_1="";
	localStorage.ppm_show_1="";
	localStorage.sample_show_1="";
	
	
	
	localStorage.productGiftStr='';
	localStorage.campaign_doc_str='';
	localStorage.productSampleStr='';
	localStorage.productppmStr='';

	$(".visit_client").html('');
	
	
	set_doc_all();
	
	
	url = "#pageHome";
	$.mobile.navigate(url);

	
}
function set_doc_all(){
	// $('#doctor_campaign_list_tbl :checkbox').each(function () {    
//		 $(this).attr('checked', false);  //This will uncheck the current checkbox            
//	 });
	 $('#doc_campaign').html('');
	$('#doc_gift').html('');
	$('#doc_ppm').html('');
	$('#doc_sample').html('');
	
	 
	 $(".docCampaign").attr('checked', false);
	 $(".docSample").val('');
	 $(".docGift").val('');
	 $(".docPpm").val('');
	 
	 $('#doc_feedback').val('');
	 
	 $('#campaign_combo_id').val('');
	 $('#gift_combo_id').val('');
	 $('#ppm_combo_id').val('');
	 $('#sample_combo_id').val('');
	 
	 
	 
	$("#btn_location_doc").show();
	$("#visit_submit_doc").hide();	
	$("#checkLocation_doc").html('');
	$("#wait_image_visit_submit_doc").hide('');
	 
	 
	  
	 
	
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
		
		localStorage.cid='';
		localStorage.user_id='';
		localStorage.user_pass='';
		localStorage.synccode='';
		localStorage.marketListStr='';
		localStorage.productListStr='';
		localStorage.product_tbl_cart='';
		localStorage.marchandizingItem='';
		localStorage.distributorListStr='';	
		localStorage.synced='';
		
		localStorage.client_string=''	;
		localStorage.visit_client='';
		localStorage.client_string='';
		
		localStorage.visit_type='';
		localStorage.scheduled_date='';
		localStorage.visitMarketStr='';
		localStorage.visit_distributor_nameid=''
		localStorage.marchandizingStr='';
		localStorage.clientProfileStr='';
		
			
		localStorage.product_tbl_str='';
		
		localStorage.product_tbl_del_str='';
		
		localStorage.distributor_name='';
		localStorage.delivery_date='';
		localStorage.dis_client_string='';
		
		localStorage.plan_market='';
		localStorage.plan_date='';
		
		localStorage.m_plan_client_string='';
		localStorage.plan_ret_name='';
		
		localStorage.marketInfoStr='';
		localStorage.marketInfoSubmitStr='';
		localStorage.productOrderStr='';
		localStorage.marchandizingInfoStr='';
		
		localStorage.visit_plan_marketlist_combo='';
		localStorage.visit_plan_client_cmb_list='';
		localStorage.delivery_distributor_cmb_list='';
		localStorage.delivery_retailer_cmb_list='';
		localStorage.market_cmb_list_cp='';
		localStorage.unschedule_market_cmb_id='';
		
		localStorage.profile_m_client_org_id='';
		
		//----------
		localStorage.campaign_string=''	;
		localStorage.visit_camp_list_str='';
		localStorage.visit_camp_submit_str='';
		//------
		localStorage.brand_list_string='';
		
		localStorage.visit_page="";
		
		localStorage.region_string="";
		
		localStorage.payment_mode="";
		
		
		localStorage.productGiftStr='';
		localStorage.campaign_doc_str=''
		localStorage.productSampleStr=''
		
		
		localStorage.productppmStr='';
		
		
		localStorage.campaign_show_1='';
		localStorage.gift_show_1='';
		localStorage.sample_show_1='';
		localStorage.ppm_show_1='';
		
		localStorage.productOrder_change=''
		
		
		localStorage.report_button='';
		
		
		localStorage.market_client=''
		
		localStorage.menu='';
													
		localStorage.ppm_string='';
		
		localStorage.user_type='';
		
		localStorage.market_doctor='';
		
		

		
		url = "#login";
		$.mobile.navigate(url);	
		location.reload();
	}
}

function get_login() {
	var url = "#login";
	$.mobile.navigate(url);
	}

							
//========================= Longin: Check user
function check_user() {
	
	
	var cid=$("#cid").val().toUpperCase();
	cid=$.trim(cid);
	

	
	//Main

	
	//var  apipath_base_photo_dm='http://127.0.0.1:8000/mrepbiopharma/syncmobile_ofline_ppm_report/dmpath?CID='+cid +'&HTTPPASS=e99business321cba'
	
//var apipath_base_photo_dm='http://e2.businesssolutionapps.com/mrepbiopharma/syncmobile_ofline_ppm_report_test_bak/dmpath?CID='+cid +'&HTTPPASS=e99business321cba'
  var apipath_base_photo_dm ='http://e2.businesssolutionapps.com/welcome/dmpath_live_20150502/get_path?CID='+cid +'&HTTPPASS=e99business321cba';
	
	
	var user_id=$("#user_id").val();
	var user_pass=$("#user_pass").val();
	
	user_id=$.trim(user_id);
	
	
	//-----
	
	if (user_id=="" || user_id==undefined || user_pass=="" || user_pass==undefined){
		url = "#login";      
		$.mobile.navigate(url);
		$("#error_login").html("Required User ID and Password");	
	}else{
		//-----------------
		localStorage.base_url='';
		localStorage.photo_url='';
		localStorage.photo_submit_url='';
		
		//alert(apipath_base_photo_dm);
		$("#loginButton").hide();
		$("#wait_image_login").show();
		//alert (apipath_base_photo_dm);	
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
					
					
					//Clear local storage arte login hit start
						base_url='';
						photo_url='';
					
						localStorage.base_url='';
						localStorage.photo_url='';
						localStorage.photo_submit_url='';
						
				
						localStorage.marketListStr='';
						localStorage.productListStr='';
						localStorage.product_tbl_cart='';
						localStorage.marchandizingItem='';
						localStorage.distributorListStr='';	
				
						
						localStorage.client_string=''	;
						localStorage.visit_client='';
						
						localStorage.visit_type='';
						localStorage.scheduled_date='';
						localStorage.visitMarketStr='';
						localStorage.visit_distributor_nameid=''
						localStorage.marchandizingStr='';
						localStorage.clientProfileStr='';
						
							
						localStorage.product_tbl_str='';
						
						localStorage.product_tbl_del_str='';
						
						localStorage.distributor_name='';
						localStorage.delivery_date='';
						localStorage.dis_client_string='';
						
						localStorage.plan_market='';
						localStorage.plan_date='';
						
						localStorage.m_plan_client_string='';
						localStorage.plan_ret_name='';
						
						localStorage.marketInfoStr='';
						localStorage.marketInfoSubmitStr='';
						localStorage.productOrderStr='';
						localStorage.marchandizingInfoStr='';
						
						localStorage.visit_plan_marketlist_combo='';
						localStorage.visit_plan_client_cmb_list='';
						localStorage.delivery_distributor_cmb_list='';
						localStorage.delivery_retailer_cmb_list='';
						localStorage.market_cmb_list_cp='';
						localStorage.unschedule_market_cmb_id='';
						
						localStorage.profile_m_client_org_id='';
						
						//----------
						localStorage.campaign_string=''	;
						localStorage.visit_camp_list_str='';
						localStorage.visit_camp_submit_str='';
						//------
						localStorage.brand_list_string='';
						
						localStorage.visit_page="";
						
						localStorage.region_string="";
						
						localStorage.payment_mode="";
						
						localStorage.productGiftStr='';
						localStorage.campaign_doc_str=''
						localStorage.productSampleStr=''
						
						localStorage.productppmtStr='';
						
						
						localStorage.market_client='';
						
						
						localStorage.menu='';
																	
						localStorage.ppm_string='';
						
						localStorage.user_type='';
						localStorage.market_doctor='';
						localStorage.report_button='';
						localStorage.doctorreport_button='';
						
						
						localStorage.campaign_show_1='';
						localStorage.gift_show_1='';
						localStorage.sample_show_1='';
						localStorage.ppm_show_1='';
					
					
					
					
					
					
					
					
					
					
					
					
					
					//Clear local storage arte login hit end
					
					//alert ("111111")
					
					var startIndex=result.indexOf('<start>');
					var endIndex=result.indexOf('<end>');
					
					var urlResult=result.substring(startIndex+7,endIndex);
					
					var resultArray = urlResult.split('<fd>');		
					if(resultArray.length==3){
						base_url=resultArray[0];
						photo_url=resultArray[1];
						photo_submit_url=resultArray[2];
						
						//-------------
						if(base_url=='' || photo_url==''){	
							$("#wait_image_login").hide();
							$("#loginButton").show();
							$("#error_login").html('Base URL not available');	
						}else{
							//--------------------------
							clear_autho();
							$("#error_login").html("");		
							$("#loginButton").hide();
							$("#wait_image_login").show();
							
							localStorage.base_url=base_url;
							localStorage.photo_url=photo_url;
							localStorage.photo_submit_url=photo_submit_url;
							
							localStorage.cid=cid;
							localStorage.user_id=user_id;
							localStorage.user_pass=user_pass;   		
							localStorage.synced='NO'
							
						//	$("#error_login").html(localStorage.base_url+'check_user?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode);
						//	http://127.0.0.1:8000/lscmreporting/syncmobile/check_user?cid=LSCRM&rep_id=1001&rep_pass=123&synccode=
							
							$.ajax({
									 type: 'POST',
									 url: localStorage.base_url+'check_user?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode,
									 success: function(result) {
											//alert ("nnnnnnn");
											if (result==''){
												$("#wait_image_login").hide();
												$("#loginButton").show();
												$("#error_login").html('Sorry Network not available');
												
											}else{							
												var resultArray = result.split('<SYNCDATA>');			
												if (resultArray[0]=='FAILED'){
													$("#wait_image_login").hide();
													$("#loginButton").show();								
													$("#error_login").html(resultArray[1]);
													
												}else if (resultArray[0]=='SUCCESS'){
													
													localStorage.synccode=resultArray[1];
													localStorage.marketListStr=resultArray[2];
													//alert (resultArray[2]);
													localStorage.productListStr=resultArray[3];
													localStorage.marchandizingItem=resultArray[4];
													localStorage.distributorListStr=resultArray[5];								
													localStorage.brand_list_string=resultArray[6];
													
													localStorage.complain_type_string=resultArray[7];
													localStorage.complain_from_string=resultArray[8];
													localStorage.task_type_string=resultArray[9];
													region_string=resultArray[10];
													localStorage.gift_string=resultArray[11];
													localStorage.clientCat_string=resultArray[12];
													
													localStorage.market_client=resultArray[13];
													
													localStorage.menu=resultArray[14];
													
													localStorage.ppm_string=resultArray[15];
													
													localStorage.user_type=resultArray[16];
													
													localStorage.market_doctor=resultArray[17];
													//alert (localStorage.menu);
												//	==============Set menu start================\
												
												var menuList=localStorage.menu.split('<rd>');
												var menuLength=menuList.length;
												var menu_str='';
												var order_report="No";
												var doctor_report="No";
												for (j=0; j < menuLength; j++){
													var single_menu_list = menuList[j].split('<fd>');
													var s_key=single_menu_list[0];
													var s_value=single_menu_list[1];
													if (s_value=='YES'){
															 //alert (s_key);	
															 menu_str=menu_str+'<a id="sub_button" data-role="button" style="height:100px;" onClick="'+s_key+'()" ><img style="padding-top:0px; padding-bottom:0px;" src="'+s_key+'.png"></a>';

														if (s_key=="chemist_visit"){
															 order_report="Yes";
															
														}
														if (s_key=="doctor_visit"){
															 doctor_report="Yes";
															
														}
														
														
													}
													
												}
												
												localStorage.menu_list=menu_str;
												
												$('#menu_show').empty();
												//$("#menu_tbl").html(localStorage.menu_list);
												$('#menu_show').append(localStorage.menu_list).trigger('create');
												//alert (localStorage.menu_list);
												//=============set menu end================
													
													
													
													var productList=localStorage.productListStr.split('<rd>');
													var productLength=productList.length;
													
													//------------ Order Item list								
													
													if (order_report=="Yes"){
														
localStorage.report_button='<a data-role="button" onClick="s_order_summary_report();">Sales Call and Order Count</a><a data-role="button" onClick="s_order_detail_report();" >Sales Call and Order Detail</a>'
														$('#order_report_button').empty();
														$('#order_report_button').append(localStorage.report_button).trigger('create');
														
															 
															
														}
													
													if (doctor_report=="Yes"){
														
										localStorage.doctor_report_button='<a data-role="button" onClick="summary_report_doctor();" >DCR Count</a><a data-role="button" onClick="detail_report_doctor()" >DCR Detail</a>'
														$('#doctor_report_button').empty();
														$('#doctor_report_button').append(localStorage.doctor_report_button).trigger('create');
														
															 
															
														}
													
													
													var product_tbl_doc_campaign='<ul id="campaign_combo_id_lv" data-role="listview"  data-filter="true" data-input="#campaign_combo_id" data-inset="true" data-filter-reveal="true" > ';
													
													
													
													var product_tbl_doc_sample='<ul id="sample_combo_id_lv" data-role="listview"  data-filter="true" data-input="#sample_combo_id" data-inset="true" data-filter-reveal="true" > ';
													
													
													
													var product_tbl_order='<ul id="item_combo_id_lv" data-role="listview" data-filter="true" data-input="#item_combo_id" data-inset="true" data-filter-reveal="true">'
													
													for (j=0; j < productLength; j++){
														var productArray2 = productList[j].split('<fd>');
														var product_id2=productArray2[0];	
														var product_name2=productArray2[1];
														var product_price=productArray2[2];
														
														var product_qty='';																		

														product_tbl_order=product_tbl_order+'<li  style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin">'+'<table width="100%" border="0" id="order_tbl" cellpadding="0" cellspacing="0" style="border-radius:5px;">'+'<tr style="border-bottom:1px solid #D2EEE9;"><td width="60px" style="text-align:center; padding-left:5px;"><input class="orderProduct" maxlength="4" onBlur="getOrderData_keyup(\''+product_id2+'\')" type="number" id="order_qty'+product_id2+'"  value="'+product_qty+'" placeholder="0" ><input type="hidden" id="order_id'+product_id2+'" value="'+product_id2+'" ><input type="hidden" id="order_price'+product_id2+'" value="'+product_price+'" ><input type="hidden" id="order_name'+product_id2.toUpperCase()+'" value="'+product_name2.toUpperCase()+'" placeholder="qty" ></td><td  style="text-align:left;">'+'<font id="'+ product_id2 +'" onClick="tr_item(\''+product_id2+'\')" >'+ product_name2.toUpperCase()+'</font></td></tr>'+'</table>'+'</li>';
														//------------ Doctor Campaign Item list
														$("#error_login").html('Processing Product List....');
														
														
														product_tbl_doc_campaign=product_tbl_doc_campaign+'<li  style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin">'+'<table width="100%" border="0" id="order_tbl" cellpadding="0" cellspacing="0" style="border-radius:5px;">'+'<tr style="border-bottom:1px solid #D2EEE9;"><td width="60px" style="text-align:center; padding-left:5px;"><input class="docCampaign" type="checkbox" onClick="getDocCampaignData_keyup(\''+product_id2+'\')" name="doc_camp'+product_id2+'" value="checkbox" id="doc_camp'+product_id2+'"><input type="hidden" id="doc_camp_id'+product_id2+'" value="'+product_id2+'" ><input type="hidden" id="doc_camp_price'+product_id2+'" value="'+product_price+'" ><input type="hidden" id="doc_camp_name'+product_id2.toUpperCase()+'" value="'+product_name2.toUpperCase()+'" placeholder="qty" ></td><td  style="text-align:left;">'+'<font id="'+ product_id2 +'" onClick="tr_item_doc_campaign(\''+product_id2+'\')" >'+ product_name2.toUpperCase()+'</font></td></tr>'+'</table>'+'</li>';

														$("#error_login").html('Processing Product List....');	
														//-------------Sample----------
														
														product_tbl_doc_sample=product_tbl_doc_sample+'<li  style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin">'+'<table width="100%" border="0" id="order_tbl" cellpadding="0" cellspacing="0" style="border-radius:5px;">'+'<tr style="border-bottom:1px solid #D2EEE9;"><td width="80px" style="text-align:center; padding-left:5px;"><input class="docSample" maxlength="4" onBlur="getSampleData_keyup(\''+product_id2+'\')" type="number" id="sample_qty'+product_id2+'"  value="'+product_qty+'" placeholder="0" ><input type="hidden" id="sample_id'+product_id2+'" value="'+product_id2+'" ><input type="hidden" id="sample_price'+product_id2+'" value="'+product_price+'" ><input type="hidden" id="sample_name'+product_id2.toUpperCase()+'" value="'+product_name2.toUpperCase()+'" placeholder="qty" ></td><td  style="text-align:left;">'+product_name2.toUpperCase()+'</td></tr>'+'</table>'+'</li>';
														
														
													
													}
													product_tbl_order=product_tbl_order+'</ul>';//</table>';	
													product_tbl_doc_campaign=product_tbl_doc_campaign+'</ul>';//+'</table>'	//+'</ul>';						
													product_tbl_doc_sample=product_tbl_doc_sample+'</ul>';
													 
													
													localStorage.product_tbl_str=product_tbl_order	;										
													localStorage.product_tbl_str_doc_campaign=product_tbl_doc_campaign;
													localStorage.product_tbl_str_doc_sample=product_tbl_doc_sample;
													
													
													
													$("#product_list_tbl").html(localStorage.product_tbl_str);
													$("#doctor_campaign_list_tbl").html(localStorage.product_tbl_str_doc_campaign);

													
													$("#doctor_sample_list_tbl").html(localStorage.product_tbl_str_doc_sample);

													//------------ Gift Item list								
	
													
													
													if (localStorage.gift_string.length > 5 ){
													
														var giftList=localStorage.gift_string.split('<rd>');
														var giftLength=giftList.length;

														
														var gift_tbl_doc='<ul id="gift_combo_id_lv" data-role="listview"  data-filter="true" data-input="#gift_combo_id" data-inset="true" >';
														for (j=0; j < giftLength; j++){
															var gifttArray = giftList[j].split('<fd>');
															var gift_id=gifttArray[0];	
															var gift_name=gifttArray[1];
															var gift_qty='0';
															
															
															
															
															//------------ Doctor Gift Item list
															
															gift_tbl_doc=gift_tbl_doc+'<li  style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin">'+'<table width="100%" border="0" id="order_tbl" cellpadding="0" cellspacing="0" style="border-radius:5px;">'+'<tr style="border-bottom:1px solid #D2EEE9;"><td width="80px" style="text-align:center; padding-left:5px;">'+'<input type="hidden" id="gift_id'+gift_id+'" value="'+gift_id+'" ><input class="docGift" maxlength="4" onBlur="getGiftData_keyup(\''+gift_id+'\')" type="number" id="gift_qty'+gift_id+'"  value="" placeholder="0" ><input type="hidden" id="doc_gift_name'+gift_id.toUpperCase()+'" value="'+gift_name.toUpperCase()+'" placeholder="qty" ></td><td  style="text-align:left;">'+'<font id="'+ gift_name +'" onClick="tr_item_doc_campaign(\''+gift_id+'\')" >'+ gift_name.toUpperCase()+'</font></td></tr>'+'</table>'+'</li>';
															
															
															
															
											
														}
														
														gift_tbl_doc=gift_tbl_doc+'</ul>';//+'</table>'
													
														localStorage.gift_tbl_doc=gift_tbl_doc;
														$("#doctor_gift_list_tbl").html(localStorage.gift_tbl_doc);
														
													
													
													}
													
													
//													========================PPM Start========
													if (localStorage.ppm_string.length > 5 ){
													
														var ppmList=localStorage.ppm_string.split('<rd>');
														var ppmLength=ppmList.length;
														

														
														var ppm_tbl_doc='<ul id="ppm_combo_id_lv" data-role="listview"  data-filter="true" data-input="#ppm_combo_id" data-inset="true" >';
														for (j=0; j < ppmLength; j++){
															var ppmArray = ppmList[j].split('<fd>');
															var ppm_id=ppmArray[0];	
															var ppm_name=ppmArray[1];
															var ppm_qty='0';
															
															
															
															
															//------------ Doctor ppm Item list
															
															ppm_tbl_doc=ppm_tbl_doc+'<li  style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin">'+'<table width="100%" border="0" id="order_tbl" cellpadding="0" cellspacing="0" style="border-radius:5px;">'+'<tr style="border-bottom:1px solid #D2EEE9;"><td width="80px" style="text-align:center; padding-left:5px;">'+'<input type="hidden" id="ppm_id'+ppm_id+'" value="'+ppm_id+'" ><input class="docPpm" maxlength="4" onBlur="getppmData_keyup(\''+ppm_id+'\')" type="number" id="ppm_qty'+ppm_id+'"  value="" placeholder="0" ><input type="hidden" id="doc_ppm_name'+ppm_id.toUpperCase()+'" value="'+ppm_name.toUpperCase()+'" placeholder="qty" ></td><td  style="text-align:left;">'+'<font id="'+ ppm_name +'" onClick="tr_item_doc_campaign(\''+ppm_id+'\')" >'+ ppm_name.toUpperCase()+'</font></td></tr>'+'</table>'+'</li>';
															
															
															
															
											
														}
														
														ppm_tbl_doc=ppm_tbl_doc+'</ul>';//+'</table>'
													
														localStorage.ppm_tbl_doc=ppm_tbl_doc;
														$("#doctor_ppm_list_tbl").html(localStorage.ppm_tbl_doc);
														

													
													} 


//													===========================ppm end===============
													//==========Combo for report Start
													market_list_combo();
													item_list_combo();
													mpo_list_combo()
													//==========Combo for report End
													
													//--------- Delivery Item List								
													var product_tbl_delevery='<table border="0" id="delevery_tbl" cellpadding="0" cellspacing="0" style="background-color:#F7F7F7; border-radius:5px;">';
													for ( i=0; i < productLength; i++){
														var productArray = productList[i].split('<fd>');
														var product_id=productArray[0];	
														var product_name=productArray[1];
														
														
														product_tbl_delevery+='<tr  style="border-bottom:1px solid #D2EEE9;"><td width="40%" style="text-align:center; padding-left:5px;"><input type="number" id="delivery_qty'+product_id+'" value="" placeholder="0" ><input type="hidden" id="order_id'+product_id+'" value="'+product_id+'" ><input type="hidden" id="delivery_id'+product_id+'" value="'+product_id+'" placeholder="qty" ><input type="hidden" id="delivery_name'+product_id+'" value="'+product_name+'" placeholder="qty" ></td><td width="60%" style="text-align:left;">&nbsp;&nbsp;'+product_name+'</td></tr>';
													}
													product_tbl_delevery+='</table>';								
													localStorage.product_tbl_del_str=product_tbl_delevery
													
													//------------- Visit Plan Market List / Client Profile Market List / Unschedule
													var planMarketList = localStorage.marketListStr.split('<rd>');
													var planMarketListShowLength=planMarketList.length	
													
													var visitPlanMarketComb=''								
													var profileMarketComb='';								
													var unscheduleMarketComb='';
													
													for (var k=0; k < planMarketListShowLength; k++){
														var planMarketValueArray = planMarketList[k].split('<fd>');
														planMarketID=planMarketValueArray[0];
														planMarketName=planMarketValueArray[1];
														marketID=planMarketID
														marketName=planMarketName
														var marketNameID=planMarketName+'|'+planMarketID;
														//alert (marketNameID);
														if(planMarketID!=''){
															unscheduleMarketComb+='<li class="ui-btn ui-shadow ui-corner-all ui-btn-icon-left ui-icon-location" style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin"><a onClick="marketNextLV(\''+marketNameID+'\')">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+marketNameID+'</a></li>';
															visitPlanMarketComb+='<li class="ui-btn ui-shadow ui-corner-all ui-btn-icon-left ui-icon-location" style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin"><a onClick="visitPlanMarketNextLV(\''+marketNameID+'\')">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+marketNameID+'</a></li>';
															profileMarketComb+='<li class="ui-btn ui-shadow ui-corner-all ui-btn-icon-left ui-icon-location" style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin"><a onClick="marketNextCProfileLV(\''+marketNameID+'\')">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+marketNameID+'</a></li>';
															

															}
													}
																				
													localStorage.visit_plan_marketlist_combo=visitPlanMarketComb;								
													localStorage.unschedule_market_cmb_id=unscheduleMarketComb;
													localStorage.market_cmb_list_cp=profileMarketComb;
													
													
	
													client_catList();	

													//---------------
													$("#error_login").html('');
													$("#wait_image_login").hide();
													$("#loginButton").show();
													
													//----------------
													localStorage.visit_page=""
													
													
													$("#se_mpo").val(localStorage.user_id);
													//alert (localStorage.user_id); 
													
													//alert (localStorage.ppm_show_1);
																		
													localStorage.synced='YES';
													url = "#pageHome";
													$.mobile.navigate(url);								
													//location.reload();
													
													set_doc_all();
													
												}else{
													$("#wait_image_login").hide();
													$("#loginButton").show();
													$("#error_login").html('Network Timeout. Please try again.');							
													}
											}
										  },
									  error: function(result) {					 
										  $("#wait_image_login").hide();
										  $("#loginButton").show();
										  $("#error_login").html('Network Timeout. Please try again.');
										
										  
										  var url = "#login";
										  $.mobile.navigate(url);	
									  }
								  });//end ajax
								}//base url check
						//alert ('nadira');
						//-------------		
					}else{
						$("#wait_image_login").hide();
						$("#loginButton").show();
						$("#error_login").html('Login Failed. Please Check CID, UserID, Password.');	
					}
					
				}
			  },
			  error: function(result) {			  	   
				 // alert ('nadira');
				  $("#wait_image_login").hide();
				  $("#loginButton").show();
				  $("#error_login").html('Network  Timeout. Please Check Internet Connection');	
				
			  }
		});//end ajax
		
		//alert(base_url+','+photo_url+'2');
		
		
		  }//end else	
	}//function

function getOtherOutlet(){	
	if (mobile_off_flag==1){
		mobile_off_flag=0;
		
		var url = "#pageHome";
		$.mobile.navigate(url);
		
	}else{
		var visit_type=localStorage.visit_type;
		//alert(visit_type);
		if (visit_type=="Scheduled"){
			url = "#page_scheduled";
			$.mobile.navigate(url);
			
		}else if(visit_type=="Unscheduled"){
			url = "#page_market_ret";
			$.mobile.navigate(url);
		}
	}
}




//------------------------------Unsheduled visit: market
function addMarketList() {
	$("#unschedule_market_combo_id").val('');
	var unschedule_market_combo_list=localStorage.unschedule_market_cmb_id;
	//---
	var unschedule_market_combo_ob=$('#unschedule_market_combo_id_lv');
	unschedule_market_combo_ob.empty();
	unschedule_market_combo_ob.append(unschedule_market_combo_list);
	
	//-------	
	var url = "#page_market";
	$.mobile.navigate(url);
	unschedule_market_combo_ob.listview("refresh");
}

//--------------------------------- Unsheduled visit: Client list by market id

function marketNextLV(lvalue) {
	
	$("#unschedule_market_combo_id").val(lvalue);
	if (localStorage.doctor_flag==1){
		marketNext_doc();
	}
	else{
		if (localStorage.user_type=='rep'){
			marketNext();	
		}
		else{
			
			marketNext_sup();	
		}
	}	
}

function marketNext() {
	$("#unscheduled_m_client_combo_id").val('');
	
	market_name=$("#unschedule_market_combo_id").val();
	
	if(market_name=='' || market_name==0){
			$("#err_market_next").text("Market required");
		}else{
			$("#err_market_next").text("");			
			$("#btn_unschedule_market").hide();
			$("#wait_image_unschedule_market").show();		
			
			//visitMarketStr
			localStorage.visit_market_show=market_name
			var market_Id=market_name.split('|')[1];
			
			
			var catType=$("#catCombo").val();
			
			//===========================Get market client list Start============================
			market_list=localStorage.market_client;
			if (market_list.indexOf(market_Id)==-1){
					$("#err_market_next").text("Sorry Network not available");	
					$("#wait_image_unschedule_market").hide();		
					$("#btn_unschedule_market").show();
			}else{					
					var resultArray_0 = market_list.split('<'+market_Id+'>');	
					var resultArray_1 = resultArray_0[1].split('</'+market_Id+'>');	
					var m_client_string = resultArray_1[0];	
					//var resultArray = market_list.split('</'+market_Id+'>');			
//					m_client_string=resultArray[0].replace('<'+market_Id+'>','');
														
					if 	(m_client_string=='Retailer not available'){
						$("#err_market_next").text("Retailer not available");	
						$("#wait_image_unschedule_market").hide();		
						$("#btn_unschedule_market").show();
						
					}
					else{
						//----------------
						
						var visit_type="Unscheduled";
						var scheduled_date="";
						
						//-----------------------------------
									
						var mClientList = m_client_string.split('<rd>');
						var mClientListShowLength=mClientList.length	;
						
						//var unscheduled_m_client_list='<option value="0" > Select Retailer</option>'
						var unscheduled_m_client_list='';
						for ( i=0; i < mClientListShowLength; i++){
							var mClientValueArray = mClientList[i].split('<fd>');
							var mClientID=mClientValueArray[0];
							var mClientName=mClientValueArray[1];
							var mClientCat=mClientValueArray[2];
							//alert (catType);
							
							if(mClientID!=''){
								if (catType!=''){
									if (catType==mClientCat){
										unscheduled_m_client_list+='<li class="ui-btn ui-shadow ui-corner-all ui-btn-icon-left ui-icon-location" style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin"><a  onClick="marketRetailerNextLV(\''+mClientName+'|'+mClientID+'\')"><font style="font-size:12px">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+mClientName+'|'+mClientID+','+mClientCat+'</font></a></li>';
										
										
										
									}
	
								}
								else{
									unscheduled_m_client_list+='<li class="ui-btn ui-shadow ui-corner-all ui-btn-icon-left ui-icon-location" style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin"><a  onClick="marketRetailerNextLV(\''+mClientName+'|'+mClientID+'\')"><font style="font-size:12px">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+mClientName+'|'+mClientID+','+mClientCat+'</font></a></li>';
									

								}	
							}
						 }
					
					
					//var unscheduled_m_client_combo_ob=$('#unscheduled_m_client_combo_id');
		
					
					var unscheduled_m_client_combo_ob=$('#unscheduled_m_client_combo_id_lv');
					
					
					
					unscheduled_m_client_combo_ob.empty();
					unscheduled_m_client_combo_ob.append(unscheduled_m_client_list);
													
					$(".market").html(market_name);								
					$(".visit_type").html(visit_type);								
					$(".s_date").html(scheduled_date);
					
					localStorage.visit_type=visit_type;
					localStorage.scheduled_date=scheduled_date
					
					//-----------------------------------
					$("#err_market_next").text("");
					$("#wait_image_unschedule_market").hide();		
					$("#btn_unschedule_market").show();
					
					//------- 
					
					
					
					
					url = "#page_market_ret";	
					$.mobile.navigate(url);
					unscheduled_m_client_combo_ob.listview("refresh");
				}
			}//end else
			//============================Get market client list end===============================
		}			
}




function marketNext_sup() {
	$("#unscheduled_m_client_combo_id").val('');
	
	var market_name=$("#unschedule_market_combo_id").val();
	
	if(market_name=='' || market_name==0){
			$("#err_market_next").text("Market required");
	}
	else{
			$("#err_market_next").text("");			
			$("#btn_unschedule_market").hide();
			$("#wait_image_unschedule_market").show();		
				
			//visitMarketStr
			localStorage.visit_market_show=market_name;
			var market_Id=market_name.split('|')[1];
			
			
			var catType=$("#catCombo").val();
				
				
				//===========================Get market client list Start============================
				
				
				//$("#err_market_next").html(localStorage.base_url+'getMarketClientList?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&market_id='+market_Id+'&catType='+catType);
				//http://127.0.0.1:8000/lscmreporting/syncmobile/getClientInfo?cid=LSCRM&rep_id=1001&rep_pass=123&synccode=2568&client_id=R100008
				
	//			//// ajax-------
				$.ajax({
					 type: 'POST',
					 url: localStorage.base_url+'getMarketClientList?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&market_id='+market_Id+'&catType='+catType,
					 success: function(result) {
							
							//alert(result);
							if (result==''){
								$("#err_retailer_next").html('Sorry Network not available');
								$("#btn_schedule_ret").show();
								$("#wait_image_schedule_ret").hide();
				
							}else{					
								var resultArray = result.split('<SYNCDATA>');			
								if (resultArray[0]=='FAILED'){						
									$("#err_market_next").text("Retailer not available");	
									$("#wait_image_unschedule_market").hide();		
									$("#btn_unschedule_market").show();
								}
								else if (resultArray[0]=='SUCCESS'){
									
									localStorage.market_client=resultArray[1];
									
									//alert (resultArray[1])
									
								var	m_client_string=localStorage.market_client;
				
									var visit_type="Unscheduled";
									var scheduled_date="";
											
						//					-----------------------------------
														
								var mClientList = m_client_string.split('<rd>');
								var mClientListShowLength=mClientList.length;	
									
								//var unscheduled_m_client_list='<option value="0" > Select Retailer</option>'
								var unscheduled_m_client_list=''
								//alert (mClientListShowLength);
								for ( i=0; i < mClientListShowLength; i++){
										var mClientValueArray = mClientList[i].split('<fd>');
										var mClientID=mClientValueArray[0];
										var mClientName=mClientValueArray[1];
										var mClientCat=mClientValueArray[2];
											
										unscheduled_m_client_list+='<li class="ui-btn ui-shadow ui-corner-all ui-btn-icon-left ui-icon-location" style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin"><a  onClick="marketRetailerNextLV(\''+mClientName+'|'+mClientID+'\')"><font style="font-size:12px">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+mClientName+'|'+mClientID+','+mClientCat+'</font></a></li>';
									}
								
								var unscheduled_m_client_combo_ob=$('#unscheduled_m_client_combo_id');

							
								unscheduled_m_client_combo_ob=$('#unscheduled_m_client_combo_id_lv');
								
								unscheduled_m_client_combo_ob.empty();
								unscheduled_m_client_combo_ob.append(unscheduled_m_client_list);
								
								//alert (unscheduled_m_client_list);
								
								//alert (unscheduled_m_client_list);
								
//								--------------------------


								$(".market").html(market_name);								
								$(".visit_type").html(visit_type);								
								$(".s_date").html(scheduled_date);
								
								localStorage.visit_type=visit_type
								localStorage.scheduled_date=scheduled_date
								
								//-----------------------------------
								$("#err_market_next").text("");
								$("#wait_image_unschedule_market").hide();		
								$("#btn_unschedule_market").show();
								
								//------- 
								
								url = "#page_market_ret";	
								$.mobile.navigate(url);
								
								unscheduled_m_client_combo_ob.listview("refresh");									
								} //else if
								
								
							} //else
							
	
						  },
					  error: function(result) {			  
						 $("#err_retailer_next").html('Sorry Network not available');
						 $("#btn_schedule_ret").show();
						 $("#wait_image_schedule_ret").hide();
					  }
				 });//end ajax
			
			

					

//			//============================Get market client list end===============================

		}	//Market required else		
}

//--------------------------------- Unsheduled visit: retailer next
function marketRetailerNextLV(lvalue) {
	$("#unscheduled_m_client_combo_id").val(lvalue);
	//alert(lvalue);
	if(localStorage.doctor_flag==1){
		marketRetailerNext_doc();	
	}
	else{
		marketRetailerNext();	
	}
		
	}

function marketRetailerNext() {
	$("#err_m_retailer_next").text("");
	var visit_client=$("#unscheduled_m_client_combo_id").val();		
	
	if(visit_client=='' || visit_client==0){
			$("#err_m_retailer_next").text("Retailer required");
		}else{
			$("#btn_unschedule_market_ret").hide();
			$("#wait_image_unschedule_market_ret").show();		
			visitClientId_list=visit_client.split('|');
			var visitClientId=visit_client.replace(visitClientId_list[0]+"|","");
			
			var visitClientID=visit_client.split('|')[1];
			
			//alert(localStorage.visit_client); 
			//alert(visitClientID); 
			if (localStorage.visit_client !=visitClientID ){
				cancel_cart();

			}
			
			$(".visit_client").html(visit_client);
				
			localStorage.visit_client_show=visit_client
			localStorage.visit_client=visit_client.split('|')[1]
			
			localStorage.visit_page="YES"
			
			//--------
			$("#err_m_retailer_next").text("");
			$("#wait_image_unschedule_market_ret").hide();		
			$("#btn_unschedule_market_ret").show();

			url = "#page_visit";
			$.mobile.navigate(url);
								
			
		}
}





//--------------------------------- Order: Show order from home

function getOrder_load(){	
	//var url = "#page_order";	
//	$.mobile.navigate(url);	
	//-----

	
	var orderProductList=localStorage.productOrderStr.split('<rd>');
	var orderProductLength=orderProductList.length;
	for (j=0; j < orderProductLength; j++){
		var orderProductIdQtyList=orderProductList[j].split('<fd>');
		if(orderProductIdQtyList.length==2){
			var orderProductId=orderProductIdQtyList[0];
			var orderProductQty=orderProductIdQtyList[1];		
			$("#order_qty"+orderProductId).val(orderProductQty);
		}		
	}
	
}
function getOrder(){	
	$("#errorChkVSubmit").html('');
	var url = "#page_order";	
	$.mobile.navigate(url);	

}




//--------------------------------- Order: Set Order data

function getOrderData_keyup(product_id){
	var pid=$("#order_id"+product_id).val();
	var pname=$("#order_name"+product_id).val();
	var pqty=$("#order_qty"+product_id).val().replace('.','').substring(0,4);
	$("#order_qty"+product_id).val(pqty);
	
	var orderProductList="";
        var orderProductLength=0;
        var orderProductIdQtyList="";
        var orderProductId="";
        var product_index="";
	var productOrderStr=localStorage.productOrderStr
	var productOrderShowStr='';
	if ((eval(pqty) < 1) || (pqty == false)){
		$("#order_qty"+product_id).val('')
	}
	
	if (pqty!='' && eval(pqty) > 0 ){
		if (productOrderStr.indexOf(product_id)==-1){
			//alert (productOrderStr)
			if (productOrderStr==''){
				productOrderStr=pid+'<fd>'+pqty
				productOrderShowStr=pname+'('+pqty+')'
			}else{
				productOrderStr=productOrderStr+'<rd>'+pid+'<fd>'+pqty
				productOrderShowStr=productOrderShowStr+', '+pname+'('+pqty+')'
			}	
		}
		else{
			
			orderProductList=localStorage.productOrderStr.split('<rd>');
			orderProductLength=orderProductList.length;
			for (j=0; j < orderProductLength; j++){
			  orderProductIdQtyList=orderProductList[j].split('<fd>');
				if(orderProductIdQtyList.length==2){
					orderProductId=orderProductIdQtyList[0];
					var orderProductQty=orderProductIdQtyList[1];
					if (orderProductId==pid){
						//productOrderStr=productOrderStr.replace(orderProductList[j], "")
						product_index=productOrderStr.indexOf(product_id)
						if (product_index==0){
							productOrderStr=productOrderStr.replace(orderProductList[j]+'<rd>', "")
							productOrderStr=productOrderStr.replace(orderProductList[j], "")
						}
						if (product_index > 0){
							productOrderStr=productOrderStr.replace('<rd>'+orderProductList[j], "")
						}
						
						if (productOrderStr==''){
							productOrderStr=pid+'<fd>'+pqty
							productOrderShowStr=pname+'('+pqty+')'
						}else{
							productOrderStr=productOrderStr+'<rd>'+orderProductId+'<fd>'+pqty
							productOrderShowStr=productOrderShowStr+', '+pname+'('+pqty+')'
							}		
									
						
						
					}
					
				}
			}
			
		}
		localStorage.productOrderStr=productOrderStr;
		
		
	}
	else{
		orderProductList=localStorage.productOrderStr.split('<rd>');
		orderProductLength=orderProductList.length;
		
		for (j=0; j < orderProductLength; j++){
		   orderProductIdQtyList= orderProductList[j].split('<fd>');
			if(orderProductIdQtyList.length==2){
				orderProductId=orderProductIdQtyList[0];
				product_index=productOrderStr.indexOf(product_id)
				if (orderProductId==pid){
					if (orderProductLength>1){
						if (product_index==0){
							productOrderStr=productOrderStr.replace(orderProductList[j]+'<rd>', "")
						}
						if (product_index > 0){
							productOrderStr=productOrderStr.replace('<rd>'+orderProductList[j], "")
						}
					}
					if (orderProductLength==1){
							productOrderStr=productOrderStr.replace(orderProductList[j], "")
						
					}
					
					
					
				}
			}
		}
	
		localStorage.productOrderStr=productOrderStr
	}
		
	//	------------------------------------------------------
	

		
	}
function getOrderData(){	
	//alert (localStorage.productOrderStr);
	if (localStorage.productOrderStr!=''){
		cart_data();
		url = "#page_cart";	
		$.mobile.navigate(url);	
	}
	else{
		
		
		url = "#page_visit";	
		$.mobile.navigate(url);
	}
	
	
	
	
		
	}



//-----VISIT SUBMIT
function visitSubmit(){	
	if (localStorage.doctor_flag==1){
		visitSubmit_doc();
	}
	else{
		lscVisitSubmit();	
	}	

}
function replace_special_char(string_value){
	//var chemist_feedback=$("#chemist_feedback").val();
	//var doc_feedback=$("#doc_feedback").val();
	//chemist_feedback=chemist_feedback.replace(')','').replace('(','').replace('{','').replace('}','').replace('[','').replace(']','').replace('"','').replace("'","").replace("/'","").replace("\'","").replace('>','').replace('<','');
	var real_value=string_value.replace(')','').replace('(','').replace('{','').replace('}','').replace('[','').replace(']','').replace('"','').replace("'","").replace("/'","").replace("\'","").replace('>','').replace('<','');
	return real_value;
}
function lscVisitSubmit(){	
	$("#errorChkVSubmit").text("");
	//alert (localStorage.visit_client);
	var visitClientId=localStorage.visit_client
	var visit_type=localStorage.visit_type
	var scheduled_date=localStorage.scheduled_date
	
	var marketInfoStr=localStorage.marketInfoSubmitStr //Generated by Done
	var productOrderStr=localStorage.productOrderStr
	var marchandizingInfoStr=localStorage.marchandizingInfoStr //Generated by Done

	var campaign_str=localStorage.visit_camp_submit_str //Generated by Done
	
	if (marketInfoStr==undefined){
		marketInfoStr=''
		}
	if (productOrderStr==undefined){
		productOrderStr=''
		}
	
	//----------------------- marchandizing status check
	if (marchandizingInfoStr==undefined){
		marchandizingInfoStr=''
	}else{
		var marchandizingList=marchandizingInfoStr.split('<rd>');	
		var marchandizingItemLength=marchandizingList.length;	
		var photoRequired="No";
		for ( i=0; i < marchandizingItemLength; i++){		
			var marchandizingArray = marchandizingList[i].split('<fd>');
			var item_status=marchandizingArray[5];	
			if(item_status=='Bad'){
				photoRequired="Yes";
				break;
				}
		}
	}
	
	//------------------------
	if (campaign_str==undefined){
		campaign_str=''
		}
	
	var lscPhoto=$("#lscPhoto").val();
	var lat=$("#lat").val();
	var longitude=$("#longitude").val();
	var now = $.now();
	
	
	var chemist_feedback=$("#chemist_feedback").val();
	//Cleaar special char from feedback

	
	//alert (chemist_feedback);
	chemist_feedback=replace_special_char(chemist_feedback);
	
	var delivery_date=$("#delivery_date").val();
	var collection_date=$("#collection_date").val();
	

	localStorage.payment_mode=$("#payment_mode").val();
	
	if  ((delivery_date.length < 10) || (collection_date.length < 10)){
		
		//alert(diffDays)
		//var diffDays_delivery = delivery_date_check.getDate() - today.getDate();
//		alert (diffDays_delivery)
		$("#errorChkVSubmit").html('Please enter collection and delivery date');
	}
	else{
		var currentDate = new Date()
		var day = currentDate.getDate()
		var month = currentDate.getMonth() + 1
		var year = currentDate.getFullYear()
		var today=  year + "/" + month + "/" + day
		var delivery_date_check=delivery_date.replace('-','/')
		var collection_date_check=collection_date.replace('-','/')
		var delivery_year=delivery_date.split('-')[0]
		var collection_year=collection_date.split('-')[0]
		//alert (delivery_year)
		//alert (delivery_date)
		var date1 = new Date(today);
		var date2 = new Date(delivery_date_check);
		var date3 = new Date(collection_date_check);
		var diffDays_delivery = date2.getDate() - date1.getDate(); 
		var diffDays_collection = date3.getDate() - date1.getDate(); 
		//alert (delivery_year)
		if (delivery_year > year){
			diffDays_delivery=diffDays_delivery * (-1)
		}
		if (collection_year > year){
			diffDays_collection=diffDays_collection * (-1)
		}
		//alert (diffDays_collection)
		//alert (date3)
		//alert (diffDays_collection)
		if  ((diffDays_delivery < 0 ) || (diffDays_collection < 0 )){
			$("#errorChkVSubmit").html('Invalid collection and delivery date');
		}
		else{
		
					if (photoRequired=='Yes' && lscPhoto==''){
						$("#errorChkVSubmit").html('Picture required, Because of Bad marchandizing');
					}else{
						var imageName=localStorage.user_id+'_'+now.toString()+'.jpg';
						
						
						if (lat=='' || lat==0 || longitude=='' || longitude==0){
							$("#errorChkVSubmit").html('Location not Confirmed');	
							$("#btn_location").show();	
							$("#visit_submit").hide();	
						}else{
							
							if (visitClientId=='' || visitClientId==undefined){
								$("#errorChkVSubmit").html('Invalid Client');		
							}else{
								if(visit_type=='' || visit_type==undefined){
									$("#errorChkVSubmit").html('Invalid Visit Type');
								}else{
									$("#visit_submit").hide();
									$("#wait_image_visit_submit").show();		
								//	alert (localStorage.productOrderStr);
								//	$("#errorChkVSubmit").text(localStorage.base_url+'visitSubmit?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&client_id='+visitClientId+'&visit_type='+visit_type+'&schedule_date='+scheduled_date+'&market_info='+marketInfoStr+'&order_info='+productOrderStr+'&merchandizing='+marchandizingInfoStr+'&campaign='+campaign_str+'&lat='+lat+'&long='+longitude+'&visit_photo='+imageName+'&payment_mode='+localStorage.payment_mode+'&chemist_feedback='+chemist_feedback+'&delivery_date='+delivery_date+'&collection_date='+collection_date+'&version=p1')
									// ajax-------
									//alert (localStorage.payment_mode);
									$.ajax({
										 type: 'POST',
										 url: localStorage.base_url+'visitSubmit?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&client_id='+visitClientId+'&visit_type='+visit_type+'&schedule_date='+scheduled_date+'&market_info='+marketInfoStr+'&order_info='+productOrderStr+'&merchandizing='+marchandizingInfoStr+'&campaign='+campaign_str+'&lat='+lat+'&long='+longitude+'&visit_photo='+imageName+'&payment_mode='+localStorage.payment_mode+'&chemist_feedback='+chemist_feedback+'&delivery_date='+delivery_date+'&collection_date='+collection_date+'&version=p1',
										 success: function(result) {
												//alert (collection_date)
												//alert (delivery_date)
												//alert(result);
												if (result==''){					
													$("#errorChkVSubmit").html('Sorry Network not available');
													$("#wait_image_visit_submit").hide();
													$("#visit_submit").show();									
												}else{					
													var resultArray = result.split('<SYNCDATA>');			
													if (resultArray[0]=='FAILED'){						
														$("#errorChkVSubmit").html(resultArray[1]);
														$("#wait_image_visit_submit").hide();
														$("#visit_submit").show();	
													}else if (resultArray[0]=='SUCCESS'){
														
														//-----------
														localStorage.visit_client=''
														localStorage.marchandizingStr=''
														
														localStorage.marketInfoLSCStr=''
														
														localStorage.marketInfoStr='';
														localStorage.marketInfoSubmitStr='';
														
														localStorage.productOrderStr='';
														localStorage.marchandizingInfoStr='';
														localStorage.visit_camp_list_str='';
														localStorage.visit_camp_submit_str='';
														visitCampaginTempArray=[];
														visitCampaginArray=[];
														
														localStorage.visit_page="";
														
														localStorage.show_total="";
														
														$("#chemist_feedback").val('')
														
														
				
														//-------------
														// Clear localStorage
															
														localStorage.productOrderStr='';
														cancel_cart();
															
				
														//--------------------------------------------------------
														$(".visit_client").html('');
														
														$("#errorChkVSubmit").html('');
														$("#lat").val('');
														$("#longitude").val('');
														$("#lscPhoto").val('');
														document.getElementById('myImage').src = '';
														
														$("#lat_p").val('');
														$("#long_p").val('');								
														
														$("#checkLocation").html('');
														$("#checkLocationProfileUpdate").html('');
														
														$("#wait_image_visit_submit").hide();
														$("#visit_submit").show();
														
														$("#product_total_last").html('');
														$("#product_list_tbl_cart").html('');
														$("#product_total_cart").html('');
														$("#item_combo_id").val('Search');
														
														
														
														//--
														$("#visit_success").html('</br></br>Visit SL: '+resultArray[1]+'</br>Submitted Successfully');
														
														
														$("#btn_location").show();	
														$("#visit_submit").hide();
														$("#checkLocation").hide('');	
														
														$("#delivery_date").val('');
														$("#collection_date").val('');
														
														//$("#btn_location_doc").show();
				//										$("#visit_submit_doc").hide();	
				//										$("#checkLocation_doc").html('');
				//										$("#wait_image_visit_submit_doc").hide('');
														
														
														url = "#page_confirm_visit_success";	
														$.mobile.navigate(url);
														
																								
													}else{						
														$("#errorChkVSubmit").html('Network Timeout. Please try again.');
														$("#wait_image_visit_submit").hide();
														$("#visit_submit").show();								
														}
												}
											  },
										  error: function(result) {			  
												$("#errorChkVSubmit").html('Network Timeout. Please try again.');
												$("#wait_image_visit_submit").hide();
												$("#visit_submit").show();	
										  }
									 });//end ajax	
								}
							}
						  }//locaction check
					}
		}//end collection and delivery date future
	
	}//end collection and delivery date check
	
	
  }


//------------------- Client Profile: Page from home
function addMarketListCp() {
	$("#profile_market_cmb_id").val('');
	
	
	var market_cmb_list_cp=localStorage.market_cmb_list_cp;	
	var profile_market_cmb_id_oblv=$('#profile_market_cmb_id_lv');
	profile_market_cmb_id_oblv.empty();
	profile_market_cmb_id_oblv.append(market_cmb_list_cp);
	
	//-------
	var url = "#page_market_clprofile";
	$.mobile.navigate(url);
	profile_market_cmb_id_oblv.listview("refresh");
}



//-------------------------- Visit Report: Show
function getVisitReportPage(){
	$("#err_visit_rpt").html('');	
	$("#wait_image_visit_report").hide();		
	
	$("#tbl_visit_rpt_show_campaign").empty();
	$("#tbl_visit_rpt_show_stock").empty();
	$("#tbl_visit_rpt_show_sales").empty();
	
	$("#ChartDivRetStock").empty();
	$("#retailerStock").val('');
	
	var url = "#page_visit_rpt";			
	$.mobile.navigate(url);
}


function visitReport(){
	$("#err_visit_rpt").html('');	
	$("#wait_image_visit_report").show();		
	
	$("#tbl_visit_rpt_show_campaign").empty();
	$("#tbl_visit_rpt_show_stock").empty();
	$("#tbl_visit_rpt_show_sales").empty();
	
	$("#ChartDivRetStock").empty();
	$("#retailerStock").val('');
	
	visit_client=localStorage.visit_client	
	clientId=visit_client.split('-')[1]
	
	//alert(localStorage.base_url+'getVisitReport?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&client_id='+clientId)
	// ajax-------
	$.ajax({
		 type: 'POST',
		 url: localStorage.base_url+'getVisitReport?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&client_id='+clientId,
		 success: function(result) {
				
				//alert(result);
				if (result==''){					
					$("#err_visit_rpt").html('Sorry Network not available');
					$("#wait_image_visit_report").hide();
	
				}else{					
					var resultArray = result.split('<SYNCDATA>');			
					if (resultArray[0]=='FAILED'){						
						$("#err_visit_rpt").html(resultArray[1]);
						$("#wait_image_visit_report").hide();
						
					}else if (resultArray[0]=='SUCCESS'){								
						//-----------
						$("#wait_image_visit_report").hide();
						
						var campaignData=resultArray[1]
						var stockData=resultArray[2]
						var marketInfoStockList=resultArray[3]
						var deliverySalesList=eval(resultArray[4])
						
						
						//------------------------
						var salesStrData='<tr ><td colspan="2" ><b>LSC Sales:</b></td></tr>'
                		salesStrData+='<tr style="font-weight:bold; text-shadow:none; color:#408080;" ><td >Month</td><td >Qty</td></tr>'
                		
						var deliverySalesListLength=deliverySalesList.length;						
						for (i=0; i < deliverySalesListLength; i++){
							var salesDictData=deliverySalesList[i];
							
							var month=salesDictData['Month']
							var qty=salesDictData['Qty']
							
							salesStrData+='<tr style="font-size:11px;"><td >'+month+'</td><td >'+qty+'</td></tr>'
							
							//alert(month+','+qty);
							}
												
						$("#tbl_visit_rpt_show_campaign").append(campaignData).trigger('create');						
						$("#tbl_visit_rpt_show_stock").append(stockData).trigger('create');
						$("#retailerStock").val(marketInfoStockList);
						
						$("#tbl_visit_rpt_show_sales").append(salesStrData).trigger('create');
						
						loadChart();
						//----
												
					}else{						
						$("#err_visit_rpt").html('Network Timeout. Please try again.');
						$("#wait_image_visit_report").hide();
						}
				}
			  },
		  error: function(result) {			  
			  $("#err_visit_rpt").html('Network Timeout. Please try again.');
			  $("#wait_image_visit_report").hide();
		  }
	 });//end ajax	
	
  }
//---------------------- Exit Application
function exit() {	
	navigator.app.exitApp();
}




//--------------------Item Search Start----------------
function search_item() {	
	var p_name=$("#item_search").val();
	
	vfinal=p_name.toUpperCase()
	
	var productList=localStorage.productListStr.split('<rd>');
	var productLength=productList.length;										
	for (j=0; j < productLength; j++){				
		var orderItemArray = productList[j].split('<fd>');
		var product_id=orderItemArray[0];	
		var product_name=orderItemArray[1];
		//alert (product_name);
		if (product_name.indexOf(vfinal)==0){
			//alert (product_name);
			jQuery("#order_qty"+product_id).focus().select();
			$("#item_search").val('');
			return;
		}
				
	}
	
}


//--------------------Item Search End----------------
//--------------------cart Start----------------
function cart_data() {	
	
	if (localStorage.productOrderStr.length >0){
		var orderProductList=localStorage.productOrderStr.split('<rd>');
		var orderProductLength=orderProductList.length;
		var product_tbl_cart_str='<ul  data-role="listview">';
		var total_value=0
		for (j=0; j < orderProductLength; j++){
			var orderProductIdQtyList=orderProductList[j].split('<fd>');
			if(orderProductIdQtyList.length==2){
				var orderProductId=orderProductIdQtyList[0];
				var orderProductQty=orderProductIdQtyList[1];
				var product_name=$("#order_name"+orderProductId).val(); 
				var product_price=$("#order_price"+orderProductId).val(); 
				var total= parseFloat(product_price)* parseFloat(orderProductQty);
				total_value=total_value+total;
				
				product_tbl_cart_str=product_tbl_cart_str+'<li  style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin">'+'<table width="100%" border="0" id="order_tbl" cellpadding="0" cellspacing="0" style="border-radius:5px;">'+'<tr style="border-bottom:1px solid #D2EEE9;"><td width="60px" style="text-align:center; padding-left:5px;"><input  type="number" id="cart_qty'+orderProductId+'"  onBlur="getCartData_keyup(\''+orderProductId+'\')" value="'+orderProductQty+'" placeholder="0"> </td><td  style="text-align:left;">'+ product_name.toUpperCase()+'</td></tr>'+'</table>'+'</li>'

				}
		
		}
		product_tbl_cart_str=product_tbl_cart_str+'</ul>';		
		
		
		localStorage.product_tbl_cart=product_tbl_cart_str;//+'</table>';
		localStorage.total_value=total_value.toFixed(2);
		$('#product_list_tbl_cart').empty();
		$('#product_list_tbl_cart').append(localStorage.product_tbl_cart).trigger('create');
		
		var show_total="Total Order Amount: "+localStorage.total_value + " BDT"
		localStorage.show_total=show_total;
		
		
		$("#product_total_cart").html(localStorage.show_total);
		$("#product_total_last").html(localStorage.show_total);
		$("#order_total_show").html(localStorage.show_total);
		
	}
	else{
		
		
		var url = "#page_order";	
		$.mobile.navigate(url);
	}
	
	
	
	
}



//==============================================
function getCartData_keyup(product_id){
	var pid=$("#order_id"+product_id).val();
	var pname=$("#order_name"+product_id).val();
	var pqty=$("#cart_qty"+product_id).val().replace('.','').substring(0,4);
	$("#cart_qty"+product_id).val(pqty);
	
	
	$("#order_qty"+product_id).val(pqty);
	var productOrderStr=localStorage.productOrderStr
	
	var productOrderShowStr='';
        
        var orderProductIdQtyList="";
        var orderProductList="";
        var orderProductLength=0;
        var orderProductId="";
	var orderProductQty="";
	if ((eval(pqty) < 1) || (pqty == false)){
		$("#order_qty"+product_id).val('')
	}
	
	if (pqty!='' && eval(pqty) > 0 ){
		if (productOrderStr.indexOf(product_id)==-1){
			if (productOrderStr==''){
				productOrderStr=pid+'<fd>'+pqty
				productOrderShowStr=pname+'('+pqty+')'
			}else{
				productOrderStr=productOrderStr+'<rd>'+pid+'<fd>'+pqty
				productOrderShowStr=productOrderShowStr+', '+pname+'('+pqty+')'
			}	
		}
		else{			
			orderProductList=localStorage.productOrderStr.split('<rd>');
			orderProductLength=orderProductList.length;
			for (j=0; j < orderProductLength; j++){
				orderProductIdQtyList=orderProductList[j].split('<fd>');
				if(orderProductIdQtyList.length==2){
					orderProductId=orderProductIdQtyList[0];
					orderProductQty=orderProductIdQtyList[1];
				//	alert (productOrderStr.indexOf(product_id));
					//alert (orderProductList[j]);
					if (orderProductId==pid){
						product_index=productOrderStr.indexOf(product_id)
						if (product_index==0){
							if(productOrderStr.indexOf('<rd>')>0){
								productOrderStr=productOrderStr.replace(orderProductList[j]+'<rd>', "")
							}
							else{
								productOrderStr=productOrderStr.replace(orderProductList[j], "")
							 }
								//alert (productOrderStr);
						}
						if (product_index > 0){
							productOrderStr=productOrderStr.replace('<rd>'+orderProductList[j], "")
						}
						
						
						if (productOrderStr==''){
							productOrderStr=pid+'<fd>'+pqty
							productOrderShowStr=pname+'('+pqty+')'
						}else{
							productOrderStr=productOrderStr+'<rd>'+orderProductId+'<fd>'+pqty
							productOrderShowStr=productOrderShowStr+', '+pname+'('+pqty+')'
						}		
									
					}//if (orderProductId==pid){
					
				}//if(orderProductIdQtyList.length==2){
			}//for
			
		}//else
		localStorage.productOrderStr=productOrderStr;
		
		
	}
	else{
		orderProductList=localStorage.productOrderStr.split('<rd>');
		orderProductLength=orderProductList.length;
		
		for (j=0; j < orderProductLength; j++){
		  orderProductIdQtyList=orderProductList[j].split('<fd>');
			if(orderProductIdQtyList.length==2){
				orderProductId=orderProductIdQtyList[0];
				product_index=productOrderStr.indexOf(product_id)
				if (orderProductId==pid){
					if (orderProductLength>1){
						if (product_index==0){
							productOrderStr=productOrderStr.replace(orderProductList[j]+'<rd>', "")
						}
						if (product_index > 0){
							productOrderStr=productOrderStr.replace('<rd>'+orderProductList[j], "")
						}
					} //if (orderProductLength>1){
					if (orderProductLength==1){
							productOrderStr=productOrderStr.replace(orderProductList[j], "")
						
					} //if (orderProductLength==1
				
				} //if (orderProductId==pid)
					
					
					
				}//if(orderProductIdQtyList.length==2)
			}//for
		}//else
	
		localStorage.productOrderStr=productOrderStr
		
		//================price===========
		if (localStorage.productOrderStr.length >0){
		orderProductList=localStorage.productOrderStr.split('<rd>');
		orderProductLength=orderProductList.length;
		
		var total_value=0
                
		for (j=0; j < orderProductLength; j++){
			orderProductIdQtyList=orderProductList[j].split('<fd>');
			if(orderProductIdQtyList.length==2){
				orderProductId=orderProductIdQtyList[0];
				orderProductQty=orderProductIdQtyList[1];
				
				
				var product_price=$("#order_price"+orderProductId).val(); 
				var total= parseFloat(product_price)* parseFloat(orderProductQty);
				total_value=total_value+total;

				
				
				}
		
		}
		
		
		
		//alert (total_value)
		localStorage.total_value=total_value.toFixed(2);
		
		$("#product_total_cart").html("Total Order Amount: "+localStorage.total_value + " BDT");
		$("#product_total_last").html("Total Order Amount: "+localStorage.total_value + " BDT");

	}
		
		
//		==================================
	}

//----------------------cart end----------------

function payment_mode(){
	var payment_mode=($("input:radio[name='payment_mode']:checked").val())
	
	var url = "#page_visit";
	$.mobile.navigate(url);
	localStorage.payment_mode=payment_mode
}

function cancel_cart() {
	$(".orderProduct").val('');
	
	
	$("#product_total_cart").html('');
	$("#product_total_last").html('');
	$("#order_total_show").html('');
	$("#chemist_feedback").val('');
	
	$("#item_combo_id").val('');
	
	
	$("#lat_p").val(0);
	$("#long_p").val(0);
	$("#checkLocation").html(''); 
	
	
	$("#btn_location").show();
	$("#visit_submit").hide();
	$("#checkLocation").html('');
	$("#wait_image_visit_submit").hide();
	
	
	
	localStorage.productOrderStr='';
	$("#product_list_tbl_cart").html("");
	var url = "#page_visit";	
	$.mobile.navigate(url);
}

//===================Doctor Start==============
function marketNext_doc() {
	$("#unscheduled_m_client_combo_id").val('');
	
	market_name=$("#unschedule_market_combo_id").val();
	localStorage.visit_market_show=market_name
	if(market_name=='' || market_name==0){
			$("#err_market_next").text("Market required");
		}else{
			$("#err_market_next").text("");			
			$("#btn_unschedule_market").hide();
			$("#wait_image_unschedule_market").show();		
			
			
			var marketNameId=market_name.split('|');
			var market_Id=marketNameId[1];
			
			var visit_type="Unscheduled";
			var scheduled_date="";
			
			
			result=localStorage.market_doctor
			
			var resultArray = result.split('</'+market_Id+'>');
			var doc_result_list=resultArray[0].split('<'+market_Id+'>')
			var doc_result=doc_result_list[1]
			
			
			//alert (doc_result);
			if (result==''){
				$("#err_market_next").text("Sorry Network not available");	
				$("#wait_image_unschedule_market").hide();		
				$("#btn_unschedule_market").show();
			}else{					

				//-----------------------------------
					if ((doc_result== undefined) || (doc_result== 'undefined')){
						$("#err_market_next").text("Doctor not available");	
						$("#wait_image_unschedule_market").hide();		
						$("#btn_unschedule_market").show();
						
					}
					else{
					
						
						var mClientList = doc_result.split('<rd>');
						var mClientListShowLength=mClientList.length	
						
						
						//var unscheduled_m_client_list='<option value="0" > Select Retailer</option>'
						var unscheduled_m_client_list=''
						for ( i=0; i < mClientListShowLength; i++){
							var mClientValueArray = mClientList[i].split('<fd>');
							var mClientID=mClientValueArray[0];
							var mClientName=mClientValueArray[1];
							//alert (mClientID)
							if(mClientID!=''){
	
								unscheduled_m_client_list+='<li class="ui-btn ui-shadow ui-corner-all ui-btn-icon-left ui-icon-location" style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin"><a onClick="marketRetailerNextLV(\''+mClientName+'|'+mClientID+'\')">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+mClientName+'|'+mClientID+'</a></li>';
								}								
						}
									
									
						//var unscheduled_m_client_combo_ob=$('#unscheduled_m_client_combo_id');
						
						
						var unscheduled_m_client_combo_ob=$('#unscheduled_m_client_combo_id_lv');
						
						unscheduled_m_client_combo_ob.empty()
						unscheduled_m_client_combo_ob.append(unscheduled_m_client_list);
									
						$(".market").html(market_name);								
						$(".visit_type").html(visit_type);								
						$(".s_date").html(scheduled_date);
						localStorage.visit_type=visit_type
						localStorage.scheduled_date=scheduled_date
									
									//-----------------------------------
									$("#err_market_next").text("");
									$("#wait_image_unschedule_market").hide();		
									$("#btn_unschedule_market").show();
									
									//------- 
									var url = "#page_market_ret";	
									$.mobile.navigate(url);
									
									unscheduled_m_client_combo_ob.listview("refresh");
									
								}
					
					}
 		
			
		}			
}
//==============================Doctor==========

function marketRetailerNext_doc() {
	$("#err_m_retailer_next").text("");
	visit_client=$("#unscheduled_m_client_combo_id").val();		
	
	if(visit_client=='' || visit_client==0){
			$("#err_m_retailer_next").text("Retailer required");
	}else{
		$("#btn_unschedule_market_ret").hide();
		$("#unscheduled_m_client_combo_id_lv").hide();
		
		//alert ('nn');
		$("#wait_image_ret").show();		
		
		$(".visit_client").html(visit_client);
		
		localStorage.visit_client_show=visit_client
		if (visit_client!=localStorage.visit_client){
			
			localStorage.productGiftStr=''
			localStorage.campaign_doc_str=''
			localStorage.productSampleStr=''
			
			localStorage.productppmStr='';
			
			localStorage.campaign_show_1='';
			localStorage.gift_show_1='';
			localStorage.sample_show_1='';
			localStorage.ppm_show_1='';
			
			//alert (localStorage.productGiftStr='');
//			alert (localStorage.gift_show_1);
//			==========================

		
		
		set_doc_all();
		

//			===============================
		}
		
			
		localStorage.visit_client=visit_client

		localStorage.visit_page="YES"
		
		//--------
		$("#wait_image_unschedule_market_ret").hide();		
		
		$("#unscheduled_m_client_combo_id_lv").show();
		$("#wait_image_ret").hide();
		

		var url = "#page_visit_doc";
		$.mobile.navigate(url);
		
		//location.reload();
							
			
	
	}
}
//=========================


function getCampaign(){
	localStorage.campaign=1;

	if ((localStorage.campaign_doc_str==undefined) || (localStorage.campaign_doc_str=='undefined')){
		localStorage.campaign_doc_str='';
	}
	
	var campaign_show=localStorage.campaign_doc_str;
	
	var campaign_showList=campaign_show.split('<rd>');
	var campaign_showListLength=campaign_showList.length;
	
	
	for (j=0; j < campaign_showListLength; j++){	
		var camp_combo="#doc_camp"+campaign_showList[j]
		$(camp_combo).attr('checked', true);
	}
	
	var url = "#page_doctor_campaign";	
	$.mobile.navigate(url);	
}



//--------------------Campaign Item Search Start----------------
function search_item_doctor_campaign() {	
	var p_name=$("#item_search_doctor_campaign").val();

	 
	
	vfinal=p_name.toUpperCase()
	
	var productList=localStorage.productListStr.split('<rd>');
	var productLength=productList.length;										
	for (j=0; j < productLength; j++){				
		var orderItemArray = productList[j].split('<fd>');
		var product_id=orderItemArray[0];	
		var product_name=orderItemArray[1];
		//alert (product_name);
		if (product_name.indexOf(vfinal)==0){
			//alert (product_name);
			jQuery("#doc_camp"+product_id).focus().select();
			$("#item_search_doctor_campaign").val('');
			return;
		}
				
	}
	
}


//--------------------Campaign Item Search End----------------
//--------------------------------- Order: Set Order data
function getDocCampaignData_keyup(product_id){
	var pid=$("#doc_camp_id"+product_id).val();
	var pname=$("#doc_camp_name"+product_id).val();
	var camp_combo="#doc_camp"+product_id
	
	var camp_combo_val=$(camp_combo).is(":checked")
	
	
	var campaign_doc_str=localStorage.campaign_doc_str
	var campaign_docShowStr='';
	var campaign_doc_strList="";
        var campaign_doc_strListLength=0;
        var campaign_docProductId="";
	
	if (camp_combo_val == true ){
		if (campaign_doc_str.indexOf(pid)==-1){
			if (campaign_doc_str==''){
				campaign_doc_str=pid
				productOrderShowStr=pname
			}else{
				campaign_doc_str=campaign_doc_str+'<rd>'+pid
			}	
		}
		else{
			campaign_doc_strList=localStorage.campaign_doc_str.split('<rd>');
			campaign_doc_strListLength=campaign_doc_strList.length;
			for (j=0; j < orderProductLength; j++){
					campaign_docProductId=campaign_doc_strList[j];

					if (campaign_docProductId==pid){
						campaign_doc_str=campaign_doc_str.replace(campaign_docProductId, "")
						
						
						if (campaign_doc_str==''){
							campaign_doc_str=pid
							//productOrderShowStr=pname+'('+pqty+')'
						}else{
							campaign_doc_str=campaign_doc_str+'<rd>'+campaign_docProductId
							//productOrderShowStr=productOrderShowStr+', '+pname+'('+orderProductQty+')'
							}		
					}
			}
		}
		localStorage.campaign_doc_str=campaign_doc_str;
		
		
	}
	else{
		//alert ('3')
		campaign_doc_strList=localStorage.campaign_doc_str.split('<rd>');
		campaign_doc_strListLength=campaign_doc_strList.length;
		
		for (j=0; j < campaign_doc_strListLength; j++){
		  campaign_docProductId=campaign_doc_strList[j]
				
				product_index=campaign_doc_str.indexOf(campaign_docProductId)
				if (campaign_docProductId==pid){
					if (campaign_doc_strListLength>1){
						if (product_index==0){
							campaign_doc_str=campaign_doc_str.replace(campaign_doc_strList[j]+'<rd>', "")
						}
						if (product_index > 0){
							campaign_doc_str=campaign_doc_str.replace('<rd>'+campaign_doc_strList[j], "")
						}
					}
					if (campaign_doc_strListLength==1){
							campaign_doc_str=campaign_doc_str.replace(campaign_doc_strList[j], "")
						
					}
					
					
					
				
			}
		}
	
		localStorage.campaign_doc_str=campaign_doc_str;
		
	}
		
	}
function campaign_remove(id){
	var campaign_show=localStorage.campaign_doc_str;
	var campaign_showList=campaign_show.split('<rd>');
	var campaign_showListLength=campaign_showList.length;
	
	

	for (j=0; j < campaign_showListLength; j++){

		if (j==0){
			campaign_show=campaign_show.replace(id,"");
		}
		else{
			campaign_show=campaign_show.replace("<rd>"+id,"");
		}


	}
	localStorage.campaign_doc_str=campaign_show;
	$('#'+id).remove();
	
	var camp_combo="#doc_camp"+id
	$(camp_combo).attr("checked", false);
	
	if  (campaign_show_1.indexOf('undefined')==-1 ){
		var campaign= ($("#doc_campaign").html());
		localStorage.campaign_show_1=campaign;
	}
	
	//getDocCampaignData();
}	
	
	
function getDocCampaignData(){	
	var campaign_show=localStorage.campaign_doc_str;

	var campaign_showList=campaign_show.split('<rd>');
	var campaign_showListLength=campaign_showList.length;
	var campaign_show_1='';
	
	for (j=0; j < campaign_showListLength; j++){
		
			if (j==0){
				campaign_show_1=campaign_show_1+'<table width="100%" cellspacing="2" border="0" style="border:thin;  border-color:a;background-color:#F7F7F7">';
			}
			var pname=$("#doc_camp_name"+campaign_showList[j]).val();
			//alert (campaign_showList[j]);
			if (campaign_showList[j] != ''){
				campaign_show_1=campaign_show_1+' <tr id="'+campaign_showList[j]+'"><td>'+pname+'('+campaign_showList[j]+')'+' </td><td> <a data-role="button" class="ui-btn" style="text-align:center" onClick="campaign_remove(\''+campaign_showList[j]+'\');" > X </a> </td></tr>'
			}
	}
	if (campaign_show_1!=''){
		campaign_show_1=campaign_show_1+'</table>';
	}
	localStorage.campaign_show_1=campaign_show_1;
	if  (campaign_show_1.length > 0 ){
		$("#doc_campaign").html("</br>"+localStorage.campaign_show_1+'</br>');
	}
	
	campaign_as_sample();
	var url = "#page_visit_doc";	
	$.mobile.navigate(url);			
	}
//Set campaign as sample 
function campaign_as_sample(){
	var campaign_show= localStorage.campaign_doc_str+'<rd>';
	var campaign_showList=campaign_show.split('<rd>');
	var campaign_showListLength=campaign_showList.length;
	

	
	var sample_show_1=localStorage.sample_show_1
	var productSampleStr=localStorage.productSampleStr

	for (j=0; j < campaign_showListLength ; j++){
		if (campaign_showList[j].length !=0){
				if (productSampleStr.indexOf(campaign_showList[j])==-1){
					$("#sample_qty"+campaign_showList[j]).val(0);
					productSampleStr=productSampleStr+'<rd>'+campaign_showList[j]+'<fd>0'
				
					
				}
		}
		
	}

	localStorage.productSampleStr=productSampleStr;
	getDocSampleData();
	
	
				
		
	
	
}
	
	


function getDoctorGift(){
	if ((localStorage.gift_tbl_doc==undefined) || (localStorage.gift_tbl_doc=='undefined')){
		localStorage.gift_tbl_doc='';
	}
	
	//  Set Gift Data==========
	var gift_show=localStorage.productGiftStr;
	
	var gift_showList=gift_show.split('<rd>');
	var gift_showListLength=gift_showList.length;
	
	for (j=0; j < gift_showListLength; j++){
		var giftProductsingle=gift_showList[j];
		var giftProductsingleList=giftProductsingle.split('<fd>');
		
		$('#gift_qty'+giftProductsingleList[0]).val(giftProductsingleList[1]);

	}
	
	var url = "#page_doctor_gift";	
	$.mobile.navigate(url)
	
}
//--------------------------------- Order: Set Order data
function getGiftData_keyup(product_id){
	//alert (product_id);
	var pid=$("#gift_id"+product_id).val();
	var pname=$("#doc_gift_name"+product_id).val();
	var pqty=$("#gift_qty"+product_id).val().replace('.','').substring(0,4);
	
	$("#gift_qty"+product_id).val(pqty);
	
	var productGiftStr=localStorage.productGiftStr
	var productGiftShowStr='';
        
        var giftProductList="";
	var giftProductLength=0;
        
        var giftProductId="";
	var giftProductQty="";
        
        var giftProductIdQtyList ="";
        
	if ((eval(pqty) < 1) || (pqty == false)){
		$("#gift_qty"+product_id).val('')
	}
	
	if (pqty!='' && eval(pqty) > 0 ){
		//alert (productGiftStr.indexOf(product_id));
		if (productGiftStr.indexOf(product_id)==-1){
			//alert (pid)
			if (productGiftStr==''){
				productGiftStr=pid+'<fd>'+pqty
				productGiftShowStr=pname+'('+pqty+')'
			}else{
				productGiftStr=productGiftStr+'<rd>'+pid+'<fd>'+pqty
				productGiftShowStr=productGiftShowStr+', '+pname+'('+pqty+')'
			}	
		}
		else{
			giftProductList=localStorage.productGiftStr.split('<rd>');
			giftProductLength=giftProductList.length;
			for (j=0; j < giftProductLength; j++){
			giftProductIdQtyList=giftProductList[j].split('<fd>');
				if(giftProductIdQtyList.length==2){
					giftProductId=giftProductIdQtyList[0];
					giftProductQty=giftProductIdQtyList[1];
					if (giftProductId==pid){
						productGiftStr=productGiftStr.replace(giftProductList[j], "")
						
						
						if (productGiftStr==''){
							productGiftStr=pid+'<fd>'+pqty
							productGiftShowStr=pname+'('+pqty+')'
						}else{
							productGiftStr=productGiftStr+'<rd>'+giftProductId+'<fd>'+giftProductQty
							productGiftShowStr=productGiftShowStr+', '+pname+'('+giftProductQty+')'
							}		
					}
					
				}
			}
			
		}
		localStorage.productGiftStr=productGiftStr;
		
		
	}
	else{		
		giftProductList=localStorage.productGiftStr.split('<rd>');
		giftProductLength=giftProductList.length;
		
		for (j=0; j < giftProductLength; j++){
		giftProductIdQtyList=giftProductList[j].split('<fd>');
			if(giftProductIdQtyList.length==2){
				giftProductId=giftProductIdQtyList[0];
				product_index=productGiftStr.indexOf(product_id)
				if (orderProductId==pid){
					if (giftProductLength>1){
						if (product_index==0){
							productGiftStr=productGiftStr.replace(giftProductList[j]+'<rd>', "")
						}
						if (product_index > 0){
							productGiftStr=productGiftStr.replace('<rd>'+giftProductList[j], "")
						}
					}
					if (giftProductLength==1){
							productGiftStr=productGiftStr.replace(giftProductList[j], "")
						
					}
					
					
					
				}
			}
		}
	
		localStorage.productGiftStr=productGiftStr
	}
	//	------------------------------------------------------
}
function getDocGiftData(){	
	var gift_show=localStorage.productGiftStr;
	
	var gift_showList=gift_show.split('<rd>');
	var gift_showListLength=gift_showList.length;
	var gift_show_1='<ul  data-role="listview">';
	for (j=0; j < gift_showListLength; j++){
		var giftProductsingle=gift_showList[j];
		//alert (giftProductsingle)
		var giftProductsingleList=giftProductsingle.split('<fd>');
		
		var pname=$("#doc_gift_name"+giftProductsingleList[0]).val();
		gift_show_1=gift_show_1+'<li  style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin">'+'<table width="100%" border="0" id="order_tbl" cellpadding="0" cellspacing="0" style="border-radius:5px;">'+'<tr><td  >'+pname+'('+giftProductsingleList[0]+')'+'</td><td width="80px">'+'<input  type="number" id="g_cart_qty'+ giftProductsingleList[0] +'"  onBlur="giftCartData_keyup(\''+giftProductsingleList[0] +'\');" value="'+giftProductsingleList[1]+'" placeholder="0">'+'</td></tr>'+'</table>'+'</li>'
	}
	if (gift_show_1!=''){
			gift_show_1=gift_show_1+'</ul>';
	}
	
	localStorage.gift_show_1=gift_show_1;
	
	if  (gift_show_1.indexOf('undefined')==-1 ){
		$('#doc_gift').empty();
		$('#doc_gift').append("</br>"+localStorage.gift_show_1+"</br>").trigger('create');
		
	}
	var url = "#page_visit_doc";	
	$.mobile.navigate(url);	
		
	}







function giftCartData_keyup(product_id){
	var pid=$("#gift_id"+product_id).val();
	var pname=$("#doc_gift_name"+product_id).val();
	var pqty=$("#g_cart_qty"+product_id).val();
	
	
	$("#gift_qty"+product_id).val(pqty);
	var productGiftStr=localStorage.productGiftStr
	
	var gift_show_1='';
        
        var giftProductList="";
        var giftProductLength=0;
        var giftProductIdQtyList="";
        var giftProductId="";
	var giftProductQty="";
                                        
                                        
	if ((eval(pqty) < 1) || (pqty == false)){
		$("#gift_qty"+product_id).val('')
	}
	
	if (pqty!='' && eval(pqty) > 0 ){
		
		if (productGiftStr.indexOf(product_id)==-1){
			if (productGiftStr==''){
				productGiftStr=pid+'<fd>'+pqty
			}else{
				productGiftStr=productGiftStr+'<rd>'+pid+'<fd>'+pqty
			}	
		}
		else{			
			
			giftProductList=localStorage.productGiftStr.split('<rd>');
			giftProductLength=giftProductList.length;
			//alert (giftProductLength);
			
			for (j=0; j < giftProductLength; j++){
				giftProductIdQtyList=giftProductList[j].split('<fd>');
				if(giftProductIdQtyList.length==2){
					giftProductId=giftProductIdQtyList[0];
					giftProductQty=giftProductIdQtyList[1];
					
					if (giftProductId==pid){
						product_index=productGiftStr.indexOf(product_id)
						if (product_index==0){
							productGiftStr=productGiftStr.replace(giftProductList[j]+'<rd>', "")
							productGiftStr=productGiftStr.replace(giftProductList[j], "")
						}
						if (product_index > 0){
							productGiftStr=productGiftStr.replace('<rd>'+giftProductList[j], "")
						}
						if (productGiftStr==''){
							productGiftStr=pid+'<fd>'+pqty
						}else{
							productGiftStr=productGiftStr+'<rd>'+pid+'<fd>'+pqty
						}		
									
					}//if (orderProductId==pid){
					
				}//if(orderProductIdQtyList.length==2){
			}//for
			
		}//else
		localStorage.productGiftStr=productGiftStr;
		
	}
	else{
		giftProductList=localStorage.productGiftStr.split('<rd>');
		giftProductLength=giftProductList.length;
		
		for (j=0; j < giftProductLength; j++){
		giftProductIdQtyList=giftProductList[j].split('<fd>');
			if(giftProductIdQtyList.length==2){
				giftProductId=giftProductIdQtyList[0];
				product_index=productGiftStr.indexOf(product_id)
				if (giftProductId==pid){
					if (giftProductLength>1){
						if (product_index==0){
							productGiftStr=productGiftStr.replace(giftProductList[j]+'<rd>', "")
						}
						if (product_index > 0){
							productGiftStr=productGiftStr.replace('<rd>'+giftProductList[j], "")
						}
					} //if (giftProductLength>1){
					if (giftProductLength==1){
							productGiftStr=productGiftStr.replace(giftProductList[j], "")
						
					} //if (giftProductLength==1
				
				} //if (giftProductId==pid)
					
					
					
				}//if(giftProductIdQtyList.length==2)
			}//for
		}//else
	
		localStorage.productGiftStr=productGiftStr
		
		
		//getDocGiftData();
		
//		==================================
	}



//===========================PPM Start=================

function getDoctorppm(){
	if ((localStorage.ppm_tbl_doc==undefined) || (localStorage.ppm_tbl_doc=='undefined')){
		localStorage.ppm_tbl_doc='';
	}
	
	//  Set ppm Data==========
	var ppm_show=localStorage.productppmStr;
	
	var ppm_showList=ppm_show.split('<rd>');
	var ppm_showListLength=ppm_showList.length;
	
	for (j=0; j < ppm_showListLength; j++){
		var ppmProductsingle=ppm_showList[j];
		var ppmProductsingleList=ppmProductsingle.split('<fd>');
		
		$('#ppm_qty'+ppmProductsingleList[0]).val(ppmProductsingleList[1]);
	}
	
	var url = "#page_doctor_ppm";	
	$.mobile.navigate(url)
}
//--------------------------------- Order: Set Order data
function getppmData_keyup(product_id){
	//alert ('product_id');
	var pid=$("#ppm_id"+product_id).val();
	var pname=$("#doc_ppm_name"+product_id).val();
	var pqty=$("#ppm_qty"+product_id).val().replace('.','').substring(0,4);
	$("#ppm_qty"+product_id).val(pqty)
	
	
        var ppmProductList="";
        var ppmProductLength=0;
        var ppmProductIdQtyList="";
        var ppmProductId="";
        var ppmProductQty="";
        
	var productppmStr=localStorage.productppmStr
	var productppmShowStr='';
	if ((eval(pqty) < 1) || (pqty == false)){
		$("#ppm_qty"+product_id).val('')
	}
	
	if (pqty!='' && eval(pqty) > 0 ){
		if (productppmStr.indexOf(product_id)==-1){
			//alert (pid)
			if (productppmStr==''){
				productppmStr=pid+'<fd>'+pqty
				productppmShowStr=pname+'('+pqty+')'
			}else{
				productppmStr=productppmStr+'<rd>'+pid+'<fd>'+pqty
				productppmShowStr=productppmShowStr+', '+pname+'('+pqty+')'
			}	
		}
		else{
			ppmProductList=localStorage.productppmStr.split('<rd>');
			ppmProductLength=ppmProductList.length;
			for (j=0; j < ppmProductLength; j++){
			ppmProductIdQtyList=ppmProductList[j].split('<fd>');
				if(ppmProductIdQtyList.length==2){
					pmProductId=ppmProductIdQtyList[0];
					ppmProductQty=ppmProductIdQtyList[1];
					if (ppmProductId==pid){
						productppmStr=productppmStr.replace(ppmProductList[j], "")
						
						
						if (productppmStr==''){
							productppmStr=pid+'<fd>'+pqty
							productppmShowStr=pname+'('+pqty+')'
						}else{
							productppmStr=productppmStr+'<rd>'+ppmProductId+'<fd>'+ppmProductQty
							productppmShowStr=productppmShowStr+', '+pname+'('+ppmProductQty+')'
							}		
									
						
						
					}
					
				}
			}
			
		}
		localStorage.productppmStr=productppmStr;
		
		
	}
	else{		
		ppmProductList=localStorage.productppmStr.split('<rd>');
		ppmProductLength=ppmProductList.length;
		
		for (j=0; j < ppmProductLength; j++){
		ppmProductIdQtyList=ppmProductList[j].split('<fd>');
			if(ppmProductIdQtyList.length==2){
				ppmProductId=ppmProductIdQtyList[0];
				product_index=productppmStr.indexOf(product_id)
				if (orderProductId==pid){
					if (ppmProductLength>1){
						if (product_index==0){
							productppmStr=productppmStr.replace(ppmProductList[j]+'<rd>', "")
						}
						if (product_index > 0){
							productppmStr=productppmStr.replace('<rd>'+ppmProductList[j], "")
						}
					}
					if (ppmProductLength==1){
							productppmStr=productppmStr.replace(ppmProductList[j], "")
						
					}
					
					
					
				}
			}
		}
	
		localStorage.productppmStr=productppmStr;
	}
	//alert (localStorage.productppmStr)	
	//	------------------------------------------------------
}
function getDocppmData(){	
	var ppm_show=localStorage.productppmStr;
	
	var ppm_showList=ppm_show.split('<rd>');
	var ppm_showListLength=ppm_showList.length;
	var ppm_show_1='<ul  data-role="listview">';
	for (j=0; j < ppm_showListLength; j++){
		var ppmProductsingle=ppm_showList[j];
		var ppmProductsingleList=ppmProductsingle.split('<fd>');
		
		var pname=$("#doc_ppm_name"+ppmProductsingleList[0]).val();
		ppm_show_1=ppm_show_1+'<li  style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin">'+'<table width="100%" border="0" id="order_tbl" cellpadding="0" cellspacing="0" style="border-radius:5px;">'+'<tr><td  >'+pname+'('+ppmProductsingleList[0]+')'+'</td><td width="80px">'+'<input  type="number" id="g_cart_qty'+ ppmProductsingleList[0] +'"  onBlur="ppmCartData_keyup(\''+ppmProductsingleList[0] +'\');" value="'+ppmProductsingleList[1]+'" placeholder="0">'+'</td></tr>'+'</table>'+'</li>'
	}
	if (ppm_show_1!=''){
			ppm_show_1=ppm_show_1+'</ul>';
	}
	
	
	localStorage.ppm_show_1=ppm_show_1;
	if  (ppm_show_1.indexOf('undefined')==-1 ){
		$('#doc_ppm').empty();
		$('#doc_ppm').append("</br>"+localStorage.ppm_show_1+"</br>").trigger('create');
		
	}
	var url = "#page_visit_doc";	
	$.mobile.navigate(url);	
		
	}







function ppmCartData_keyup(product_id){
	var pid=$("#ppm_id"+product_id).val();
	var pname=$("#doc_ppm_name"+product_id).val();
	var pqty=$("#g_cart_qty"+product_id).val();
	

	
	$("#ppm_qty"+product_id).val(pqty);
	var productppmStr=localStorage.productppmStr
	
        
        var ppmProductList="";
	var ppmProductLength=0;
        var ppmProductIdQtyList="";
        var ppmProductId="";
	var ppmProductQty="";
        
        
	var ppm_show_1='';
	if ((eval(pqty) < 1) || (pqty == false)){
		$("#ppm_qty"+product_id).val('');
	}
	
	if (pqty!='' && eval(pqty) > 0 ){
		
		if (productppmStr.indexOf(product_id)==-1){
			if (productppmStr==''){
				productppmStr=pid+'<fd>'+pqty
			}else{
				productppmStr=productppmStr+'<rd>'+pid+'<fd>'+pqty
			}	
		}
		else{			
			
			ppmProductList=localStorage.productppmStr.split('<rd>');
			ppmProductLength=ppmProductList.length;
			
			for (j=0; j < ppmProductLength; j++){
				ppmProductIdQtyList=ppmProductList[j].split('<fd>');
				if(ppmProductIdQtyList.length==2){
					ppmProductId=ppmProductIdQtyList[0];
					ppmProductQty=ppmProductIdQtyList[1];
					
					if (ppmProductId==pid){
						product_index=productppmStr.indexOf(product_id)
						if (product_index==0){
							productppmStr=productppmStr.replace(ppmProductList[j]+'<rd>', "")
							productppmStr=productppmStr.replace(ppmProductList[j], "")
						}
						if (product_index > 0){
							productppmStr=productppmStr.replace('<rd>'+ppmProductList[j], "")
						}
						
						
						if (productppmStr==''){
							productppmStr=pid+'<fd>'+pqty
						}else{
							productppmStr=productppmStr+'<rd>'+pid+'<fd>'+pqty
						}		
									
					}//if (orderProductId==pid){
					
				}//if(orderProductIdQtyList.length==2){
			}//for
			
		}//else
		localStorage.productppmStr=productppmStr;
		
	}
	else{
		ppmProductList=localStorage.productppmStr.split('<rd>');
		ppmProductLength=ppmProductList.length;
		
		for (j=0; j < ppmProductLength; j++){
		ppmProductIdQtyList=ppmProductList[j].split('<fd>');
			if(ppmProductIdQtyList.length==2){
				ppmProductId=ppmProductIdQtyList[0];
				product_index=productppmStr.indexOf(product_id)
				if (ppmProductId==pid){
					if (ppmProductLength>1){
						if (product_index==0){
							productppmStr=productppmStr.replace(ppmProductList[j]+'<rd>', "")
						}
						if (product_index > 0){
							productppmStr=productppmStr.replace('<rd>'+ppmProductList[j], "")
						}
					} //if (ppmProductLength>1){
					if (ppmProductLength==1){
							productppmStr=productppmStr.replace(ppmProductList[j], "")
						
					} //if (ppmProductLength==1
				
				} //if (ppmProductId==pid)
					
					
					
				}//if(ppmProductIdQtyList.length==2)
			}//for
		}//else
	
		localStorage.productppmStr=productppmStr
		//getDocppmData();
		
		
	}




//============================ppm End===================







//--------------------------------- Sample: Show Sample from home

function getDocSampleData(){	
	var sampleProductList=localStorage.productSampleStr.split('<rd>');
	var sampleProductLength=sampleProductList.length;
	//alert (localStorage.productSampleStr);
	var sample_show_1='<ul  data-role="listview">';
	for (j=0; j < sampleProductLength; j++){
			if (sampleProductList[j] != ''){
				//alert (sampleProductList[j]);
				var sampleProductsingle=sampleProductList[j];
				var sampleProductsingleList=sampleProductsingle.split('<fd>');
	
				var pname=$("#sample_name"+sampleProductsingleList[0]).val();
				
				sample_show_1=sample_show_1+'<li  style="border-bottom-style:solid; border-color:#CBE4E4;border-bottom-width:thin">'+'<table width="100%" border="0" id="order_tbl" cellpadding="0" cellspacing="0" style="border-radius:5px;">'+'<tr><td >'+pname+'('+sampleProductsingleList[0]+')'+'</td><td width="80px">'+'<input  type="number" id="s_cart_qty'+ sampleProductsingleList[0] +'"  onBlur="sampleCartData_keyup(\''+sampleProductsingleList[0] +'\');" value="'+sampleProductsingleList[1]+'" placeholder="0">'+'</td></tr>'+'</table>'+'</li>'
			}
		}
		
		if (sample_show_1!=''){
				sample_show_1=sample_show_1+'</ul>';
		}
		
		localStorage.sample_show_1=sample_show_1;
		
		//alert (sample_show_1.indexOf('undefined'));
		if  (sample_show_1.indexOf('undefined')==-1 ){
			$('#doc_sample').empty();
			$('#doc_sample').append("</br>"+localStorage.sample_show_1+"</br>").trigger('create');
		}
		
		
		var url = "#page_visit_doc";	
		$.mobile.navigate(url);	
		
	
	
}
function getDoctorSample(){	
	$("#myerror_doctor_sample").html('');
	if ((localStorage.productSampleStr==undefined) || (localStorage.productSampleStr=='undefined')){
		localStorage.productSampleStr='';
	}
	
	//  Set Sample Data==========
	var sampleProductList=localStorage.productSampleStr.split('<rd>');
	var sampleProductLength=sampleProductList.length;
	for (j=0; j < sampleProductLength; j++){
			
			var sampleProductsingle=sampleProductList[j];
			var sampleProductsingleList=sampleProductsingle.split('<fd>');
			
			
			$("#sample_qty"+sampleProductsingleList[0]).val(sampleProductsingleList[1]);

		
	}
	var url = "#page_doctor_sample";	
	$.mobile.navigate(url);	
	//location.reload();
	//-----
}




//--------------------------------- Order: Set Order data
function getSampleData_keyup(product_id){
	var pid=$("#sample_id"+product_id).val();
	var pname=$("#sample_name"+product_id).val();
	var pqty=$("#sample_qty"+product_id).val().replace('.','').substring(0,4);
	$("#sample_qty"+product_id).val(pqty);
	
	
	var productSampleStr=localStorage.productSampleStr
	
	var sampleProductList="";
	var sampleProductLength=0;
        var sampleProductIdQtyLis="";
        var sampleProductId="";
	var sampleProductQty="";
        
        
	var productSampleShowStr='';
	if ((eval(pqty) < 1) || (pqty == false)){
		$("#sample_qty"+product_id).val('')
	}
	
	if (pqty!='' && eval(pqty) > 0 ){
		
		if (productSampleStr.indexOf(product_id)==-1){
			if (productSampleStr==''){
				productSampleStr=pid+'<fd>'+pqty
				productSampleShowStr=pname+'('+pqty+')'
			}else{
				productSampleStr=productSampleStr+'<rd>'+pid+'<fd>'+pqty
				productSampleShowStr=productSampleShowStr+', '+pname+'('+pqty+')'
			}	
		}
		else{
			sampleProductList=localStorage.productSampleStr.split('<rd>');
			sampleProductLength=sampleProductList.length;
			for (j=0; j < sampleProductLength; j++){
			sampleProductIdQtyList=sampleProductList[j].split('<fd>');
				if(sampleProductIdQtyList.length==2){
					sampleProductId=sampleProductIdQtyList[0];
					sampleProductQty=sampleProductIdQtyList[1];
					if (sampleProductId==pid){
						productSampleStr=productSampleStr.replace(sampleProductList[j], "")
						
						
						
						if (productSampleStr==''){
							productSampleStr=pid+'<fd>'+pqty
							productSampleShowStr=pname+'('+pqty+')'
						}else{
							productSampleStr=productSampleStr+'<rd>'+sampleProductId+'<fd>'+pqty
							productSampleShowStr=productSampleShowStr+', '+pname+'('+pqty+')'
							}		

					}
					
				}
			}
			
		}
		localStorage.productSampleStr=productSampleStr;
		//alert (localStorage.productSampleStr);
		
	}
	else{
		sampleProductList=localStorage.productSampleStr.split('<rd>');
		sampleProductLength=orderProductList.length;
		
		for (j=0; j < sampleProductLength; j++){
		var sampleProductIdQtyList=sampleProductList[j].split('<fd>');
			if(sampleProductIdQtyList.length==2){
				sampleProductId=sampleProductIdQtyList[0];
				product_index=productSampleStr.indexOf(product_id)
				if (sampleProductId==pid){
					if (sampleProductLength>1){
						if (product_index==0){
							productSampleStr=productSampleStr.replace(sampleProductList[j]+'<rd>', "")
							productSampleStr=productSampleStr.replace(sampleProductList[j], "")
						}
						if (product_index > 0){
							productSampleStr=productSampleStr.replace('<rd>'+sampleProductList[j], "")
						}
					}
					if (sampleProductLength==1){
							productSampleStr=productSampleStr.replace(sampleProductList[j], "")
						
					}
					
					
					
				}
			}
		}
	
		localStorage.productSampleStr=productSampleStr
	}
	
	//	------------------------------------------------------
}
	
function sampleCartData_keyup(product_id){
	var pid=$("#sample_id"+product_id).val();
	var pname=$("#sample_name"+product_id).val();
	var pqty=$("#s_cart_qty"+product_id).val();
	
	$("#sample_qty"+product_id).val(pqty);
	var productSampleStr=localStorage.productSampleStr
        
        
        var sampleProductList="";
	var sampleProductLength=0;
        var sampleProductIdQtyList="";
        var sampleProductId="";
	var sampleProductQty="";
	
	//alert (productOrderStr)
	var sample_show_1='';
	if ((eval(pqty) < 1) || (pqty == false)){
		$("#sample_qty"+product_id).val('')
	}
	
	if (pqty!='' && eval(pqty) > 0 ){
		
		if (productSampleStr.indexOf(product_id)==-1){
			if (productSampleStr==''){
				productSampleStr=pid+'<fd>'+pqty
			}else{
				productSampleStr=productSampleStr+'<rd>'+pid+'<fd>'+pqty
			}	
		}
		else{			
			
			sampleProductList=localStorage.productSampleStr.split('<rd>');
			sampleProductLength=sampleProductList.length;
			
			for (j=0; j < sampleProductLength; j++){
				sampleProductIdQtyList=sampleProductList[j].split('<fd>');
				if(sampleProductIdQtyList.length==2){
					sampleProductId=sampleProductIdQtyList[0];
					sampleProductQty=sampleProductIdQtyList[1];
					
					if (sampleProductId==pid){
						product_index=productSampleStr.indexOf(product_id)
						if (product_index==0){
							productSampleStr=productSampleStr.replace(sampleProductList[j]+'<rd>', "")
							productSampleStr=productSampleStr.replace(sampleProductList[j], "")
						}
						if (product_index > 0){
							productSampleStr=productSampleStr.replace('<rd>'+sampleProductList[j], "")
						}
						
						
						if (productSampleStr==''){
							productSampleStr=pid+'<fd>'+pqty
						}else{
							productSampleStr=productSampleStr+'<rd>'+pid+'<fd>'+pqty
						}		
									
					}//if (orderProductId==pid){
					
				}//if(orderProductIdQtyList.length==2){
			}//for
			
		}//else
		localStorage.productSampleStr=productSampleStr;
		//alert (productsampleStr)
		
	}
	else{
		sampleProductList=localStorage.productSampleStr.split('<rd>');
		sampleProductLength=sampleProductList.length;
		
		for (j=0; j < sampleProductLength; j++){
		sampleProductIdQtyList=sampleProductList[j].split('<fd>');
			if(sampleProductIdQtyList.length==2){
				sampleProductId=sampleProductIdQtyList[0];
				product_index=productSampleStr.indexOf(product_id)
				if (sampleProductId==pid){
					if (sampleProductLength>1){
						if (product_index==0){
							productSampleStr=productSampleStr.replace(sampleProductList[j]+'<rd>', "")
						}
						if (product_index > 0){
							productSampleStr=productSampleStr.replace('<rd>'+sampleProductList[j], "")
						}
					} //if (sampleProductLength>1){
					if (sampleProductLength==1){
							productSampleStr=productSampleStr.replace(sampleProductList[j], "")
						
					} //if (sampleProductLength==1
				
				} //if (sampleProductId==pid)
					
					
					
				}//if(sampleProductIdQtyList.length==2)
			}//for
		}//else
	
		localStorage.productSampleStr=productSampleStr
		
		
		
		//getDocSampleData();

	}



//----------------------Doctor visit submit
function visitSubmit_doc(){	
	$("#errorChkVSubmit").text("");
	
	visitClientId=localStorage.visit_client.split('|')[1]	
	visit_type=localStorage.visit_type
	scheduled_date=localStorage.scheduled_date
	
	
	sample_doc_Str=localStorage.productSampleStr;
	gift_doc_Str=localStorage.productGiftStr;
	campaign_doc_str=localStorage.campaign_doc_str;
	
	ppm_doc_Str=localStorage.productppmStr;
	
	notes= $("#doc_feedback").val();
	

	
	//alert (notes);
	notes=replace_special_char(notes);
	
	//alert (notes);
	
	
	//----------------------- Campaign check
	
	if (campaign_doc_str.indexOf('undefined')!=-1){
		campaign_doc_Str=''
	}else{
		var campaignList=campaign_doc_str.split('<rd>');	
		var campaignListLength=campaignList.length;	
		campaign_submit='';
		
		for ( i=0; i < campaignListLength; i++){		
		
			if (campaign_submit==''){
				campaign_submit=campaignList[i]
			}
			else{
				campaign_submit=campaign_submit+','+campaignList[i]
			}
		}
	}
	//----------------------- Sample check
	//$("#errorChkVSubmit").html(sample_doc_Str);
	//alert (sample_doc_Str.indexOf('undefined'));
	if (sample_doc_Str.indexOf('undefined')!=-1){
		sample_doc_Str=''
	}else{
		var sampleList=sample_doc_Str.split('<rd>');	
		var sampleListLength=sampleList.length;	
		sample_submit='';
		for ( i=0; i < sampleListLength; i++){		
			sample_single=sampleList[i]
			sample_single_list=sample_single.split('<fd>');
			
			if (sample_submit==''){
				sample_submit=sample_single_list[0]+','+sample_single_list[1]
			}
			else{
				sample_submit=sample_submit+'.'+sample_single_list[0]+','+sample_single_list[1]
			}
		}
	}
	//alert (sample_doc_Str);
	//----------------------- Gift check
	if (gift_doc_Str.indexOf('undefined')!=-1){
		gift_doc_Str=''
		gift_submit=''
	}else{
		var giftList=gift_doc_Str.split('<rd>');	
		var giftListLength=giftList.length;	
		gift_submit='';
		for ( i=0; i < giftListLength; i++){	
			gift_single=giftList[i];
			gift_single_list=gift_single.split('<fd>');	
			if (gift_submit==''){
				gift_submit=gift_single_list[0]+','+gift_single_list[1]
			}
			else{
				gift_submit=gift_submit+'.'+gift_single_list[0]+','+gift_single_list[1]
			}
		}
	}
	
	
	//----------------------- ppm check
	if (ppm_doc_Str.indexOf('undefined')!=-1){
		ppm_doc_Str=''
		ppm_submit=''
	}else{
		var ppmList=ppm_doc_Str.split('<rd>');	
		var ppmListLength=ppmList.length;	
		ppm_submit='';
		for ( i=0; i < ppmListLength; i++){	
			ppm_single=ppmList[i];
			ppm_single_list=ppm_single.split('<fd>');	
			if (ppm_submit==''){
				ppm_submit=ppm_single_list[0]+','+ppm_single_list[1]
			}
			else{
				ppm_submit=ppm_submit+'.'+ppm_single_list[0]+','+ppm_single_list[1]
			}
		}
	}
	//-------------------------------
	
	
	
	
	
	//if (campaign_submit.indexOf('undefined')==-1){
//		campaign_submit='';
//		
//	}
//	if (gift_submit.indexOf('undefined')==-1){
//		gift_submit='';
//		
//	}
//	if (sample_submit.indexOf('undefined')==-1){
//		sample_submit='';
//		
//	}
//	if (ppm_submit.indexOf('undefined')==-1){
//		ppm_submit='';
//		
//	}
	//------------------------
	campaign_submit=campaign_submit.replace('undefined','').replace(',.','');
	gift_submit=gift_submit.replace('undefined','').replace(',.','');
	sample_submit=sample_submit.replace('undefined','').replace(',.','');
	notes=notes.replace('undefined','').replace(',.','');
	ppm_submit=ppm_submit.replace('undefined','').replace(',.','');
	
	
	
	if (campaign_submit==','){
		campaign_submit='';
		
	}
	if (gift_submit==','){
		gift_submit='';
		
	}
	if (sample_submit==','){
		sample_submit='';
		
	}
	if (ppm_submit==','){
		ppm_submit='';
		
	}
	
	var msg=campaign_submit+'..'+gift_submit+'..'+sample_submit+'..'+notes+'..'+ppm_submit
	//alert (campaign_submit)
//	alert (gift_submit)
//	alert (sample_submit)
//	alert (ppm_submit)
	
	//msg1=msg.replace('undefined','');
	//alert (msg1)
	//$("#errorChkVSubmit").html(msg1);
	//alert (msg);
	var lscPhoto=$("#lscPhoto").val();
	var lat=$("#lat").val();
	var longitude=$("#longitude").val();
	var now = $.now();
	
	
	var v_with=$("input[name=v_with]:checked").val()
	
	if (v_with=='' || v_with==undefined || v_with=='undefined'){
		$("#errorChkVSubmit_doc").html('Visited with not selected');		
	}else{
		
		if (lat=='' || lat==0 || longitude=='' || longitude==0){
			$("#errorChkVSubmit_doc").html('Location not Confirmed');	
			$("#btn_location_doc").show();	
			$("#visit_submit_doc").show();	
		}else{
			
			if (visitClientId=='' || visitClientId==undefined){
				$("#errorChkVSubmit_doc").html('Invalid Client');		
			}else{
				if(visit_type=='' || visit_type==undefined){
					$("#errorChkVSubmit_doc").html('Invalid Visit Type');
				}else{
					$("#visit_submit_doc").hide();
					$("#wait_image_visit_submit_doc").show();		
					//alert (localStorage.productOrderStr);
					var marketNameId=localStorage.visit_market_show.split('|');
					var market_Id=marketNameId[1];		
					
					
					//$("#errorChkVSubmit").html(msg1);
					
				// $("#errorChkVSubmit_doc").html(localStorage.base_url+'doctor_visit_submit?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&client_id='+visitClientId+'&visit_type='+visit_type+'&schedule_date='+scheduled_date+'&msg='+msg+'&lat='+lat+'&long='+longitude+'&v_with='+v_with+'&route='+market_Id)
					// ajax-------
					//alert (localStorage.payment_mode);
					$.ajax({
						 type: 'POST',
						 url: localStorage.base_url+'doctor_visit_submit?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&client_id='+visitClientId+'&visit_type='+visit_type+'&schedule_date='+scheduled_date+'&msg='+msg+'&lat='+lat+'&long='+longitude+'&v_with='+v_with+'&route='+market_Id,
						 success: function(result) {
								
								//alert(result);
								if (result==''){					
									$("#errorChkVSubmit").html('Sorry Network not available');
									$("#wait_image_visit_submit").hide();
									$("#visit_submit").show();									
								}else{					
									var resultArray = result.split('<SYNCDATA>');			
									if (resultArray[0]=='FAILED'){						
										$("#errorChkVSubmit").html(resultArray[1]);
										$("#wait_image_visit_submit").hide();
										$("#visit_submit").show();	
									}else if (resultArray[0]=='SUCCESS'){
										
										//-----------
										localStorage.visit_client=''
										
									
										
										localStorage.visit_page=""
										
										localStorage.productGiftStr='';
										localStorage.campaign_doc_str=''
										localStorage.productSampleStr=''
										localStorage.productppmStr=''
										
										localStorage.campaign_show_1='';
										localStorage.gift_show_1='';
										localStorage.sample_show_1='';
										localStorage.ppm_show_1='';
										
										
										//-------------
										// Clear Campaign and sample
											
											//localStorage.productOrderStr='';
											var productList=localStorage.productListStr.split('<rd>');
											var productLength=productList.length;
											for ( i=0; i < productLength; i++){
												var productArray2 = productList[i].split('<fd>');
												var product_id2=productArray2[0];	
												var product_name2=productArray2[1];
												$("#sample_qty"+product_id2).val('');
												
												
												var camp_combo="#doc_camp"+product_id2
												$(camp_combo).attr('checked', false);
												//alert (product_id2);
											}	
										// Clear Gift
											
											//localStorage.productOrderStr='';
											var giftList=localStorage.gift_string.split('<rd>');
											var giftLength=giftList.length;
											for ( i=0; i < giftLength; i++){
												var giftArray2 = giftList[i].split('<fd>');
												var gift_id2=giftArray2[0];	
												//var product_name2=giftArray2[1];
												$("#gift_qty"+gift_id2).val('');
											}
											// Clear ppm
											
											//localStorage.productOrderStr='';
											var ppmList=localStorage.ppm_string.split('<rd>');
											var ppmLength=ppmList.length;
											for ( i=0; i < ppmLength; i++){
												var ppmArray2 = ppmList[i].split('<fd>');
												var ppm_id2=ppmArray2[0];	
												//var product_name2=ppmArray2[1];
												$("#ppm_qty"+ppm_id2).val('');
												

											}	
											
											//====================================
										
										
										$("#doc_feedback").val('');
										
										//$(".market").html('');
										$(".visit_client").html('');
										//--------------------------------------------------------
										$("#errorChkVSubmit").html('');
										$("#lat").val('');
										$("#longitude").val('');
										$("#lscPhoto").val('');
										document.getElementById('myImage').src = '';
										
										$("#lat_p").val('');
										$("#long_p").val('');								
//										
										//$("#checkLocation").html('');
//										$("#checkLocationProfileUpdate").html('');
										
										
										
										
										
										$("#errorChkVSubmit_doc").html('');
										$("#wait_image_visit_submit_doc").hide();
										$("#visit_submit_doc").hide();	
										$("#checkLocation_doc").html('');
										$("#btn_location_doc").show();
										
										
										
										//--
										//$("#visit_success").html('</br></br>Visit SL: '+resultArray[1]+'</br>Submitted Successfully');
										$("#visit_success").html('</br></br>Submitted Successfully');
										localStorage.visit_page=''
										
										
										
										
										/// CANCEL ALLcancelVisitPage();
										
											localStorage.campaign_show_1="";
											localStorage.gift_show_1="";
											localStorage.ppm_show_1=""
											localStorage.sample_show_1="";
											
											
											
											localStorage.productGiftStr='';
											localStorage.campaign_doc_str=''
											localStorage.productSampleStr=''
											localStorage.productppmStr='';
											
											set_doc_all();
											$(".visit_client").html('');
										
										
										
										
										var url = "#page_confirm_visit_success";	
										$.mobile.navigate(url);
										
										//location.reload();
																				
									}else{						
										$("#errorChkVSubmit_doc").html('Network Timeout. Please try again.');
										$("#wait_image_visit_submit_doc").hide();
										$("#visit_submit_doc").show();								
										}
								}
							  },
						  error: function(result) {			  
								$("#errorChkVSubmit").html('Network Timeout. Please try again.');
								$("#wait_image_visit_submit_doc").hide();
								$("#visit_submit_doc").show();	
						  }
					 });//end ajax	
				}
			}
		  }//locaction check
	}//Visited with check
	//}//image
  }


//======================Doctor End==============
function clear_mgs(){
	$("#error_login").html('');
	$("#error_login").html('');	
	$("#err_retailer_date_next").html('');	
	$("#err_retailer_next").html('');
	$("#err_market_next").html('');
	$("#errorChkVSubmit").html('');
	$("#err_market_next_cp").html('');
	$("#err_m_retailer_next_cp").html('');
	$("#err_distributor").html('');
	$("#error_del_submit").html('');
	$("#err_p_market").html('');
	$("#err_plan_visit").html('');
	$("#err_visit_rpt").html('');
	$("#error_complain").html('');
	$("#error_complain_page").html('');
	$("#error_task_page").html('');
	$("#error_task_list").html('');
	$("#err_region_rpt").html('');
	$("#err_region_rpt").html('');
	$("#err_region_rpt").html('');
	$("#err_region_rpt").html('');
	$("#err_region_rpt").html('');
	$("#err_m_retailer_next_cp").html('');
	$("#err_market_next").html('');
	$("#errorChkVSubmit").html('');
	
	$("#product_total_cart").html('');
	$("#product_total_last").html('');
	
	
	
}

function client_catList() {	
	$('#catCombo').empty();
	var catArray=localStorage.clientCat_string.split('<rd>')	
	var ob = $("#catCombo");
	var ob_profile = $("#catCombo_profile");
	var value="";
	//var text="Category";
	
	
	for (var p=0; p<catArray.length; p++){
		var catId = catArray[p];
		ob.prepend("<option value='"+ catId+"'>" + catId + "</option>");
		ob_profile.prepend("<option value='"+ catId+"'>" + catId + "</option>");
		}	
	
	
	ob.prepend("<option value=''>All</option>");
	ob_profile.prepend("<option value=''>All</option>");
	
	ob.prepend("<option value=''>Category</option>");
	ob_profile.prepend("<option value=''>Category</option>");
}




//=========================Menu functions Start=================

function chemist_visit() {
	$("#ret_cat").hide();
	$("#d_visit").html("Chemist");
	$("#v_path").html('<font style="font-weight:bold; font-size:13px; color:#666">Visit - Market - Chemist</font>');
	
	
	
	$("#btn_location").show();
	$("#visit_submit").hide();
	$("#checkLocation").html('');
	
	
	localStorage.doctor_flag=0;
	localStorage.visit_page="NO";
	addMarketList();
	
	
}
function chemist_profile() {
	$("#ret_cat").show();
	$("#d_visit").html("Chemist");
	$("#v_path").html('<font style="font-weight:bold; font-size:13px; color:#666">Visit - Market - Chemist</font>');
	localStorage.doctor_flag=0;
	addMarketListCp();
	
	
}
function doctor_visit() {
	$("#ret_cat").hide();
	$("#d_visit").html("Doctors");
	$("#v_path").html('<font style="font-weight:bold; font-size:13px; color:#666">Visit - Market - Doctor</font>');
	localStorage.doctor_flag=1;
	localStorage.visit_page="NO";
	addMarketList();
	
}
function doctor_profile() {
	$("#ret_cat").hide();
	$("#d_visit").html("Doctors");
	$("#v_path").html('<font style="font-weight:bold; font-size:13px; color:#666">Visit - Market - Doctor</font>');
	
	
	localStorage.doctor_flag=1;
	localStorage.visit_page="NO";
	addMarketListCp();
	
}
function feedback() {
	getComplain();
	var url = "#page_complain";	
	$.mobile.navigate(url);
}
function reports() {
	var str_report_rep='<table width="100%" border="0">'+
					 '<tr><td>Rep: </td><td><input id="se_mpo_doc" name="se_mpo_doc" type="text" readonly="true" placeholder="Rep">'+
					  '<input id="se_item_doc" name="se_item_doc" type="hidden" placeholder="Item"></td></tr>'+
					   '<tr><td>Market: </td><td><input id="se_market_doc" name="se_market_doc" type="text" placeholder="Market"  ></td></tr></table>'
	var str_report_sup='<table width="100%" border="0">'+
					   '<tr><td>Rep: </td><td><input id="se_mpo_doc" name="se_mpo_doc" type="text" placeholder="Rep">'+
					   '<input id="se_item_doc" name="se_item_doc" type="hidden" placeholder="Item"></td></tr>	'+
					   '<tr><td>Market: </td><td><input id="se_market_doc" name="se_market_doc" type="text" placeholder="Market/level"  ></td></tr></table>'	
	
	if (localStorage.user_type=='rep'){
		localStorage.str_report=str_report_rep;
		$('#report').empty();
		$('#report').append(localStorage.str_report).trigger('create');
		$('#se_mpo_doc').val(localStorage.user_id);
	}
	if (localStorage.user_type=='sup'){
		localStorage.str_report=str_report_sup;
		$('#report').empty();
		$('#report').append(localStorage.str_report).trigger('create');
		$('#se_mpo_doc').val(localStorage.user_id);
	}
	
	var url = "#page_reports_dcr";
	$.mobile.navigate(url);
}

function market_list_combo() {	
	$('#se_market').empty();
	$('#se_market_doc').empty();
	var marketArray=localStorage.marketListStr.split('<rd>')	
	var ob = $("#se_market");
	var ob_1 = $("#se_market_doc");
	var value="";
	for (var p=0; p<marketArray.length; p++){
		market_single=marketArray[p].split('<fd>')
		var marketId = market_single[0];
		var marketName = market_single[1];
		ob.prepend("<option value='"+ marketId+"'>" + marketName+"-"+marketId + "</option>");
		ob_1.prepend("<option value='"+ marketId+"'>" + marketName+"-"+marketId + "</option>");
		}	
	ob.prepend("<option value=''>Market</option>");
	ob_1.prepend("<option value=''>Market</option>");
}


function item_list_combo() {	
	$('#se_item').empty();
	var productArray=localStorage.productListStr.split('<rd>')	
	var ob = $("#se_item");
	var value="";
	
	for (var p=0; p<productArray.length; p++){
		product_single=productArray[p].split('<fd>')
		var item_id = product_single[0];
		var name = product_single[1];
		ob.prepend("<option value='"+ item_id+"'>" + name+"-"+item_id + "</option>");
		}	
	ob.prepend("<option value=''>Item</option>");
}

function mpo_list_combo() {	
	$('#se_mpo').empty();
	var ob = $("#se_mpo");
	var user_type=localStorage.user_type;
	//alert (user_type);
	if (user_type=='rep'){
		ob.prepend("<option value='"+ localStorage.user_id +"'>" + localStorage.user_id + "</option>");
	}
	
	

}



//=========================Menu functions End=================

$(document).on("pagecreate", "#page_order", function(){    
//$("item_combo_id").keyup(function(){
    $("#item_combo_id_lv").filterable('option', 'filterCallback', startsWithSearch);
});

function startsWithSearch( idx, searchValue ) {
    
	var ret = false;
    if (searchValue && searchValue.length > 0){        
        var text = $(this).text().toUpperCase();
        var filttext = $(this).data("filtertext") || '';
        filttext = filttext.toUpperCase();
        //if either text or filtertext starts with searchvalue, return false
        if( text.lastIndexOf(searchValue.toUpperCase(), 0) != 0 && filttext.lastIndexOf(searchValue.toUpperCase(), 0) != 0){
            ret = true; //filter this one out
        }
    } 
    return ret;
}
//-------------GIft
$(document).on("pagecreate", "#page_doctor_gift", function(){    
	$("#gift_combo_id_lv").filterable('option', 'filterCallback', startsWithSearch_gift);
});

function startsWithSearch_gift( idx, searchValue ) {
	var ret = false;
	//alert (searchValue.length);
    if (searchValue && searchValue.length > 0){ 
		
        var text = $(this).text().toUpperCase();
        var filttext = $(this).data("filtertext") || '';
        filttext = filttext.toUpperCase();
        //if either text or filtertext starts with searchvalue, return false
        if( text.lastIndexOf(searchValue.toUpperCase(), 0) != 0 && filttext.lastIndexOf(searchValue.toUpperCase(), 0) != 0){
            ret = true; //filter this one out
        }
    } 
	
    return ret;
} 
//-------------GIft
$(document).on("pagecreate", "#page_doctor_ppm", function(){    
	$("#ppm_combo_id_lv").filterable('option', 'filterCallback', startsWithSearch_ppm);
});

function startsWithSearch_ppm( idx, searchValue ) {
	var ret = false;
	//alert (searchValue.length);
    if (searchValue && searchValue.length > 0){ 
		
        var text = $(this).text().toUpperCase();
        var filttext = $(this).data("filtertext") || '';
        filttext = filttext.toUpperCase();
        //if either text or filtertext starts with searchvalue, return false
        if( text.lastIndexOf(searchValue.toUpperCase(), 0) != 0 && filttext.lastIndexOf(searchValue.toUpperCase(), 0) != 0){
            ret = true; //filter this one out
        }
    } 
	
    return ret;
} 
//------------Sample
$(document).on("pagecreate", "#page_doctor_sample", function(){    
	$("#sample_combo_id_lv").filterable('option', 'filterCallback', startsWithSearch_sample);
});

function startsWithSearch_sample( idx, searchValue ) {
	var ret = false;
	//alert (searchValue.length);
    if (searchValue && searchValue.length > 0){ 
		
        var text = $(this).text().toUpperCase();
        var filttext = $(this).data("filtertext") || '';
        filttext = filttext.toUpperCase();
        //if either text or filtertext starts with searchvalue, return false
        if( text.lastIndexOf(searchValue.toUpperCase(), 0) != 0 && filttext.lastIndexOf(searchValue.toUpperCase(), 0) != 0){
            ret = true; //filter this one out
        }
    } 
	
    return ret;
} 

//--------------Campaign
//------------Sample
$(document).on("pagecreate", "#page_doctor_campaign", function(){    
	$("#campaign_combo_id_lv").filterable('option', 'filterCallback', startsWithSearch_campaign);
});

function startsWithSearch_campaign( idx, searchValue ) {
	var ret = false;
	//alert (searchValue.length);
    if (searchValue && searchValue.length > 0){ 
		
        var text = $(this).text().toUpperCase();
        var filttext = $(this).data("filtertext") || '';
        filttext = filttext.toUpperCase();
        //if either text or filtertext starts with searchvalue, return false
        if( text.lastIndexOf(searchValue.toUpperCase(), 0) != 0 && filttext.lastIndexOf(searchValue.toUpperCase(), 0) != 0){
            ret = true; //filter this one out
        }
    } 
	
    return ret;
}




//------------Market
$(document).on("pagecreate", "#page_market", function(){    
	$("#unschedule_market_combo_id_lv").filterable('option', 'filterCallback', startsWithSearch_market);
});

function startsWithSearch_market( idx, searchValue ) {
	var ret = false;
	//alert (searchValue.length);
    if (searchValue && searchValue.length > 0){ 
		
        var text = $(this).text().toUpperCase();
        var filttext = $(this).data("filtertext") || '';
        filttext = filttext.toUpperCase();
        //if either text or filtertext starts with searchvalue, return false
        if( text.indexOf(searchValue.toUpperCase(), 0) != 5 ){
            ret = true; //filter this one out
        }
    } 
	
    return ret;
} 

//------------Chemist
$(document).on("pagecreate", "#page_market_ret", function(){    
	$("#unscheduled_m_client_combo_id_lv").filterable('option', 'filterCallback', startsWithSearch_ret);
});

function startsWithSearch_ret( idx, searchValue ) {
	var ret = false;
	//alert (searchValue);
    if (searchValue && searchValue.length > 0){ 
        var text = $(this).text().toUpperCase();
		
        var filttext = $(this).data("filtertext") || '';
        filttext = filttext.toUpperCase();
        if( text.indexOf(searchValue.toUpperCase(), 0) != 5){
			ret = true; //filter this one out
        }
    } 
    return ret;
} 




//==============================html script==========================

$(document).ready(function(){
	
	//=====Set menu============
	$('#menu_show').empty();
	$('#menu_show').append(localStorage.menu_list).trigger('create');
	//===========Set menu end========										
		
	$("#ret_cat").hide();
										
											
	$("#wait_image_login").hide();
	$("#loginButton").show();
	
	$("#wait_image_schedule_date").hide();		
	$("#btn_schedule_date").show();
	
	$("#wait_image_schedule_ret").hide();		
	$("#btn_schedule_ret").show();
	
	$("#wait_image_unschedule_market").hide();		
	$("#btn_unschedule_market").show();
	
	$("#wait_image_ret").hide();	
	$("#wait_image_unschedule_market_ret").hide();		
	$("#btn_unschedule_market_ret").show();
	
	$("#wait_image_visit_submit").hide();		
	$("#visit_submit").show();
	
	$("#wait_image_delivery_submit").hide();		
	$("#btn_delivery_submit").show();
	
	$("#wait_image_delivery_dealer").hide();		
	$("#btn_delivery_dealer").show();
	
	$("#wait_image_profile_market").hide();		
	$("#btn_profile_market").show();
	
	$("#wait_image_profile_market_ret").hide();		
	$("#btn_profile_market_ret").show();
	
	$("#wait_image_profile_update").hide();		
	$("#btn_profile_update").show();
	
	$("#wait_image_visit_plan_market").hide();		
	$("#btn_visit_plan_market").show();
	
	$("#wait_image_visit_plan_submit").hide();		
	$("#btn_visit_plan_submit").show();
	
	$("#wait_image_visit_report").hide();
	
	$("#wait_image_complain_submit").hide();
	$("#btn_complain_submit").show();	
	
	$("#wait_image_region_report").hide();
	
	$("#btn_location_doc").show();
	$("#visit_submit_doc").hide();	
	$("#checkLocation_doc").html('');
	$("#wait_image_visit_submit_doc").hide('');
	
	$("#visit_submit").hide();
	client_catList();
	first_page();
	
	
	//Set report combo 
	market_list_combo();
	item_list_combo();
	mpo_list_combo()
	$("#se_mpo").val(localStorage.user_id);
	
	
	$("#product_list_tbl").html(localStorage.product_tbl_str);
	$("#del_product_list_tbl").html(localStorage.product_tbl_del_str);
	
	$("#sch_date").val(localStorage.search_date);
	
	
	//reports();
	
	
	$('#order_report_button').empty();
	$('#order_report_button').append(localStorage.report_button).trigger('create');
	
	$('#doctor_report_button').empty();
	$('#doctor_report_button').append(localStorage.doctor_report_button).trigger('create');
	
	//set doctor
	$('#doctor_campaign_list_tbl').html(localStorage.product_tbl_str_doc_campaign);
	$("#doctor_sample_list_tbl").html(localStorage.product_tbl_str_doc_sample);
	$("#doctor_gift_list_tbl").html(localStorage.gift_tbl_doc);
	$("#doctor_ppm_list_tbl").html(localStorage.ppm_tbl_doc);
	
	
	//Set total 
	$("#product_total_cart").html(localStorage.show_total);
	$("#product_total_last").html(localStorage.show_total);
	
	
	//Set Campaign
	//	$('#doctor_campaign_list_tbl').empty();
	//	$('#doctor_campaign_list_tbl').append(localStorage.product_tbl_str_doc_campaign).trigger('create');
		
	
	// delivery qty refresh during client change
	jQuery("#delivery_retailer_cmb_id").change(function(){	
		var productList=localStorage.productListStr.split('<rd>');
		var productLength=productList.length;
		
		for ( i=0; i < productLength; i++){				
			var deleveryItemArray = productList[i].split('<fd>');
			var productId=deleveryItemArray[0];											
			jQuery("#delivery_qty"+productId).val("");
		}				
	});
	
	//------
	
	//===============Map=============
	$("#desc").val(localStorage.map_desc);
	$("#c_point").val(localStorage.c_point);		
	//==============Map end===========
	
	
	
	if ((localStorage.doctor_flag==1) && (localStorage.visit_page=="YES")){
		
		campaign_show_1=localStorage.campaign_show_1;
		gift_show_1=localStorage.gift_show_1;
		sample_show_1=localStorage.sample_show_1;
		
		ppm_show_1=localStorage.ppm_show_1;
		
		//alert (localStorage.sample_show_1);
		
		
		if  ((campaign_show_1.length > 0 ) & (campaign_show_1.indexOf('undefined')==-1 )){
			$("#doc_campaign").html("</br>"+localStorage.campaign_show_1+"</br>");
		}
		if  ((gift_show_1.length > 0 ) & (gift_show_1.indexOf('undefined')==-1 )){
			$("#doc_gift").html("</br>"+localStorage.gift_show_1+"</br>");	
		}
		if  ((ppm_show_1.length > 0 ) & (ppm_show_1.indexOf('undefined')==-1 )){
			$("#doc_ppm").html("</br>"+localStorage.ppm_show_1+"</br>");	
		}
		if  ((sample_show_1.length > 0 ) & (sample_show_1.indexOf('undefined')==-1 )){
			$("#doc_sample").html("</br>"+localStorage.sample_show_1+"</br>");
		}

		$(".market").html(localStorage.visit_market_show);
		$(".visit_client").html(localStorage.visit_client_show);
	
		//var url = "#page_visit_doc";
//		$.mobile.navigate(url);	
	}
	
	
	
	//================== Redirect to visit page
	if ((localStorage.doctor_flag==0) &&(localStorage.visit_page=="YES")){
		$("#sch_date").val(localStorage.scheduled_date);
		
		$(".market").html(localStorage.visit_market_show);
		$(".visit_distributor").html(localStorage.visit_distributor_nameid);
		$(".visit_type").html(localStorage.visit_type);								
		$(".s_date").html(localStorage.scheduled_date);
		$(".visit_client").html(localStorage.visit_client_show);
		mobile_off_flag=1;
		
		//var url = "#page_visit ";
//		$.mobile.navigate(url);	
		getOrder_load();	
	}
	
	
	
});

//  ============== Schedule Client Combo===========
$.mobile.document.on( "listviewcreate", "#schedule_client_combo_id-menu", function( e ) {
	var input,
		listbox = $( "#schedule_client_combo_id-listbox" ),
		form = listbox.jqmData( "filter-form" ),
		listview = $( e.target );
	if ( !form ) {
		input = $( "<input id='clientSearch' data-type='search'></input>" );
		form = $( "<form></form>" ).append( input );
		input.textinput();
		$( "#schedule_client_combo_id-listbox" )
			.prepend( form )
			.jqmData( "filter-form", form );
	}
	listview.filterable({ input: input });
})
.on( "pagebeforeshow pagehide", "#schedule_client_combo_id-dialog", function( e ) {
	var form = $( "#schedule_client_combo_id-listbox" ).jqmData( "filter-form" ),
		placeInDialog = ( e.type === "pagebeforeshow" ),
		destination = placeInDialog ? $( e.target ).find( ".ui-content" ) : $( "#schedule_client_combo_id-listbox" );
	form
		.find( "input" )
		.textinput( "option", "inset", !placeInDialog )
		.end()
		.prependTo( destination );
});


//------------------------------------- Unschedule market combo -----------------------------

$.mobile.document.on( "listviewcreate", "#unschedule_market_combo_id-menu", function( e ) {
	var input,
		listbox = $( "#unschedule_market_combo_id-listbox" ),
		form = listbox.jqmData( "filter-form" ),
		listview = $( e.target );
	if ( !form ) {
		input = $( "<input id='clientSearch' data-type='search'></input>" );
		form = $( "<form></form>" ).append( input );
		input.textinput();
		$( "#unschedule_market_combo_id-listbox" )
			.prepend( form )
			.jqmData( "filter-form", form );
	}
	listview.filterable({ input: input });
})
.on( "pagebeforeshow pagehide", "#unschedule_market_combo_id-dialog", function( e ) {
	var form = $( "#unschedule_market_combo_id-listbox" ).jqmData( "filter-form" ),
		placeInDialog = ( e.type === "pagebeforeshow" ),
		destination = placeInDialog ? $( e.target ).find( ".ui-content" ) : $( "#unschedule_market_combo_id-listbox" );
	form
		.find( "input" )
		.textinput( "option", "inset", !placeInDialog )
		.end()
		.prependTo( destination );
});	

//-----------------  Unschedule Market Client/retailer list
$.mobile.document.on( "listviewcreate", "#unscheduled_m_client_combo_id-menu", function( e ) {
	var input,
		listbox = $( "#unscheduled_m_client_combo_id-listbox" ),
		form = listbox.jqmData( "filter-form" ),
		listview = $( e.target );
	if ( !form ) {
		input = $( "<input id='clientSearch' data-type='search'></input>" );
		form = $( "<form></form>" ).append( input );
		input.textinput();
		$( "#unscheduled_m_client_combo_id-listbox" )
			.prepend( form )
			.jqmData( "filter-form", form );
	}
	listview.filterable({ input: input });
})
.on( "pagebeforeshow pagehide", "#unscheduled_m_client_combo_id-dialog", function( e ) {
	var form = $( "#unscheduled_m_client_combo_id-listbox" ).jqmData( "filter-form" ),
		placeInDialog = ( e.type === "pagebeforeshow" ),
		destination = placeInDialog ? $( e.target ).find( ".ui-content" ) : $( "#unscheduled_m_client_combo_id-listbox" );
	form
		.find( "input" )
		.textinput( "option", "inset", !placeInDialog )
		.end()
		.prependTo( destination );
});


//-------------------------------------Delivery Distributor Combo list -----------------------------

$.mobile.document.on( "listviewcreate", "#delivery_distributor_cmb_id-menu", function( e ) {
	var input,
		listbox = $( "#delivery_distributor_cmb_id-listbox" ),
		form = listbox.jqmData( "filter-form" ),
		listview = $( e.target );
	if ( !form ) {
		input = $( "<input id='clientSearch' data-type='search'></input>" );
		form = $( "<form></form>" ).append( input );
		input.textinput();
		$( "#delivery_distributor_cmb_id-listbox" )
			.prepend( form )
			.jqmData( "filter-form", form );
	}
	listview.filterable({ input: input });
})
.on( "pagebeforeshow pagehide", "#delivery_distributor_cmb_id-dialog", function( e ) {
	var form = $( "#delivery_distributor_cmb_id-listbox" ).jqmData( "filter-form" ),
		placeInDialog = ( e.type === "pagebeforeshow" ),
		destination = placeInDialog ? $( e.target ).find( ".ui-content" ) : $( "#delivery_distributor_cmb_id-listbox" );
	form
		.find( "input" )
		.textinput( "option", "inset", !placeInDialog )
		.end()
		.prependTo( destination );
});

//-------------------------------------Delivery distributor client/ retailer -----------------------------

$.mobile.document.on( "listviewcreate", "#delivery_retailer_cmb_id-menu", function( e ) {
	var input,
		listbox = $( "#delivery_retailer_cmb_id-listbox" ),
		form = listbox.jqmData( "filter-form" ),
		listview = $( e.target );
	if ( !form ) {
		input = $( "<input id='clientSearch' data-type='search'></input>" );
		form = $( "<form></form>" ).append( input );
		input.textinput();
		$( "#delivery_retailer_cmb_id-listbox" )
			.prepend( form )
			.jqmData( "filter-form", form );
	}
	listview.filterable({ input: input });
})
.on( "pagebeforeshow pagehide", "#delivery_retailer_cmb_id-dialog", function( e ) {
	var form = $( "#delivery_retailer_cmb_id-listbox" ).jqmData( "filter-form" ),
		placeInDialog = ( e.type === "pagebeforeshow" ),
		destination = placeInDialog ? $( e.target ).find( ".ui-content" ) : $( "#delivery_retailer_cmb_id-listbox" );
	form
		.find( "input" )
		.textinput( "option", "inset", !placeInDialog )
		.end()
		.prependTo( destination );
});
	

//------------------------------------- visit plan market -----------------------------
$.mobile.document.on( "listviewcreate", "#visit_market_cmb_id-menu", function( e ) {
	var input,
		listbox = $( "#visit_market_cmb_id-listbox" ),
		form = listbox.jqmData( "filter-form" ),
		listview = $( e.target );
	if ( !form ) {
		input = $( "<input id='clientSearch' data-type='search'></input>" );
		form = $( "<form></form>" ).append( input );
		input.textinput();
		$( "#visit_market_cmb_id-listbox" )
			.prepend( form )
			.jqmData( "filter-form", form );
	}
	listview.filterable({ input: input });
})
.on( "pagebeforeshow pagehide", "#visit_market_cmb_id-dialog", function( e ) {
	var form = $( "#visit_market_cmb_id-listbox" ).jqmData( "filter-form" ),
		placeInDialog = ( e.type === "pagebeforeshow" ),
		destination = placeInDialog ? $( e.target ).find( ".ui-content" ) : $( "#visit_market_cmb_id-listbox" );
	form
		.find( "input" )
		.textinput( "option", "inset", !placeInDialog )
		.end()
		.prependTo( destination );
});

//------------------------------------- visit plan client/ retailer -----------------------------

$.mobile.document.on( "listviewcreate", "#visit_plan_client_cmb_id-menu", function( e ) {
	var input,
		listbox = $( "#visit_plan_client_cmb_id-listbox" ),
		form = listbox.jqmData( "filter-form" ),
		listview = $( e.target );
	if ( !form ) {
		input = $( "<input id='clientSearch' data-type='search'></input>" );
		form = $( "<form></form>" ).append( input );
		input.textinput();
		$( "#visit_plan_client_cmb_id-listbox" )
			.prepend( form )
			.jqmData( "filter-form", form );
	}
	listview.filterable({ input: input });
})
.on( "pagebeforeshow pagehide", "#visit_plan_client_cmb_id-dialog", function(  e ) {
	var form = $( "#visit_plan_client_cmb_id-listbox" ).jqmData( "filter-form" ),
		placeInDialog = ( e.type === "pagebeforeshow" ),
		destination = placeInDialog ? $( e.target ).find( ".ui-content" ) : $( "#visit_plan_client_cmb_id-listbox" );
	form
		.find( "input" )
		.textinput( "option", "inset", !placeInDialog )
		.end()
		.prependTo( destination );
});
	

//------------------------------------- marchandizing Item  -----------------------------

$.mobile.document.on( "listviewcreate", "#marchandizing_item_id-menu", function( e ) {
	var input,
		listbox = $( "#marchandizing_item_id-listbox" ),
		form = listbox.jqmData( "filter-form" ),
		listview = $( e.target );
	if ( !form ) {
		input = $( "<input id='clientSearch' data-type='search'></input>" );
		form = $( "<form></form>" ).append( input );
		input.textinput();
		$( "#marchandizing_item_id-listbox" )
			.prepend( form )
			.jqmData( "filter-form", form );
	}
	listview.filterable({ input: input });
})
.on( "pagebeforeshow pagehide", "#marchandizing_item_id-dialog", function( e ) {
	var form = $( "#marchandizing_item_id-listbox" ).jqmData( "filter-form" ),
		placeInDialog = ( e.type === "pagebeforeshow" ),
		destination = placeInDialog ? $( e.target ).find( ".ui-content" ) : $( "#marchandizing_item_id-listbox" );
	form 
		.find( "input" )
		.textinput( "option", "inset", !placeInDialog )
		.end()
		.prependTo( destination );
});


////----------------------------Set Market Combo---------
$.mobile.document
.on( "listviewcreate", "#se_market-menu", function( e ) {
	var input,
		listbox = $( "#se_market-listbox" ),
		form = listbox.jqmData( "filter-form" ),
		listview = $( e.target );
	if ( !form ) {
		input = $( "<input id='marketSearch' data-type='search'></input>" );
		form = $( "<form></form>" ).append( input );
		input.textinput();
		$( "#se_market-listbox" )
			.prepend( form )
			.jqmData( "filter-form", form );
	}
	listview.filterable({ input: input });
})
.on( "pagebeforeshow pagehide", "#se_market-dialog", function( e ) {
	var form = $( "#se_market-listbox" ).jqmData( "filter-form" ),
		placeInDialog = ( e.type === "pagebeforeshow" ),
		destination = placeInDialog ? $( e.target ).find( ".ui-content" ) : $( "#se_market-listbox" );
	form
		.find( "input" )
		.textinput( "option", "inset", !placeInDialog )
		.end()
		.prependTo( destination );
});
//==========================================doctor===============

$.mobile.document
.on( "listviewcreate", "#se_market_doc-menu", function( e ) {
	var input,
		listbox = $( "#se_market_doc-listbox" ),
		form = listbox.jqmData( "filter-form" ),
		listview = $( e.target );
	if ( !form ) {
		input = $( "<input id='marketSearch_doc' data-type='search'></input>" );
		form = $( "<form></form>" ).append( input );
		input.textinput();
		$( "#se_market_doc-listbox" )
			.prepend( form )
			.jqmData( "filter-form", form );
	}
	listview.filterable({ input: input });
})
.on( "pagebeforeshow pagehide", "#se_market_doc-dialog", function( e ) {
	var form = $( "#se_market_doc-listbox" ).jqmData( "filter-form" ),
		placeInDialog = ( e.type === "pagebeforeshow" ),
		destination = placeInDialog ? $( e.target ).find( ".ui-content" ) : $( "#se_market_doc-listbox" );
	form
		.find( "input" )
		.textinput( "option", "inset", !placeInDialog )
		.end()
		.prependTo( destination );
});


////----------------------------Set Item Combo---------
$.mobile.document
.on( "listviewcreate", "#se_item-menu", function( e ) {
	var input,
		listbox = $( "#se_item-listbox" ),
		form = listbox.jqmData( "filter-form" ),
		listview = $( e.target );
	if ( !form ) {
		input = $( "<input id='itemSearch' data-type='search'></input></br>" );
		form = $( "<form></form>" ).append( input );
		input.textinput();
		$( "#se_item-listbox" )
			.prepend( form )
			.jqmData( "filter-form", form );
	}
	listview.filterable({ input: input });
})
.on( "pagebeforeshow pagehide", "#se_item-dialog", function( e ) {
	var form = $( "#se_item-listbox" ).jqmData( "filter-form" ),
		placeInDialog = ( e.type === "pagebeforeshow" ),
		destination = placeInDialog ? $( e.target ).find( ".ui-content" ) : $( "#se_item-listbox" );
	form
		.find( "input" )
		.textinput( "option", "inset", !placeInDialog )
		.end()
		.prependTo( destination );
});



//=======================Report=================
function set_report_parameter() {	
	var date_from=$("#date_from").val();
	var date_to=$("#date_to").val();
	var rep_id_report=$("#se_mpo").val();
	var se_item_report=$("#se_item ").val();
	var se_market_report=$("#se_market ").val();
	
	//alert (date_from);
	//alert (se_item_report)
	if (se_market_report==""){
		se_market_report="All"
	}
	if (se_item_report==""){
		se_item_report="All"
	}
	
	if (date_from.length==0){
		date_from_show="Today"
	}
	else{
		date_from_show=date_from
	}
	if (date_to.length==0){
		date_to_show="Today"
	}
	else{
		date_to_show=date_to
	}
	//alert (se_item_report);
	
	
	localStorage.date_from=date_from
	localStorage.date_to=date_to;
	localStorage.rep_id_report=rep_id_report;
	localStorage.se_item_report=se_item_report;
	localStorage.se_market_report=se_market_report;
	
	
	$("#report_market").html("Market :"+localStorage.se_market_report);
	$("#report_item").html("Item :"+localStorage.se_item_report);
	$("#report_mpo").html("MPO :"+localStorage.rep_id_report);
	$("#date_f").html("DateFrom :"+date_from_show);
	$("#date_t").html("DateTo :"+date_to_show);
	
}
function s_order_summary_report() {		
	//set_report_parameter();
	set_report_parameter_doctor();

	// Blank all div
	$("#sales_call").html("");
	$("#order_count").html("");
	$("#order_value").html("");
	$("#rep_detail").html("");
	
	// ajax-------
	
	//$("#myerror_s_report").html(localStorage.base_url+'s_call_order_summary?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&rep_id_report='+localStorage.rep_id_report_doc+'&se_item_report='+localStorage.se_item_report_doc+'&se_market_report='+localStorage.se_market_report_doc+'&date_from='+localStorage.date_from_doc+'&date_to='+localStorage.date_to_doc+'&user_type='+localStorage.user_type);
	
	// ajax-------
			$.ajax({
				 type: 'POST',
				 url: localStorage.base_url+'s_call_order_summary?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&rep_id_report='+localStorage.rep_id_report_doc+'&se_item_report='+localStorage.se_item_report_doc+'&se_market_report='+localStorage.se_market_report_doc+'&date_from='+localStorage.date_from_doc+'&date_to='+localStorage.date_to_doc+'&user_type='+localStorage.user_type,
				 success: function(result) {
						//alert (result);
						if (result==''){
							$("#myerror_s_report").html('Sorry Network not available');
							//$("#btn_schedule_date").show();
							//$("#wait_image_schedule_date").hide();
						}else{					
							var resultArray = result.split('<SYNCDATA>');			
							if (resultArray[0]=='FAILED'){						
								$("#myerror_s_report").html(resultArray[1]);								
								//$("#btn_schedule_date").show();
								//$("#wait_image_schedule_date").hide();
							
							}else if (resultArray[0]=='SUCCESS'){
														
								var result_string=resultArray[1];
								
																
								//----------------
								var resultList = result_string.split('<rd>');
								var sales_call=resultList[0];
								var order_count=resultList[1];
								var order_value=resultList[2];
							
								//-----------------
								$("#err_retailer_date_next").text("");
								
								$("#report_header").text("Sales Call and Order Count");
								$("#sales_call").html("<font style='font-size:15px; color:#666'>"+"Sales Call:"+"</div>"+sales_call);
								$("#order_count").html("<font style='font-size:15px; color:#666'>"+"Order Count:"+"</div>"+order_count);
								$("#order_value").html("<font style='font-size:15px; color:#666'>"+"Order Value:"+"</div>"+order_value);


								$("#rep_detail").html("");
								//-----

								
							}else{						
								$("#err_retailer_date_next").html('Network Timeout. Please try again.');
								}
						}
					  },
				  error: function(result) {			  
					  $("#wait_image_schedule_date").hide();	  
				  }
			 });//end ajax
	
	
	
	
	
	var url = "#page_sc_order_summary_report";
	$.mobile.navigate(url);	
}

//========================Detail Report============
function s_order_detail_report() {	
	//set_report_parameter();
	set_report_parameter_doctor();
	localStorage.date_to_doc=localStorage.date_from_doc;
	$("#date_f").html("Date :"+date_from_show_doc);
	$("#date_t").html("");
	
	
	
	// Blank all div
	$("#sales_call").html("");
	$("#order_count").html("");
	$("#order_value").html("");
	$("#rep_detail").html("");
	
	
	// ajax-------
	//$("#myerror_s_report").html(localStorage.base_url+'s_call_order_detail?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&rep_id_report='+localStorage.rep_id_report_doc+'&se_item_report='+localStorage.se_item_report_doc+'&se_market_report='+localStorage.se_market_report_doc+'&date_from='+localStorage.date_from_doc+'&date_to='+localStorage.date_to_doc+'&user_type='+localStorage.user_type);
	// ajax-------
			$.ajax({
				 type: 'POST',
				 url: localStorage.base_url+'s_call_order_detail?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&rep_id_report='+localStorage.rep_id_report_doc+'&se_item_report='+localStorage.se_item_report_doc+'&se_market_report='+localStorage.se_market_report_doc+'&date_from='+localStorage.date_from_doc+'&date_to='+localStorage.date_to_doc+'&user_type='+localStorage.user_type,
				 success: function(result) {
						//alert (result);
						if (result==''){
							$("#myerror_s_report").html('Sorry Network not available');
						}else{					
							var resultArray = result.split('<SYNCDATA>');			
							if (resultArray[0]=='FAILED'){						
								$("#myerror_s_report").html(resultArray[1]);								
							
							}else if (resultArray[0]=='SUCCESS'){
														
								var result_string=resultArray[1];
								
																
								//----------------
								var resultList = result_string.split('<rd>');
								var sales_call=resultList[0];
								var order_count=resultList[1];
								var order_value=resultList[2];
								var rep_detail=resultList[3];
								//alert (result_string)
								
								//-----------------
								$("#err_retailer_date_next").text("");
								$("#report_header").text("Sales Call and Order Detail");
								
								$("#sales_call").html("<font style='font-size:15px; color:#666'>"+"Sales Call:"+"</font>"+sales_call);
								$("#order_count").html("<font style='font-size:15px; color:#666'>"+"Order Count:"+"</font>"+order_count);
								$("#order_value").html("<font style='font-size:15px; color:#666'>"+"Order Value:"+"</font>"+order_value);
								$("#rep_detail").html("<font style='font-size:9px;'>"+rep_detail+"</font>");
								
								//-----

								
							}else{						
								$("#err_retailer_date_next").html('Network Timeout. Please try again.');
								}
						}
					  },
				  error: function(result) {			  
					  $("#wait_image_schedule_date").hide();	  
				  }
			 });//end ajax
	
	
	
	
	
	var url = "#page_sc_order_summary_report";
	$.mobile.navigate(url);	
}
//========================Doctor report
function set_report_parameter_doctor() {	
	var date_from_doc=$("#date_from_doc").val();
	var date_to_doc=$("#date_to_doc").val();
	var rep_id_report_doc=$("#se_mpo_doc").val();
	var se_item_report_doc=$("#se_item_doc").val();
	var se_market_report_doc=$("#se_market_doc").val();
	
	if (se_market_report_doc==""){
		se_market_report_doc="All"
	}
	
	
	se_item_report="All"
	
	if (date_from_doc.length==0){
		date_from_show_doc="Today"
	}
	else{
		date_from_show_doc=date_from_doc
	}
	if (date_to_doc.length==0){
		date_to_show_doc="Today"
	}
	else{
		date_to_show_doc=date_to_doc
	}
	//alert (se_item_report);
	
	if (rep_id_report_doc.length==0){
		rep_id_report_doc=localStorage.user_id;
	}
	
	localStorage.date_from_doc=date_from_doc
	localStorage.date_to_doc=date_to_doc;
	localStorage.rep_id_report_doc=rep_id_report_doc;
	localStorage.se_item_report_doc=se_item_report_doc;
	localStorage.se_market_report_doc=se_market_report_doc;
	
	
	$("#report_market_doctor").html("Market :"+localStorage.se_market_report_doc);
	$("#report_mpo_doctor").html("MPO :"+localStorage.rep_id_report_doc);
	$("#date_f_doctor").html("DateFrom :"+date_from_show_doc);
	$("#date_t_doctor").html("DateTo :"+date_to_show_doc);
	
	
	
	$("#report_market").html("Market :"+localStorage.se_market_report_doc);
	$("#report_mpo").html("MPO :"+localStorage.rep_id_report_doc);
	$("#date_f").html("DateFrom :"+date_from_show_doc);
	$("#date_t").html("DateTo :"+date_to_show_doc);
	

}




function summary_report_doctor() {		
	set_report_parameter_doctor();
	
	//Blank all div
	
	$("#visit_count_doctor").html("");
	$("#visit_withAtt_doctor").html("");
	$("#visit_withoutAtt_doctor").html("");
	
	$("#rep_detail_doctor").html('');
	
	
//$("#myerror_s_report").html('asfdsg');
	// ajax-------
	//$("#myerror_s_report_doctor").html(localStorage.base_url+'report_summary_doctor?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&rep_id_report='+localStorage.rep_id_report_doc+'&se_item_report='+localStorage.se_item_report_doc+'&se_market_report='+localStorage.se_market_report_doc+'&date_from='+localStorage.date_from_doc+'&date_to='+localStorage.date_to_doc+'&user_type='+localStorage.user_type);
	// ajax-------
			$.ajax({
				 type: 'POST',
				 url: localStorage.base_url+'report_summary_doctor?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&rep_id_report='+localStorage.rep_id_report_doc+'&se_item_report='+localStorage.se_item_report_doc+'&se_market_report='+localStorage.se_market_report_doc+'&date_from='+localStorage.date_from_doc+'&date_to='+localStorage.date_to_doc+'&user_type='+localStorage.user_type,
				 success: function(result) {
						//alert (result);
						if (result==''){
							$("#myerror_s_report").html('Sorry Network not available');
						}else{					
							var resultArray = result.split('<SYNCDATA>');			
							if (resultArray[0]=='FAILED'){						
								$("#myerror_s_report").html(resultArray[1]);								
							
							}else if (resultArray[0]=='SUCCESS'){
														
								var result_string=resultArray[1];
								
																
								//----------------
								var resultList = result_string.split('<rd>');
								var visit_count=resultList[0];
								var visit_areawise=resultList[1];
								var visit_repwise=resultList[2];
							
								
								//-----------------
								$("#err_retailer_date_next").text("");
								
								$("#report_header_doc").text("DCR Count");
								$("#visit_count_doctor").html("<font style='font-size:15px; color:#666'>"+"visit Count:"+visit_count+"</font>");
								$("#visit_withAtt_doctor").html("<font style='font-size:15px; color:#666'>"+visit_areawise+"</font>");
								$("#visit_withoutAtt_doctor").html("<font style='font-size:15px; color:#666'>"+visit_repwise+"</font>");
								
								//-----

								
							}else{						
								$("#err_retailer_date_next").html('Network Timeout. Please try again.');
								}
						}
					  },
				  error: function(result) {			  
					  $("#err_retailer_date_next").html('Network Timeout. Please try again.');		
				  }
			 });//end ajax
	
	
	
	
	
	var url = "#page_report_doctor";
	$.mobile.navigate(url);	
}

//========================Detail Report============
function detail_report_doctor() {	
	set_report_parameter_doctor();

	
	
	localStorage.date_to_doc=localStorage.date_from_doc;
	$("#date_f_doctor").html("Date :"+date_from_show_doc);
	$("#date_t_doctor").html("");
	
	 //Blank all div
	
	$("#visit_count_doctor").html("");
	$("#visit_withAtt_doctor").html("");
	$("#visit_withoutAtt_doctor").html("");
	
	$("#rep_detail_doctor").html('');
//$("#myerror_s_report").html('asfdsg');
	// ajax-------
	//$("#myerror_s_report_doctor").html(localStorage.base_url+'report_detail_doctor?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&rep_id_report='+localStorage.rep_id_report_doc+'&se_item_report='+localStorage.se_item_report_doc+'&se_market_report='+localStorage.se_market_report_doc+'&date_from='+localStorage.date_from_doc+'&date_to='+localStorage.date_to_doc+'&user_type='+localStorage.user_type);
	// ajax-------
			$.ajax({
				 type: 'POST',
				 url: localStorage.base_url+'report_detail_doctor?cid='+localStorage.cid+'&rep_id='+localStorage.user_id+'&rep_pass='+localStorage.user_pass+'&synccode='+localStorage.synccode+'&rep_id_report='+localStorage.rep_id_report_doc+'&se_item_report='+localStorage.se_item_report_doc+'&se_market_report='+localStorage.se_market_report_doc+'&date_from='+localStorage.date_from_doc+'&date_to='+localStorage.date_to_doc+'&user_type='+localStorage.user_type,
				 success: function(result) {
						if (result==''){
							$("#myerror_s_report").html('Sorry Network not available');
						}else{					
							var resultArray = result.split('<SYNCDATA>');			
							if (resultArray[0]=='FAILED'){						
								$("#myerror_s_report").html(resultArray[1]);								
							
							}else if (resultArray[0]=='SUCCESS'){
														
								var result_string=resultArray[1];
								
																
								//----------------
								var resultList = result_string.split('<rd>');

								var visit_count=resultList[0];
								var visit_with_attribute=resultList[1];
								var visit_without_attribute=resultList[2];
								var report_detal =resultList[3];
							
								
								//-----------------
								$("#err_retailer_date_next").text("");
								
								$("#report_header_doc").text("DCR Detail");
								
								
								
								$("#visit_count_doctor").html("visit Count:"+visit_count);
								
								if (localStorage.user_type=='sup'){
									$("#visit_withAtt_doctor").html(visit_with_attribute);
									$("#visit_withoutAtt_doctor").html(visit_without_attribute);
								}
								
								$("#rep_detail_doctor").html("<div width='70%'>"+report_detal+"</div>");
								
							}else{						
								$("#err_retailer_date_next").html('Network Timeout. Please try again.');
								}
						}
					  },
				  error: function(result) {			  
					  $("#err_retailer_date_next").html('Network Timeout. Please try again.');		
				  }
			 });//end ajax
	
	
	
	
	
	var url = "#page_report_doctor";
	$.mobile.navigate(url);	
}
