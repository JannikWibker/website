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
    home: 'home',
    about: 'about',
    blog: 'blog',
    statistics: 'statistics'
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
  AboutPage: {

  },
  BlogPage: {

  },
  DashboardPage: {
    headline: 'Dashboard - Account stuff goes here',
    add_blog_question: 'add a blog post? ',
    del_blog_question: 'delete a blog post?',
    show: '[show]',
    hide: '[hide]',
    login_required_1: 'The Dashboard requires you to be logged in,',
    login_required_2: 'you can login below or create a new account if necessary'
  },
  IndexPage: {
    Terminal_frames: [
      'This', 'This is', 'This is _**animated**_.'
    ]
  },
  LoginPage: {

  },
  RegisterPage: {

  },
  StatisticsPage: {

  },
  About: {
    i_am: 'im'
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
    home: 'Startseite',
    about: 'Über',
    blog: 'Blog',
    statistics: 'Statistik'
  },
  InputField: {

  },
  Login: {
    is_empty: ' fehlt',
    username: 'Benutzername',
    email: 'Email',
    password: 'Passwort',
    password_initial: 'your p4ssw0rd',
    no_account_question: 'kein Account? Registrieren'
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
    already_account_question: 'bereits einen Account? Anmelden'
  },
  Terminal: {

  },
  AboutPage: {

  },
  BlogPage: {

  },
  DashboardPage: {
    headline: 'Dashboard - Account Sachen kommen hier hin',
    add_blog_question: 'einen Blog hinzufügen? ',
    del_blog_question: 'einen Blog löschen?',
    show: '[zeigen]',
    hide: '[verstecken]',
    login_required_1: 'Man muss angemeldet sein um das Dashboard nutzen zu können,',
    login_required_2: 'Sie können sich unten anmelden oder falls nötig einen Account erstellen'
  },
  IndexPage: {
    Terminal_frames: [
      'Dies', 'Dies ist', 'Dies ist  _**animiert**_.'
    ]
  },
  LoginPage: {

  },
  RegisterPage: {

  },
  StatisticsPage: {

  },
  About: {
    i_am: 'ich bin'
  },
}

const fr = {
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
    home: 'home',
    about: 'about',
    blog: 'blog',
    statistics: 'statistics'
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
  AboutPage: {

  },
  BlogPage: {

  },
  DashboardPage: {
    headline: 'Dashboard - Account stuff goes here',
    add_blog_question: 'add a blog post? ',
    del_blog_question: 'delete a blog post?',
    show: '[show]',
    hide: '[hide]',
    login_required_1: 'The Dashboard requires you to be logged in,',
    login_required_2: 'you can login below or create a new account if necessary'
  },
  IndexPage: {
    Terminal_frames: [
      'This', 'This is', 'This is _**animated**_.'
    ]
  },
  LoginPage: {

  },
  RegisterPage: {

  },
  StatisticsPage: {

  },
  About: {
    i_am: 'je suis'
  },
}

const languages = {
  eng: eng,
  ger: ger,
  fr: fr
}

let getLanguage = () => {
  return 'eng'
}

export { languages, getLanguage }
