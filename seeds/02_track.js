/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("tracks").del();
  await knex("tracks").insert([
    {
      id: "3432d286-16cd-4d43-ab98-c79f698aeab0",
      track_audio: 'http://res.cloudinary.com/dl2liojkl/video/upload/v1670958459/uy9j7jb8pe9pwlobmrf7.mp3',
      name: "Pink and White",
      user_id:"2922c286-16cd-4d43-ab98-c79f698aeab0",
      description:
        "asodij Os sod jaODasijs d d oijdOIDjsodsji od jsod jsJD S dsa dasoi djasoid jas djas djoia djas djas djas das das ds djs djis jdisj disaodasoidjsadasidjs j idsoi dso  djaso djaD oaSd d jsadj s oiDjas disj ij ijdosd jiasjd oasjdosajdsaOI jsoid jasod s",
    },
    {
      id: '247589e2-f7ff-4575-a837-da1d70846ff0',
      track_audio: "http://res.cloudinary.com/dl2liojkl/video/upload/v1670970373/j1bngsduap5tbjxfzhvo.mp3",
      name: "Thinking About You",
      user_id:"2922c286-16cd-4d43-ab98-c79f698aeab0",
      description:
        "asodij Os sod jaODasijs d d oijdOIDjsodsji od jsod jsJD S dsa dasoi djasoid jas djas djoia djas djas djas das das ds djs djis jdisj disaodasoidjsadasidjs j idsoi dso  djaso djaD oaSd d jsadj s oiDjas disj ij ijdosd jiasjd oasjdosajdsaOI jsoid jasod s",
    },
    {
      id:'cde74ab1-f1e1-4085-8b99-df9e774c78e0',
      track_audio: "http://res.cloudinary.com/dl2liojkl/video/upload/v1671132032/jzuxbifl3shqk39hzvlx.mp3",
      name: "Frank O Feature",
      user_id:"2922c286-16cd-4d43-ab98-c79f698aeab0",
      description:
        "asodij Os sod jaODasijs d d oijdOIDjsodsji od jsod jsJD S dsa dasoi djasoid jas djas djoia djas djas djas das das ds djs djis jdisj disaodasoidjsadasidjs j idsoi dso  djaso djaD oaSd d jsadj s oiDjas disj ij ijdosd jiasjd oasjdosajdsaOI jsoid jasod s",
    },
  ]);
};
