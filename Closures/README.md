    var array=[];
    for (var i=0;i<5;i++){
	    array[i]=function(){
		    console.log(i);
	    }
    }
    
    array[0]();
    
會輸出 5 

Closures(閉包)的特性中,被拿進去的參數他的存活周期會跟著裡面的函數,
所以在迴圈結束之後i還是存活著,然後等到我去呼叫函數的時後,因為迴圈已經跑完,所以i那時後已經是5了


	var array2=[];
	for (var i=0;i<5;i++){
		(function(i){
			array2[i]=function(){
				console.log(i);
			}
		})(i);
	}

	array2[0]();
	
會輸出 0

所以當我們把i當成一個變數傳進去之後,i的生命週期就不是跟迴圈的i綁定,所以會出現0
