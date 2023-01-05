/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex('conversations').del();
    await knex('conversations').insert([
      {
        id: '123123',
        sender_id:'2922c286-16cd-4d43-ab98-c79f698aeab0',
        receiver_id:'3999c286-16cd-4d43-ab98-c79f698aeab0'
      },
      {
        id: '222111',
        sender_id:'4999c286-16cd-4d43-ab98-c79f698aeab0',
        receiver_id:'2922c286-16cd-4d43-ab98-c79f698aeab0'

      }
      
    ]);
  };
  