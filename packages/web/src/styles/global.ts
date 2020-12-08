import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.dark};
    height: 100vh;
    font-family: 'Nunito Sans', sans-serif;
    text-align: center;
  }

  #layout { 
    max-width: 350px; 
    margin: 40px auto; 
  }

  #buttons {
    background-color: ${props => props.theme.colors.primaryDark};
    border-radius: 32px 32px 0 0;
  }

  #container {
    background-color: ${props => props.theme.colors.secondary};
    border-radius: 32px;
    min-height: 400px;
  }

  #buttons + #container {
    border-radius: 0 0 32px 32px;
  }

  .headerButton {
    padding: 8px 0;
  }

  .headerButton a {
    display: table-cell;
    height: 48px;
    width: 350px;
    vertical-align: middle;

    color: ${props => props.theme.colors.light};
    text-transform: uppercase;
    text-decoration: none;
    font-size: 32px;
  }

  a {
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  a:hover .transaction_item {
    text-decoration: none;
  }

  a:hover .transaction_item .transaction_title {
    text-decoration: underline;
  }

  hr {
    height: 2;
    margin: 0 16px;
  }

  hr.lineAmongButtons {
    color: ${props => props.theme.colors.light};
  }

  hr.lineAmongBalance {
    color: ${props => props.theme.colors.primaryDark};
  }

  hr.line_between_transaction_items {
    height: 1;
  }

  .individual_balance {
    padding: 16px;
    display: flex;
    justify-content: space-between;
  }

  .individual_balance .balance_id {
    display: flex;
    height: 72px;
    width: 72px;
    background-color: ${props => props.theme.colors.primaryLight};
    border-radius: 16px;
    align-items: center;
    justify-content: center;
    font-size: 56px;
  }

  .individual_balance .balance_amount {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    color: ${props => props.theme.colors.primaryDark};
    font-weight: 300;
  }

  .negative {
    color: ${props => props.theme.colors.danger} !important;
  }

  .transaction_item {
    display: flex;
    justify-content: space-between;
    padding: 8px;
  }

  .transaction_item div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .transaction_item .transaction_title {
    font-weight: bold;
    font-size: 24px;
    color: ${props => props.theme.colors.primaryDark};
  }

  .transaction_item .transaction_amount {
    font-size: 16px;
    color: ${props => props.theme.colors.primary};
  }

  .transaction_item .transaction_date {
    font-size: 18px;
    font-weight: 600;
    color: ${props => props.theme.colors.primary};
  }

  .transaction_item .transaction_related {
    display: flex;
    justify-content: space-around;
  }

  .transaction_item .transaction_related_id {
    display: flex;
    height: 24px;
    width: 24px;
    background-color: ${props => props.theme.colors.primaryLight};
    border-radius: 4px;
    align-items: center;
    justify-content: center;
    font-size: 16px;
  }

  #transaction_header {
    display: flex;
    flex-direction: column;
  }

  #transaction_header_title {
    font-size: 32px;
    font-weight: 700;
    color: ${props => props.theme.colors.primaryDark};
  }

  #transaction_header_date_time {
    font-size: 16px;
    font-weight: 600;
    color: ${props => props.theme.colors.primary};
  }

  #transaction_amount, .transaction_data {
    color: ${props => props.theme.colors.primary};    
  }

  #transaction_amount span, .transaction_data_value {
    font-weight: 300;
    font-size: 14px;
  }

  .transaction_data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 16px;
    margin-top: 8px;
  }

  .transaction_data .transaction_data_obj {
    margin-left: 16px;
    margin-bottom: 4px;
    display: flex;
    align-items: center;
  }

  .transaction_data .transaction_data_id, .transaction_related_id {
    display: flex;
    height: 24px;
    width: 24px;
    color: ${props => props.theme.colors.dark};
    background-color: ${props => props.theme.colors.primaryLight};
    border-radius: 4px;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    margin-right: 4px;
  }

  .transaction_item_details {
    color: ${props => props.theme.colors.primary};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 16px;
  }

  .transaction_item_details_title {
    font-size: 18px;
    max-width: 100px;
  }

  .transaction_item_details_related {
    display: flex;
  }

  .transaction_item_details_value {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    font-size: 16px;
    font-weight: 300;
  }

`
