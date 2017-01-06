/**
 * 使用拖曳進行檔案處理
 * 需要以下條件
<meta http-equiv="X-UA-Compatible" content="IE=9; IE=10; IE=11" />
<script type="text/javascript" src="http://code.jquery.com/jquery-1.10.2.min.js"></script>
<script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.11.2/jquery-ui.min.js"></script>
<link rel="stylesheet" href="//ajax.googleapis.com/ajax/libs/jqueryui/1.11.2/themes/smoothness/jquery-ui.css" />
 *
 */
var billReport = {
  init : function (o){
    if (o.coding!==undefined){
      billReport.coding=o.coding;
    }
    if (o.drop_name!==undefined){
      billReport.drop_name=o.drop_name;
    }
    billReport.callBack= o.callBack;
    billReport.date_init();
    billReport.dropFile();
    window.billReportFileChick=[];
  },
  coding : "UTF-8",
  drop_name:"table1",
  $msg:$('#msg'),
  date_init : function(){
    $(document).ready(function(){
      $("#start_date").datepicker({ dateFormat: "yy-mm-dd" });
      $("#end_date").datepicker({ dateFormat: "yy-mm-dd" });
      $('#form1').submit(function(){
        var startTime=$('#start_date').val();
        var endTime=$('#end_date').val();
        if(startTime===""){
          alert("開始時間不能為空");
          return false;
        }
        if(!billReport.checkDate(startTime)){
          alert("開始時間格式錯誤");
          return false;
        }
        if(endTime===""){
          alert("結束時間不能為空");
          return false;
        }
        if(!billReport.checkDate(endTime)){
          alert("結束時間格式錯誤");
          return false;
        }
        if(startTime>endTime){
          alert("結束時間不能小於開始時間");
          return false;
        }
      })
    });
  },
  //格式yyyy-mm-dd
  checkDate : function (date){
    if (/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(date)) {
      return true;
    } else {
      return false;
    }
  },
  dropFile : function (){
    var $drop = $("#"+billReport.drop_name.toString());
    //抑制瀏覽器原有的拖拉操作效果
    function stopEvent(evt) {
      evt.stopPropagation(); //取消冒泡效果
      evt.preventDefault();
    }

    $drop.on("dragover", function (e) {
      //滑鼠經過上方時加入特效
      stopEvent(e);
      $(e.target).addClass("hover");
      if(billReport.$msg!=undefined){
        billReport.$msg.html("<h2>拖曳中</h2>");
      }
    }).on("dragleave", function (e) {
      //滑鼠移開時移除特效
      stopEvent(e);
      $(e.target).removeClass("hover");
    }).on("drop", function (e) {
      //拖放操作完成事件
      stopEvent(e);
      var files = e.originalEvent.dataTransfer.files;

      if(window.FileReader){
        if(billReport.$msg!=undefined){
          billReport.$msg.html("<h2>檔案讀取中</h2>");
        }else{
          alert("檔案讀取中");
        }
        billReport.readFile(files);
      }
    });
  },
  callBack : function(r){

  },
  readFile : function(files,i) {
    var reader = new FileReader();
    var length = files.length;
    if (i===undefined){
      i=0;
    }
    if (i===length){
      if(billReport.$msg!=undefined){
        billReport.$msg.html("<h2>檔案處理完成</h2>");
      }else{
        alert("檔案處理完成");
      }
      return false;
    }
    console.log("file size : "+files[i].size);
    for (var c=0; c<billReportFileChick.length;c++){
      if(billReportFileChick[c]===files[i].size){
        if(billReport.$msg!=undefined){
          billReport.$msg.html("<h2>檔案重覆</h2>");
        }else{
          alert("檔案重覆");
        }
        return false;
      }
    }
    billReportFileChick[billReportFileChick.length+1]=files[i].size;

    reader.readAsText(files[i],billReport.coding);
    reader.onload = function () {
      billReport.callBack(this.result);
      this.result = "";
      billReport.readFile(files,++i);
    }
  }
};
