const defaultFile = '1602467.png';
const file = document.getElementById("ImagenRandom");
const img = document.getElementById('imagenhome')

file.addEventListener('change', e => {
    console.log(e.target.files[0]);
    if(e.target.files[0])
    {
        const reader = new FileReader();
        reader.onload = function(e)
        {
            img.src = e.target.result;
        }
        reader.readAsDataURL(e.target.files[0]);
    }
    else
        img.src = defaultFile;
})