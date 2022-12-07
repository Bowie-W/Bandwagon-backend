/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("user", (table) => {
    table.uuid("id").primary();
    table.string("username").notNullable();
    table.string("email").notNullable();
    table.string("city").notNullable();
    table.string("password").notNullable();
    table.string("profile_pic");
    table.string("profile_name").notNullable();
    table.string("profile_descript");
    table.string("profile_chips");

    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("user");
};
