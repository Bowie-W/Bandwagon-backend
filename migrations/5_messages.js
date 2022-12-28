/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable("messages", (table) => {
      table.uuid("id").primary();
      table.string('sender_id')
      table.string('message')
      table
      .uuid("conversation_id")
      .references("conversations.id")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  
      table.timestamps(true, true);
    });
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function (knex) {
    return knex.schema.dropTable("messages");
  };
  