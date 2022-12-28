/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex('gear').del();
    await knex('gear').insert([
      {
        id: '5452c286-16cd-4d43-ab98-c79f698aeab0',
        user_id:"2922c286-16cd-4d43-ab98-c79f698aeab0",
        gear_description: 'asldkm alskmd alksmd aslkdm sald kmasl ds akdmasl dmksad lsd asd msakd masl d kmdasd maskd as dmkasdmas dkasd  d9uas9d hasd asd  jndsndjnsjd kd asnd nsd jadnaskd jnaskd asjd as ndsa ndaskjd nsakdn sakd jk',
        gear_pic: 'https://res.cloudinary.com/dl2liojkl/image/upload/v1670630986/q76r74vuzuo9rrjhnaix.png'
      
      },
      {
        id: '354f1aec-0e01-47d3-ab9f-1416cb3a528c',
        user_id:"2922c286-16cd-4d43-ab98-c79f698aeab0",
        gear_description: 'asldkm alskmd alksmd aslkdm sald kmasl ds akdmasl dmksad lsd asd msakd masl d kmdasd maskd as dmkasdmas dkasd  d9uas9d hasd asd  jndsndjnsjd kd asnd nsd jadnaskd jnaskd asjd as ndsa ndaskjd nsakdn sakd jk',
        gear_pic: 'http://res.cloudinary.com/dl2liojkl/image/upload/v1671135645/ozajxjwzhlmrp3ssf7sf.png'
      
      },
      {
        id: '444t1aec-0e01-47d3-ab9f-1416cb3a528c',
        user_id:'5999c286-16cd-4d43-ab98-c79f698aeab0',
        gear_description: 'asldkm alskmd alksmd aslkdm sald kmasl ds akdmasl dmksad lsd asd msakd masl d kmdasd maskd as dmkasdmas dkasd  d9uas9d hasd asd  jndsndjnsjd kd asnd nsd jadnaskd jnaskd asjd as ndsa ndaskjd nsakdn sakd jk',
        gear_pic: 'http://res.cloudinary.com/dl2liojkl/image/upload/v1671135645/ozajxjwzhlmrp3ssf7sf.png'
      
      },
      
    ]);
  };
  