function checkhljs() {
	postMessage(1) 
	setTimeout("checkhljs()",500);
}

checkhljs();
