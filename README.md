# WhatsApp
WhatsApp clone is created using React Native framework. It connects to the PostgreSQL database using Hasura Data API's. It demonstrates full fledged mobile app that works exactly like WhatsApp Android version. In this app, frontend is developed using React and backend part is developed using Hasura API's which can be easily replaced by Node.js endpoints. 
Screenshots of WhatsApp app - 
<p align="center">
<img  width="285" height="550" src="https://s9.postimg.org/4gwzdjh8v/chats_Tab.png">
<img  width="285" height="550" src="https://s9.postimg.org/4todjjk1b/status_Tab.png">
<img  width="285" height="550" src="https://s9.postimg.org/5vyk262vj/calls_Tab.png">
</p>
## Chats Screen:
This is the deafult tab of the mobile app that gets displayed by default when we open the WhatsApp. This tab shows the history of chats with our contacts sorted according to the date.
### Front End - React Native :
- js/Chats.js: 
1) In this file we created Chats as view component that needs to be rendedred as part of Chats tab.
2) In componentDidMount() lifecycle method of Chats component, we retrieved chats data from the database using fetch(url, requestOptions)
3) If fetch() retrives data successfully, we will parse the result into ListView component of React Native
4) In render(), we displayed ListView component with each row from ChatRow component. 
