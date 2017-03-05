const eng = {
  AccountName: {
    no_name: 'login'
  },
  AddBlog: {
    title: 'title',
    markdown: 'markdown',
    plain: 'plaintext'
  },
  Block: {

  },
  Blog: {
    owner: 'owner'
  },
  BlogList: {

  },
  Button: {

  },
  Content: {

  },
  DelBlog: {

  },
  Footer: {

  },
  Header: {

  },
  InputField: {

  },
  Login: {
    is_empty: ' is empty',
    username: 'username',
    email: 'email',
    password: 'password',
    password_initial: 'your p4ssw0rd',
    no_account_question: 'don\'t have an account? Register'
  },
  Register: {
    is_empty: ' is empty',
    username_taken: 'username is already taken',
    username: 'username',
    full_name: 'full name',
    age: 'age',
    email: 'email',
    password: 'password',
    password_initial: 'your p4ssw0rd',
    password_repeat: 'repeat p4ssw0rd',
    already_account_question: 'already have an account? Login'
  },
  Terminal: {

  },
}

const ger = {
  AccountName: {
    no_name: 'anmelden'
  },
  AddBlog: {
    title: 'Titel',
    markdown: 'markdown',
    plain: 'normaler Text'
  },
  Block: {

  },
  Blog: {
    owner: 'Besitzer'
  },
  BlogList: {

  },
  Button: {

  },
  Content: {

  },
  DelBlog: {

  },
  Footer: {

  },
  Header: {

  },
  InputField: {

  },
  Login: {
    is_empty: ' fehlt',
    username: 'Benutzername',
    email: 'Email',
    password: 'Passwort',
    password_initial: 'your p4ssw0rd',
    no_account_question: 'Haben sie noch keinen Account? Registrieren'
  },
  Register: {
    is_empty: ' fehlt',
    username_taken: 'Benutzername existiert bereits',
    username: 'Benutzername',
    full_name: 'Vor- und Nachname',
    age: 'Alter',
    email: 'Email',
    password: 'Passwort',
    password_initial: 'your p4ssw0rd',
    password_repeat: 'repeat p4ssw0rd',
    already_account_question: 'Besitzen sie bereits einen Account? Anmelden'
  },
  Terminal: {

  },
}

const languages = {
  eng: eng,
  ger: ger
}

let getLanguage = () => {
  return 'eng'
}

export { languages, getLanguage}
