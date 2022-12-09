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
      track_audio: "filepath/example",
      name: "Song for Example",
      user_id:"2922c286-16cd-4d43-ab98-c79f698aeab0",
      description:
        "asodij Os sod jaODasijs d d oijdOIDjsodsji od jsod jsJD S dsa dasoi djasoid jas djas djoia djas djas djas das das ds djs djis jdisj disaodasoidjsadasidjs j idsoi dso  djaso djaD oaSd d jsadj s oiDjas disj ij ijdosd jiasjd oasjdosajdsaOI jsoid jasod s",
    },
  ]);
};
