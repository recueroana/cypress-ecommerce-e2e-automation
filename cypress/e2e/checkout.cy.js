import loginPage from '../support/pages/loginPage'
import productPage from '../support/pages/productPage'
import cartPage from '../support/pages/cartPage'
import checkoutPage from '../support/pages/checkoutPage'

import { createUser } from '../support/utils/dataFactory'
import { validateUser } from '../support/utils/validators'

describe('Fluxo de check-out', () => {

  it('Deve concluir o processo de finalização da compra com dados de usuário válidos', () => {

    // 🔥 1. Cria usuário dinâmico
    const user = createUser()

    // 🔥 2. Valida os dados (camada separada)
    validateUser(user)

    // 🔐 Login
    loginPage.visit()
    cy.login({
      username: 'standard_user',
      password: 'secret_sauce'
    })

    // 🛍️ Produto
    productPage.addFirstProduct()
    productPage.goToCart()

    // 🛒 Checkout
    cartPage.checkout()

    // 👤 Preenchimento
    checkoutPage.fillInformation(user)
    checkoutPage.continue()
    checkoutPage.finish()

    // ✅ Validação final
    checkoutPage.validateSuccess()

  })

})