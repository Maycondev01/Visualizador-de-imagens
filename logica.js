document.getElementById('readUrl').addEventListener('change', function() {
    if(this.files[0]) {
        var fotos = new FileReader();
        fotos.readAsDataURL(this.files[0]);
        fotos.addEventListener('load', function(event) {
            document.getElementById('uploadedImage').setAttribute('src', event.target.result);
            document.getElementById('uploadedImage').style.display = 'block';
        });
    }
});