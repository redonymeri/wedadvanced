function search(){
    var input, filter, ul,li ,a, txtValue;
    input = document.getElementById("MyInput");
    filter = input.Value.toupperCase();
    ul = document.getElementById("myList");

    li = ul.getElementsByTagName("li");

    for(i = 0; i < li.length; i++){
        a = li[i];
        txtValue = a.textContent
        if(txtValue.toUpperCase().indexOf(filter) > -1){
            li[i]
        }
    }
}