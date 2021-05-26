"use strict";

const radiologia = [
  {
    HORA: "11:00:00 AM",
    ESPECIALISTA: "IGNACIO SCHULZ",
    PACIENTE: "FRANCISCA ROJAS",
    RUT: "9878782-1",
    PREVISION: "FONASA",
  },
  {
    HORA: "11:30:00 AM",
    ESPECIALISTA: "FEDERICO SUBERCASEAUX",
    PACIENTE: "PAMELA ESTRADA",
    RUT: "15345241-3",
    PREVISION: "ISAPRE",
  },
  {
    HORA: "03:00:00 PM",
    ESPECIALISTA: "FERNANDO WURTHZ",
    PACIENTE: "ARMANDO LUNA",
    RUT: "16445345-9",
    PREVISION: "ISAPRE",
  },
  {
    HORA: "03:30:00 PM",
    ESPECIALISTA: "ANA MARIA GODOY",
    PACIENTE: "MANUEL GODOY",
    RUT: "17666419-0",
    PREVISION: "FONASA",
  },
  {
    HORA: "04:00:00 PM",
    ESPECIALISTA: "PATRICIA SUAZO",
    PACIENTE: "RAMON ULLOA",
    RUT: "14989389-K",
    PREVISION: "FONASA",
  },
];
const traumatologia = [
  {
    HORA: "08:00:00 AM",
    ESPECIALISTA: "MARIA PAZ ALTUZARRA",
    PACIENTE: "PAULA SANCHEZ",
    RUT: "15554774-5",
    PREVISION: "FONASA",
  },
  {
    HORA: "09:00:00 AM",
    ESPECIALISTA: "RENÉ POBLETE",
    PACIENTE: "ANA GELLONA ",
    RUT: "13123329-7",
    PREVISION: "ISAPRE",
  },
  {
    HORA: "09:30:00 AM",
    ESPECIALISTA: "MARIA SOLAR",
    PACIENTE: "RAMIRO ANDRADE ",
    RUT: "12221451-K ",
    PREVISION: "FONASA",
  },
  {
    HORA: "10:00:00 AM",
    ESPECIALISTA: "RAUL LOYOLA",
    PACIENTE: "CARMEN ISLA",
    RUT: "10112348-3",
    PREVISION: "ISAPRE",
  },
  {
    HORA: "10:00:00 AM",
    ESPECIALISTA: "RAUL ARAYA",
    PACIENTE: "ANGÉLICA NAVAS",
    RUT: "15444147-9",
    PREVISION: "ISAPRE",
  },
  {
    HORA: "10:30:00 AM",
    ESPECIALISTA: "ANTONIO LARENAS",
    PACIENTE: "PABLO LOAYZA",
    RUT: "13453234-1 ",
    PREVISION: "ISAPRE",
  },
  {
    HORA: "10:30:00 AM",
    ESPECIALISTA: "MARIA ARRIAGADA",
    PACIENTE: "ANA KLAPP",
    RUT: "17879423-9",
    PREVISION: "ISAPRE",
  },
  {
    HORA: "11:00:00 AM",
    ESPECIALISTA: "ALEJANDRO BADILLA",
    PACIENTE: "FELIPE MARDONES",
    RUT: "1547423-6",
    PREVISION: "ISAPRE",
  },
  {
    HORA: "11:30:00 AM",
    ESPECIALISTA: "CECILIA BUDNIK",
    PACIENTE: "DIEGO MARRE",
    RUT: "16554741-K",
    PREVISION: "FONASA",
  },
  {
    HORA: "12:00:00 PM",
    ESPECIALISTA: "MATIAS ARAVENA",
    PACIENTE: "SUSANA POBLETE",
    RUT: "14345656-6 ",
    PREVISION: "FONASA",
  },
  {
    HORA: "12:00:00 PM",
    ESPECIALISTA: "ARTURO CAVAGNARO",
    PACIENTE: "CECILIA MENDEZ",
    RUT: "9747535-8",
    PREVISION: "ISAPRE",
  },
  {
    HORA: "12:30:00 PM",
    ESPECIALISTA: "ANDRES KANACRI",
    PACIENTE: "MARCIAL SUAZO",
    RUT: "11254785-5",
    PREVISION: "ISAPRE",
  },
];

const dental = [
  {
    HORA: "08:30:00 AM",
    ESPECIALISTA: "ANDREA ZUÑIGA",
    PACIENTE: "MARCELA RETAMAL",
    RUT: "11123425-6",
    PREVISION: "ISAPRE",
  },
  {
    HORA: "11:00:00 AM",
    ESPECIALISTA: "MARIA PIA ZAÑARTU",
    PACIENTE: "ANGEL MUÑOZ",
    RUT: "9878789-2",
    PREVISION: "ISAPRE",
  },
  {
    HORA: "11:30:00 AM",
    ESPECIALISTA: "SCARLETT WITTING",
    PACIENTE: "MARIO KAST",
    RUT: "7998789-5",
    PREVISION: "FONASA",
  },
  {
    HORA: "01:00:00 PM",
    ESPECIALISTA: "FRANCISCO VON TEUBER",
    PACIENTE: "KARIN FERNANDEZ",
    RUT: "18887662-K",
    PREVISION: "FONASA",
  },
  {
    HORA: "01:30:00 PM",
    ESPECIALISTA: "EDUARDO VIÑUELA",
    PACIENTE: "HUGO SANCHEZ",
    RUT: "17665461-4",
    PREVISION: "FONASA",
  },
  {
    HORA: "02:00:00 PM",
    ESPECIALISTA: "RAQUEL VILLASECA",
    PACIENTE: "ANA SEPULVEDA",
    RUT: "14441281-0",
    PREVISION: "ISAPRE",
  },
];

//Ejercicio 2
//Eliminar el primer y último elemento del arreglo de Radiología

function ejercicio2() {
  radiologia.shift();
  radiologia.pop();
  document.write(`
  <h5>Eliminando el primer y último elemento del arreglo de Radiología</h5>`);
}
ejercicio2();

//Ejercicio 3
//Imprimir en la página HTML la lista de consultas médicas de Dental

function ejercicio3(arg) {
  document.write(`
  <h5>Lista de consultas médicas de Dental</h5>`);
  for (let el in arg) {
    let registro = arg[el];
    let { HORA, ESPECIALISTA, PACIENTE, RUT, PREVISION } = registro;
    document.write(`
    <p>
    ${HORA} - ${ESPECIALISTA} - ${PACIENTE} - ${RUT} - ${PREVISION}
  </p>
`);
  }
}
ejercicio3(dental);

//Ejercicio 4
//Imprimir un listado total de todos los pacientes que se atendieron en el centro médico. Para esto, deberá unir todos los nombres de pacientes e imprimir uno por cada párrafo.

function ejercicio4() {
  document.write(`
  <h5>Lista de todos los pacientes que se atendieron en el centro médico</h5>`);
  let totalPacientes = [].concat(radiologia, traumatologia, dental);

  totalPacientes.forEach((element) => {
    document.write(`
    <p>
    ${element.PACIENTE}
  </p>
`);
  });
}

ejercicio4();

//5. Filtrar aquellos pacientes que indican ser de ISAPRE en la lista de consultas médicas
//de Dental.

function ejercicio5() {
  document.write(`
  <h5>Pacientes que indican ser de ISAPRE en la lista de consultas médicas de Dental.</h5>
  `);
  let dentalIsapre = dental.filter(function (paciente) {
    return paciente.PREVISION == "ISAPRE";
  });

  dentalIsapre.forEach((element) => {
    document.write(`
      <p>
      ${element.PACIENTE} - ${element.PREVISION}
    </p>
  `);
  });
}

ejercicio5();

//6. Filtrar aquellos pacientes que indican ser de FONASA en la lista de consultas
//médicas de Traumatología.
function ejercicio6() {
  document.write(`
  <h5>Pacientes que indican ser de FONASA en la lista de consultas médicas de Traumatología.</h5>
  `);
  let traumaFonasa = dental.filter(function (paciente) {
    return paciente.PREVISION == "FONASA";
  });

  traumaFonasa.forEach((element) => {
    document.write(`
      <p>
      ${element.PACIENTE} - ${element.PREVISION}
    </p>
  `);
  });
}

ejercicio6();
