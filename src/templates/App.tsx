import React, { useState } from 'react';
import PizZip from 'pizzip';
import Docxtemplater from 'docxtemplater';
import { saveAs } from 'file-saver';
import './AppStyled';

// Импортируем все шаблоны
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







// Список шаблонов
const templates: { [key: string]: any } = {
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
  template_3_3,
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

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleTemplateChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTemplate(event.target.value);
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

  return (
    <div className="App">
      <header className="App-header">
        <h1>Document Generator</h1>
      </header>
      <main>
        <form>
          <label>Ime</label>
          <input type="text" name="name" value={data.name} onChange={handleChange} />
          <label>Prezime</label>
          <input type="text" name="surName" value={data.surName} onChange={handleChange} />
          <label>Ime Oca</label>
          <input type="text" name="fathName" value={data.fathName} onChange={handleChange} />
          <label>Datum Rođenja</label>
          <input type="date" name="birthDate" value={data.birthDate} onChange={handleChange} />

          <input type='checkbox' name='male' value={data.male} onChange={handleChange}/>
          <label>male</label>

          <input type='checkbox' name='female' value={data.female} onChange={handleChange}/>
          <label>female</label>

          <input type="tel" name="tel" value={data.tel} onChange={handleChange} />
          <label>Email</label>
          <input type="email" name="email" value={data.email} onChange={handleChange} />
          <label>Adresa (FL)</label>
          <input type="text" name="address" value={data.address} onChange={handleChange} />
          <label>Grad (FL)</label>
          <input type="text" name="city" value={data.city} onChange={handleChange} />
          <label>Ulica i Broj (FL)</label>
          <input type="text" name="street" value={data.street} onChange={handleChange} />
          <label>Broj Radne Knjižice</label>
          <input type="text" name="numWorkBook" value={data.workBookNum} onChange={handleChange} />
          <label>Žiro Račun (FL)</label>
          <input type="text" name="billNum" value={data.billNum} onChange={handleChange} />
          <label>Broj Putne Isprave</label>
          <input type="text" name="PassNum" value={data.passNum} onChange={handleChange} />
          <label>Datum Izdavanja</label>
          <input type="date" name="issueDate" value={data.issueDate} onChange={handleChange} />
          <label>Datum Isteka</label>
          <input type="date" name="expiryDate" value={data.expiryDate} onChange={handleChange} />
          <label>Organ Izdavanja</label>
          <input type="text" name="issuingOrgan" value={data.issuingOrgan} onChange={handleChange} />
          <label>Mjesto Rođenja</label>
          <input type="text" name="birthPlace" value={data.birthPlace} onChange={handleChange} />
          <label>JMBG</label>
          <input type="text" name="jmbgNum" value={data.jmbgNum} onChange={handleChange} />
          <label>JMBG Od</label>
          <input type="text" name="jmbgFrom" value={data.jmbgFrom} onChange={handleChange} />
          <label>JMBG Do</label>
          <input type="text" name="jmbgTo" value={data.jmbgTo} onChange={handleChange} />
          <label>PIB</label>
          <input type="text" name="pib" value={data.pib} onChange={handleChange} />
          <label>Naziv DOO</label>
          <input type="text" name="compName" value={data.compName} onChange={handleChange} />
          <label>Adresa DOO</label>
          <input type="text" name="compAddr" value={data.compAddr} onChange={handleChange} />
          <label>Opština Reg. DOO</label>
          <input type="text" name="compMunicipal" value={data.compMunicipal} onChange={handleChange} />
          <label>Reg. Broj DOO</label>
          <input type="text" name="compRegNum" value={data.compRegNum} onChange={handleChange} />
          <label>Datum Registracije</label>
          <input type="date" name="compRegDate" value={data.compRegDate} onChange={handleChange} />
          <label>Žiro Račun DOO</label>
          <input type="text" name="compBillNum" value={data.compBillNum} onChange={handleChange} />
          <label>Porodično Ime</label>
          <input type="text" name="famName" value={data.famName1} onChange={handleChange} />
          <label>Broj Putne Isprave Porodice</label>
          <input type="text" name="famPassNum" value={data.famPassNum1} onChange={handleChange} />
          <label>Član Porodice</label>
          <input type="text" name="famMember" value={data.famMember1} onChange={handleChange} />
          <label>JMBG Porodice</label>
          <input type="text" name="famJmbgNum" value={data.famJmbgNum1} onChange={handleChange} />
        </form>
        <div>



          <label>Выберите шаблон:</label>
          <select value={selectedTemplate} onChange={handleTemplateChange}>
            {Object.keys(templates).map(key => (
              <option key={key} value={key}>
                {key.replace(/_/g, ' ').replace(/(\d+)/g, ' $1')}
              </option>
            ))}
          </select>
        </div>
        {selectedTemplate && (
          <button onClick={generateDocument}>Preuzmi dokument</button>
        )}
      </main>
    </div>
  );
};

export default App;