function generateQRCode(){
	let website = document.getElementById('website').value 
	if(website){
		let qr = document.getElementById('qrcode')
		qr.innerHTML=""
		new QRCode( qr,website)
		// Show the container
        let container = document.getElementById('qrcode-container');
        container.style.display = "block";
		container.backgroundColor = "green"             
      
	}
	else{
		alert("Enter the valid url")
	}
}