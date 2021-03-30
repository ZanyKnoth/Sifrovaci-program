	function cipher()
    {

     let input = document.getElementById("inp");
     let num = document.getElementById("number");
     let txt = document.getElementById("text");
     let str = input.value;
     let key = parseInt(num.value);

     let res = [];
     let alphabet = "abcdefghijklmnopqrstuvwxyz";
     let alphabetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

     if(key < 0 )
     {
	   key = 26 + (key % 26);

     }

     for(let i = 0; i < str.length; i++)
     {
	
	   if(alphabet.indexOf(str[i]) == -1 && alphabetUpper.indexOf(str[i]) == -1)
	   {
	   	 res.push(str[i]);
	 
	   } 
	 
	   else if(str[i] == str[i].toUpperCase())
	   {
			
        res.push(alphabetUpper.charAt((alphabetUpper.indexOf(str[i]) + key)%26));
	 
   	   }else {
     
    	res.push(alphabet.charAt((alphabet.indexOf(str[i]) + key)%26)); 
			
	   }
	   
txt.innerHTML = res.join("");
	
     }
}