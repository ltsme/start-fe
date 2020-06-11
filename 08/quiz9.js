const $URL = document.querySelector('#URL');
const $button = document.querySelector('#button');
const $log = document.querySelector('#log');

function good(result) 
{
    result.text().then((value) => {
        $log.value = value;
    });
}

function bad(error) 
{
    $log.value = error;
}

function fetchUrl() 
{
    const url = $URL.value;
    
    if (!$URL.value) 
    {    
        window.alert("URL을 입력해 주세요")
    } else 
    {        
        fetch(url).then(good).catch(bad); 
    }     
}

$button.addEventListener('click', fetchUrl);