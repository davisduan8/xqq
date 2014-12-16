$(document).ready(function(){
	/**
	 * basicInfo
	 */
	$('#basicInfo .c_edit').bind(
		"click", function(){
			 $(this).addClass("dn"),
			 $("#basicInfo .basicShow").addClass("dn"),
			 $("#basicInfo .basicEdit").removeClass("dn");
			});
	
	$('#basicInfo .profile_cancel').bind(
		"click", function(){
			 $("#basicInfo .c_edit").removeClass("dn"),
			 $("#basicInfo .basicShow").removeClass("dn"),
			 $("#basicInfo .basicEdit").addClass("dn");
			});
	
	/**
	 * expectJob
	 */
	if(!$('#expectJob .pAdd').hasClass('dn')) { 
		$('#expectJob .pAdd').bind(
			"click", function(){
				 $(this).addClass("dn"),
				 $("#expectJob .expectShow").addClass("dn"),
				 $("#expectJob .expectEdit").removeClass("dn");
				});
		$('#expectJob .profile_cancel').bind(
			"click", function(){
				 $('#expectJob .pAdd').removeClass("dn"),
				 $("#expectJob .expectShow").addClass("dn"),
				 $("#expectJob .expectEdit").addClass("dn");
				});
	} else {}
	
	/**
	 * experience
	 */
	if(!$('#experience .pAdd').hasClass('dn')) { 
		$('#experience .pAdd').bind(
			"click", function(){
				 $(this).addClass("dn"),
				 $("#experience .experienceShow").addClass("dn"),
				 $("#experience .experienceEdit").removeClass("dn");
				});
		$('#experience .profile_cancel').bind(
			"click", function(){
				 $('#experience .pAdd').removeClass("dn"),
				 $("#experience .experienceShow").addClass("dn"),
				 $("#experience .experienceEdit").addClass("dn");
				});
	} else {}
	
	/**
	 * project
	 */
	if(!$('#project .pAdd').hasClass('dn')) { 
		$('#project .pAdd').bind(
			"click", function(){
				 $(this).addClass("dn"),
				 $("#project .projectShow").addClass("dn"),
				 $("#project .projectEdit").removeClass("dn");
				});
		$('#project .profile_cancel').bind(
			"click", function(){
				 $('#project .pAdd').removeClass("dn"),
				 $("#project .projectShow").addClass("dn"),
				 $("#project .projectEdit").addClass("dn");
				});
	} else {}
	
	/**
	 * education
	 */
	if(!$('#education .pAdd').hasClass('dn')) { 
		$('#education .pAdd').bind(
			"click", function(){
				 $(this).addClass("dn"),
				 $("#education .educationShow").addClass("dn"),
				 $("#education .educationEdit").removeClass("dn");
				});
		$('#education .profile_cancel').bind(
			"click", function(){
				 $('#education .pAdd').removeClass("dn"),
				 $("#education .educationShow").addClass("dn"),
				 $("#education .educationEdit").addClass("dn");
				});
	} else {}
	
	/**
	 * description
	 */
	if(!$('#description .pAdd').hasClass('dn')) { 
		$('#description .pAdd').bind(
			"click", function(){
				 $(this).addClass("dn"),
				 $("#description .descShow").addClass("dn"),
				 $("#description .descEdit").removeClass("dn");
				});
		$('#description .profile_cancel').bind(
			"click", function(){
				 $('#description .pAdd').removeClass("dn"),
				 $("#description .descShow").addClass("dn"),
				 $("#description .descEdit").addClass("dn");
				});
	} else {}
	
	
	
});