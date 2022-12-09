/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('user').del();
  await knex('user').insert([
    {
      id: '2922c286-16cd-4d43-ab98-c79f698aeab0',
      Username: 'Frank Ocean',
      profile_name: "Franky Ocean Bastille",
      city: 'New York',
      password: "pink and white",
      email: "frank@ocean.com",
      profile_pic: 'file/path',
      profile_descript: "just a guy, i'm not a gawd",
      profile_chips: "r&b b&b frc trp"
    },
    
  ]);
};
