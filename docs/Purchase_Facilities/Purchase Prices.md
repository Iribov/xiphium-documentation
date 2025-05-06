---
sidebar_position: 8
---

The `Purchase_Prices` table manages pricing data for purchase articles over time. It stores both list and real prices in different units, alongside discount percentages, currency exchange details, and validity periods. This enables historical tracking and calculation of accurate purchase costs across suppliers and currencies.

## **Core Functions**

- **Price Management**: Stores real and list prices per unit and per piece, including both local and foreign currency values.
- **Discount Tracking**: Captures negotiated discount percentages on purchase prices.
- **Date Validity**: Defines from which date a purchase price is valid, enabling historical pricing.
- **Currency Handling**: Includes exchange rates and local currency conversion to support multi-currency environments.
- **Administrative Tracking**: Tracks creation/modification dates and users, with support for status and remarks.
    

## **Key Fields**

- **PuPri_ArtCode_intern**: Internal code of the article the price refers to.
- **PuPri_Date_Start**: Start date from which the price entry is valid.
- **PuPri_Price_Buy_Real_Unit / _Pcs**: Actual purchase price per unit and per piece.
- **PuPri_Price_Buy_List_Unit / _Pcs**: Listed (non-discounted) price per unit and per piece.
- **PuPri_PercDiscount_Buy**: Purchase discount percentage applied to the list price.
- **PuPri_ExchangeRate**: Exchange rate used to convert to local currency.
- **PuPri_Price_LC_Real_Unit / _Pcs**: Real price in local currency.

This table supports accurate and flexible tracking of purchase price histories, accommodating unit conversions, discounts, and multi-currency calculations.