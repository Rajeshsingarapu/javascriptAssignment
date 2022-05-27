const empDetails = [
    {
      employeeId: 'EMP1',
      salary: 10000,
    },
    {
      employeeId: 'EMP2',
      salary: 15000,
    },
    {
      employeeId: 'EMP3',
      salary: 24200,
    },
    {
      employeeId: 'EMP4',
      salary: 10000,
    },
    {
      employeeId: 'EMP5',
      salary: 10000,
    },
    {
      employeeId: 'EMP6',
      salary: 24200,
    },
    {
      employeeId: 'EMP7',
      salary: 37600,
    },
    {
      employeeId: 'EMP8',
      salary: 15000,
    },
  ];
  
  let obj = {};
  
  for (let i = 0; i < empDetails.length; i++) {
    let ele = empDetails[i];
  
    if (obj[ele.salary]) {
      obj[ele.salary].push(ele.employeeId);
    } else {
      obj[ele.salary] = [ele.employeeId];
    }
  }
  //console.log(obj);
  
  let myArray = [];
  
  for (const property in obj) {
    myArray.push({ salary: property, employees: obj[property] });
  }
  console.log(myArray);
  