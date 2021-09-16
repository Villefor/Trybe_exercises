const info = (fullName) => {
    const email = fullName.toLowerCase().split(' ').join('_');
    return { fullName, email: `${email}@trybe.com` };
}


const newEmployees = (info) => {
    const employees = {
      id1: info('Pedro Guerra'),
      id2: info('Luiza Drumond'),
      id3: info('Carla Paiva')
    }
    return employees;
  };

  console.log(newEmployees(info));
