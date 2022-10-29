//index value pairing

const Ila = document.querySelector('#la'); //Loan amount
const Iir = document.querySelector('#ir'); // Interest Rate
const Inm = document.querySelector('#nm'); // Number of Months
const Imp = document.querySelector('#mp'); // Monthly payment
const ab = document.querySelector('#btn-add'); //calculate button
const cb = document.querySelector('#btn-clear'); // clear button
//const dla = document.querySelector('#LA'); // display loan



const clear = () => {
    Ila.value = '';
    Iir.value = '';
    Inm.value ='';
    Imp.value ='';
};
cb.addEventListener('click',clear);


ab.addEventListener('click', ()=>{
    
    let i=0;
    let EEir=0;
    const Eir = Iir.value;
    const Emp = Imp.value;
    const Enm = Inm.value;
    const Ela = Ila.value;
    EEir = Eir/100;
    i = (EEir/12);

    // Loan amount
    LA= (Emp/i)*(1-(1/(1+i)**Enm));
    let dollarUSLocale = Intl.NumberFormat('en-US');
    LA = LA.toFixed(2);
    LA = dollarUSLocale.format(LA);
    document.getElementById("LA").innerHTML = '₱' + LA;

    //number of months
    let n;
    n= Math.log((Emp/i) / ((Emp/(i))-Ela)) / Math.log(1+i);
    n = n.toFixed(0);
    n = dollarUSLocale.format(n);
    document.getElementById("TNM").innerHTML = n;
    

    //monthly paayment 
    let MP=0;
    MP = Ela*i*((1+i)**Enm) / (((1+i)**Enm)-1);
    MP = MP.toFixed(2);
    MP = dollarUSLocale.format(MP);
    document.getElementById("MP").innerHTML = '₱' + MP;


    //interest rate
    let AR=0;
    AR= (Emp/(Ela*Enm)*12)*100; 
    AR = AR.toFixed(2);
    AR = dollarUSLocale.format(AR);
    document.getElementById("AR").innerHTML = AR + '%';

});

