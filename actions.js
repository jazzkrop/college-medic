const program = require('commander')
const Handlebars = require('handlebars')
const fs = require('fs')
const path = require('path')
const { generateIndexes } = require('./generateIndexes')

function getCliLog() {
  return JSON.parse(fs.readFileSync('./cliLog.json'))
}

const normalizePath = path => {
  const pathToApp = './src/pages/App/'
  arrPath = path.split('/')
  for (let i = 0; i < arrPath.length; i++) {
    const element = arrPath[i]
    if (fs.existsSync(pathToApp + arrPath.slice(0, i).join('/')))
      if (
        getDirectories(pathToApp + arrPath.slice(0, i).join('/')).includes(
          'pages'
        )
      ) {
        arrPath.splice(i, 0, 'pages')
      }
  }
  return arrPath.join('/')
}
const getDirectories = source =>
  fs
    .readdirSync(source, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name)
module.exports = {
  createPage,
}

function dirTree(filename, cliFileName) {
  let stats = fs.lstatSync(filename),
    info = {
      path: filename,
      name: path.basename(filename),
    }

  if (stats.isDirectory()) {
    info.type = 'folder'
    info.children = fs.readdirSync(filename).map(function (child) {
      return dirTree(filename + '/' + child)
    })
  } else {
    info.type = 'file'
  }
  if (cliFileName) {
    fs.writeFileSync(`./${cliFileName}Log.json`, JSON.stringify(info, 2, '  '))
  } else {
    fs.writeFileSync(`./cliLog.json`, JSON.stringify(info, 2, '  '))
  }
  return info
}

function rewriteModelIndexes() {
  dirTree('./src')

  const indexTemplate = fs.readFileSync('./templates/Index.hbs', 'utf-8')
  const handleIndexTemplate = Handlebars.compile(indexTemplate)

  const cliLog = getCliLog()

  const fileForIndexes = generateIndexes(cliLog.children, 'models')

  fs.writeFileSync('./src/models/index.js', '')

  fileForIndexes.forEach(element => {
    fs.appendFileSync(
      './src/models/index.js',
      `${handleIndexTemplate({ name: element.replace(/.js/, '') })}\n`
    )
  })

  dirTree('./src')
}

//CREATING

function createModel(objectName, fields, opts) {
  const arg = [...arguments]
  createdType = arg[0]['0']
  objectName = arg[0]['1']
  fields = arg[0]['2']
  opts = arg[0]['3']

  console.log(`Model ${objectName} was created with fields: ${fields}`)

  const modelTemplate = fs.readFileSync('./templates/Model.hbs', 'utf-8')
  const indexTemplate = fs.readFileSync('./templates/Index.hbs', 'utf-8')
  const componentTemplate = fs.readFileSync(
    './templates/Component.hbs',
    'utf-8'
  )

  const handleModelTemplate = Handlebars.compile(modelTemplate)
  const handleIndexTemplate = Handlebars.compile(indexTemplate)
  const handleComponentTemplate = Handlebars.compile(componentTemplate)

  let arrayOfFields = [...fields]
  let finaleFields = []
  let firstChecker = true
  arrayOfFields.map(item => {
    if (firstChecker) {
      finaleFields.push(
        item.split(':')[0] + ':' + `'` + item.split(':')[1] + `'`
      )
      firstChecker = false
    } else
      finaleFields.push(
        '\n    ' + item.split(':')[0] + ':' + `'` + item.split(':')[1] + `'`
      )
  })

  try {
    fs.mkdirSync('./src/models', { recursive: true })
    fs.writeFileSync(
      `./src/models/${objectName}.js`,
      handleModelTemplate({
        name: objectName,
        fields: finaleFields.toString(),
      }).replace(/&#x27;/g, "'")
    )

    dirTree('./src')

    const cliLog = getCliLog()

    const fileForIndexes = generateIndexes(cliLog.children, 'models')

    fs.writeFileSync('./src/models/index.js', '')

    fileForIndexes.forEach(element => {
      fs.appendFileSync(
        './src/models/index.js',
        `${handleIndexTemplate({ name: element.replace(/.js/, '') })}\n`
      )
    })

    fs.mkdirSync(`./src/domains/${objectName}`, { recursive: true })
    fs.mkdirSync(`./src/domains/${objectName}/components`, { recursive: true })
    fs.mkdirSync(`./src/domains/${objectName}/hooks`, { recursive: true })

    if (opts.components) {
      fs.mkdirSync(
        `./src/domains/${objectName}/components/${objectName}SimpleView`,
        { recursive: true }
      )
      fs.mkdirSync(
        `./src/domains/${objectName}/components/${objectName}AdvancedView`,
        { recursive: true }
      )
      fs.mkdirSync(
        `./src/domains/${objectName}/components/${objectName}SimpleForm`,
        { recursive: true }
      )
      fs.mkdirSync(
        `./src/domains/${objectName}/components/${objectName}AdvancedForm`,
        { recursive: true }
      )

      fs.writeFileSync(
        `./src/domains/${objectName}/components/${objectName}SimpleView/${objectName}SimpleView.js`,
        handleComponentTemplate({ name: `${objectName}SimpleView` })
      )
      fs.appendFileSync(
        `./src/domains/${objectName}/components/${objectName}SimpleView/index.js`,
        `${handleIndexTemplate({ name: `${objectName}SimpleView` })}\n`
      )

      fs.writeFileSync(
        `./src/domains/${objectName}/components/${objectName}AdvancedView/${objectName}AdvancedView.js`,
        handleComponentTemplate({ name: `${objectName}AdvancedView` })
      )
      fs.appendFileSync(
        `./src/domains/${objectName}/components/${objectName}AdvancedView/index.js`,
        `${handleIndexTemplate({ name: `${objectName}AdvancedView` })}\n`
      )

      fs.writeFileSync(
        `./src/domains/${objectName}/components/${objectName}AdvancedForm/${objectName}AdvancedForm.js`,
        handleComponentTemplate({ name: `${objectName}AdvancedForm` })
      )
      fs.appendFileSync(
        `./src/domains/${objectName}/components/${objectName}AdvancedForm/index.js`,
        `${handleIndexTemplate({ name: `${objectName}AdvancedForm` })}\n`
      )

      fs.writeFileSync(
        `./src/domains/${objectName}/components/${objectName}SimpleForm/${objectName}SimpleForm.js`,
        handleComponentTemplate({ name: `${objectName}SimpleForm` })
      )
      fs.appendFileSync(
        `./src/domains/${objectName}/components/${objectName}SimpleForm/index.js`,
        `${handleIndexTemplate({ name: `${objectName}SimpleForm` })}\n`
      )

      fs.appendFileSync(
        `./src/domains/${objectName}/components/index.js`,
        `${handleIndexTemplate({ name: `${objectName}SimpleView` })}\n`
      )
      fs.appendFileSync(
        `./src/domains/${objectName}/components/index.js`,
        `${handleIndexTemplate({ name: `${objectName}AdvancedView` })}\n`
      )
      fs.appendFileSync(
        `./src/domains/${objectName}/components/index.js`,
        `${handleIndexTemplate({ name: `${objectName}SimpleForm` })}\n`
      )
      fs.appendFileSync(
        `./src/domains/${objectName}/components/index.js`,
        `${handleIndexTemplate({ name: `${objectName}AdvancedForm` })}\n`
      )
    }

    dirTree('./src')
  } catch (err) {
    console.log(err)
  }
}

function createPage(type, path, opts) {
  const args = [...arguments]

  type = args[0]['0']
  path = args[0]['1']
  opts = args[0]['3']

  if (type === 'page') {
    const pageTemplate = fs.readFileSync('./templates/pages/Page.hbs', 'utf-8')
    const allTemplate = fs.readFileSync('./templates/pages/All.hbs', 'utf-8')
    const createTemplate = fs.readFileSync(
      './templates/pages/Create.hbs',
      'utf-8'
    )
    const showTemplate = fs.readFileSync('./templates/pages/Show.hbs', 'utf-8')
    const editTemplate = fs.readFileSync('./templates/pages/Edit.hbs', 'utf-8')

    const handlePageTemplate = Handlebars.compile(pageTemplate)
    const handleAllTemplate = Handlebars.compile(allTemplate)
    const handleCreateTemplate = Handlebars.compile(createTemplate)
    const handleShowTemplate = Handlebars.compile(showTemplate)
    const handleEditTemplate = Handlebars.compile(editTemplate)

    path = normalizePath(path)
    arrPath = path.split('/')

    if (path.endsWith('.js')) {
      //creating simple file
      const name = arrPath.pop().replace('.js', '')
      path = arrPath.join('/')
      fs.mkdirSync(`./src/pages/App/${path}`, { recursive: true })
      fs.writeFileSync(
        `./src/pages/App/${path}/${name}.js`,
        handlePageTemplate({
          name: name,
        })
      )
    } else if (!opts.complex) {
      if (opts.allTypes) {
        opts.create = true
        opts.edit = true
        opts.all = true
        opts.show = true
      }
      if (opts.create) {
        fs.mkdirSync(`./src/pages/App/${path}`, { recursive: true })

        fs.writeFileSync(
          `./src/pages/App/${path}/${arrPath[arrPath.length - 1]}Create.js`,
          handleCreateTemplate({
            name: `${arrPath[arrPath.length - 1]}`,
          })
        )
      }
      if (opts.edit) {
        fs.mkdirSync(`./src/pages/App/${path}`, { recursive: true })

        fs.writeFileSync(
          `./src/pages/App/${path}/${arrPath[arrPath.length - 1]}Edit.js`,
          handleEditTemplate({
            name: `${arrPath[arrPath.length - 1]}`,
          })
        )
      }
      if (opts.all) {
        fs.mkdirSync(`./src/pages/App/${path}`, { recursive: true })

        fs.writeFileSync(
          `./src/pages/App/${path}/${arrPath[arrPath.length - 1]}All.js`,
          handleAllTemplate({
            name: `${arrPath[arrPath.length - 1]}`,
          })
        )
      }
      if (opts.show) {
        fs.mkdirSync(`./src/pages/App/${path}`, { recursive: true })

        fs.writeFileSync(
          `./src/pages/App/${path}/${arrPath[arrPath.length - 1]}Show.js`,
          handleShowTemplate({
            name: `${arrPath[arrPath.length - 1]}`,
          })
        )
      }
    } else {
      try {
        console.log(arrPath)
        if (arrPath[arrPath.length - 2] == 'pages' || arrPath.length <= 1) {
          fs.mkdirSync(`./src/pages/App/${path}/pages`, { recursive: true })
          fs.writeFileSync(
            `./src/pages/App/${path}/${arrPath[arrPath.length - 1]}.js`,
            handlePageTemplate({
              name: `${arrPath[arrPath.length - 1]}`,
            })
          )
        } else {
          throw 'Error: This folder is not a complex page'
        }
      } catch (e) {
        console.log(e)
      }
    }
  }
}

function createComponent(folderName, name) {
  const arg = [...arguments]
  folderName = arg[0]['1']
  name = arg[0]['1']

  const componentTemplate = fs.readFileSync(
    './templates/Component.hbs',
    'utf-8'
  )
  const indexTemplate = fs.readFileSync('./templates/Index.hbs', 'utf-8')
  const m_indexTemplate = fs.readFileSync(
    './templates/MainIndexComponent.hbs',
    'utf-8'
  )

  const handleComponentTemplate = Handlebars.compile(componentTemplate)
  const handleIndexTemplate = Handlebars.compile(indexTemplate)
  const handleMIndexTemplate = Handlebars.compile(m_indexTemplate)

  try {
    const createComponentsDir = fs.mkdirSync(
      `./src/components/${folderName}`,
      { recursive: true }
    )
    const data = fs.writeFileSync(
      `./src/components/${folderName}/${name}.js`,
      handleComponentTemplate({ folderName: folderName, name: name })
    )
    fs.writeFileSync(
      `./src/components/${folderName}/index.js`,
      handleIndexTemplate({ folderName: folderName, name: name })
    )
    fs.appendFileSync(
      './src/components/index.js',
      `${handleMIndexTemplate({ folderName: folderName, name: name })}\n`
    )

    // dirTree('./src')
  } catch (err) {
    console.log(err)
  }
}

function createHook(hookName, hooks) {
  const arg = [...arguments]
  hookName = arg[0]['1']
  hooks = arg[0]['2']

  let arrayOfHooks = [...hooks]
  let hooksString = ''
  hooksString += arrayOfHooks.map(item => ' ' + item)

  try {
    const hookDir = fs.mkdirSync(`./src/hooks/${hookName}`, { recursive: true })
    const hookTemplate = fs.readFileSync('./templates/Hooks.hbs', 'utf-8')
    const hookIndex = fs.readFileSync('./templates/Index.hbs', 'utf-8')

    const handleHookTemplate = Handlebars.compile(hookTemplate)
    const handleHookIndex = Handlebars.compile(hookIndex)

    fs.writeFileSync(
      `./src/hooks/${hookName}/${hookName}.js`,
      handleHookTemplate({ hookName: hookName, hooks: hooksString })
    )
    fs.writeFileSync(
      `./src/hooks/${hookName}/index.js`,
      handleHookIndex({ name: hookName })
    )

    dirTree('./src')
  } catch (err) {
    console.log(err)
  }
}

//DELETING

function deleteModel(args) {
  const arg = [...args]
  const modelName = arg[1]

  try {
    fs.unlinkSync(`./src/models/${modelName}.js`)

    if (arg[2]) {
      fs.rmdirSync(`./src/domains/${modelName}`, { recursive: true })
    }
    console.log(`Model ${modelName} has been removed`)
  } catch {
    console.log('Model does not exist')
  }

  rewriteModelIndexes()
}

//EXPORT FUNCTION

function create(type) {
  if (type === 'model') {
    createModel(arguments)
  } else if (type === 'component') {
    createComponent(arguments)
  } else if (type === 'hook') {
    createHook(arguments)
  } else if (type === 'page') {
    createPage(arguments)
  }
}

function deleting(type) {
  if (type === 'model') {
    deleteModel(arguments)
  }
}

module.exports = {
  create,
  deleting,
  createModel,
  createComponent,
  dirTree,
  getCliLog,
}
