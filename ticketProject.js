let selectCountry=document.getElementById('countery-sel')
let selectCity=document.getElementById('ciyt-sel')
let submitBTN=document.getElementById('btn')
let bod=document.querySelector('body')
let ni=document.getElementById('nameInput')
let li=document.getElementById('lastNameInput')
let pi=document.getElementById('phoneInput')
let ei=document.getElementById('emailInput')
let destination=[
    {country:'ایران',city:['اصفهان','شیراز','تهران','مشهد'],img:'src/img/iran.jpg'},
    {country:'اسپانیا',city:['بارسلونا','سویا','مالاگا','والنسیا'],img:'src/img/spain.jpg'},
    {country:'ایتالیا',city:['رم','فلورانس','ونیز','میلان'],img:'src/img/italy.jpg'},
    {country:'آلمان',city:['کلن','بامبرگ','نورنبرگ','پاساو'],img:'src/img/germany.jpg'}
]
function showCity(){
    
    let SC=selectCountry.value
    let i=destination.findIndex(function(d){
        return d.country==SC
    })
    selectCity.innerHTML=''
    destination[i].city.forEach(function(c){
        let newelem=document.createElement('option')
        newelem.innerHTML=c
        newelem.value=c
        selectCity.append(newelem)
    })
    let photo=destination[i].img
    bod.style.backgroundImage='url('+photo+')'
}
// selectCountry.addEventListener('change',showCity)