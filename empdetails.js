const employeeDetails = [
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
  
  for (let i = 0; i < employeeDetails.length; i++) {
    let ele = employeeDetails[i];
    // console.log(ele);
    if (obj[ele.salary]) {
      //console.log('key existds', ele.salary);
      obj[ele.salary].push(ele.employeeId);
    } else {
      obj[ele.salary] = [ele.employeeId];
    }
  }
  console.log(obj);
  