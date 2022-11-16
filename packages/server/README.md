> This project repository is used as an API for the web project. It is also set up to be used as an CLI App.

## 👩🏻‍💻 How to use the CLI App

Run on your terminal:
```bash
fishery <command>
```

See help:
```bash
* fishery --help
* fishery <command> --help
```

List of commands:
```bash
* fishery get <option(optional)>   
  ## option:
  --id <id>                get data by id             [string]

* fishery get-filter <option(required)>
  ## option:
  --commodity <commodity>  filter by commodity        [string]
  --town <town>            filter by town             [string]
  --province <province>    filter by province         [string]
  --size <size>            filter by size             [string]
  --minPrice <minPrice>    filter by minimum price    [string]
  --maxPrice <maxPrice>    filter by maximal price    [string]
  
* fishery statistics     Get commodity data statistics
* fishery categories     Get all commodity categories
```
