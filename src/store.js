/* eslint-disable */
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

//import rootReducer from './reducer'

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

//const store = createStore(rootReducer, composedEnhancer)

const store = createStore( composedEnhancer)

const importHandle = (keyword) => {
    const el = document.getElementById('importCSV')
    if (el.files[0]) {
      const reader = new FileReader()
      reader.onload = (e) => {
        let importedLocations = []
        let errors = []
        let data = e.target.result.split('\n')

        for (let i = 0; i < data.length; i++) {
          const row = data[i].split(';')
          // валидация данных
          let tmp = new this.LocationConstructor(row[0], row[1], row[2])
          let error = {}
          if (tmp.error) {
            error = {line: i + 1, comment: tmp.error, value: tmp.errorVal}
          } else {
            // проверяем на дубликаты в данных файла
            for (let j=0; j < importedLocations.length; j++) {
              if (importedLocations[j].lat === tmp.lat && importedLocations[j].lon === tmp.lon) {
                error = { line: i + 1, comment: 'Duplicated value.', value: row[1] + ', ' + row[2] }
                break
              }
            }
            // проверяем на дубликаты в уже выбранных локациях
            let check = store.checkCoordinates(keyword, tmp.lat, tmp.lon)
            if (!check) {
              error = {line: i + 1, comment: 'Duplicated value.', value: row[1] + ', ' + row[2]}
            }
          }
          Object.keys(error).length ? errors.push(error) : importedLocations.push(tmp)
          }

        if (errors.length) {
          this.addImportErrors(errors)
          if (importedLocations.length) {
            this.freezeLocations(importedLocations)
          }
        } else if (importedLocations.length) {
          this.addLocations(keyword, importedLocations)
        }
        el.value = ''  // очистить поле
      }
      // TODO
      reader.onerror = () => {
        this.$comment('Cannot read the file')
      }

      reader.readAsText(el.files[0])
    }
  }

export default store
