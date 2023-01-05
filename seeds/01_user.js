/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("user").del();
  await knex("user").insert([
    {
      id: "2922c286-16cd-4d43-ab98-c79f698aeab0",
      Username: "Frank_Ocean",
      profile_name: "Franky Ocean Bastille",
      city: "New York",
      password: "testing",
      email: "frank@ocean.com",
      profile_pic: "https://res.cloudinary.com/dl2liojkl/image/upload/v1670898272/w4bbapwmrvowp1j1vlox.webp",
      profile_descript: "just a guy, i'm not a gawd",
      genreChips:'R&B',
      instrChips:'Guitar',
      biography: "Frank the tank is the spank the rank and trank the blank, ",
    },
    {
      id: "3999c286-16cd-4d43-ab98-c79f698aeab0",
      Username: "Carly_Rae_Jepsen",
      profile_name: "CRJ",
      city: "Hope",
      password: "testing",
      email: "crj@ocrj.com",
      profile_pic:
        "https://res.cloudinary.com/dl2liojkl/image/upload/v1670954009/crj_d1iz7x.jpg",
      profile_descript: "The GOAT",
      genreChips:'Pop, Rock, Electronic',
      instrChips:'Piano',
      biography:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ",
    },
    {
      id: "4999c286-16cd-4d43-ab98-c79f698aeab0",
      Username: "Tash_Sultan",
      profile_name: "TS-Ultan",
      city: "NYC",
      password: "testing",
      email: "ts@ts.com",
      profile_pic:
        "https://res.cloudinary.com/dl2liojkl/image/upload/v1670954555/tsultan_ufsood.jpg",
      profile_descript: "Its the slam jam kabam",
      genreChips:'Rock',
      instrChips:'Guitar',
      biography:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ",
    },
    {
      id: "5999c286-16cd-4d43-ab98-c79f698aeab0",
      Username: "Chopin",
      profile_name: "Chopin",
      city: "Warsaw",
      password: "testing",
      email: "fc@fc.com",
      profile_pic:
        "https://res.cloudinary.com/dl2liojkl/image/upload/v1670954717/fchopin_iab47n.jpg",
      profile_descript: "Sometimes I can only groan, and suffer, and pour out my despair at the piano!",
      genreChips:'Classical',
      instrChips:'Piano',
      biography:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ",
    },
    {
      id: "6999c286-16cd-4d43-ab98-c79f698aeab0",
      Username: "Ariana_grande",
      profile_name: "Ariana Grande",
      city: "NYC",
      password: "testing",
      email: "ar@ar.com",
      profile_pic:
        "https://res.cloudinary.com/dl2liojkl/image/upload/v1670954961/ar_vgp5qv.png",
      profile_descript: "No negative vibes, just love",
      genreChips:'Hip-Hop',
      instrChips:'Vocal',
      biography:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ",
    },

    
  ]);
};
