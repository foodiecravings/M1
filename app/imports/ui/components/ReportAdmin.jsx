import React from 'react';
import { Table } from 'semantic-ui-react';
import PropTypes from 'prop-types';

/** Renders a single row in the List Report (Admin) table. See pages/ListStuffAdmin.jsx. */
class ReportAdmin extends React.Component {
  render() {
    return (
        <Table.Row>
          <Table.Cell>{this.props.report.name}</Table.Cell>
          <Table.Cell>{this.props.report.description}</Table.Cell>
        </Table.Row>
    );
  }
}

/** Require a document to be passed to this component. */
ReportAdmin.propTypes = {
  report: PropTypes.object.isRequired,
};

export default ReportAdmin;
