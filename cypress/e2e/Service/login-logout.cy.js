it('Teste 01 - Fazer Login', () => {

    cy.api({
      method:'GET',
      url:'/user/login',
      failOnStatusCode:false,
      body:{

        
        "username": "joao09",
        "password":"js1982"
        
       
        }
        
    }).then((response)=>{

    expect(response.status).to.eq(200)
    
  });

});   

it('Teste 01 - Fazer Logout', () => {

  cy.api({
    method:'GET',
    url:'/user/logout',
    failOnStatusCode:false,
    body:{

      
      
     
      }
      
  }).then((response)=>{

  expect(response.status).to.eq(200)
  
});

});   