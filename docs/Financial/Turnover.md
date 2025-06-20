The turnover can be calculated from [Invoice](Invoice.md) and/or [Invoice_Items](Invoice_Items.md). Xiphium contains many tables summarizing the turnover in different ways.

## Key Concepts & Workflows

## Critical Tables & Their roles
As stated in the into, the tables [Invoice](Invoice.md) and/or [Invoice_Items](Invoice_Items.md) are central for calculating turnover. Using these tables, the turnover is aggregated in many different ways, resulting in many different tables. It is calculated per:
- Company
- Company per Year
- Company per Month
- Company-Crop combination
- Company-Crop per Year
- Company-Crop per Month
- Market Group 1
- Market Group 1 per Year
- Market Group 2
- Market Group 2 per Year
- Market Group 2 per Month
- Work Type
- Work Type per Year
- Work Type per Month

Most of these tables also get data from other places. Some of these tables even have additional function(s) on top of being a summary table for the turnover, which we will ignore in this context.

## Usage Flow
The flow of information is quite straightforward. Every aggregation table queries the  [Invoice](Invoice.md) and/or [Invoice_Items](Invoice_Items.md) table with its own aggregation parameters to aggregate the data. These parameters will be discussed in their respective table pages.

## Navigation and next steps
All turnover tables are found under the 'Turnover' tab in the 'Financial' tab.