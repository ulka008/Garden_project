var plants = [
    {
        name: 'Basil',
        latin: 'Ocimum basilicum',
        germination: '7-10 days to sprout',
        photo: 'img/basil.jpg'
    },
    {
        name: 'Chives',
        latin: 'Allium schoenoprasum',
        germination: '14-21 days to sprout',
        photo: 'img/chives.jpg'
    },
    {
        name: 'Cilantro',
        latin: 'Coriandrum sativum',
        germination: '7-10 days to sprout',
        photo: 'img/cilantro.jpg'
    },
    {
        name: 'Dill',
        latin: 'Anethum graveolens',
        germination: '10-14 days to sprout',
        photo: 'img/dill.jpg'
    },
    {
        name: 'Mint',
        latin: 'Mentha',
        germination: '10-16 days to sprout',
        photo: 'img/mint.jpg'
    },
    {
        name: 'Oregano',
        latin: 'Origanum vulgare',
        germination: '10-15 days to sprout',
        photo: 'img/oregano.jpg'
    },
    {
        name: 'Parsley',
        latin: 'Petroselinum crispum',
        germination: '14-30 days to sprout',
        photo: 'img/parsley.jpg'
    },
    {
        name: 'Rosemary',
        latin: 'Salvia rosmarinus',
        germination: '14-30 days to sprout',
        photo: 'img/rosemary.jpg'
    },
    {
        name: 'Sage',
        latin: 'Salvia officinalis',
        germination: '7-21 days to sprout',
        photo: 'img/sage.jpg'
    },
    {
        name: 'Thyme',
        latin: 'Thymus vulgaris',
        germination: '10-14 days to sprout',
        photo: 'img/thyme.jpg'
    }
];

// var zoomInPlant = function(plantName) {
//     let plant = plants.find(p => p.name === plantName );
//     console.log(plant);
//     let zoomedImg = $("#zoomInImage");    
//     zoomedImg.html(`
//         <img src="${plant.photo}"> 
//     `);

//     zoomedImg[0].classList.add('show-float-center');
//     zoomedImg[0].classList.remove('hide');



//     let plantEl = $(`#${plantName}`)[0]
//     plantEl.classList.toggle('zoom-in');

// }



  



$(document).ready(function() {
    $('#modalImageBox').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget) // Button that triggered the modal
        var plantName = button.data('plant-name') // Extract info from data-* attributes   
        let plant = plants.find(p => p.name === plantName ); 
        var modal = $(this);
        modal.find('.modal-title').text(plantName)
        modal.find('#zoomInImage').html(`
            <img src="${plant.photo}"> 
        `);    
      });
    
    let html = '';

    for (let i = 0; i < plants.length; i ++) {
        let plant = plants[i];
        /* <div id='${plant.name}' class='clearfix plant-canvas' onclick="zoomInPlant('${plant.name}')">       */
        html += `
        <table>
            <thead>
                <tr id='name'>
                <th scope="col">${plant.name}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">Latin Name: </th>
                    <td>${plant.latin}</td>
                </tr>
                <tr>
                    <th scope="row">Germination</th>
                    <td>${plant.germination}</td>
                </tr>
                <tr>
                    <th scope="row"></th>
                    <td>
                        <img src="${plant.photo}" data-toggle='modal' data-target='#modalImageBox' data-plant-name='${plant.name}' id = 'herbPhoto'> 
                    </td>
                </tr>
            </tbody>
        </table>
                `;
    }
      
    $('#herbsList').html(html);
});

