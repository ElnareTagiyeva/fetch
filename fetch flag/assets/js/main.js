fetch('https://restcountries.com/v3.1/all').then(resp => resp.json()).then(list =>{
    const random = list[Math.floor(Math.random() * list.length)];
    document.querySelector('.img').src = random.flags.png;

    const input = document.querySelector(".inp");
    document.querySelector('.btn').addEventListener('click', function () {
        if (list.name== input.value) {
            Swal.fire({
                title: 'Afərin, doğrudur...',
                width: 600,
                padding: '3em',
                color: '#716add',
                background: '#fff url(/images/trees.png)',
                backdrop: `
                  rgba(0,0,123,0.4)
                  left top
                  no-repeat `
            })
        }
        else {
            swal.fire("Ölkə adı düzgün deyil!");
        }
    })
});