/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('users').del();
  await knex('users').insert([
    {
      id: '2922c286-16cd-4d43-ab98-c79f698aeab0',
      Username: 'Frank Ocean',
      city: 'New York',
      password: "pink and white",
      email: "frank@ocean.com"
    },
    
  ]);
};
