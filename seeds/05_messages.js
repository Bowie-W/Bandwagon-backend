/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex('messages').del();
    await knex('messages').insert([
      {
        id:'111',
        conversation_id: '123123',
        sender_id:'2922c286-16cd-4d43-ab98-c79f698aeab0',
        message: 'Yo, sup dude'
      },
      {
        id:'222',
        conversation_id: '222111',
        sender_id:'4922c286-16cd-4d43-ab98-c79f698aeab0',
        message: 'naw, you good'

      }
      
    ]);
  };
  