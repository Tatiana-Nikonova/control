import * as React from 'react';

import { useParams, useNavigate } from 'react-router-dom';
import { getInvoice, deleteInvoice } from '../data';

export default function Invoice() {
  let navigate = useNavigate();
  let params = useParams();
  let invoice = getInvoice(parseInt(params.invoiceId, 10));

  return (
    <main>   		
       {invoice.content}        
    </main>
  );
}