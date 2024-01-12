import React from 'react';
import './styles.css';

const ResponsiveTable = ({ headers, data }) => {
  return (
    <div className="responsive-table-container">
      <table>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="trow" > 
              {headers.map((header, index) => (
                <td key={index} data-label={header.label}>
                  {row[header.value]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResponsiveTable;
