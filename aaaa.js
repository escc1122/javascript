    $(document).ready(function () {
        var searchString = location.search;
        var searchObject={};
        var searchArray;
        var shop_id='';
        var $as=$('a');
        if (searchString.length>0){
            if (searchString.indexOf('?')===0){
                searchString=searchString.substring(1);
            }
            searchArray=searchString.split('&');
            for (var i in searchArray){
                var a = searchArray[i].split('=');
                console.log(a.length);
                if(a.length===2){
                    searchObject[a[0]]=a[1];
                }
            }


        }
        $as.each(function(){
            addShop(this);
        });
        function addShop(a) {
            var $href=$(a).attr('href');
            if (searchObject['aaaaaaa']!==undefined){
                if ($href.indexOf('?')>0){
                    $(a).attr("href",$href+"&aaaaaaa="+searchObject['aaaaaaa']);
                }else if ($href.indexOf('&')<0){
                    $(a).attr("href",$href+"?aaaaaaa="+searchObject['aaaaaaa']);
                }
            }
        }
    });
