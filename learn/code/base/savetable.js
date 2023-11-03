let table;

function setup() {
  table = new p5.Table();

  table.addColumn('id');
  table.addColumn('species');
  table.addColumn('name');

  let newRow = table.addRow();
  newRow.setNum('id', table.getRowCount() - 1);
  newRow.setString('species', 'Panthera leo');
  newRow.setString('name', 'Lion');
}

function mouseClicked() {
  // Save the table to a CSV file when the mouse is clicked
  saveTable(table, 'new.csv');
}
