import React from 'react'
import PatientList from '../../pages/patient_list';

describe('<PatientList />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<PatientList />)
  })
})