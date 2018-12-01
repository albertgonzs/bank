import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Import Material-UI
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

// Import Styles
const styles = theme => ({
  root: {
    padding: 0,
  },
  card: {
    height: 245,
    borderRadius: 0,
    boxShadow: 'none',
    border: '1.3px solid rgba(0, 0, 0, 0.12)',
  },
  typographyTitle: {
    padding: '10px 25px',
    position: 'relative',
  },
  tableCell: {
    padding: '4px 0px 4px 28px',
  },
});
let id = 0;
function createData(name, calories, fat, protein) {
  id += 1;
  return { id, name, calories, fat, protein };
}
const rows = [
  createData(
    '59 2000 1100 2231 3002 0000 1312',
    'crehler',
    '11.12.2018',
    '3200.00 PLN',
  ),
  createData(
    '59 2000 1100 2231...',
    'przelew za wczoraj',
    '10.02.2018',
    '40.00 PLN',
  ),
  createData(
    '59 2000 1100 2231...',
    'przelew za wczoraj',
    '10.02.2018',
    '40.00 PLN',
  ),
  createData(
    '59 2000 1100 2231...',
    'przelew za wczoraj',
    '10.02.2018',
    '40.00 PLN',
  ),
];

class RecentTransactions extends Component {
  state = {};

  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.card}>
        <CardContent className={classes.root}>
          <Typography
            variant="h6"
            component="h2"
            className={classes.typographyTitle}
          >
            Ostatnie transakcje
          </Typography>

          <Typography className={classes.pos} color="textSecondary">
            <Table className={classes.table}>
              <TableBody>
                {rows.map(row => (
                  <TableRow key={row.id}>
                    <TableCell
                      className={classes.tableCell}
                      component="th"
                      scope="row"
                    >
                      {row.name}
                      <br />
                      {row.calories}
                    </TableCell>
                    <TableCell className={classes.tableCell} numeric>
                      {row.fat}
                      <br />
                      {row.protein}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

RecentTransactions.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecentTransactions);
