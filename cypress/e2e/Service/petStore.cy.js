
it('Teste 01 - Criaçao de Cadastro', () => {

    cy.api({
      method:'POST',
      url:'/user',
      failOnStatusCode:false,
      body:{

        "id": 50,
        "username": "joao23",
        "firstName": "joao",
        "lastName": "silva",
        "email": "jsilva@tatu.com",
        "password": "js1982",
        "phone": "85 988145317",
        "userStatus": 0

        }
        
    }).then((response)=>{

    expect(response.status).to.eq(200)
    
  });

});   
    
  it('Teste 02 - Confirmaçao de Cadastro', () => {

    cy.api({
      method:'GET',
      url:'/user/joao23',
      failOnStatusCode:false,
      body:{

        "id": 50,
        "username": "joao23",
        "firstName": "joao",
        "lastName": "silva",
        "email": "jsilva@tatu.com",
        "password": "js1982",
        "phone": "85 988145317",
        "userStatus": 0

        }
        
    }).then((response)=>{

    expect(response.status).to.eq(200)
    expect(response.body.username).to.eq("joao23")
    expect(response.body.firstName).to.eq("joao")
    expect(response.body.lastName).to.eq("silva")
    expect(response.body.email).to.eq("jsilva@tatu.com")
    expect(response.body.password).to.eq("js1982")
    expect(response.body.phone).to.eq("85 988145317")

   });

});       

it('Teste 03 - Criaçao de Cadastro', () => {

    cy.api({
      method:'POST',
      url:'/user',
      failOnStatusCode:false,
      body:{

        "id": 70,
        "username": "ester20",
        "firstName": "ester",
        "lastName": "carvalho",
        "email": "estercarvalho@tatu.com",
        "password": "ester7",
        "phone": "85 988142345",
        "userStatus": 0

        }
        
    }).then((response)=>{

    expect(response.status).to.eq(200)
    
  });

});   

it('Teste 04 - Confirmaçao de Cadastro', () => {

    cy.api({
      method:'GET',
      url:'/user/ester20',
      failOnStatusCode:false,
      body:{

        "id": 70,
        "username": "ester20",
        "firstName": "ester",
        "lastName": "carvalho",
        "email": "estercarvalho@tatu.com",
        "password": "ester7",
        "phone": "85 988142345",
        "userStatus": 0

        }
        
    }).then((response)=>{

    expect(response.status).to.eq(200)
    expect(response.body.username).to.eq("ester20")
    expect(response.body.firstName).to.eq("ester")
    expect(response.body.lastName).to.eq("carvalho")
    expect(response.body.email).to.eq("estercarvalho@tatu.com")
    expect(response.body.password).to.eq("ester7")
    expect(response.body.phone).to.eq("85 988142345")

   });

});       

it('Teste 05 - Exclusao de Cadastro', () => {

  cy.api({
    method:'DELETE',
    url:'/user/ester20',
    failOnStatusCode:false,
    body:{

      "id": 70,
      "username": "ester20",
      "firstName": "ester",
      "lastName": "carvalho",
      "email": "estercarvalho@tatu.com",
      "password": "ester7",
      "phone": "85 988142345",
      "userStatus": 0

      }
      
  }).then((response)=>{

  expect(response.status).to.eq(200)
  
  });

});       

it('Teste 06 - Confirmaçao de Exclusao de Cadastro', () => {

  cy.api({
    method:'GET',
    url:'/user/ester20',
    failOnStatusCode:false,
    body:{

      "id": 70,
      "username": "ester20",
      "firstName": "ester",
      "lastName": "carvalho",
      "email": "estercarvalho@tatu.com",
      "password": "ester7",
      "phone": "85 988142345",
      "userStatus": 0

      }
      
  }).then((response)=>{

  expect(response.status).to.eq(404)
  
  });

});       

it('Teste 07 - Alteraçao de Cadastro', () => {

    cy.api({
      method:'PUT',
      url:'/user/joao23',
      failOnStatusCode:false,
      body:{

        "id": 50,
        "username": "joao09",
        "firstName": "joao",
        "lastName": "silvano",
        "email": "jsilva@tatu.com",
        "password": "js1982",
        "phone": "85 988143514",
        "userStatus": 0

        }
        
    }).then((response)=>{

    expect(response.status).to.eq(200)
    
   });

});           
    
it('Teste 08 - Confirmaçao de Alteraçao de Cadastro', () => {

    cy.api({
      method:'GET',
      url:'/user/joao09',
      failOnStatusCode:false,
      body:{

        "id": 50,
        "username": "joao09",
        "firstName": "joao",
        "lastName": "silvano",
        "email": "jsilva@tatu.com",
        "password": "js1982",
        "phone": "85 988143514",
        "userStatus": 0

        }
        
    }).then((response)=>{

    expect(response.status).to.eq(200)
    expect(response.body.username).to.eq("joao09")
    expect(response.body.firstName).to.eq("joao")
    expect(response.body.lastName).to.eq("silvano")
    expect(response.body.email).to.eq("jsilva@tatu.com")
    expect(response.body.password).to.eq("js1982")
    expect(response.body.phone).to.eq("85 988143514")

   });

});           
    
it('Teste 09 - Confirmaçao de exclusao do usuario joao23 do banco de dados', () => {

    cy.api({
      method:'GET',
      url:'/user/joao23',
      failOnStatusCode:false,
      body:{

        "id": 50,
        "username": "joao23",
        "firstName": "joao",
        "lastName": "silva",
        "email": "jsilva@tatu.com",
        "password": "js1982",
        "phone": "85 988145317",
        "userStatus": 0

        }
        
    }).then((response)=>{

    expect(response.status).to.eq(404)    
    
 });

});   
    
    
    
    
    
    
  








    
    
