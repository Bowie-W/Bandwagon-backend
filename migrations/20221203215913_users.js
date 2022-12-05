/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function (knex) {
    return knex.schema.createTable("users", (table) => {
      table.uuid("id").primary();
      table.string("username").notNullable();
      table.string("email").notNullable();
      table.string("city").notNullable();
      table.string("password").notNullable();
      table.string("equipment");
      table.timestamps(true, true);
    });
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function (knex) {
    return knex.schema.dropTable("users");
  };
  