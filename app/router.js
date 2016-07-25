ng.router_deprecated.RouteConfig([
  {
    path: '/',
    name: 'ListPost',
    component: app.PostListComponent,
    useAsDefault: true 
  },
  {
    path: '/post/:id',
    name: 'Post',
    component: app.PostComponent
  },
  {
    path: '/about',
    name: 'About',
    component: app.AboutComponent
  },
  
])(app.AppComponent)