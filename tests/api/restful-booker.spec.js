const { test, expect } = require('@playwright/test');
const { API_CONFIG } = require('../data/constants');

test.describe('Restful Booker - API Testing', () => {
  let token;

  test.beforeAll(async ({ request }) => {
    const response = await request.post(`${API_CONFIG.BASE_URL}/auth`, {
      data: API_CONFIG.ADMIN
    });
    const body = await response.json();
    token = body.token;
  });

  test('Cenários de CRUD e Validação (Nível 1)', async ({ request }) => {
    // Create
    const create = await request.post(`${API_CONFIG.BASE_URL}/booking`, {
      data: { firstname: "Jhonatan", lastname: "QA", totalprice: 150, depositpaid: true, 
              bookingdates: { checkin: "2026-01-01", checkout: "2026-01-02" }, additionalneeds: "Wifi" }
    });
    expect(create.status()).toBe(200);

    // Validação de erro/campos obrigatórios
    const errorResponse = await request.post(`${API_CONFIG.BASE_URL}/booking`, { data: {} });
    expect(errorResponse.status()).toBe(500);
  });
});