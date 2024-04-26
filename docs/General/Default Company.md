---
sidebar_position: 3
---
The default company is the companyCode that has been set in the [Settings] table. The idea of this code is to represent the company (code) of where this instance of the database is running.

The default company code can be called by using method ***Settings_GetDefaultCompany*** or ***Settings_GetDefaultCompany_Num*** (for numeric company code).

:::note example
Iribov NL has the company code 001, so the instance of Xiphium running at Iribov NL returns company code 001 when asked for the default company.

Iribov Ghana has company code 004, so the instance if Xiphium running in Iribov Ghana returns company code 004 when asked for the default company.
:::