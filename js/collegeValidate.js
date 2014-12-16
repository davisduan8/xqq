window.onload=function(){
	$("#portraitShow img").attr("src",$("#basicInfo .basicShow img").attr("src")),
	$("#portraitNo").hide(),
	$("#portraitShow").show(),
	$("#basicInfo .basicShow").addClass("dn"),
	$("#basicInfo .basicEdit").removeClass("dn")
}

function portrait(a,b,c){
	var a=$("#"+c);
	this.AllowExt=".jpg,.gif,.jpeg,.png,.pjpeg",
	this.FileExt=a.val().substr(a.val().lastIndexOf(".")).toLowerCase(),
	0!=this.AllowExt&&-1==this.AllowExt.indexOf(this.FileExt)?errorTips("只支持jpg、gif、png、jpeg格式，请重新上传","上传头像"):($("#"+c+"_error").text("").hide(),
	$.ajaxFileUpload({
		url:b,
		secureuri:!1,
		fileElementId:c,
		data:{headPic:a.val()},
		dataType:"json",
		success:function(a){
			if(a.success){
				var b=a.content;
				$("#portraitShow img").attr("src","/xiaoqiqiao/upload/memberportrait/"+b),
				$("#basicInfo .basicShow img").attr("src","/xiaoqiqiao/upload/memberportrait/"+b),
				$("#portraitNo").hide(),
				$("#portraitShow").show()
			}},
		error:function(){errorTips("上传失败，请重新上传","上传头像")}}))
	}

