拉升

    <script>
      function foo(){
        alert('global foo');
      };
      
      function bar(){
        alert('global bar');
      };
      
      function hoisting(){
        console.log(typeof foo); // function
        console.log(typeof bar); // undefind
        
        
        foo(); // local foo
        bar(); // bar is not a function
        
        
        function foo(){
          alert('local foo');
        };  
        
        var bar = function (){
          alert('local bar');
        };
      };
      
      hoisting();
    </script>


所有的變數跟函式都會被hoisted
但是函試會連定義都一起上去
