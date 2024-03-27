      // var city = ["ahmedabad", "gandhinagar", "junagadh", "rajkot", "gir somnath", "surat", "bhavnagar", "jamnagar"];

        // var arr = [25,45,36,7,20,1,63,8];

        function sort (arr) {

            arr = arr.split(',')
            console.log(arr);

             let arr2 = []
            var sorted_arr = [];

               if(parseInt(arr[0])){
                    arr.forEach(element => {
                    arr2.push(parseInt(element));
                });
                
                sorted_arr = mergesort(arr2);
            }
            else{

                sorted_arr =  mergesort(arr);
            }
               
            document.getElementById('answer').innerHTML = sorted_arr;

        }

        function mergesort(arr) {

            if(arr.length <=1) {
                return arr;
            }

            const mid = Math.floor(arr.length/2);

            const leftarr = arr.slice(0,mid);
            const rightarr = arr.slice(mid);

           return merge(mergesort(leftarr),mergesort(rightarr));

        }

        function merge(leftarr,rightarr) {
            var leftindex = 0;
            var rightindex = 0;
            var resultarr = [];

            while((leftindex < leftarr.length) && (rightindex < rightarr.length)) {

                if (leftarr[leftindex] < rightarr[rightindex]) {
                    resultarr.push(leftarr[leftindex]);
                    leftindex++;    
                }
                else{
                    resultarr.push(rightarr[rightindex]);
                    rightindex++;
                }
            }

            return resultarr.concat(leftarr.slice(leftindex),rightarr.slice(rightindex));

        }