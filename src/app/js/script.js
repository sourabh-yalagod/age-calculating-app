const inputDay = document.querySelector('#inputDay');
const inputMonth = document.querySelector('#inputMonth');
const inputYear = document.querySelector('#inputYear');
const fieldSet = document.querySelectorAll('fieldset');
const setDay = document.querySelector('#setDay');
const setMonth = document.querySelector('#setMonth');
const setYear = document.querySelector('#setYear');
const form = document.querySelector('form');
const inputs = document.querySelectorAll('input');
const error_msg = document.querySelectorAll('h1');
const clear = document.querySelector('#clear');


clear.addEventListener('click',()=>{
    inputDay.value = inputMonth.value = inputYear.value = ''
})
const btn = document.querySelector('#btn');
form.addEventListener('submit',validate);

const day_regex = /^([1-9]|[12][0-9]|3[01])$/
const month_regex = /^(0[1-9]|1[0-2])$/
const year_regex = /^([12][0-9]{3})$/

function calculate(){
    const data = new Date();
    let d,m,y;
    let today = data.getDate();  
    let thisMonth = data.getMonth()+1;
    let thisYear = data.getFullYear();

    if(inputDay.value<=today){
        d =  today - inputDay.value;
    }
    else{
        thisMonth--;
        d=  today + 30 -inputDay.value; 
    }
    if(thisMonth>=inputMonth){
        m = thisMonth - inputMonth.value
    }
    else{
        thisYear--;
        m = thisMonth +12- inputMonth.value;
        if(m==12){
            thisYear++;
            m=0;
        }
    }
    y = thisYear - inputYear.value;
    setDay.innerText=d;
    setMonth.innerText=m;
    setYear.innerText=y;

}
function validate(e){
    e.preventDefault();
    if(inputDay.value.trim()==='' && inputMonth.value.trim()==='' && inputYear.value.trim()==='' ){
        show_blank_errors();
    }
    if(day_regex.test(inputDay.value)){
        let what = 'day';
        let input=inputDay.value;
        let inputBox = inputDay;
        let regexs = day_regex;
        let which_error = document.querySelector('#dayError');
        regexTest(regexs,input,what,which_error,inputBox);
    }
    if(!month_regex.test(inputMonth.value) || inputMonth.value ===''){
        let what = 'month';
        let input=inputMonth.value;
        let regexs = month_regex;
        let  which_error = document.querySelector('#monthError');
        inputBox = inputMonth;
        regexTest(regexs,input,what,which_error,inputBox);
    }
    if(!year_regex.test(inputYear.value || inputYear.value==='')){
        let what = 'year';
        let input=inputYear.value;
        let regexs = year_regex;
        let which_error = document.querySelector('#yearError');
        inputBox = inputYear;
        regexTest(regexs,input,what,which_error,inputBox);
    }
    else{
        remove_blank_errors();
        calculate();}
    
}
function regexTest(regexs,input,what,which_error,inputBox){
    which_error.innerText=`Invalid ${what}..!`
    inputBox.style.borderColor='red';
    which_error.classList.remove('hidden');
    which_error.style.color='red';
    which_error.style.fontSize='12px';
}
function show_blank_errors(){
    document.querySelector('#dayError').classList.remove('hidden');
    document.querySelector('#monthError').classList.remove('hidden');
    document.querySelector('#yearError').classList.remove('hidden');
    inputDay.style.borderColor='red';
    inputMonth.style.borderColor='red';
    inputYear.style.borderColor='red';
}
function remove_blank_errors(){
    document.querySelector('#dayError').classList.add('hidden');
    document.querySelector('#monthError').classList.add('hidden');
    document.querySelector('#yearError').classList.add('hidden');
    inputDay.style.borderColor='gray';
    inputMonth.style.borderColor='gray';
    inputYear.style.borderColor='gray';
}