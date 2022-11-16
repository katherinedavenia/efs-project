[linkedin]: https://www.linkedin.com/in/katherine-davenia/
[React.js]: https://reactjs.org/docs
[Lerna]: https://lerna.js.org/
[eFishery]: https://efishery.com/en/
[CLI App Docs]: https://github.com/katherinedavenia/efs-project/blob/master/packages/server/README.md

## <img src="https://raw.githubusercontent.com/MartinHeinz/MartinHeinz/master/wave.gif" alt="waving gif" width="40" height="35" /> Welcome to this project ✨!

### Here is my project submission for [eFishery]🐟!

> This is a dashboard-like interface web built using [React.js] about Fish Commodity. This project consists both the Client Side and Server Side bundled into a monorepo using [Lerna].

🎉 These are the current features:
- View all fish commodity data in a form of table
- Various table filters: filter by commodity, by area, by size, by price range, by date range.
- Create, update, and delete commodity data
- View various data statistics: Total Commodities Count, Total Commodity Categories, Highest Commodity Recorded, Total Areas in Indonesia, Highest Commodity Price, Cheapest Commodity Price

How to run the development server:
```bash
npm install
then
npm run start
```


## The server side can also be used as an CLI App ‼️🥳
How to use:
```bash
cd packages/server
npm install -g . 
fishery --help # to see all the commands
```
> View the full [CLI App Docs]

## 🔨 Resources & Thoughts

To learn more about the stacks I used, take a look at the following resources:
- [React.js Documentation](https://reactjs.org/docs) - React.js features and API.
- [Material UI Documentation](https://mui.com/material-ui/getting-started/overview/) - Material UI for components and styling.
- [Stein API](https://steinhq.com/) - Provides REST API access to Google Sheets. All the data is communicated via JSON.
- [Lerna](https://lerna.js.org/) - Build system for managing packages from the same repository.
- [Yargs](https://yargs.js.org/) - Tool for building CLI App

🤔💭 If I had more time and a longer deadline, these are some things that I would like to improve ...
- use React Context for props handling
- use React Query for data-fetching
- add PropTypes
- create unit testing with Jest
- setup ES6
- containarize CLI App (sorry in advance if it doesn't work on your computer😢)

Well, I guess that's about it! Thank you for visiting. I'd love to connect more with you! Email me at katherinedavenia24@gmail.com and find me on Linkedin! [<img alt="Linkedin" src="https://img.shields.io/badge/linkedin-blue?style=social&logo=linkedin">][linkedin]. Cheers!🥂
