import { Ticket } from '@/models/TicketType';
import React, { useState } from 'react';

interface TicketListProps {
  tickets: Ticket[];
}

export default function ListTickets({ tickets } : TicketListProps){
  const [sortBy, setSortBy] = useState<string>('');
  const [filterBy, setFilterBy] = useState<string>('');
  const [rowsPerPage, setRowsPerPage] = useState<number>(10); // State for rows per page


  // Sorting tickets based on the selected column
  const sortedTickets = () => {
    if (sortBy) {
      return [...tickets].sort((a, b) => {
        if (a[sortBy] < b[sortBy]) {
          return -1;
        }
        if (a[sortBy] > b[sortBy]) {
          return 1;
        }
        return 0;
      });
    }
    return tickets;
  };

  // Filtering tickets based on the selected priority
  const filteredTickets = () => {
    if (filterBy) {
      return sortedTickets().filter(ticket => ticket.priority === filterBy);
    }
    return sortedTickets();
  };

  // Pagination
  const [pageSize, setpageSize] = useState<number>(10);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages = Math.ceil(filteredTickets().length / pageSize);

  const paginatedTickets = filteredTickets().slice((currentPage - 1) * pageSize, currentPage * pageSize);

  // Handle sorting
  const handleSort = (column: string) => {
    setSortBy(column);
  };

  // Handle filtering
  const handleFilter = (priority: string) => {
    setFilterBy(priority);
  };

  // Handle pagination
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  // Handle rows per page change
  const handleRowsPerPageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newRowsPerPage = Number(event.target.value);
    setRowsPerPage(Number(event.target.value));
    setCurrentPage(1); // Reset page number when changing rows per page

    // Update paginatedTickets based on the new rowsPerPage
    setpageSize(newRowsPerPage);
  };
  

  return (
    <div className='listTicket-block'>
        <div className="listTicket-top">
            <div className="listTop-col">
                <h2 className='title-h2 listtop-title'>All tickets</h2>
            </div>
            <div className="listTop-col">
                <div className='list-select'>
                    <label>Sort</label>
                    <select onChange={e => handleSort(e.target.value)}>
                        <option value="">None</option>
                        <option value="details">Ticket Details</option>
                        <option value="customerName">Customer Name</option>
                        <option value="date">Date</option>
                        <option value="priority">Priority</option>
                    </select>
                </div>
                <div className='list-select'>
                    <label>Filter</label>
                    <select onChange={e => handleFilter(e.target.value)}>
                        <option value="">All</option>
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                    </select>
                </div>
            </div>
        </div>
      
        <div className="listTicket-bottom list-block">
            <table className='list-table'>
                <thead>
                    <tr>
                        <th>Ticket Details</th>
                        <th>Customer Name</th>
                        <th>Date</th>
                        <th>Priority</th>
                    </tr>
                </thead>
                <tbody>
                {paginatedTickets.map(ticket => (
                    <tr key={ticket.id}>
                        <td>{ticket.details}</td>
                        <td>{ticket.customerName}</td>
                        <td>{ticket.date}</td>
                        <span className={`priority priority-${ticket.priority.toLowerCase()}`}>{ticket.priority}</span>                    
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
        <div className='pagination-table'>
            <div className='pagination-select'>
                <label>Rows per Page</label>
                <select value={rowsPerPage} onChange={handleRowsPerPageChange}>
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                </select>
            </div>
            <span className='pagination-indicator'>{`${currentPage} of ${totalPages}`}</span>
            <button className="btn btn-icon" disabled={currentPage === 1} onClick={() => handlePageChange(currentPage - 1)}>
                <i className='fas fa-chevron-left'></i>
            </button>
            <button className="btn btn-icon" disabled={currentPage === totalPages} onClick={() => handlePageChange(currentPage + 1)}>
                <i className='fas fa-chevron-right'></i>
            </button>
        </div>
    </div>
  );
}
