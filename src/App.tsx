import React, { useState, useEffect } from 'react';
import PizZip from 'pizzip';
import Docxtemplater from 'docxtemplater';
import { saveAs } from 'file-saver';
import './AppStyled.css';

import template_0 from './templates/0 - Punomoc za DOO i Odluku/1.docx';
import template_1_0 from './templates/1_0 - Godišnja ponuda produženje/1.docx';
import template_1_1 from './templates/1_1 - Godišnja ponuda prvi/1.docx';
import template_1_2 from './templates/1_2 - Izjava za platu director/1.docx';
import template_1_3 from './templates/1_3 - Izjava za platu porodica/1.docx';
import template_1_4 from './templates/1_4 -  Zahtjev porezko uverenje/1.docx';
import template_1_5 from './templates/1_5 - Zahtjev_radna_knjizica/1.docx';

import template_2_0 from './templates/2_0 - Fond za zdravstveno osiguranje/1.docx';
import template_2_1 from './templates/2_1 - JPR/1.docx';                                                            
import template_2_2 from './templates/2_2 - Ovlašenje za porezku/1.docx';
import template_2_3 from './templates/2_3 - Ugovor o radu/1.docx';
import template_2_4 from './templates/2_4 - Ugovor o radu Budva/1.docx';
import template_2_5 from './templates/2_5 - Zahtjev na izvod iz CRPS-a/1.docx';

import template_3_0 from './templates/3_0 - Ovlaščenje za poštu/1.docx';
import template_3_1 from './templates/3_1 - Zahtjev za fiskalizaciju/1.docx';                                                                                                  
import template_3_2_1 from './templates/3_2 - Zahtjev za token/Шаблон Ovlaščenje za poštu.docx';                        
import template_3_2_2 from './templates/3_2 - Zahtjev za token/Шаблон Zahtjev za token za prijave.docx';              
import template_3_3 from './templates/3_3 - Otvaranje racuna zahtjev FL Lovcen/1.docx';                               
import template_3_4 from './templates/3_4 - Zahtjev za otvaranje računa PL sve Lovcen/1.docx';                        


import template_4_0 from './templates/4_0 - Izjava za raskid ugovora o radu/1.docx';
import template_4_1 from './templates/4_1 - Otkaz ugovora o radu/1.docx';
import template_4_2 from './templates/4_2 - Sporazum o prestanku radnog odnosa/1.docx';

import template_5_0 from './templates/5_0 - Pozajmica/1.docx';
import template_5_1 from './templates/5_1 - Token punomoć/1.docx';
import template_5_2 from './templates/5_2 - Virmani/1.docx';
import template_5_3 from './templates/5_3 - Zahtjev na poresko uverenje/1.docx';

import template_6_0 from './templates/6_0 - Izjava likvidacija/1.docx';
import template_6_1 from './templates/6_1 - Punomoć likvidacija/1.docx';

const templateNames: { [key: string]: string } = {
  template_0:'Punomoc za DOO i Odluku',
  template_1_0:'1_0 - Godišnja ponuda produženje',
  template_1_1:'1_1 - Godišnja ponuda prvi',
  template_1_2:'1_2 - Izjava za platu director',
  template_1_3:'1_3 - Izjava za platu porodica',
  template_1_4:'1_4 -  Zahtjev porezko uverenje',
  template_1_5:'1_5 - Zahtjev_radna_knjizica',
  template_2_0:'2_0 - Fond za zdravstveno osiguranje',
  template_2_1:'2_1 - JPR',
  template_2_2:'2_2 - Ovlašenje za porezku',
  template_2_3:'2_3 - Ugovor o radu',
  template_2_4:'2_4 - Ugovor o radu Budva',
  template_2_5:'2_5 - Zahtjev na izvod iz CRPS-a',
  template_3_0:'3_0 - Ovlaščenje za poštu',
  template_3_1:'3_1 - Zahtjev za fiskalizaciju',
  template_3_2_1:'3_2 - Zahtjev za token/Шаблон Ovlaščenje za poštu',
  template_3_2_2:'3_2 - Zahtjev za token/Шаблон Ovlaščenje za poštu',
/*   template_3_3:'3_3 - Otvaranje racuna zahtjev FL Lovcen', */
  template_3_4:'3_4 - Zahtjev za otvaranje računa PL sve Lovcen',
  template_4_0:'4_0 - Izjava za raskid ugovora o radu',
  template_4_1:'4_1 - Otkaz ugovora o radu',
  template_4_2:'4_2 - Sporazum o prestanku radnog odnosa',
  template_5_0:'5_0 - Pozajmica',
  template_5_1:'5_1 - Token punomoć',
  template_5_2:'5_2 - Virmani',
  template_5_3:'5_3 - Zahtjev na poresko uverenje',
  template_6_0:'6_0 - Izjava likvidacija',
  template_6_1:'6_1 - Punomoć likvidacija',
}

const templates: { [key: string]: string } = {
  template_0,
  template_1_0,
  template_1_1,
  template_1_2,
  template_1_3,
  template_1_4,
  template_1_5,
  template_2_0,
  template_2_1,
  template_2_2,
  template_2_3,
  template_2_4,
  template_2_5,
  template_3_0,
  template_3_1,
  template_3_2_1,
  template_3_2_2,
/*   template_3_3, */
  template_3_4,
  template_4_0,
  template_4_1,
  template_4_2,
  template_5_0,
  template_5_1,
  template_5_2,
  template_5_3,
  template_6_0,
  template_6_1,
}

interface FormData {
  name: string;
  surName: string;
  fathName: string;
  birthDate: string;
  bd1: string;
  bd2: string;
  bd3: string;
  bd4: string;
  bd5: string;
  bd6: string;
  bd7: string;
  bd8: string;
  male: string;
  female: string;
  tel: string;
  email: string;
  address: string;
  city: string;
  street: string;
  workBookNum: string;
  billNum: string;
  passNum: string;
  issueDate: string;
  expiryDate: string;
  issuingOrgan: string;
  birthPlace: string;
  jmbgNum: string;
  j1: string;
  j2: string;
  j3: string;
  j4: string;
  j5: string;
  j6: string;
  j7: string;
  j8: string;
  j9: string;
  j10: string;
  j11: string;
  j12: string;
  j13: string;
  jmbgFrom: string;
  jf1: string;
  jf2: string;
  jf3: string;
  jf4: string;
  jf5: string;
  jf6: string;
  jf7: string;
  jf8: string;
  jmbgTo: string;
  pib: string;
  compName: string;
  compAddr: string;
  compCity: string;
  compStreet: string;
  compHouseNum: string;
  compMunicipal: string;
  compRegNum: string;
  compRegDate: string;
  rd1: string;
  rd2: string;
  rd3: string;
  rd4: string;
  rd5: string;
  rd6: string;
  rd7: string;
  rd8: string;
  compBillNum: string;
  famName1: string;
  famPassNum1: string;
  famMember1: string;
  famJmbgNum1: string;
  f11: string;
  f12: string;
  f13: string;
  f14: string;
  f15: string;
  f16: string;
  f17: string;
  f18: string;
  f19: string;
  f110: string;
  f111: string;
  f112: string;
  f113: string;
  famName2: string;
  famPassNum2: string;
  famMember2: string;
  famJmbgNum2: string;
  famName3: string;
  famPassNum3: string;
  famMember3: string;
  famJmbgNum3: string;
  famName4: string;
  famPassNum4: string;
  famMember4: string;
  famJmbgNum4: string;
  famName5: string;
  famPassNum5: string;
  famMember5: string;
  famJmbgNum5: string;
  currDate: string;
  termDate: string;
  month: string;
}

const App: React.FC = () => {
  const [data, setData] = useState<FormData>({
    //personal data
name: '',
surName: '',
fathName: '',
birthDate: '', 
bd1:'',    //split birthDate into numbers 
bd2:'',
bd3:'',
bd4:'',
bd5:'',
bd6:'',
bd7:'',
bd8:'',
male: '',
female: '',
    //personal contact information
tel: '',
email: '',
address: '',
city: '',
street: '',
workBookNum: '',
billNum: '',

    //personal documents
passNum: '',
issueDate: '',
expiryDate: '',
issuingOrgan: '',
birthPlace: '',
jmbgNum: '',
j1:'',     // split jmbgNum into numbers 
j2:'',    j3:'',    j4:'',    j5:'',    j6:'',    j7:'',    j8:'',    j9:'',    j10:'',    j11:'',    j12:'',   j13:'',

jmbgFrom: '',  //split jmbgFrom into numbers
jf1:'',    jf2:'',    jf3:'',    jf4:'',    jf5:'',    jf6:'',    jf7:'',    jf8:'',
jmbgTo: '',      

    //company documents
pib: '',     
compName: '',

compAddr: '',   //addres companii
compCity:'',
compStreet:'',
compHouseNum:'',

compMunicipal: '', 
compRegNum: '', 
compRegDate: '', //split compRegDate into numbers
rd1:'', rd2:'', rd3:'', rd4:'', rd5:'', rd6:'', rd7:'',    rd8:'',
compBillNum: '', 
  //family information
famName1: '',    
famPassNum1: '', 
famMember1: '',  
famJmbgNum1: '',  //  //split famJmbgNum1 into numbers
f11:'',    f12:'',    f13:'',    f14:'',    f15:'',    f16:'',    f17:'',    f18:'',    f19:'',    f110:'',    f111:'',    f112:'',
f113:'',
famName2: '',    
famPassNum2: '', 
famMember2: '',  
famJmbgNum2: '',   //  f21 f22 f23 f24 f25 f26 f27 f28 f29 f f210 f211 f212 f213

famName3: '',    
famPassNum3: '', 
famMember3: '',  
famJmbgNum3: '', 

famName4: '',    
famPassNum4: '', 
famMember4: '',  
famJmbgNum4: '', 

famName5: '',    
famPassNum5: '', 
famMember5: '',  
famJmbgNum5: '', 
  //other data
currDate:'',
termDate:'', // termination contract date
month:'' // month за который платиться зп в вирманах
});

  const [selectedTemplate, setSelectedTemplate] = useState<string>('');
  const [requiredFields, setRequiredFields] = useState<string[]>([]);


  const handleSplitAndSet = (name:string,value:string,keys:string[])=> {
    const dateDigit = value.replace(/[^0-9]/g, '');
    const newValues: {[key:string]:string}={};

    keys.forEach((key,index) => {
      newValues[key]=dateDigit[index] || '';
    });

  }


  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    if (name === 'birthDate') {
      handleSplitAndSet(name, value, ['bd1', 'bd2', 'bd3', 'bd4', 'bd5', 'bd6', 'bd7', 'bd8']);
  } else if (name === 'jmbgNum') {
      handleSplitAndSet(name, value, ['j1', 'j2', 'j3', 'j4', 'j5', 'j6', 'j7', 'j8', 'j9', 'j10', 'j11', 'j12', 'j13']);
  } else if (name === 'jmbgFrom') {
      handleSplitAndSet(name, value, ['jf1', 'jf2', 'jf3', 'jf4', 'jf5', 'jf6', 'jf7', 'jf8']);
  } else if (name === 'compRegDate') {
      handleSplitAndSet(name, value, ['rd1', 'rd2', 'rd3', 'rd4', 'rd5', 'rd6', 'rd7', 'rd8']);
  } else if (name === 'famJmbgNum') {
      handleSplitAndSet(name, value, ['f11', 'f12', 'f13', 'f14', 'f15', 'f16', 'f17', 'f18', 'f19', 'f110', 'f111', 'f112', 'f113']);
  }
    else {setData(prevData => ({
      ...prevData,
      [name]: value,
    }));}
  };

  const handleTemplateChange = async (event: React.ChangeEvent<HTMLSelectElement>) => {

    const templateKey = event.target.value;
    setSelectedTemplate(templateKey);

    const templateFile = templates[templateKey];
    if (!templateFile) return;

    const response = await fetch(templateFile);
    const content = await response.arrayBuffer();

    const zip = new PizZip(content);
    const doc = new Docxtemplater(zip, { paragraphLoop: true, linebreaks: true });

    const text = doc.getFullText();
    const matches = text.match(/\{(.*?)\}/g) || [];
    const fields = matches.map(match => match.replace(/[{}]/g, ''));

    setRequiredFields(fields);
  };

  const generateDocument = async () => {
    const templateFile = templates[selectedTemplate];
    if (!templateFile) return;

    const response = await fetch(templateFile);
    const content = await response.arrayBuffer();

    const zip = new PizZip(content);
    const doc = new Docxtemplater(zip, { paragraphLoop: true, linebreaks: true });

    doc.render(data);

    const out = doc.getZip().generate({
      type: 'blob',
      mimeType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    });

    saveAs(out, `${selectedTemplate}_document.docx`);
  };

  const isFieldRequired = (fieldName: string) => requiredFields.includes(fieldName);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Document Generator</h1>
      </header>
      <main>

      <div id='headButtons'>
      <div>
          <label>Выберите шаблон:</label>
          <select value={selectedTemplate} onChange={handleTemplateChange} className='selectForm'>
            {Object.keys(templates).map(key => (
              <option key={key} value={key} className='option'>
                {templateNames[key]}
              </option>
            ))}
          </select>
        </div>
        
        <div id='authBlick'>
          <button>регистрация</button>
          <button>авторизация</button>
          <button>заполнить мои данные</button>
        </div>
      </div>
      
        <div>
        <form className='FormStyle'>


        <label>Имя</label>
      <input 
        type="text" 
        name="name" 
        value={data.name} 
        onChange={handleChange} 
        className={isFieldRequired('name') ? 'highlight' : ''}
      />
      <label>Фамилия</label>
      <input 
        type="text" 
        name="surName" 
        value={data.surName} 
        onChange={handleChange} 
        className={isFieldRequired('surName') ? 'highlight' : ''}
      />
      <label>Имя Отца</label>
      <input 
        type="text" 
        name="fathName" 
        value={data.fathName} 
        onChange={handleChange} 
        className={isFieldRequired('fathName') ? 'highlight' : ''}
      />
      <label>Дата Рождения</label>
      <input 
        type="date" 
        name="birthDate" 
        value={data.birthDate} 
        onChange={handleChange} 
        className={isFieldRequired('birthDate') ? 'highlight' : ''}
      />
      <label>Место рождения</label>
      <input 
        type="text" 
        name="birthPlace" 
        value={data.birthPlace} 
        onChange={handleChange} 
        className={isFieldRequired('birthPlace') ? 'highlight' : ''}
      />
      <label>Телефон</label>
      <input 
        type="tel" 
        name="tel" 
        value={data.tel} 
        onChange={handleChange} 
        className={isFieldRequired('tel') ? 'highlight' : ''}
      />
      <label>Электронная Почта</label>
      <input 
        type="email" 
        name="email" 
        value={data.email} 
        onChange={handleChange} 
        className={isFieldRequired('email') ? 'highlight' : ''}
      />

      <label>Город проживания</label>
      <input 
        type="text" 
        name="city" 
        value={data.city} 
        onChange={handleChange} 
        className={isFieldRequired('city') ? 'highlight' : ''}
      />
      <label>Улица</label>
      <input 
        type="text" 
        name="street" 
        value={data.street} 
        onChange={handleChange} 
        className={isFieldRequired('street') ? 'highlight' : ''}
      />
      <label>Номер строения</label>
      <input 
        type="text" 
        name="address" 
        value={data.address} 
        onChange={handleChange} 
        className={isFieldRequired('address') ? 'highlight' : ''}
      />


      <label>Номер трудовой книжки</label>
      <input 
        type="text" 
        name="workBookNum" 
        value={data.workBookNum} 
        onChange={handleChange} 
        className={isFieldRequired('workBookNum') ? 'highlight' : ''}
      />
      <label>Номер личного счёта в банке</label>
      <input 
        type="text" 
        name="billNum" 
        value={data.billNum} 
        onChange={handleChange} 
        className={isFieldRequired('billNum') ? 'highlight' : ''}
      />
      <label>Номер паспорта</label>
      <input 
        type="text" 
        name="passNum" 
        value={data.passNum} 
        onChange={handleChange} 
        className={isFieldRequired('passNum') ? 'highlight' : ''}
      />
      <label>Дата выдачи паспорта</label>
      <input 
        type="date" 
        name="issueDate" 
        value={data.issueDate} 
        onChange={handleChange} 
        className={isFieldRequired('issueDate') ? 'highlight' : ''}
      />
      <label>Дата истечения паспорта</label>
      <input 
        type="date" 
        name="expiryDate" 
        value={data.expiryDate} 
        onChange={handleChange} 
        className={isFieldRequired('expiryDate') ? 'highlight' : ''}
      />
      <label>Орган выдавший паспорт</label>
      <input 
        type="text" 
        name="issuingOrgan" 
        value={data.issuingOrgan} 
        onChange={handleChange} 
        className={isFieldRequired('issuingOrgan') ? 'highlight' : ''}
      />

      <label>Номер JMBG(есть на боравке)</label>
      <input 
        type="text" 
        name="jmbgNum" 
        value={data.jmbgNum} 
        onChange={handleChange} 
        className={isFieldRequired('jmbgNum') ? 'highlight' : ''}
      />
      <label>JMBG дата выдачи </label>
      <input 
        type="text" 
        name="jmbgFrom" 
        value={data.jmbgFrom} 
        onChange={handleChange} 
        className={isFieldRequired('jmbgFrom') ? 'highlight' : ''}
      />
      <label>JMBG дата истечения</label>
      <input 
        type="text" 
        name="jmbgTo" 
        value={data.jmbgTo} 
        onChange={handleChange} 
        className={isFieldRequired('jmbgTo') ? 'highlight' : ''}
      />
      <label>Номер PIB (есть на боравке)</label>
      <input 
        type="text" 
        name="pib" 
        value={data.pib} 
        onChange={handleChange} 
        className={isFieldRequired('pib') ? 'highlight' : ''}
      />
      <label>Название компании</label>
      <input 
        type="text" 
        name="compName" 
        value={data.compName} 
        onChange={handleChange} 
        className={isFieldRequired('compName') ? 'highlight' : ''}
      />
      <label>Адрес компании</label>
      <input 
        type="text" 
        name="compAddr" 
        value={data.compAddr} 
        onChange={handleChange} 
        className={isFieldRequired('compAddr') ? 'highlight' : ''}
      />
      <label>Город регистрации компании</label>
      <input 
        type="text" 
        name="compCity" 
        value={data.compCity} 
        onChange={handleChange} 
        className={isFieldRequired('compCity') ? 'highlight' : ''}
      />
      <label>Улица регистрации компании</label>
      <input 
        type="text" 
        name="compStreet" 
        value={data.compStreet} 
        onChange={handleChange} 
        className={isFieldRequired('compStreet') ? 'highlight' : ''}
      />
      <label>Номер дома регистрации компании</label>
      <input 
        type="text" 
        name="compHouseNum" 
        value={data.compHouseNum} 
        onChange={handleChange} 
        className={isFieldRequired('compHouseNum') ? 'highlight' : ''}
      />
      <label>Обштина регистрации компании</label>
      <input 
        type="text" 
        name="compMunicipal" 
        value={data.compMunicipal} 
        onChange={handleChange} 
        className={isFieldRequired('compMunicipal') ? 'highlight' : ''}
      />
      <label>номер компании в регистрационном учёте</label>
      <input 
        type="text" 
        name="compRegNum" 
        value={data.compRegNum} 
        onChange={handleChange} 
        className={isFieldRequired('compRegNum') ? 'highlight' : ''}
      />
      <label>Дата регистрации компании</label>
      <input 
        type="date" 
        name="compRegDate" 
        value={data.compRegDate} 
        onChange={handleChange} 
        className={isFieldRequired('compRegDate') ? 'highlight' : ''}
      />
      <label>Номер счета компании</label>
      <input 
        type="text" 
        name="compBillNum" 
        value={data.compBillNum} 
        onChange={handleChange} 
        className={isFieldRequired('compBillNum') ? 'highlight' : ''}
      />
      <label>Фамилия Члена Семьи 1</label>
      <input 
        type="text" 
        name="famName1" 
        value={data.famName1} 
        onChange={handleChange} 
        className={isFieldRequired('famName1') ? 'highlight' : ''}
      />
      <label>Номер Паспорт Члена Семьи 1</label>
      <input 
        type="text" 
        name="famPassNum1" 
        value={data.famPassNum1} 
        onChange={handleChange} 
        className={isFieldRequired('famPassNum1') ? 'highlight' : ''}
      />
      <label>Член Семьи 1</label>
      <input 
        type="text" 
        name="famMember1" 
        value={data.famMember1} 
        onChange={handleChange} 
        className={isFieldRequired('famMember1') ? 'highlight' : ''}
      />
      <label>Номер Джмбг Члена Семьи 1</label>
      <input 
        type="text" 
        name="famJmbgNum1" 
        value={data.famJmbgNum1} 
        onChange={handleChange} 
        className={isFieldRequired('famJmbgNum1') ? 'highlight' : ''}
      />
      <label>Фамилия Члена Семьи 2</label>
      <input 
        type="text" 
        name="famName2" 
        value={data.famName2} 
        onChange={handleChange} 
        className={isFieldRequired('famName2') ? 'highlight' : ''}
      />
      <label>Номер Паспорт Члена Семьи 2</label>
      <input 
        type="text" 
        name="famPassNum2" 
        value={data.famPassNum2} 
        onChange={handleChange} 
        className={isFieldRequired('famPassNum2') ? 'highlight' : ''}
      />
      <label>Член Семьи 2</label>
      <input 
        type="text" 
        name="famMember2" 
        value={data.famMember2} 
        onChange={handleChange} 
        className={isFieldRequired('famMember2') ? 'highlight' : ''}
      />
      <label>Номер Джмбг Члена Семьи 2</label>
      <input 
        type="text" 
        name="famJmbgNum2" 
        value={data.famJmbgNum2} 
        onChange={handleChange} 
        className={isFieldRequired('famJmbgNum2') ? 'highlight' : ''}
      />
      <label>Фамилия Члена Семьи 3</label>
      <input 
        type="text" 
        name="famName3" 
        value={data.famName3} 
        onChange={handleChange} 
        className={isFieldRequired('famName3') ? 'highlight' : ''}
      />
      <label>Номер Паспорт Члена Семьи 3</label>
      <input 
        type="text" 
        name="famPassNum3" 
        value={data.famPassNum3} 
        onChange={handleChange} 
        className={isFieldRequired('famPassNum3') ? 'highlight' : ''}
      />
      <label>Член Семьи 3</label>
      <input 
        type="text" 
        name="famMember3" 
        value={data.famMember3} 
        onChange={handleChange} 
        className={isFieldRequired('famMember3') ? 'highlight' : ''}
      />
      <label>Номер Джмбг Члена Семьи 3</label>
      <input 
        type="text" 
        name="famJmbgNum3" 
        value={data.famJmbgNum3} 
        onChange={handleChange} 
        className={isFieldRequired('famJmbgNum3') ? 'highlight' : ''}
      />
      <label>Фамилия Члена Семьи 4</label>
      <input 
        type="text" 
        name="famName4" 
        value={data.famName4} 
        onChange={handleChange} 
        className={isFieldRequired('famName4') ? 'highlight' : ''}
      />
      <label>Номер Паспорт Члена Семьи 4</label>
      <input 
        type="text" 
        name="famPassNum4" 
        value={data.famPassNum4} 
        onChange={handleChange} 
        className={isFieldRequired('famPassNum4') ? 'highlight' : ''}
      />
      <label>Член Семьи 4</label>
      <input 
        type="text" 
        name="famMember4" 
        value={data.famMember4} 
        onChange={handleChange} 
        className={isFieldRequired('famMember4') ? 'highlight' : ''}
      />
      <label>Номер Джмбг Члена Семьи 4</label>
      <input 
        type="text" 
        name="famJmbgNum4" 
        value={data.famJmbgNum4} 
        onChange={handleChange} 
        className={isFieldRequired('famJmbgNum4') ? 'highlight' : ''}
      />
      <label>Фамилия Члена Семьи 5</label>
      <input 
        type="text" 
        name="famName5" 
        value={data.famName5} 
        onChange={handleChange} 
        className={isFieldRequired('famName5') ? 'highlight' : ''}
      />
      <label>Номер Паспорт Члена Семьи 5</label>
      <input 
        type="text" 
        name="famPassNum5" 
        value={data.famPassNum5} 
        onChange={handleChange} 
        className={isFieldRequired('famPassNum5') ? 'highlight' : ''}
      />
      <label>Член Семьи 5</label>
      <input 
        type="text" 
        name="famMember5" 
        value={data.famMember5} 
        onChange={handleChange} 
        className={isFieldRequired('famMember5') ? 'highlight' : ''}
      />
      <label>Номер Джмбг Члена Семьи 5</label>
      <input 
        type="text" 
        name="famJmbgNum5" 
        value={data.famJmbgNum5} 
        onChange={handleChange} 
        className={isFieldRequired('famJmbgNum5') ? 'highlight' : ''}
      />
      <label>Текущая Дата</label>
      <input 
        type="date" 
        name="currDate" 
        value={data.currDate} 
        onChange={handleChange} 
        className={isFieldRequired('currDate') ? 'highlight' : ''}
      />
      <label>Дата Срока</label>
      <input 
        type="date" 
        name="termDate" 
        value={data.termDate} 
        onChange={handleChange} 
        className={isFieldRequired('termDate') ? 'highlight' : ''}
      />
      <label>Месяц</label>
      <input 
        type="text" 
        name="month" 
        value={data.month} 
        onChange={handleChange} 
        className={isFieldRequired('month') ? 'highlight' : ''}
      />
        </form>
        </div>
        {selectedTemplate && (
          <button id='ButtonGenerate' onClick={generateDocument}>Preuzmi dokument</button>
        )}
      </main>
    </div>
  );
};

export default App;
