
        
        function index() {

            // var orderby = "<%= orderby %>";
            // console.log(orderby);
            // console.log("hey")

            let month = document.getElementById('month').value;
            if(  "<%= orderby %>" == "s_id asc") {
                window.location.href=`/task_12/attendance?page=1&month=${month}&orderby=s_id desc`;
            }
            else {
                window.location.href=`/task_12/attendance?page=1&month=${month}&orderby=s_id asc`;          
            }
        }


        function first() {

            let month = document.getElementById('month').value;
            if(  "<%= orderby %>" == "first_name asc") {
                window.location.href=`/task_12/attendance?page=1&month=${month}&orderby=first_name desc`;
            }
            else {
                window.location.href=`/task_12/attendance?page=1&month=${month}&orderby=first_name asc`;          
            }
        }


        function last() {
            let month = document.getElementById('month').value;
            if(  "<%= orderby %>" == "last_name asc") {
                window.location.href=`/task_12/attendance?page=1&month=${month}&orderby=last_name desc`;
            }
            else {
                window.location.href=`/task_12/attendance?page=1&month=${month}&orderby=last_name asc`;          
            }
        }


        function present() {
            let month = document.getElementById('month').value;
            if(  "<%= orderby %>" == "present asc") {
                window.location.href=`/task_12/attendance?page=1&month=${month}&orderby=present desc`;
            }
            else {
                window.location.href=`/task_12/attendance?page=1&month=${month}&orderby=present asc`;          
            }
        }


        function percentage() {
            let month = document.getElementById('month').value;
            if(  "<%= orderby %>" == "percentage asc") {
                window.location.href=`/task_12/attendance?page=1&month=${month}&orderby=percentage desc`;
            }
            else {
                window.location.href=`/task_12/attendance?page=1&month=${month}&orderby=percentage asc`;          
            }
        }


        function changed() {

            let month = document.getElementById('month').value;
            window.location.href=`/task_12/attendance?page=1&month=${month}&orderby=s_id asc`;
        }


        function legend(orderby) {
            let month = document.getElementById('month').value;
            window.location.href=`/task_12/attendance?page=1&month=${month}&orderby=${orderby}`;
        }


