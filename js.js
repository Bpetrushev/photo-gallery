const arr = [{
    title: 'Hey Bales',
    description: 'I love hay bales. Took this snap on a drive through the countryside past some straw fields.'
},
{
    title: 'Lake',
    description: 'The lake was so calm today. We had a great view of the snow on the mountains from here.'
},
{
    title: 'Canyon',
    description: 'I hiked to the top of the mountain and got this picture of the canyon and trees below.'
},
{
    title: 'Iceberg',
    description: 'It was amazing to see an iceberg up close, it was so cold but didn’t snow today.'
},
{
    title: 'Desert',
    description: 'The red cliffs were beautiful. It was really hot in the desert but we did a lot of walking through the canyons.'
},
{
    title: 'Fall',
    description: 'Fall is coming, I love when the leaves on the trees start to change color.'
},
{
    title: 'Plantation',
    description: 'I drove past this plantation yesterday, everything is so green!'
},
{
    title: 'Dunes',
    description: 'My summer vacation to the Oregon Coast. I love the sandy dunes!'
},
{
    title: 'Countryside Lane',
    description: 'We enjoyed a quiet stroll down this countryside lane.'
},
{
    title: 'Sunset',
    description: 'Sunset at the coast! The sky turned a lovely shade of orange.'
},
{
    title: 'Cave',
    description: 'I did a tour of a cave today and the view of the landscape below was breathtaking.'
},
{
    title: 'Bluebells',
    description: 'I walked through this meadow of bluebells and got a good view of the snow on the mountain before the fog came in.'
},
]
/* Start JS */

//Fix placeholder
$('.search').on('focus', function(){
    $(this).attr('placeholder', "");
});

$('.search').on('blur', function(){
    $(this).attr('placeholder', "Search");
});

//append all img in container
for(let i=1; i<=12; i++){
    $('.flex-container').append('<div class="img_'+ i +' flex"><a href="photos/'+i+'.jpg" data-lightbox="group" data-title="'+ arr[i-1]['description'] +'"><img src="photos/thumbnails/'+i+'.jpg" alt="'+ arr[i-1]['title'] +'"></a></div>')
}

//Lightbox settings
lightbox.option({albumLabel: ''});

//input keypress function
$('.search').on('change paste keyup', function(){
    let word = $(this).val();
    for(let i=0; i<arr.length; i++){
        if(arr[i]['title'].toLocaleLowerCase().includes(word.toLowerCase()) || 
        arr[i]['description'].toLocaleLowerCase().includes(word.toLowerCase())){
            $('.img_'+(i+1)+'').show();
        } else {
            $('.img_'+(i+1)+'').hide();
        }
    }
});
