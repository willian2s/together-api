// eslint-disable-next-line func-names
exports.up = function (knex) {
  return knex.schema.createTable('incidents', (table) => {
    table.increments()

    table.string('title').notNullable()
    table.string('description').notNullable()
    table.decimal('value').notNullable()

    table.string('ongId').notNullable()

    table.foreign('ongId').references('id').inTable('ongs')
  })
}

// eslint-disable-next-line func-names
exports.down = function (knex) {
  return knex.schema.dropTable('incidents')
}
