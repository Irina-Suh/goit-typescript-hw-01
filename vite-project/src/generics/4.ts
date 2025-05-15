type User = {
      name: string;
      surname: string;
      email: string;
      password: string;
    }
    
    function createOrUpdateUser(initialValues: Partial<User>) {
  
    return {
        name: initialValues.name,
        surname: initialValues.surname,
        email: initialValues.name, 
        password: initialValues.password 
    }
    }
    
    createOrUpdateUser({ 
      email: 'user@mail.com', 
      password: 'password123' 
    });
    