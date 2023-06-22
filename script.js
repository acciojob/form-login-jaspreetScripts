function getFormvalue() {
    //Write your code here
	const form= document.getElementById("form1");
	 const fName= form.elemnets["fname"].value;
	const lName= form.elements["lName"].value;
	alert(fName +" "+lName);

}
