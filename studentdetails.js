const student = [
    {
      studentName: 'Jack',
      rollNumber: 1,
      joiningDate: '12/01/2021',
    },
    {},
    {},
    {
      studentName: 'Rowling',
      rollNumber: 2,
      joiningDate: '11/01/2021',
    },
    {
      studentName: 'Ali',
      rollNumber: 3,
      joiningDate: '2/25/2021',
    },
    {},
    {
      studentName: 'Rowling',
      rollNumber: 4,
      joiningDate: '05/15/2021',
    },
    {
      studentName: 'Rowling',
      rollNumber: 6,
      joiningDate: '12/10/2021',
    },
    {
      studentName: 'Ali',
      rollNumber: 5,
      joiningDate: '9/11/2021',
    },
    {},
    {},
  ];
  
  const result = student.filter((item) => {
    if (Object.keys(item).length !== 0) {
      return true;
    } else {
      return false;
    }
  });
  console.log(result);
  
  let dates = [];
  
  for (let i = 0; i < result.length; i++) {
    let d = Date.parse(result[i].joiningDate);
    
    dates.push(d);
  }
  
  //console.log(dates);
  
  var maximumDate = new Date(Math.max.apply(null, dates));
  var minimumDate = new Date(Math.min.apply(null, dates));
  console.log(maximumDate.toLocaleDateString());
  console.log(minimumDate.toLocaleDateString());
  